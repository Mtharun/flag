console.log("Working");
fetch("https://restcountries.com/v3.1/all")
.then((response) => response.json())
.then((data)=>{
    console.log(data);
    data.forEach(element => {
        const countryObject={
            ...element,
            name : element.name.common,
            flags : element.flags.png,
            CountryCode : element.cca3 ? element.cca3 :"no countryCode",
            region : element.region,
            capital : element.capital,
            latlng :element.latlng
        };
        //console.log(countryObject);
        createCountryCard (countryObject);
    });
})
.catch((err)=>console.log("error: ",err));


function getWeather(){
   // console.log(name);
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=104a1531c95506e08f46b56e4aa1dcdc")
    .then((response)=>response.json())
    .then((data)=>{
        //console.log(data);
        //data.weather
        data.weather.forEach((e)=>{
             alert(e.main);
        })
        })
}

function createCountryCard(element){
    document.body.innerHTML +=`
    <div class="container">
    <div class="card">
        <div class="card-header">
            <h4 id="title" class="text-center">${element.name}</h4>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-lg-4">
            <img  class="img-thumbnail" src="${element.flags}" alt="${element.name}"/>
            </div>
            <div class="col-sm-12">
            <p><span>Country Code : ${element.CountryCode}</span></P>
            <p><span>Region : ${element.region}</span></p>
            <p><span>Capital : ${element.capital}</span></p>
            <p><span>latlng :  ${element.latlng}</span></p>
            <button class="btn btn-primary" onclick="getWeather('${element.name}')">Click for Weather</button>
            </div>
          </div>
        </div>
    </div>
  </div>
    `;
}