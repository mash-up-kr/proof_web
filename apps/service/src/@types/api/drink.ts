export type BaseDrinkId = {
  id: number;
};

export interface DrinkDto {
  id: number;
  name: string;
  imageUrl: string;
  abv: number;
  origin: string;
  description: string;
  category: string;
  worldcupWinCount: number;
  worldcupSemiFinalCount: number;
}
