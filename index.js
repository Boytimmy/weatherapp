const submit = () => {
  let icons = innerHTML = icon;
  let apiKey = `75ce2c36427b04a96cae966985985b14`
  let input = userInput.value;
  let url =`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`



  fetch(url)
  .then(response=>response.json())
  .then((result)=>{
    console.log(result);
      // disp.innerHTML = `
      // <h3>${result.name}</h3>
      // <h3>${result.weather[0].main}</h3>
      // <h3>${result.sys.country}</h3>
      // <h3>${result.main.humidity}</h3> 
      // <h3>${result.wind.speed}</h3> 
      // `
      icon.src = `http://openweathermap.org/img/w/${result.weather[0].icon}.png`
      

      temp.innerHTML = `<span>Temp:${result.main.temp}<span>&#8451</span></span>`
      nam.innerHTML = `<span>State:${result.name}</span>`
      coun.innerHTML = `<span>Country:${result.sys.country}</span>`
      wind.innerHTML =`<span>Wind speed:${result.wind.speed}</span>`
      lat.innerHTML = `<span>Lat:${result.coord.lat}</span>`
      ion.innerHTML = `<span>Lat:${result.coord.lon}</span>`
      des.innerHTML =`<span>Weather:${result.weather[0].main}</span>`
  })
  .catch((err)=>{
    console.log(err);
  })
}
