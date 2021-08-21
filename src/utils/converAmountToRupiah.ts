const convertAmountToRupiah = (amount: string) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  })
    .format(+amount)
    .slice(0, -3);
};

export default convertAmountToRupiah;
