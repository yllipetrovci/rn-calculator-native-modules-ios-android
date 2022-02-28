export const generateRandomOperator = () => {
    const operator = ['+', '-', '/', '*'];
    const min = 0;
    const max = 3;

    return operator[Math.floor(Math.random() * (max - min + 1) + min)];
}