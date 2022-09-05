const formInput = document.querySelector("form input");
const btn = document.querySelector(".btn");
const error = document.querySelector(".error");
const ok = document.querySelector(".ok");
const errorImage = document.querySelector(".error-image");

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (formInput.type === "email") {
        const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (er.test(formInput.value)) {
            formInput.style.outline = "1.5px solid hsl(0, 93%, 68%)";
            error.style.display = "none";
            errorImage.style.display = "none";
            ok.style.display = "block";
            formInput.value = "";
        } else {
            formInput.style.border = "1px solid hsl(0, 36%, 70%)";
            error.style.display = "block";
            error.style.display = "block";
            errorImage.style.display = "block";
            ok.style.display = "none";
        }
    }
});


