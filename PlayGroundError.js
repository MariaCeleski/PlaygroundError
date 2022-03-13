function validaArray(arr, num) {
  try {
    if (!arr && !num) throw new ReferenceError("Envie os parâmetros!");

    if (typeof arr !== "object")
      throw new TypeError("Array precisa ser do tipo object!");

    if (typeof num !== "number")
      throw new TypeError("Num precisa ser do tipo number!");

    if (arr.length !== num) throw new RangeError("Tamanho inválido!");

    return arr;
  } catch (o) {
    if (o instanceof ReferenceError) {
      console.log("Este erro é um ReferenceError!");
      console.log(o.message);
    } else if (o instanceof TypeError) {
      console.log("Este erro é um TypeError!");
      console.log(o.message);
    } else if (o instanceof RangeError) {
      console.log("Este erro é um RangeError!");
      console.log(o.message);
    } else {
      console.log("Tipo de erro não esperado!" + o);
    }
  }
}
//console.log(validaArray([1, 2, 3, 4, 5], 5));
//console.log(validaArray([], 5));
console.log(validaArray([1, 2, 3, 4], 5));
