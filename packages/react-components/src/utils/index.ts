import difference from 'lodash/difference';

export const myFn = () => {
  const arr = [1, 4, 5];
  const arr2 = [2, 4, 5];
  return difference(arr, arr2);
};
