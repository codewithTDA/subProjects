var btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');

function getJoke(){
    console.log('cliked');
}
btnEl.addEventListener('click',getJoke)
var apiKey='BuPhLSZuxyy2+kbLx07/9A==8Fa8gV7OZPVDm3cC';
const Options ={
    method:'GET',
    headers:{
        'X-Api-Key':apiKey,
    },
}
var url = "https://api.api-ninjas.com/v1/dadjokes?limit=1"


async function getJoke(){
    try {
        jokeEl.innerText = "Searching..."
        btnEl.disabled = true;
        btnEl.innerHTML ="Lading..."
        btnEl.style.textTransform="capitalize";
        const response = await fetch(url,Options);
        const data = await response.json();
        const text =data[0].joke;
        jokeEl.innerHTML=text
        btnEl.disabled = false;
        btnEl.innerText = 'Tell me a joke';
        btnEl.style.textTransform="uppercase";
    } catch (error) {
        // console.log('Error oucured' + error);
        jokeEl.innerText  = "An error happened try again "
        btnEl.disabled =false;
        btnEl.innerText ="Tell me a joke";
    }
   

}