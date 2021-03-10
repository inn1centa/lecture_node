function suma(mass){
  const summ= mass.reduce((accumulation, currentValue)=> accumulation + currentValue);
 return summ;
}
module.exports = suma;