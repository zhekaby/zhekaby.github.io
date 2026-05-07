export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'Belarusian National Technical University',
    degree: 'B.S. Computer Programming',
    link: 'https://bntu.by',
    year: 2005,
  },
];

export default degrees;
