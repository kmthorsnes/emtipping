import {
    getScoreForTeam,
    getTeamName,
    useGetMatchDetails,
} from "../api/vglive.hooks";
import { VGLIVE_MATCH_IDS } from "../api/vglive_matches";
type Props = {
  id: string;
  matchIdx: number;
};

const MatchStatsPopover = ({ id, matchIdx }: Props) => {
  const vgLiveId = VGLIVE_MATCH_IDS[matchIdx];
  const { data } = useGetMatchDetails(vgLiveId);

  if (!data)
    return (
      <p popover="auto" id={id}>
        Fant ikke resultater for match :(
      </p>
    );

  const homeTeamId = data.event.participantIds[0];
  const awayTeamId = data.event.participantIds[1];

  return (
    <div popover="auto" id={id}>
      <b>
        <span>
          {getTeamName(data, homeTeamId)} {getScoreForTeam(data, homeTeamId)}
        </span>
        -
        <span>
          {getScoreForTeam(data, awayTeamId)} {getTeamName(data, awayTeamId)}
        </span>
      </b>
    </div>
  );
};

export default MatchStatsPopover;
