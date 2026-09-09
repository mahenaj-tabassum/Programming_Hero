import UserCard from "./UserCard";

interface User {
  name: string;
  isLoggedIn: boolean;
}
const users: User[] = [
  { name: "Leo", isLoggedIn: true },
  { name: "Sylvia", isLoggedIn: true },
  { name: "Alex", isLoggedIn: false },
  { name: "Ivy", isLoggedIn: true },
  { name: "David", isLoggedIn: true },
];
export default function Users() {
  return (
    <div>
      {users.map((userItem) => (
        <UserCard name={userItem.name}></UserCard>
      ))}
    </div>
  );
}

// *************************************************
// export default function Users() {
//   return (
//     <div>
//       {users.map((userItem) => (
//         <li>{userItem.name}</li>
//       ))}
//     </div>
//   );
// }
