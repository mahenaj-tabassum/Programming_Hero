interface Employee {
  name: string;
  id: number;
  department: string;
  salary?: number;
}
const Mark: Employee = {
  name: "Mark",
  id: 101,
  department: "Engineering",
  salary: 30,
};
const Bill: Employee = {
  name: "Bill",
  id: 101,
  department: "Engineering",
  salary: 30,
};
const team: Employee[] = [
  Mark,
  Bill,
  {
    name: "Alison",
    id: 101,
    department: "Engineering",
    salary: 30,
  },
];

function printEmployeeDetails(employee: Employee) {
  console.log(`Name: ${employee.name}`);
  console.log(`Id: ${employee.id}`);
  console.log(`Department: ${employee.department}`);
}
printEmployeeDetails({
  name: "Leo",
  id: 104,
  department: "Computer",
});

function displayEmployeeDetails({ name, id, department }: Employee): void {
  console.log(`Name: ${name}`);
  console.log(`Id: ${id}`);
  console.log(`Department: ${department}`);
}

displayEmployeeDetails(Mark);
