const BASE_URL = 'http://localhost:3000/'

function getPrograms() {
  fetch(BASE_URL + 'programs')
  // .then(function(resp){
  //   return resp.json()
  // })
  // .then(resp => {
  //   return resp.json()
  // })
  .then(resp => resp.json())
  .then(prgArr => {
    console.log(prgArr)
  })
}

function createProgramAndAddCharacter(event) {
  // send a post request to Rails, create a program & associate a new character
  // e.preventDefault()
  const title = event.target.dataset.title
  const selectedLI = document.getElementById(title)
  const forms = selectedLI.getElementsByTagName('form')[0]

  debugger
}
