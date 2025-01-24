

const reviews = [

        { id: 1, rating: 5 },
        { id: 2, rating: 3 },
        { id: 3, rating: 2 },

]


function getAverage(reviews) {
    let total = 0;
    for(let i = 0; i < reviews.length; i++){
        total += reviews[i].rating
    }
    return total / reviews.length
}

console.log(getAverage(reviews))

const average = getAverage(reviews);
const averageElement = document.getElementById('average-rating')
averageElement.textContent = average.toFixed(2)