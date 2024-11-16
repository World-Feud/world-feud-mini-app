export const formatNumberWithDelimiter = (
  value: number,
  delimiter: string = ","
): string => {
  const [integerPart, fractionalPart] = value.toString().split(".");

  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    delimiter
  );

  return fractionalPart
    ? `${formattedIntegerPart}.${fractionalPart}`
    : formattedIntegerPart;
};
