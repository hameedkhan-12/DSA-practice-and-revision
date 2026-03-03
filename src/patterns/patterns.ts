// const pattern1 = (n: number) => {
//   let result = "";
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       result += "* ";
//     }
//     result += "\n"
//   }
//   return result;
// };

// console.log(pattern1(5));

const pattern2 = (n: number) => {
  let result = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      result += "* ";
    }
    result += "\n";
  }
  return result;
};
// console.log(pattern2(5))

// const pattern3 = (n: number) => {
//     let result = ""
//     for(let i = 1; i<=n; i++){
//         for(let j = 1; j<=i; j++){
//             result += `${j} `
//         }
//         result += "\n"
//     }
//     return result;
// }
// console.log(pattern3(5))

const pattern4 = (n: number) => {
  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i + 1; j++) {
      result += `* `;
    }
    result += "\n";
  }
  return result;
};

// console.log(pattern4(5))

const pattern5 = (n: number) => {
  let result = "";

  for (let i = 0; i < n; i++) {
    for(let j = 0; j<n-i-1; j++){
        result+= " "
    }
    for(let k =0; k< 2*i+1; k++){
        result += "*"
    }
    for(let l=0; l<n-i-1; l++){
        result += " "
    }
    result += "\n"
  }
  return result;
};

console.log(pattern5(5))
