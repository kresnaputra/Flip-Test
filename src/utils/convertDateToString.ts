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

// need to convert date to make sure javasciprt engine on mobile work properly
export const convertDate = (date: string) => {
  return date.replace(/ /g, 'T');
};

const convertDateToString = (date: string) => {
  return `${new Date(convertDate(date)).getDate()} ${
    monthToString[new Date(convertDate(date)).getMonth()]
  } ${new Date(convertDate(date)).getFullYear()}`;
};

export default convertDateToString;
