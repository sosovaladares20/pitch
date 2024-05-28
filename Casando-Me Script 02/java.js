const expand_btn = document.querySelector(".expand-btn");

let activeIndex;

expand_btn.addEventListener("click", () =>  {
    document.body.classList.toggle("collapsed");
});

const current = window.location.href;

const allLinks = document.querySelector(".sidebar-links a");

allLinks.forEach((elem) => {
    elem.addEventListener("click", function () {
        const hrefLinkClick = elem.href;

        allLinks.forEach((link) => {
            if (link.href == hrefLinkClick) {
                link.classList.add("active");

            } else {
                link.classList.remove("active");
            }
        });
    });
});

function redirecioneSemHistorico(){
    window.location.replace("Cadastra.html");
}

function redirecioneEntrar(){
    window.location.replace("Usuario.html");
}

function redirecioneVoltar(){
    window.location.replace("index.html");
}
