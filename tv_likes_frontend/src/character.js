class Character {
  static all_characters = []
  // charData => {id: 3, name: "JJ"}
  constructor(charData, programObj){
    this.id = charData.id
    this.name = charData.name
    this.programId = programObj.id

    Character.all_characters.push(this) 
  
  }

  static findCharacter(char) {
    return (this.all_characters.find(obj => {return obj.id === char.id}))
  }

}