import { input4, maxSubarraySum, nestedEvenSum, sortNumber } from '.';

test('Function mengurutkan angka dari terbesar ke terkecil', () => {
  const result = sortNumber([1, 2, 4, 3, 5, 3, 2, 1]);

  expect(result).toEqual([5, 4, 3, 3, 2, 2, 1, 1]);
});

test('Function menemukan jumlah maksimum subarray dengan panjang angka yang dimasukan ke fungsi', () => {
  const result = maxSubarraySum([100, 200, 300, 400], 2);

  expect(result).toBe(700);
});

test('Function mendapatkan jumlah semua bilangan genap dalam nested objek', () => {
  const result = nestedEvenSum(input4);

  expect(result).toBe(6);
});
