// Convertir números a enteros con "n" cantidad de decimales
const parseFloatNumber = (number, n) => {
  const result = parseFloat(number).toFixed(n);
  return result === "NaN" ? "-" : result;
};
export default parseFloatNumber;
