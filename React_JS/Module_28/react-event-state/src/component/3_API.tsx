import { use } from "react";
import UserCard from "./UserCard";

const User = ({ userDataPromise }) => {
  const users = use(userDataPromise);
  console.log(users);
  return (
    <>
      <h2>User: {users.length}</h2>
      {users.map((user) => {
        return <UserCard user={user}></UserCard>;
      })}
    </> 
  );
};

export default User;

/**
 * 
 * 00. Suspense fallback
 * 01. Create Promise function to load data
 * 02. Send the Promise to the component to load data
 * 1. data source || JSON
 * JSON.stringify()
 * JSON.parse
 * 
 * response.json()
 * 
 * 2. fetch("https://jsonplaceholder.typicode.com/users") 
 * .then(res => res.json())
 * .then(data => console.log(data))
 * 
 * || 
 * async await
 * async function loadData (){
 *      const res = await fetch("https://jsonplaceholder.typicode.com/users")
 *      const data = await res.json
 *      return data
 * }
 *
 * const loadData = async () =>{
 *  const res = await fetch("https://jsonplaceholder.typicode.com/users")
 *  const data = await res.json
 *  return data
 * }
 * 
 * 

 */
