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
