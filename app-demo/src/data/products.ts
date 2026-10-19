// Illustrative catalogue for the demo. Weights, material values and recovery
// costs are fictional and tuned so BILLY matches the concept site (12 + 20 = 32 SEK).

export type MaterialKey = 'wood' | 'metal' | 'plastic' | 'textile' | 'foam' | 'paper';

export interface MaterialInfo {
  label: string;
  valuePerKg: number; // SEK per kg, illustrative
  color: string;
}

export const MATERIALS: Record<MaterialKey, MaterialInfo> = {
  wood: { label: 'Wood-based board', valuePerKg: 0.9, color: '#c9a36b' },
  metal: { label: 'Metal fittings', valuePerKg: 8, color: '#7d8b99' },
  plastic: { label: 'Plastic parts', valuePerKg: 3, color: '#3f8fc9' },
  textile: { label: 'Textile', valuePerKg: 0.8, color: '#c4637f' },
  foam: { label: 'Foam', valuePerKg: 1, color: '#e2bf4a' },
  paper: { label: 'Paper honeycomb', valuePerKg: 0.5, color: '#b9a98a' },
};

export type ProductShape = 'bookcase' | 'chest' | 'shelf' | 'wardrobe' | 'table' | 'armchair';

export interface Product {
  id: string;
  name: string;
  description: string;
  articleNo: string;
  shape: ProductShape;
  materials: { key: MaterialKey; kg: number }[];
  recoveryCost: number; // SEK, illustrative cost of collection, sorting and processing
  returnBonus: number; // SEK, proposed circularity bonus
  purchasedYear?: number; // set when the item appears in Emma's purchase history
}

export const PRODUCTS: Product[] = [
  {
    id: 'billy',
    name: 'BILLY',
    description: 'Bookcase, white, 80x28x202 cm',
    articleNo: '002.638.50',
    shape: 'bookcase',
    materials: [
      { key: 'wood', kg: 28 },
      { key: 'metal', kg: 0.4 },
      { key: 'plastic', kg: 0.2 },
    ],
    recoveryCost: 17,
    returnBonus: 20,
    purchasedYear: 2019,
  },
  {
    id: 'malm',
    name: 'MALM',
    description: 'Chest of 6 drawers, white, 80x123 cm',
    articleNo: '904.035.95',
    shape: 'chest',
    materials: [
      { key: 'wood', kg: 55 },
      { key: 'metal', kg: 1.5 },
      { key: 'plastic', kg: 0.3 },
    ],
    recoveryCost: 34,
    returnBonus: 20,
    purchasedYear: 2017,
  },
  {
    id: 'kallax',
    name: 'KALLAX',
    description: 'Shelving unit, white, 77x147 cm',
    articleNo: '802.758.87',
    shape: 'shelf',
    materials: [
      { key: 'wood', kg: 34 },
      { key: 'metal', kg: 0.2 },
      { key: 'plastic', kg: 0.1 },
    ],
    recoveryCost: 18,
    returnBonus: 20,
  },
  {
    id: 'pax',
    name: 'PAX',
    description: 'Wardrobe frame, white, 100x58x201 cm',
    articleNo: '202.145.67',
    shape: 'wardrobe',
    materials: [
      { key: 'wood', kg: 62 },
      { key: 'metal', kg: 1.2 },
      { key: 'plastic', kg: 0.4 },
    ],
    recoveryCost: 38,
    returnBonus: 20,
  },
  {
    id: 'lack',
    name: 'LACK',
    description: 'Side table, black-brown, 55x55 cm',
    articleNo: '404.301.93',
    shape: 'table',
    materials: [
      { key: 'wood', kg: 3.6 },
      { key: 'paper', kg: 0.6 },
      { key: 'plastic', kg: 0.05 },
    ],
    recoveryCost: 3,
    returnBonus: 20,
    purchasedYear: 2015,
  },
  {
    id: 'poang',
    name: 'POÄNG',
    description: 'Armchair, birch veneer, Knisa light beige',
    articleNo: '392.408.04',
    shape: 'armchair',
    materials: [
      { key: 'wood', kg: 6 },
      { key: 'textile', kg: 1.5 },
      { key: 'foam', kg: 2 },
      { key: 'metal', kg: 0.3 },
    ],
    recoveryCost: 9,
    returnBonus: 20,
  },
];

export const getProduct = (id: string | undefined) => PRODUCTS.find((p) => p.id === id);

export interface Store {
  id: string;
  name: string;
  detail: string;
}

export const STORES: Store[] = [
  { id: 'kallered', name: 'IKEA Göteborg Kållered', detail: 'Returns & Exchanges · Open today 10–20' },
  { id: 'backebol', name: 'IKEA Göteborg Bäckebol', detail: 'Returns & Exchanges · Open today 10–20' },
];

export const getStore = (id: string | undefined) => STORES.find((s) => s.id === id) ?? STORES[0];
