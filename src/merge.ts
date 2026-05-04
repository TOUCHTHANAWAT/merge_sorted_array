export function merge(collection_1: number[],collection_2: number[],collection_3: number[]
): number[] {

    const reversed2: number[] = [];
    for (let i = collection_2.length - 1; i >= 0; i--) {
        reversed2.push(collection_2[i]!);
    }

    const result: number[] = [];

    let i = 0, j = 0, k = 0;

    while (i < collection_1.length || j < reversed2.length || k < collection_3.length) {

        let val1: number | undefined;
        if (i < collection_1.length) {
            val1 = collection_1[i];
        } else {
            val1 = undefined;
        }

        let val2: number | undefined;
        if (j < reversed2.length) {
            val2 = reversed2[j];
        } else {
            val2 = undefined;
        }

        let val3: number | undefined;
        if (k < collection_3.length) {
            val3 = collection_3[k];
        } else {
            val3 = undefined;
        }

        let min: number | undefined;

        if (val1 !== undefined) min = val1;
        if (val2 !== undefined) min = min === undefined ? val2 : Math.min(min, val2);
        if (val3 !== undefined) min = min === undefined ? val3 : Math.min(min, val3);

        if (val1 !== undefined && val1 === min) {
            result.push(collection_1[i]!);
            i++;
        }
        else if (val2 !== undefined && val2 === min) {
            result.push(reversed2[j]!);
            j++;
        }
        else if (val3 !== undefined) {
            result.push(collection_3[k]!);
            k++;
        }
    }

    return result;
}