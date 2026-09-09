import "../src/App.css";
import Sports from "./component/Student";
// import Users from "./component/Users";
// import Book from "./component/Books";
// import Todo from "../src/component/todo.tsx"
// import Task from "./component/task_Conditional_Rendering.tsx"

const App = () => {
  // const books = [  "Physics",  "Chemistry",  "Biology",  "Math",  "English",  "Bangla",];

  return (
    <div>
      <h1>Get started</h1>
      <Sports></Sports>
      {/* <Users /> */}

      {/* {
  books.map(book => <Book name={book}></Book>)
} */}
      {/* <Task name="Practice coding"  time="5.00am" isDone={false}></Task>
      <Task name="Facebook Time wasting"  time="5.00am" isDone={true}></Task>
      <Task name="Mobile Charge"  time="5.00am" isDone={false}></Task> */}
      {/* 
      <Todo task = "Practice coding" time= "5.00 am"></Todo>
      <Todo task = "Take a shower" time="12.00pm"></Todo>
      <Todo task = "No social media"></Todo> */}

      {/* <button disabled></button> */}

      {/* <Product></Product>
      <Product></Product>
      <Product></Product> */}
      {/* <Student name="Subidha badi" gpa="3.0"></Student>
      <Student name='Pati leader'></Student>
      <Student></Student> */}
      {/* <Developer language="JavaScript" experience="3"></Developer>
      <Developer language="Python" experience="10"></Developer>
      <Developer language="Java" experience="6"></Developer> */}
    </div>
  );
};
// function Developer(props) {
//   console.log(props);
//   console.log(props.language);
//   console.log(props.experience);
//   return (
//     <div className="student">
//       <h4>Programming Language : {props.language}</h4>
//       <h4>Experience : {props.experience}</h4>
//     </div>
//   );
// }

// function Student(props) {
//   console.log("Inside the student component:", props);
//   console.log(props.name);
//   return (
//     <div
//       style={{
//         border: "2px solid white",
//         margin: "5px",
//         borderRadius: "1rem",
//       }}
//     >
//       <h2>Student Name: {props.name}</h2>
//       <p>Grade: 5.00</p>
//     </div>
//   );
// }

// function Product() {
//   const productStyle = {
//     border: "2px solid white",
//     margin: "5px",
//     borderRadius: "1rem",
//   };

//   return (
//     <div style={productStyle}>
//       <h2
//         style={{
//           fontSize: "3rem",
//         }}
//       >
//         Product name
//       </h2>
//       <p>Product Card</p>
//     </div>
//   );
// }

// function add(num1, num2){
//   return num1 + num2
// }

// const total = add(2,1 )
// const tolat2 = add(40,24)

export default App;
