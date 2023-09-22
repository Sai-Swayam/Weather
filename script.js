const api_key = '8769faa5887bf7961ce85e9b39db13d8';
const api_url = 'https://api.openweathermap.org/data/2.5/weather?q=bhubaneswar&appid=' + api_key
console.log(api_url);

// create an asynchronous function which recieves the json data using the fetch api from api_url

let data;
async function parse() {
  const response = await fetch(api_url);
  data = await response.json();
  console.log(data);
  const temp = data.main.temp;
  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = Math.round(temp) - 273 + "\&deg;";

  // accessing the headers of the request

  function parseHttpHeaders(httpHeaders) {
    return httpHeaders.split("\n")
      .map(x => x.split(/: */, 2))
      .filter(x => x[0])
      .reduce((ac, x) => { ac[x[0]] = x[1]; return ac; }, {});
  }

  var req = new XMLHttpRequest();
  req.open('GET', document.location, false);
  req.send(null);
  var headers = parseHttpHeaders(req.getAllResponseHeaders());
  // Now we can do:  headers["content-type"]

  console.log(headers);
  document.querySelector('.date').innerHTML = headers.date;
}
parse();

//dark mode

let flag = 0;
document.querySelector('.temp').addEventListener("click", () => {
  if (flag === 0) {
    document.body.style.cssText = 'background-color:black; color:#ebeaeb;'
    flag = 1;
  }
  else {
    document.body.style.cssText = 'background-color:#ebeaeb; color:black;'
    flag = 0;
  }
})

//search city

let btn = document.getElementById('submit').addEventListener('click', async function send() {
  let city = document.getElementById('search-bar').value;
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`);
  data = await response.json();
  console.log(data);
  const temp = data.main.temp;
  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = Math.round(temp) - 273 + "\&deg;";  

})

