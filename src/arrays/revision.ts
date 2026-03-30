// const printingSubArrays = (arr: number[]) => {
//     const n = arr.length;

//     for(let i = 0; i<n; i++){
//         console.log(arr[i])

//         for(let j = i+1; j<n; j++){
//             console.log(arr[i], arr[j])
//             break;

//         }
//     }
// }

// console.log(printingSubArrays([1,2,3,4,5]))

// const printSubArrays = (arr: number[]) => {
//     const n = arr.length;

//     for (let len = 1; len <= n; len++) {
//         for (let i = 0; i <= n - len; i++) {
//             const subArray = [];

//             for (let k = i; k < i + len; k++) {
//                 subArray.push(arr[k]);
//             }

//             console.log(subArray);
//         }
//     }
// };

// printSubArrays([1,2,3,4,5]);

const printingSubArray = (arr: number[]) => {
    const n = arr.length;

    for(let i = 0; i<n; i++){
        let subArr: number[] = [];

        for(let j = i; j<n; j++){
            subArr.push(arr[j]);
            console.log(subArr)
        }
    }
}

printingSubArray([1,2,3,4,5])