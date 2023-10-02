const listeApprenants = [
    "Sophie FONFEK",
    "Guy TARE",
    "Jessica SEROLLE",
    "Beth TIOLE",
    "Maude ZARELLA",
    "Debby SCOTT",
    "Lara LEUZE",
    "Oussama LAIRBON",
    "Elie COPTAIRE",
    "Alonso BISTRAU",
    "Aude JAVELLE",
    "Gérard MENSOIF"
];

const cards = document.getElementById("card");
const boutonAEffacer = document.getElementById("ButtonToDelete");
const boutonPlacer= document.getElementById("BoutonPlacer");
const boutonInitialiser = document.getElementById("BoutonInitialiser");
const sizer = document.getElementById("sizer");
const modele = document.getElementById("modele");
const menuDeroulant = document.getElementById("numberSelect");
const selectedOptionSelected = menuDeroulant.querySelector('option[selected]');

window.addEventListener("load", () => {
    let number = parseInt(selectedOptionSelected.textContent);
    let selectedOption = menuDeroulant.options[menuDeroulant.selectedIndex];
    let taille = parseInt(selectedOption.value);
    boutonAEffacer.style.display = 'none';
    for (let i = 0; i < 12; i++) {
        let div = document.createElement("div");
        div.style.width = taille + "px";
        
        for (let j = 0; j < number; j++) {
            const index = i * number + j;
            
            if (index >= listeApprenants.length) {
                break;
            }

            let clone = document.importNode(modele.content, true);
            div.appendChild(clone);

        }

        sizer.appendChild(div);
    }
    sizer.style.width = taille + "px";    
});

menuDeroulant.addEventListener("change", () => {
    sizer.innerHTML = "";
    let selectedOption = menuDeroulant.options[menuDeroulant.selectedIndex];
    let taille = parseInt(selectedOption.value);
    let number = parseInt(selectedOption.textContent);
    
    const listeSmileys = Array.from({ length: 15 }, (_, index) => `images/smiley/smiley-${index + 1}.png`);
    const melangePersonnes = listeApprenants.sort(() => Math.random() - 0.5);
    const melangeSmileys = listeSmileys.sort(() => Math.random() - 0.5);
    
    for (let i = 0; i < 12; i++) {
        let div = document.createElement("div");
        div.style.width = taille + "px";
        
        for (let j = 0; j < number; j++) {
            const index = i * number + j;
            
            if (index >= listeApprenants.length) {
                break;
            }
            
            const [prenom, nom] = melangePersonnes[index].split(' ');
            const smiley = melangeSmileys[index];
            
            let clone = document.importNode(modele.content, true);
            let smileyField = clone.querySelector(".smiley");
            let prenomField = clone.querySelector(".prenom");
            let nomField = clone.querySelector(".nom");
            
            smileyField.style.backgroundImage = `url("${smiley}")`;
            prenomField.textContent = prenom;
            nomField.textContent = nom;
            
            div.appendChild(clone);
        }
        
        sizer.appendChild(div);
    }
    sizer.style.width = taille + "px";
});

boutonPlacer.addEventListener("click", function (event) {
    for(let i = 0; i < card.length; i++){
      card[i].classList.toggle('flip');  
    }
    boutonInitialiser.removeAttribute("disabled");      
});

boutonInitialiser.addEventListener("click", function () {
    boutonInitialiser.setAttribute("disabled", "true");
    for(let i = 0; i < card.length; i++){
        card[i].classList.toggle('flip');  
    }  
});
