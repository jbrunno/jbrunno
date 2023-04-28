(function() {
    let lol = 0;

    document.onkeydown = e => {

        if (e.code == 'KeyK') {
            lol++;
    
            if (lol == 10) {
                lol = 0;
                console.log('YEAHHH')
            }
        }
    }
})();