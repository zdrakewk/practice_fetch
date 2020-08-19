document.addEventListener('DOMContentLoaded', function() {
  // alert('I am here')
  // console.log(e)
  getShows('girls')
})


// () => {} // arrow fn
// document.addEventListener('DomContentLoaded', getShows)


// get shows with the name of girls 
function getShows(query) {
  fetch(`http://api.tvmaze.com/search/shows?q=${query}`) // P1
    .then(function(resp) { // Wks w/P1
      // console.log(1)
      return resp.json() // P2
    })
    .then(function(arrObjs) { // Wks w/P2
      // turn response into JS obj
      console.log(arrObjs)
      // debugger;
      arrObjs.forEach(function(obj) {
        const title = obj.show.name
        const description = obj.show.summary

        new Show(title, description)
      });

      displayShows()
      // for (const obj of arrObjs) {
      //   const title = obj.show.name
      //   const description = obj.show.summary

      //   new Show(title, description)
      // }

      // for (let index = 0; index < arrObjs.length; index++) {
      //   // debugger
      //   const title = arrObjs[index].show.name
      //   const description = arrObjs[index].show.summary
      //   new Show(title, description)
      // }
    })
    // console.log(3)
}
// display the pulled show objs

function displayShows(){
  // console.log('in displayShows fn')
  // DOM MANI!!
  // 1) get/create an anchor
  // empty body of all txt
  // document.body.innerText = ''
  const ul = document.createElement('ul')
  // 2) mani data
  Show.all_shows.forEach(function(obj){
    // ul.innerHTML += `<li>`Title: ${obj.title}`</li>`
    const li = document.createElement('li')
    li.innerText = `Title: ${obj.title}`
    ul.appendChild(li)
    // debugger
  })
  // 3) add to the dom
  document.getElementsByTagName('main')[0].appendChild(ul)
}