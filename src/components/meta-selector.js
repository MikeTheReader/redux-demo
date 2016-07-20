/*
 * This is an example of selectors. These are methods that will return values based on values within the state.
 * Since they are derived, they do not need to be stored as part of the state, but creating separate places for
 * this logic, it can be shared across components.
 */

export const getMeta = (state) => {
    return {
        squared: state.count * state.count,
        chartData: getLetterChartData(state.value)
    };
}

function getLetterDistribution(value) {
    if (!value) return null;
    let letterArray = value.toLowerCase().split('').sort();

    let distribution = {};
    letterArray.forEach(letter => {
        if (!distribution[letter]) {
            distribution[letter] = 0;
        }
        distribution[letter] += 1;
    })
    if (distribution[' ']) {
        delete distribution[' ']
    }
    return distribution;
}

function getLetterChartData(value) {
    console.log('getLetterChartData', value)
    if (!value) return [];

    let distribution = getLetterDistribution(value);
    let chartData = [];
    if (distribution) {
        Object.keys(distribution).forEach((letterKey) => {
            chartData.push({
                text: letterKey,
                value: distribution[letterKey]
            })
        });
    }
    console.log('chartData', chartData)
    return chartData;
}
