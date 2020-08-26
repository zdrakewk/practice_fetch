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

  static formatShows(){
    console.log('info')
  }
}

// Show.all_shows = []

// console.log(this + `outside Show class`)
// instan... === MAKE NEW OBJ
// const showObj = new Show
// Show.formatShows()
