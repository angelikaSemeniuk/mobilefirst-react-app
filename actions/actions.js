export function onChangeOnCalendar(date) {
    return {
        type: "ONCHANGE_ON_CALENDAR",
        value: date
    };
}

export function onClickDay() {
    return {
        type: "ONCLICK_ON_CALENDAR_ITEM"
    };
}