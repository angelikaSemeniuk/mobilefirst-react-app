export function onChangeOnCalendar(date) {
    return {
        type: "ONCHANGE_ON_CALENDAR",
        value: date
    };
}

export function onClickDay(selectedDate) {
    const newDate = new Date(selectedDate).toISOString().slice(0, 10);
    const arrayOfEpisodes = [];

    return function (dispatch) {
        dispatch({type: "ONCLICK_ON_CALENDAR_ITEM"});
        fetch('http://api.tvmaze.com/schedule?country=US&date=' + newDate)
            .then((response) => {
                return response.json();
            })
            .then(
                (data) => {
                    data.forEach( episode => {
                        arrayOfEpisodes.push({
                            title: episode.show.name,
                            image: episode.show.image,
                            rating: episode.show.rating.average,
                            season: episode.season,
                            episode: episode.number,
                            premiered: episode.show.premiered
                        })
                    })
                    dispatch({type: "RECEIVE_EPISODES", value: arrayOfEpisodes});

                },
                (error) => {
                    dispatch({type: "CATCH_ERROR", value: error});
                }
            )
    }
}

