function parseDateTime(dateTimeString) {
    const [datePart, timePart] = dateTimeString.split(' ')

    const [day, month, year] = datePart.split('.')

    return {
        day: day,
        month: month,
        year: year,
        time: timePart
    }
}

export {
    parseDateTime
}