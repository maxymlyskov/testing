const arr = [3, "ds", 6];

const countNums = (arr) => {
  //Перевірка та фільтр масиву на тип даних числа та його додатність
  const filteredArr = arr.filter((num) => typeof num === "number" && num > 0);

  //Перебор чисел і друк
  [...filteredArr].forEach((num) => console.log(num));

  console.log(`Length: ${filteredArr.length}`);
};

countNums(arr);
