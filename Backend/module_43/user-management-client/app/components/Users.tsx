"use client";
import { use } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}
interface Props {
  userPromise: Promise<User[]>;
}

const UsersComponent = ({ userPromise }: Props) => {
  const users = use(userPromise);
  return (
    <div>
      <h2>Users in the Component: {users.length}</h2>
      <div>
        {users.map((user) => (
          <ul className="border p-5 m-5" key={user.id}>
            <li>
              <span className="text-gray-500">Name:</span> {user.name}
            </li>
            <li>
              <span className="text-gray-500">Email:</span> {user.email}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default UsersComponent;
