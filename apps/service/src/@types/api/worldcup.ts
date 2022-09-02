import { Round } from "../../components/RoundCard";

export type WithWhoType = "SOLO" | "DUO";

interface WorldCupConditionDTO<T> {
  code: T;
  content: string;
  title: string;
}

export interface WorldCupDTO {
  id: number;
  title: string;
  imageUrl: string;
  withWho: WorldCupConditionDTO<WithWhoType>;
  situation: WorldCupConditionDTO<string>;
  round: Round[];
}

export interface ResponseWorldCupWithWho {
  wolrdcupId: number;
  title: string;
  situation: WorldCupConditionDTO<string>;
}

export type BaseWorldCupId = {
  worldCupId: number;
};

export interface RequestDrinksInfoWithRound extends BaseWorldCupId {
  round: number;
}

export interface RequestSendWinnerDrinks extends BaseWorldCupId {
  token: string | null;
  drinkIds: number[];
}

export type ResponseWorldCupByCategorizingWithWho = {
  [key in WithWhoType]: ResponseWorldCupWithWho[];
};
