(() => {
    console.group('Codigo Sync');

        console.log('Codigo Sync');

        console.log('Inicio');

        function dos() {
            console.log('   Dos')
        }

        function uno() {
            console.log('   Uno')

            dos();

            console.log('   Tres')
        }

        uno();
        console.log('Fin')

    console.groupEnd('Codigo Sync');
})();

(() => {
    console.group('Codigo Async');

        console.log('Codigo Async');

        console.log('Inicio');

        function dos() {
            setTimeout(function () {
                console.log('   Dos')
            }, 1000)
        }

        function uno() {
            setTimeout(function () {
                console.log('   Uno')
            }, 0)

            dos();

            console.log('   Tres')
        }

        uno();
        console.log('Fin')

    console.groupEnd('Codigo Async');
})();