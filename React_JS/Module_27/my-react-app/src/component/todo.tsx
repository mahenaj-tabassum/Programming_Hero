// function Todo(props){
//     console.log(props);
//     return (
//         <ul>
//             <li>Do this work: {props.task}</li>
//         </ul>
//     )
// }
// function Todo({ task, time }) {
//   return (
//     <ul>
//       <li>Do this work: {task} at {time}</li>
//     </ul>
//   );
// }

interface TodoPropType {
  task: string;
  time?: string;
}

function Todo({ task, time }: { task: string; time?: string }) {
  return (
    <li>
      task: {task} at {time}
    </li>
  );
}
// function Todo({ task, time }: TodoPropType) {
//   return (
//     <li>
//       task: {task} at {time}
//     </li>
//   );
// }

// function Todo (props: TodoPropType){
//     return (
//         <ul>
//             <li>Work: {props.task} at {props.time}</li>
//         </ul>
//     )
// }
export default Todo;

// const {task, time } = {task = "Take a shower" time="12.00pm"}
