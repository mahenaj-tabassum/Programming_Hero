// ================================================
//  Generics_Basics
// ================================================

// ================================================
// Normal Approach
// ================================================
// type DataType = string | number| boolean | object | null
// interface Response{
//     // data: any,
//     data: DataType;
//     status: number
// }

// ================================================
//  Generics
// ================================================

interface Response<T> {
  data: T;
  status: number;
}

const transactionResponse: Response<string> = {
  data: "Transaction Successful",
  status: 200,
};
const transactionStatus: Response<boolean> = {
  data: true,
  status: 200,
};
const transactionAmount: Response<number> = {
  data: 200,
  status: 404,
};

function getLength<item>(array: item[]): number {
  return array.length;
}
getLength<string>(["john", "leo", "robert"]);
getLength<number>([1, 2, 3, 4, 5]);
