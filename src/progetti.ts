class Progetti{
    constructor(public id:number,public titolo:string,public descrizione:string, public link:string,public immagine:string){}
}
const progetti: Progetti[] = [
    {
        id: 1,
        titolo: "Negozio Online",
        descrizione:
            "La console gestisce prodotti, clienti e ordini in formato JSON. Permette di aggiungere, modificare e rimuovere prodotti, organizzandoli per categoria e con sconti. Gestisce clienti tramite nome, email e codice fiscale/partita IVA, e ordini con calcolo del totale e stato.",
        link: "https://github.com/fzullo/NegozioOnline.git",
        immagine: "assets/negozioOnline.jpg",
    },
    {
        id: 2,
        titolo: "Gestione Progetti Aziendali",
        descrizione:
            "Il sistema gestisce progetti e task assegnati a team, con ID univoci, stato, priorità e responsabile. Permette di aggiungere progetti, evitare duplicati nei task, modificare lo stato dei task, eliminare progetti e visualizzare progetti e task ad alta priorità per team specifici.",
        link: "https://github.com/pacedom9/gestione-progetti-aziendali",
        immagine: "assets/progettiAziendali.jpg",
    },
    {
        id: 3,
        titolo: "Gestione Atleti e Federazioni",
        descrizione:
            "Il sistema gestisce atleti e federazioni sportive, con vincoli su iscrizioni e quote annuali. Solo professionisti e semi-professionisti possono iscriversi, e ogni federazione può avere al massimo tre atleti.",
        link: "https://github.com/IleniaTaccogna/Iscrizione-Atleti-Federazioni.git",
        immagine: "assets/atleti.jpg",
    },
]; 

function inserisciProgetti():void{
    const sezioneProgetti= document.getElementById("progetti");

    if (sezioneProgetti) {
        progetti.forEach(progetto => {
          const div=document.createElement("div")
          div.classList.add("progetto");

          const card=document.createElement("div")
          card.classList.add("card")

          const img=document.createElement("img")
          img.classList.add("card-img-top")
          img.src=progetto.immagine;

          const cardBody=document.createElement("div")
          cardBody.classList.add("card-body")

          const title = document.createElement("h5");
          title.classList.add("card-title");
          title.textContent = progetto.titolo;

          const description = document.createElement("p");
          description.classList.add("card-text");
          description.textContent = progetto.descrizione;

          const link = document.createElement("a");
          link.classList.add("btn");
          link.href = progetto.link;
          link.textContent = "Link al progetto";
        link.setAttribute("target","_blank");


          cardBody.appendChild(title);
          cardBody.appendChild(description);
          cardBody.appendChild(link);
          card.appendChild(img);
          card.appendChild(cardBody);
          div.appendChild(card);
          sezioneProgetti.appendChild(div);
        });
    }
}

document.addEventListener("DOMContentLoaded", inserisciProgetti)

