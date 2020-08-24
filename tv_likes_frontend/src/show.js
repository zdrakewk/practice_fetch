class Show {
  static all_shows = []
  // class & instance method
  constructor(title, description) {
    // this the the new obj
    this.title = title
    this.description = description
    // console.log(this + `inside constructor`)
    Show.all_shows.push(this)
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