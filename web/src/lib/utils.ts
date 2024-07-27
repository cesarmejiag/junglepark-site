export function toCurrency(amount: number = 0): string {
  return amount.toLocaleString("es-MX", { style: "currency", currency: "MXN" });
}

export function upperFirst(text = ""): string {
  if (text.length > 0) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  return text;
}
