import {useQuery} from "react-query";
import {DrinkEvaluationService} from "../service";

const DRINK_EVALUATION_KEY = "drink_evaluation";

export const useGetDrinkEvaluationById = (id: number) =>
  useQuery([DRINK_EVALUATION_KEY], () =>
    DrinkEvaluationService.getDrinksEvaluation({id})
  );
