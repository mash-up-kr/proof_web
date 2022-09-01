import {
  BaseWorldCupId,
  RequestDrinksInfoWithRound,
  RequestSendWinnerDrinks,
  ResponseWorldCupByCategorizingWithWho,
  WorldCupDTO,
} from "../../@types/api";
import { Drink } from "../../components/DrinkCard";
import { APIBase } from ".";

class WorldCupService extends APIBase {
  public constructor() {
    super("worldcups");
  }

  public getAllWorldcupInfo(): Promise<WorldCupDTO[]> {
    return this.baseHTTP
      .get("")
      .then(APIBase._handleResponse)
      .catch(APIBase._handleError);
  }

  public getOneWorldcupInfo({
    worldCupId,
  }: BaseWorldCupId): Promise<WorldCupDTO> {
    return this.baseHTTP
      .get(`${worldCupId}`)
      .then(APIBase._handleResponse)
      .catch(APIBase._handleError);
  }

  public getDrinksByRound({
    worldCupId,
    round,
  }: RequestDrinksInfoWithRound): Promise<Drink[]> {
    return this.baseHTTP
      .get(`${worldCupId}/item?roundCount=${round}`)
      .then(APIBase._handleResponse)
      .catch(APIBase._handleError);
  }

  public getWorldCupInfosByCategorizingWithWho(): Promise<ResponseWorldCupByCategorizingWithWho> {
    return this.baseHTTP
      .get("with-who")
      .then(APIBase._handleResponse)
      .catch(APIBase._handleError);
  }

  public sendWorldCupResult({ worldCupId, drinkIds }: RequestSendWinnerDrinks) {
    return this.baseHTTP
      .post(`${worldCupId}`, { drinkIds })
      .then(APIBase._handleResponse)
      .catch(APIBase._handleError);
  }
}

export default new WorldCupService();
