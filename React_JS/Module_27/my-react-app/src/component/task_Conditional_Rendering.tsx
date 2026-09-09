interface TaskPropTypes {
  name: string;
  time: string;
  isDone: boolean;
}

// Conditional rendering in React is a technique that
// allows you to render different components or elements
// based on certain conditions. It enables you to control
// what gets displayed in the user interface based on the
// state or props of a component. In React, you can achieve
// conditional rendering using various methods, such as if
// statements, ternary operators, and logical && operators.

export default function Task({ name, time, isDone }: TaskPropTypes) {
  
    let list;
    if (isDone){
        list = <li>Done: {name} - Time: {time}</li>
    } 
    else{
        list = <li>Pending: {name} - Time: {time}</li>
    }
    return list
}

// ===============================================================

// export default function Task({ name, time, isDone }: TaskPropTypes) {
//   return (
//     // || means "OR – if the left side is false, use the right side instead."
//     isDone || (
//       <li>
//         Pending: {name} - Time: {time}
//       </li>
//     )
//   );
// }

// ===============================================================

// export default function Task({ name, time, isDone }: TaskPropTypes) {
//   return (
//     isDone === false && (
//       <li>
//         Pending: {name} - Time: {time}
//       </li>
//     )
//   );
// }

// ===============================================================

// export default function Task({ name, time, isDone }: TaskPropTypes) {
//   return (
//     isDone === true && (
//       <li>
//         Completed: {name} - Time: {time}
//       </li>
//     )
//   );
// }

// ===============================================================

/*
// export default function Task({ name, time, isDone }: TaskPropTypes) {
//   return isDone === true ? (
//     <li>
//       Completed: {name} - Time: {time}
//     </li>
//   ) : (
//     <li>
//       Pending: {name} - Time: {time}
//     </li>
//   );
// }

*/

// ===============================================================
/*
// export default function Task({ name, time, isDone }: TaskPropTypes) {
//   return (
//     <li>
//       {isDone ? "Completed" : "Pending"}: {name} - Time: {time}
//     </li>
//   );
// }
*/

// ===============================================================

/*
// export default function Task({ name, time, isDone }: TaskPropTypes) {
//   if (isDone === true) {
//     return (
//       <li>
//         Completed: {name} - Time: {time}
//       </li>
//     );
//   } else {
//     return (
//       <li>
//           Pending: {name} - Time: {time}
//        </li>
//      );
//   }
// }
*/

// ===============================================================

/*
// export default function Task({ name, time, isDone }: TaskPropTypes) {
//   if (isDone === true) {
//     return (
//       <li>
//         Completed: {name} - Time: {time}
//       </li>
//     );
//   }
//   return (
//     <li>
//       Pending: {name} - Time: {time}
//     </li>
//   );
// }

*/
