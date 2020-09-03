document.addEventListener('submit', function (e) {

        if (e.target.matches('#findPrograms')) {
        // alert('Find Programs form submitted')
        getShows(e)
        }

        if (e.target.matches('#addCharacter')) {
        // alert('Add Char form submitted')
        Program.programConfigBodyCreation(e)
        }

});


document.addEventListener('click', function (e) {

        if (e.target.matches('#displayAllPrograms')) {
        // alert('Find Programs form submitted')
                displayPrograms('all')
        }

        if (e.target.matches('#displayProgramCharacters')) {
                e.preventDefault()
                const obj = Program.findProgram('id', parseInt(e.target.dataset.programid))
                // debugger
                console.log(obj)
                obj.displayProgramCharacters()
        }
        

});