//1. Function mengurutkan angka dari terbesar ke terkecil
const input = [1, 2, 4, 3, 5, 3, 2, 1];
export const sortNumber = (numbers) => {
  for (var i = 0; i < numbers.length; i++) {
    for (var j = 0; j < numbers.length; j++) {
      if (numbers[i] > numbers[j]) {
        var temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
      }
    }
  }
  return numbers;
};

console.log('1. Urutan angka dari Terbesar ke Terkecil', sortNumber(input));

//2. Function menemukan jumlah maksimum subarray dengan panjang angka yang dimasukan ke fungsi
const input1 = [100, 200, 300, 400];
const input2 = [1, 4, 2, 10, 23, 3, 1, 0, 20];
const input3 = [-3, 4, 0, -2, 6, -1];

export const maxSubarraySum = (arr, num) => {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (var i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (var j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};

console.log(
  '2.1 Input : ([100, 200, 300, 400], 2) = ',
  maxSubarraySum(input1, 2)
);
console.log(
  '2.2 Input : ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) = ',
  maxSubarraySum(input2, 4)
);
console.log(
  '2.3 Input : ([-3, 4, 0, -2, 6, -1], 2) = ',
  maxSubarraySum(input3, 2)
);

//3. Function mendapatkan jumlah semua bilangan genap dalam nested objek
export const input4 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

const input5 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 4 }, ee: 'car' },
};

export const nestedEvenSum = (obj) => {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
};

console.log('3. Output 1: ', nestedEvenSum(input4));
console.log('3.1 Output 2: ', nestedEvenSum(input5));
