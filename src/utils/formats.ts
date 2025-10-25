export function formatCurrencyBRL(value: string | number | null | undefined): string {
  const numeric = Number(value);
  if (isNaN(numeric)) return "R$ 0,00";

  return numeric.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}