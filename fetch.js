(() => {
    const $fetch = document.getElementById("fetch"),
        $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name}`;

                $fragment.appendChild($li);
            });

            $fetch.appendChild($fragment);
        })
        .catch((err) => {
            let message = err.statusText || "Ocurrio un error";
            $fetch.innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(() => {
            console.log("Ejecuta una funcion dependiendo del resultado");
        });
})();

(() => {
    const $fetch = document.getElementById("async-fetch"),
        $fragment = document.createDocumentFragment();

    async function getData() {
        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/users"),
                json = await res.json();

            if (!res.ok) throw { status: res.status, statusText: res.statusText} 

            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name}`;

                $fragment.appendChild($li);
            });

            $fetch.appendChild($fragment);
        } catch (err) {
            let message = err.statusText || "Ocurrio un error";
            $fetch.innerHTML = `Error ${err.status}: ${message}`;
        } finally {
        }
    }

    getData();
})();
