export interface VGLiveEvent {
  event: Event;
  participants: Record<string, ParticipantsData>;
  tournament: TournamentData;
  tournamentSeason: TournamentSeason;
  countries: Record<string, Country>;
}

interface Event {
  id: number;
  startDate: string;
  participantIds: string[];
  status: Status;
  results: Record<string, Result>;
  tournament: Tournament;
  sport: string;
  winners: Winners;
  coverageInfo: CoverageInfo;
  details: EventDetails;
  eventHeaderHighlights: EventHeaderHighlight[];
  availableData: AvailableData;
  slugName: string;
  teamSupporters: TeamSupporters;
}

interface Status {
  type: string;
  subtype: string;
  period: Record<string, unknown>;
}

interface Result {
  period1Score: number;
  period2Score: number;
  runningScore: number;
}

interface Tournament {
  id: number;
  seasonId: number;
  phaseType: string;
  phase: string;
  stageName: string;
  groupName: string;
  round: string;
}

interface Winners {
  winnerId: string;
}

interface CoverageInfo {
  event: CoverageEvent;
  assets: Assets;
  author: Author;
}

interface CoverageEvent {
  live: boolean;
  mode: string;
  expected: boolean;
}

interface Assets {
  videosCount: number;
  tvChannelsCount: number;
  bettingTipsCount: number;
  articlesCount: number;
}

interface Author {
  name: string;
  email: string;
  avatarUrl: string;
}

interface EventDetails {
  refereeId: string;
  attendance: number;
  venue: Venue;
}

interface Venue {
  id: number;
  name: string;
  cityName: string;
}

interface EventHeaderHighlight {
  id: string;
  type: string;
  subtype: string;
  elapsed: Elapsed;
  participants: Participants;
  sortOrder: number;
  currentScores: Record<string, number>;
  media: Media[];
  iconUrl: string;
  hashedId: string;
}

interface Elapsed {
  minutes: number;
  minutesPlus?: number;
}

interface Participants {
  teamId: string;
  assistantId?: string;
  goalScorerId?: string;
  playerId?: string;
}

interface Media {
  type: string;
  url: string;
}

interface AvailableData {
  report: boolean;
  lineups: boolean;
  standings: boolean;
  cupTree: boolean;
  statistics: boolean;
  articles: boolean;
  liveblog: boolean;
}

interface TeamSupporters {
  enabled: boolean;
  votingEnabled: boolean;
}

interface ParticipantsData {
  id: string;
  name: string;
  type: string;
  subtype: string;
  gender: string;
  countryCode: string;
  isVirtual: boolean;
  images: Images;
  sport: string;
  firstname: string;
  lastname: string;
  slugName: string;
}

interface Images {
  avatar?: ImageDetails;
  clubLogo?: ImageDetails;
}

interface ImageDetails {
  source: string;
  id: string;
  url: string;
}

interface TournamentData {
  id: number;
  name: string;
  currentSeasonId: number;
  sport: string;
  gender: string;
  countryCode: string;
  images: TournamentImages;
  slugName: string;
}

interface TournamentImages {
  tournamentLogo: string;
}

interface TournamentSeason {
  id: number;
  name: string;
  tournamentId: number;
  startDate: string;
  endDate: string;
  year: string;
  seasonType: string;
  availableData: SeasonAvailableData;
  slugName: string;
}

interface SeasonAvailableData {
  schedule: boolean;
  standings: boolean;
  rankings: boolean;
  rankingTypes: string[];
  ratings: boolean;
  cupTree: boolean;
}

interface Country {
  code: string;
  iso2?: string;
  iso3?: string;
  name: string;
  images: CountryImages;
}

interface CountryImages {
  flagCircle: string;
}
