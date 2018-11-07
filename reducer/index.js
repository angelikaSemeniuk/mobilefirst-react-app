const initialState = { currentDate: new Date(), selectedDay: false, episodes: [], error: "", receiveOriginalImage: false, modalIsOpen:false, originalImage: null };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ONCLICK_ON_CALENDAR_ITEM": {
            return Object.assign({}, state, {
                currentDate: action.value,
                selectedDay: true
            })
        }
        case "RECEIVE_EPISODES": {
            return Object.assign({}, state, {
                episodes: action.value
            })
        }
        case "CATCH_ERROR": {
            return Object.assign({}, state, {
                error: action.value
            })
        }
        case "HANDLE_ACTION_FOR_DISPLAY_CONTENT": {
            return Object.assign({}, state, {
                selectedDay: false,
                episodes: [],
                error: "",
                receiveOriginalImage: false,
                originalImage: null

            })
        }
        case "RECEIVE_RESPONSE_BY_IMDB_ID": {
            return Object.assign({}, state, {
                receiveOriginalImage: true,
                modalIsOpen: true
            })
        }
        case "RECEIVE_EPISODES_ORIGINAL_IMAGE": {
            return Object.assign({}, state, {
                originalImage: action.value
            })
        }
        case "CLOSE_ORIGINAL_IMAGE": {
            return Object.assign({}, state, {
                originalImage: null,
                receiveOriginalImage: false,
                modalIsOpen: false
            })
        }
        default:
            return state;
    }
}

export default reducer;