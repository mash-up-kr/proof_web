import { useQueries } from "react-query";
import { DrinkEvaluationService, DrinkService } from "../service";

const DRINK_KEY = "drink";
const DRINK_EVALUATION_KEY = "drink_evaluation";

export const useGetDrinkInfoAndEvaluationById = (id: number) =>
  useQueries([
    {
      queryKey: [DRINK_KEY, id],
      queryFn: () => DrinkService.getOneDrinkInfo({ id }),
    },
    {
      queryKey: [DRINK_EVALUATION_KEY, id],
      queryFn: () => DrinkEvaluationService.getDrinksEvaluation({ id }),
    },
  ]);
