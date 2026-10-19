import { MATERIALS, type Product } from '../data/products';

export interface Estimate {
  totalKg: number;
  grossValue: number;
  netMaterialValue: number;
  bonus: number;
  voucher: number;
}

// Net material value = recoverable material value − assumed recovery costs.
// Voucher = net material value + proposed return bonus.
export function estimate(product: Product): Estimate {
  const totalKg = product.materials.reduce((sum, m) => sum + m.kg, 0);
  const grossValue = product.materials.reduce((sum, m) => sum + m.kg * MATERIALS[m.key].valuePerKg, 0);
  const netMaterialValue = Math.max(0, Math.round(grossValue - product.recoveryCost));
  return {
    totalKg,
    grossValue,
    netMaterialValue,
    bonus: product.returnBonus,
    voucher: netMaterialValue + product.returnBonus,
  };
}

export const formatKg = (kg: number) => (kg < 10 ? kg.toFixed(1) : Math.round(kg).toString()) + ' kg';
