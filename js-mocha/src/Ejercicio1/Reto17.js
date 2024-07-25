function optimizeIntervals(intervals) {

    intervals.sort(function (a, b) {
        return a[0] - b[0]
    });

    const merged = [intervals[0]];

    for (let i of intervals) {
        let lastMerged = merged[merged.length - 1];

        if (i[0] <= lastMerged[1]) {
            lastMerged[1] = Math.max(
                lastMerged[1], i[1]
            );
        } else {
            merged.push(i);
        }
    }

    return merged;
}