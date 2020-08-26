document.addEventListener('DOMContentLoaded', function() {
  // input type submit
  document.getElementsByTagName('form')[0].addEventListener('submit', getShows)

  // document.getElementsByTagName('form')[0].addEventListener('submit', () => { 
  //   const inputWord = e.target.value
  //   getShows(e, inputWord)
  // })

  // button tage submit
  // document.getElementsByTagName('button')[0].addEventListener('click', (event) =>{
  //   event.preventDefault()
  //   console.log('button was clicked')
  // })
})

// get shows with the name of girls
function getShows(event) {
  event.preventDefault()
  const query = document.getElementById("queryInput").value

  fetch(`http://api.tvmaze.com/search/shows?q=${query}`)// P1
    .then(function(resp) { 
      return resp.json()
    })
    .then(function(arrObjs) { 
      arrObjs.forEach(function(obj) {
        const title = obj.show.name
        const description = obj.show.summary

        new Program(title, description)
      });
      displayPrograms()
    })
}

function displayPrograms(){
 
  const ul = document.createElement('ul')

  Program.all_programs.forEach(function(obj){
    const li = document.createElement('li')
    li.innerText = `Title: ${obj.title}`
    li.id = obj.title

    const span = document.createElement('span')

    const button = document.createElement('button')
    // debugger
    button.addEventListener('click', () => {
      const dForm = dynamicForm(obj)

      span.appendChild(dForm)
    })

    button.innerText = 'Add A Character'

   
    li.appendChild(button)
    li.appendChild(span)
    
    ul.appendChild(li)
  })
  document.getElementsByTagName('main')[0].appendChild(ul)
}

function dynamicForm(programObj) {
  const form = document.createElement('form')
  
  const label = document.createElement('label')
  label.innerText = 'Add Character Name'

  const input = document.createElement('input')
  input.name = 'characterName'
  input.value = ''

  const formButton = document.createElement('input')
  formButton.type = 'submit'
  formButton.value = 'Submit Character'
  formButton.setAttribute('data-title', programObj.title)

  formButton.addEventListener('click', createProgramAndAddCharacter)


  // formButton.addEventListener('submit', createProgramAndAddCharacter)

  form.append(label)
  form.append(input)
  form.append(formButton)

  return form
}
