type Gender = "Male" | "Female" | "Other"
type Student = {
  name: string;
  roll: number;
  major: string;
  gpa?: number;
  gender?: Gender
};

const robin: Student = {
  name: "Robin",
  roll: 1,
  major: "Computer Science",
  gpa: 5,
};
const mobin: Student = {
  name: "Mobin",
  roll: 2,
  major: "Computer Science",
  gpa: 5,
};

const tobin: Student = {
  name: "Tobin",
  roll: 3,
  major: "Computer Science",
  gpa: 5,
};

const Alex: Student = {
  name: "Alex",
  roll: 4,
  major: "Science",
};
