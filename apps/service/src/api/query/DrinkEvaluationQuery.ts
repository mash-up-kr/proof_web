import { useQueries, useQuery } from "react-query";
import { DrinkWithRound } from "../../components/DrinkCard";
import { DrinkEvaluationService, DrinkService } from "../service";

const DRINK_KEY = "drink";
const DRINK_EVALUATION_KEY = "drink_evaluation";

export const useGetDrinkInfoById = (id: number) =>
  useQuery({
    queryKey: [DRINK_KEY, id],
    queryFn: () => DrinkService.getOneDrinkInfo({ id }),
  });

export const useGetDrinkEvaluationById = (id: number) =>
  useQuery([DRINK_EVALUATION_KEY, id], () =>
    DrinkEvaluationService.getDrinksEvaluation({ id })
  );

export const useGetDrinksEvaluationById = (drinks: DrinkWithRound[]) =>
  useQueries(
    drinks.map((drink) => ({
      queryKey: [DRINK_EVALUATION_KEY, drink?.id],
      queryFn: () =>
        DrinkEvaluationService.getDrinksEvaluation({ id: drink?.id }),
    }))
  );
