export const CHANGE_VALUE = 'CHANGE_VALUE';
export const CHANGE_COUNT = 'CHANGE_COUNT';

export function changeValue(newValue) {
    return {
        type: CHANGE_VALUE,
        value: newValue
    }
}

export function changeCount(newCount) {
    return {
        type: CHANGE_COUNT,
        value: newCount
    }
}
