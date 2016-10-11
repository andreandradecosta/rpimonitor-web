module.exports = function() {
    return {
        status: require('./status.json'),
        snapshot: require('./snapshot.json'),
        history: require('./history.json')
    }
}
