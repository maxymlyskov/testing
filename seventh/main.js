let leastCommonMultiple = function (m, n) {
  // Знаходження найбільшого числа
  const arr = [m, n];
  let largest = Math.max.apply(null, arr);

  // Циклічний перебор, що залежить від чисел масиву
  while (true) {
    // Перебор масиву , ділимо найбільше число на кожне число масиву з залишком ,збільшення початкового числа поки залишок не дорівнює нулю
    if (arr.every((num) => largest % num == 0)) {
      return largest;
    } else largest++;
  }
};
console.log(leastCommonMultiple(7, 17));
