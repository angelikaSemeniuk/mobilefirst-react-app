const initialState = { currentDate: new Date(), selectedDate: new Date(), onClickItem:false, typeOfCalendar: "US", localeOfCalendar: "en" };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ONCHANGE_ON_CALENDAR": {
            console.error("ONCHANGE_ON_CALENDAR", state.selectedDate);
            return Object.assign({}, state, {
                selectedDate: action.value
            })
        }
        case "ONCLICK_ON_CALENDAR_ITEM": {
            return Object.assign({}, state, {
                onClickItem: true
            })
        }
    }
    return state;
}

export default reducer;