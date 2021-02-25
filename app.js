// 18e568e74bdf3e906a768383e89de98c

// activate search button
document.getElementById('searchBtn').addEventListener('click', event => {
  event.preventDefault()

  // declare name to equal what is typed into the search bar

  let name = document.getElementById('cityname').value

  axios.get(`https://www.api.openweathermap.org/data/2.5/weather?q=${name}&appid=18e568e74bdf3e906a768383e89de98c`)
    .then(res => {
      console.log(res)
        // let cityname = 
        .catch(err => console.error(err))
    })



})

// axios.get('http:api.openweathermap.org/data/2.5/weather?q=London&appid=18e568e74bdf3e906a768383e89de98c')
//   .then(console.log('!')

//   )