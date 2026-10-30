//MIT Task X
// function countOccurrences(obj: any, targetKey: string): number {
//     if (!obj || typeof obj !== 'object') return 0;

//     return Object.entries(obj).reduce((acc, [key, value]) => {
//         let matches = key === targetKey ? 1 : 0;


//         if (value && typeof value === 'object') {
//             matches += countOccurrences(value, targetKey);
//         }

//         return acc + matches;
//     }, 0);
// }

// const data = { model: "A", s: { model: "B", nested: { model: "C" } } };
// console.log(countOccurrences(data, "model")); // Natija: 3

//MIT Task Y
// function findIntersection<T>(arr1: T[], arr2: T[]): T[] {
//     const set2 = new Set(arr2);
//     return [...new Set(arr1.filter(item => set2.has(item)))];
// }

// const result = findIntersection([1, 2, 3], [3, 2, 0]);
// console.log(result); 

//MIT Task Z
function sumEvens(arr: number[]): number {
    return arr.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
}

const result = sumEvens([1, 2, 3]);
console.log(result); 