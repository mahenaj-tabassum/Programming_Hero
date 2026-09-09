// ==================================================
//       Student Result Analyzer
// ==================================================

type Student = {
  name: string;
  marks: number[];
};
let studentInput = {
  name: "Alex ",
  marks: [80, 75, 90, 85],
};

const getStudentResult = (
  student: Student,
):
  | {
      name: string;
      average: number;
      result: string;
    }
  | string => {
  if (student.marks.length === 0) {
    return "Marks Property is Empty";
  }
  let totalMarks = student.marks.reduce((acc, item) => acc + item, 0);
  let average = totalMarks / student.marks.length;
  let result = average > 40 ? "Passed" : "Failed";

  return {
    name: student.name,
    average,
    result,
  };
};
console.log(getStudentResult(studentInput));
