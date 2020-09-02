document.addEventListener('submit', function (e) {

        if (e.target.matches('.findPrograms')) {
        // alert('Find Programs form submitted')
        getShows(e)
        }

        if (e.target.matches('.addCharacter')) {
        // alert('Add Char form submitted')
        Program.programConfigBodyCreation(e)
        }

});