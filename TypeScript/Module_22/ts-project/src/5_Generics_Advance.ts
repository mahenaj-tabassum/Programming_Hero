// ================================================
//  Advanced Generics
// ================================================

// function useState(initialValue) {
//   let value = initialValue;

//   function serValue(newValue) {
//     value = newValue;
//   }
//   return [value, serValue];
// }

// const [counter, setCounter] = useState(0);
// console.log(counter);
// console.log(setCounter);

// ================================================

function useState<T>(initialValue: T): [T, (newValue: T) => void] {
  let value = initialValue;

  function setValue(newValue: T) {
    value = newValue;
  }

  return [value, setValue];
}

useState<string>("String");
useState<number>(0);
useState<boolean>(false);

interface User {
  email: string;
  isLoggedIn: boolean;
}

useState<User>({
  email: "user@gmail.com",
  isLoggedIn: true,
});
useState<User | null>(null);
