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

        if (Program.findProgram('title', title) == undefined) {
          new Program(title, description)
        }
      });

      if (document.getElementById('displayAllPrograms') == null) {
        const btn = document.createElement('button')
        btn.id = 'displayAllPrograms'  
        btn.innerText = 'View All Searched Programs'
        document.getElementById('findPrograms').after(btn)
      }
      
      // console.log(Program.all_programs)
      displayPrograms(query)
    })
}

function displayPrograms(searchWord){
 let ul = document.getElementById('programContainer')
 let list;
 
 if (ul == null) {
    ul = document.createElement('ul')
    ul.id = 'programContainer'
  } else {
    ul.innerHTML = ''
  }

  if (searchWord == 'all') {
    list = Program.all_programs
  } else {
    list = Program.filterShows(searchWord)
  }

  list.forEach(function(obj){
    const li = document.createElement('li')
    const b = document.createElement('b')
    b.innerText = `Title: ${obj.title}`
    b.id = obj.title

    const span = document.createElement('span')

    const button = document.createElement('button')
    // debugger
    button.addEventListener('click', () => {
      const dForm = dynamicForm(obj)

      span.appendChild(dForm)
    })

    button.innerText = 'Add A Character'

    li.appendChild(b)
    li.appendChild(button)
    li.appendChild(span)
    
    ul.appendChild(li)
  })
  document.getElementsByTagName('main')[0].appendChild(ul)
}

function dynamicForm(programObj) {
  const form = document.createElement('form')

  form.setAttribute('id', 'addCharacter')
  const label = document.createElement('label')
  label.innerText = 'Add Character Name'

  const input = document.createElement('input')
  input.name = 'characterName'
  input.value = ''

  const formButton = document.createElement('input')
  formButton.type = 'submit'
  formButton.value = 'Submit Character'
  formButton.setAttribute('data-title', programObj.title)
  formButton.setAttribute('name', 'charSubmitBtn')
  
  form.append(label)
  form.append(input)
  form.append(formButton)

  return form
}
