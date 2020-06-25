export const timeWithTea = (mins) => {
    if (mins > 0 && mins <= 2) {
        return "🍵"
    } else if (mins > 2 && mins <= 3) {
        return "🍵🍵"
    } else if (mins > 3 && mins <= 5) {
        return "🍵🍵🍵"
    } else {
        return "🍵🍵🍵🍵"
    }
}