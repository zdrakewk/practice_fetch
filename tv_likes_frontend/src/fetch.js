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

function createProgramAndAddCharacter(configBod) {
  // send a post request to Rails, create a program & associate a new character
  // request is a POST, need 2 send a config obj
   fetch(BASE_URL + 'programs',{
     method: 'POST',
     headers: {
      'content-type': 'application/json'
     },
     body: JSON.stringify(configBod)
   })
   .then(resp => resp.json())
   .then(data => {
     console.log(data)
   })

  // debugger 
  
  
  // const selectedLI = document.getElementById(title)
  // const forms = selectedLI.getElementsByTagName('form')[0]

}
