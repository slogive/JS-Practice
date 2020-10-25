document.addEventListener("DOMContentLoaded", (e) => {
    console.log("Tema");

    if (localStorage.getItem("theme") === null) {
        localStorage.setItem("theme", "light");
    }

    if (localStorage.getItem("theme") === "light") {
        ChangeColor("white");
    }

    if (localStorage.getItem("theme") === "dark") {
        ChangeColor("gray");
    }

    console.log(`${localStorage.getItem("theme")}`);
});

document.addEventListener("change", (e) => {
    if (document.getElementById("theme-select")) {
        if (e.target.value === "Dark") {
            localStorage.setItem("theme", "dark");
            ChangeColor("gray");
        }
        if (e.target.value === "Light") {
            localStorage.setItem("theme", "light");
            ChangeColor("white");
        }

        console.log(`${localStorage.getItem("theme")}`);
    }
});

const Elm = document.getElementById("theme-select");

const ChangeColor = (color) => {
    document.body.style.backgroundColor = color;
};

ChangeColor();
