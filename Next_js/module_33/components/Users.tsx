import UserCard from "./UserCard";
interface UserObject {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const Users = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();
  return (
    <div className="grid py-10 w-[90%] mx-auto lg:grid-cols-3 gap-5 ">
      {users.map((user: UserObject) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
};

export default Users;
