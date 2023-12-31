export interface ICreateMenu {
  name: string;
  description?: string;
  itemIds?: string[];
  discount?: number;
  imageUrl: string;
  basePrice: number;
  categoryId: string;
}
