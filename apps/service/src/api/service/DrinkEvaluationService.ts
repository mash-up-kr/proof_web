import {BaseDrinkId} from "../../@types/api";
import {DrinkEvaluationDto} from "../../@types/api/drinkEvaluation";
import {APIBase} from "./index";

class DrinkEvaluationService extends APIBase {
  public constructor() {
    super("drinks-evaluation");
  }

  public getDrinksEvaluation({id}: BaseDrinkId): Promise<DrinkEvaluationDto> {
    return this.baseHTTP
        .get(`${id}`)
        .then(APIBase._handleResponse)
        .catch(APIBase._handleError);
  }
}

export default new DrinkEvaluationService();
