import {BaseDrinkId, DrinkDto} from "../../@types/api";
import { APIBase } from ".";

class WorldCupService extends APIBase {
  public constructor() {
    super("drinks");
  }

  public getAllDrinkInfo() {
    return this.baseHTTP
      .get("")
      .then(APIBase._handleResponse)
      .catch(APIBase._handleError);
  }

  public getOneDrinkInfo({ id }: BaseDrinkId): Promise<DrinkDto> {
    return this.baseHTTP
      .get(`${id}`)
      .then(APIBase._handleResponse)
      .catch(APIBase._handleError);
  }
}

export default new WorldCupService();
