class Program {
  static all_programs = []
  // class & instance method
  constructor(title, description, likes=0) {
    // this the the new obj
    this.title = title
    this.description = description
    this.likes = likes
    // console.log(this + `inside constructor`)
    Program.all_programs.push(this)
  }

  static findProgram(pName) {
    return (this.all_programs.find(obj => {return obj.title === pName}))
  }

  static formatShows(){
    console.log('info')
  }


  static programConfigBodyCreation(event) {
      // create the params data 2 send to Rails 
    event.preventDefault()

    const form = event.target.elements
    const charName = form.characterName.value
    const title = form.charSubmitBtn.dataset.title
    const pObjJS =  Program.findProgram(title)

    const configBodyObj = {}
    configBodyObj.program = pObjJS
    configBodyObj.program.characters_attributes = [{name: charName}]
    // debugger
    createProgramAndAddCharacter(configBodyObj)
  }

  updateAttributes(newInfo){
    this.id = newInfo.id // add ruby ID
    this.characters = [] // give prg obj collect of chars
    // add char objs 2 prg collection
    newInfo.characters.forEach((char) => {
      let charObj = Character.findCharacter(char)
      // (charObj) ? charObj  : charObj = new Character(char, this)

      if (charObj) {
        charObj
      } else {
        charObj = new Character(char, this)
      }

      this.characters.push(charObj)
    })

    debugger

  }
}

// Show.all_shows = []

// console.log(this + `outside Show class`)
// instan... === MAKE NEW OBJ
// const showObj = new Show
// Show.formatShows()
