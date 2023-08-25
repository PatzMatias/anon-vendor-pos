export const DEFAULT_DATE_FORMAT: Intl.DateTimeFormatOptions = { // e.g. 08/26/2023
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  weekday: undefined
}

export const DISPLAY_DATE_FORMAT: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" }; // e.g. Aug 26, 2023
export const PRINT_DATE_FORMAT: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" };

export function getLocaleDateString(date: Date, format?: Intl.DateTimeFormatOptions) {
  return new Date(date).toLocaleDateString('en-PH', format ?? DEFAULT_DATE_FORMAT)
}

export function PesoPriceFormatter(amount: number, style = "currency") {

  const formatOptions: Intl.NumberFormatOptions = style === "currency" ? {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  } : {
    style: style,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }

  const formatter = new Intl.NumberFormat("en-PH", formatOptions)

  return formatter.format(amount);
}