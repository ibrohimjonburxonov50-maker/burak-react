//MIT Task X
function countOccurrences(obj: any, targetKey: string): number {
    if (!obj || typeof obj !== 'object') return 0;

    return Object.entries(obj).reduce((acc, [key, value]) => {
        let matches = key === targetKey ? 1 : 0;


        if (value && typeof value === 'object') {
            matches += countOccurrences(value, targetKey);
        }

        return acc + matches;
    }, 0);
}

const data = { model: "A", s: { model: "B", nested: { model: "C" } } };
console.log(countOccurrences(data, "model")); // Natija: 3