const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    //You can compute inside the brackets
    [`${2 + 3}`]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },

    newWay(firstParams, secondParams) {
        console.log('ES6 Way of writing functions inside Objects');
    },

    oldWay: function (firstParams, secondParams) {
        console.log('Older way of writing functions inside Objects');
    }
};
