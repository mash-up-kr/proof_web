export interface DrinkEvaluationDto {
  result: {
    situation: string[];
    isHeavy: {
      Heavy: number;
      Light: number;
    };
    isBitter: {
      Sweet: number;
      Bitter: number;
    };
    isStrong: {
      Mild: number;
      Strong: number;
    };
    isBurning: {
      Smooth: number;
      Burning: number;
    }
  } | null
}
