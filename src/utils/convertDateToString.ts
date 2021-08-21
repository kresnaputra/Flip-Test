const monthToString: any = {
  0: 'Januari',
  1: 'Februari',
  2: 'Maret',
  3: 'April',
  4: 'Mei',
  5: 'Juni',
  6: 'Juli',
  7: 'Agustus',
  8: 'September',
  9: 'Oktober',
  10: 'November',
  11: 'Desember',
};

const convertDateToString = (date: string) => {
  return `${new Date(date).getDate()} ${
    monthToString[new Date(date).getMonth()]
  } ${new Date(date).getFullYear()}`;
};

export default convertDateToString;
