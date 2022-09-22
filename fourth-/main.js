const subsequence = (n) => {
  let zero = 0;
  let next = 1;
  // Перебираємо всі числа від 1 до аргументу функції та кожен раз додаємо попереднє число суми двох чисел до 1
  for (let i = 0; i < n; i++) {
    let add = next;
    next = zero + next;
    zero = add;
  }
  return zero;
};

console.log(subsequence(40));
