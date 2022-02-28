export const roundNumbersWithTwoDecimalPlaces = (value) => {
    return (parseFloat(Math.round(value * 100) / 100));
}