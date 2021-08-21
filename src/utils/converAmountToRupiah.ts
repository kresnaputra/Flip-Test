const convertAmountToRupiah = (amount: string) => {
  let reverse = amount.toString().split('').reverse().join(''),
    result: any = reverse.match(/\d{1,3}/g);
  result = result.join('.').split('').reverse().join('');
  return `Rp ${result}`;
};

export default convertAmountToRupiah;
