// console.log("testing")

const apiBtn = document.querySelector("#api-btn")

apiBtn.addEventListener("click", () => {
  console.log("clicking")

  fetch("https://rickandmortyapi.com/api/character?status=alive")
  .then((response) => {
    // the fetch will wait some amount of time until the api is resolved
    console.log(response)
    return response.json() // converts it into readable data
  })
  .then((response) => {
    console.log(response)

    const div = document.querySelector("#rick-and-morty-characters")

    const charDiv = document.createElement("div")

    const randomIndex = Math.floor(Math.random() * response.results.length)

    charDiv.innerHTML = `
      <h3>${response.results[randomIndex].name}</h3>
      <img src=${response.results[randomIndex].image} width="200px"/>
    `

    div.append(charDiv)

  })

})