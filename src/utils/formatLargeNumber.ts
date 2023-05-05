export function formatLargeNumber(number: number): string | number {
    if (number < 0) {
        return "-" + formatLargeNumber(-1 * number);
    }

    if (number >= 1000 && number < 1_000_000) {
        return (number / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    } else if (number >= 1_000_000 && number < 1_000_000_000) {
        return (number / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (number >= 1_000_000_000 && number < 1_000_000_000_000) {
        return (number / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
    } else if (number >= 1_000_000_000_000 && number < 1_000_000_000_000_000) {
        return (
            (number / 1_000_000_000_000).toFixed(1).replace(/\.0$/, "") + "T"
        );
    }

    return number;
}
