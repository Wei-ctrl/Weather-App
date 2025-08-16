const weatherResultEl = document.getElementById("weather-result");
const cityInputEl = document.getElementById("city-input");
const submitBtn = document.getElementById("submit");

const apiKey = "5abe7346a12f646d9e306a21143dc291";

//get the value of input by passing the input Element
function handleInput(inputEl){
    const value =  inputEl.value.trim();
    inputEl.value = ''
    return value
}

submitBtn.addEventListener("click", () => {
  getDataFromApi(handleInput(cityInputEl));
});

cityInputEl.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        getDataFromApi(handleInput(cityInputEl));
    }
})

function attachSubmitTriggers(inputEl, btnEl, callback){
    btnEl.addEventListener('click', () => callback(handleInput(cityInputEl)));
    inputEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            callback(handleInput(cityInputEl))
        }
    })
}

attachSubmitTriggers(cityInputEl, submitBtn, getDataFromApi)

function getDataFromApi(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((result) => result.json())
    .then((data) => console.log(`${JSON.stringify(data, null, 2)}`))
    .catch((err) => {
      console.log(err);
    });
}
