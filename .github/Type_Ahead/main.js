const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

//let cities = [];
//.then(data => cities = data)

const cities = [];

//Another way to use the basic fetch request
fetch(endpoint)
    .then(response => response.json())
    //pushes the data into the cities array, ... needed as its the spread
    .then(data => cities.push(...data));

function findMatches(wordToMatch, cities){
    return cities.filter(place =>{
        //figure out if the city or state matches what was searched
        //ALlows us to add a variable into the expression
        //Searches for the new word added in the string
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
        
    });
}

function displayMatches(){
    console.log(this.value);

}

searchInput.addEventListener('change', displayMatches);

