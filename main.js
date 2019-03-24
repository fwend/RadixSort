const arr = [170, 45, 75, 90, 802, 24, 2, 66, 999, 1000, 1001];

const radixSort = a => {
    const max = getMax(a);
    const digits = Array(a.length);

    for (let exp = 1; exp <= max; exp *= 10) {
        for (let i = 0; i < a.length; i++) {
            digits[i] = Math.floor(a[i] / exp) % 10;
        }
        countingSort(digits, a);
    }
};

const countingSort = (digits, a) => {
    const copy = a.slice();
    const freq = Array(10).fill(0);

    for (let i = 0; i < digits.length; i++) {
        const val = digits[i];
        freq[val]++;
    }

    for (let i = 1; i < freq.length; i++) {
        freq[i] += freq[i - 1];
    }

    for (let i = a.length - 1; i >= 0; i--) {
        const val = digits[i];
        const pos = freq[val] - 1;
        a[pos] = copy[i];
        freq[val]--;
    }
};

const getMax = a => {
    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];
        }
    }
    return max;
};

radixSort(arr);
console.log(arr);
