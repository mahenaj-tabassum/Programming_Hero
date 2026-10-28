import { Suspense } from "react";
import UsersComponent from "../components/Users";

const userPromise = async () => {
  const data = await fetch("http://localhost:5000/users");
  const users = await data.json();
  return users;
};

const UsersPage = () => {
  return (
    <div>
      <h2>Users Data Coming Soon:</h2>
      <Suspense fallback="Loading...">
        <UsersComponent userPromise={userPromise()} />
      </Suspense>
    </div>
  );
};

export default UsersPage;
