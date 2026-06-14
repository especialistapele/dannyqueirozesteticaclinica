// ====================================
// SITE DANNY QUEIROZ
// SCRIPT PRINCIPAL
// ====================================

document.addEventListener("DOMContentLoaded", () => {

    // ====================================
    // SCROLL SUAVE
    // ====================================

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(e){

            const target = this.getAttribute("href");

            if(target === "#") return;

            const destino = document.querySelector(target);

            if(destino){

                e.preventDefault();

                destino.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

    // ====================================
    // FAQ EXPANSÍVEL
    // ====================================

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const titulo = item.querySelector("h3");
        const respostas = item.querySelectorAll("p");

        if(titulo && respostas.length){


            titulo.style.cursor = "pointer";

            titulo.addEventListener("click", () => {

                const aberto =
                respostas[0].style.display === "block";

                respostas.forEach(resposta => {

                    resposta.style.display =
                    aberto ? "none" : "block";

                });

            });

        }

    });

    // ====================================
    // FORMULÁRIO → WHATSAPP
    // ====================================

    const formulario =
    document.getElementById("formContato");

    if(formulario){

        formulario.addEventListener("submit", function(e){

            e.preventDefault();

            const nome =
            document.getElementById("nome")?.value || "";

            const telefone =
            document.getElementById("telefone")?.value || "";

            const objetivo =
            document.getElementById("objetivo")?.value || "";

            const unidade =
            document.getElementById("unidade")?.value || "";

            const mensagem =
            document.getElementById("mensagem")?.value || "";

            const texto =

`Olá!

Preenchi o formulário do site.

Nome: ${nome}

WhatsApp: ${telefone}

Objetivo:
${objetivo}

Unidade:
${unidade}

Mensagem:
${mensagem}

Gostaria de saber mais informações sobre o atendimento.`;

            const numero = "5521992197518";

            const url =
            `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

            window.open(url, "_blank");

        });

    }

    // ====================================
    // BUSCA INTERNA DO BLOG
    // ====================================

    const campoBusca =
    document.getElementById("searchInput");

    if(campoBusca){

        campoBusca.addEventListener("keyup", function(){

            const termo =
            this.value.toLowerCase();

            const artigos =
            document.querySelectorAll(".blog-card");

            artigos.forEach(card => {

                const texto =
                card.innerText.toLowerCase();

                card.style.display =
                texto.includes(termo)
                ? ""
                : "none";

            });

        });

    }

    // ====================================
    // MENU MOBILE
    // ====================================

    const menuToggle =
    document.querySelector(".menu-toggle");

    const nav =
    document.querySelector("nav");

    if(menuToggle && nav){

        menuToggle.addEventListener("click", () => {

            nav.classList.toggle("active");

        });

    }

});

// ====================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ====================================

if("IntersectionObserver" in window){

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },{
        threshold:0.1
    });

    document.querySelectorAll(
        ".card, .faq-item, .sobre, .fitoterapia, .consultoria-box"
    ).forEach(el => {

        observer.observe(el);

    });

}