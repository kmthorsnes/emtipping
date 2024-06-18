import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { VGLiveEvent } from "./vglive.dto";

export const getScoreForTeam = (data: VGLiveEvent, teamId: string) =>
  data.event.results[teamId].runningScore;

export const getTeamName = (data: VGLiveEvent, teamId: string) => 
    data.participants[teamId].name;

export function useGetMatchDetails(id: string) {
  return useQuery({
    queryKey: ["vglive", id],
    queryFn: async () =>
      (await axios.get<VGLiveEvent>(`https://vglive.vg.no/api/vg/events/${id}`))
        .data,
  });
}
