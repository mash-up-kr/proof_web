import { useQuery } from "react-query";
import { WorldCupService } from "../service";

const WORLDCUP_KEY = "worldcup";
const WITH_WHO_KEY = "with_who";
const DRINKS_KEY = "drinks";

export const useGetOneWorldCupInfoById = (worldCupId: number) =>
  useQuery([WORLDCUP_KEY], () =>
    WorldCupService.getOneWorldcupInfo({ worldCupId })
  );

export const useGetWorldCupInfosByCategorizingWithWho = () =>
  useQuery([WORLDCUP_KEY, WITH_WHO_KEY], () =>
    WorldCupService.getWorldCupInfosByCategorizingWithWho()
  );

export const useGetDrinks = (worldCupId: number, round: number) => {
  useQuery([WORLDCUP_KEY, DRINKS_KEY, worldCupId, round], () =>
    WorldCupService.getDrinksByRound({ worldCupId, round })
  );
};
