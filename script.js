const button = document.getElementById('burgerbtn');
const navUl = document.getElementById('nav-ul');
let menuIcon = document.getElementById('menuicon');

button.addEventListener ('click', function(event) {
    navUl.classList.toggle('show');
   //menuIcon.className = "fas fa-times";

        if (menuIcon.className === "fas fa-bars") {
            menuIcon.className = "fas fa-times";
        }
        else {
            menuIcon.className = "fas fa-bars";
        }
}

);

ScrollReveal().reveal('#titrearticleaccueil', { duration: 2000 });
ScrollReveal().reveal('.blockarticle', { duration: 2000 });




// page Contact

const nom = document.getElementById("Nom");
const email = document.getElementById("Email");
const bouton = document.getElementById("btn-envoi");

bouton.addEventListener('click', function(){
    alert(`Merci pour votre Message ${nom.value} ! Nous vous répondrons sur votre messagerie ${email.value} . `)
})
