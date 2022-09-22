const num = 1432;

const checkSum = (num) => {
  // зміна типу числа на тип строки, для перебору кожного окремого числа
  const str = num.toString();
  let arr = [];
  // додавання кожного числа окремо в масив
  [...str].forEach((c) => arr.push(parseInt(c)));

  arr[0] + arr[1] === arr[2] + arr[3] ? console.log(true) : console.log(false);
};

checkSum(num);
