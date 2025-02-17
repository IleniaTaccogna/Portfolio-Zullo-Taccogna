interface Progetto{
    id:number;
    titolo:string;
    descrizione:string;
    link:string;
    immagine:string;
}

const progetti:Progetto[]=[
    {id:1,titolo:"Negozio Online",descrizione:"La console gestisce prodotti, clienti e ordini in formato JSON. Permette di aggiungere,modificare e rimuovere prodotti, organizzandoli per categoria e con sconti. Gestisce clienti tramite nome,email e codice fiscale/partita IVA, e ordini con calcolo del totale e stato.",link:"https://github.com/fzullo/NegozioOnline.git",immagine:"assets/negozioOnline.jpg"},
    {id:2,titolo:"Gestione Progetti Aziendali",descrizione:"Il sistema gestisce progetti e task assegnati a team, con ID univoci, stato, priorità e responsabile. Permette di aggiungere progetti, evitare duplicati nei task, modificare lo stato dei task,eliminare progetti e visualizzare progetti e task ad alta priorità per team specifici.",link:"https://github.com/pacedom9/gestione-progetti-aziendali",immagine:"assets/progettiAziendali.jpg"},
    {id:3,titolo:"Gestione Atleti e Federazioni",descrizione:"Il sistema gestisce atleti e federazioni sportive, con vincoli su iscrizioni e quoteannuali. Solo professionisti e semi-professionisti possono iscriversi, e ogni federazione può avere al massimo tre atleti.",link:"https://github.com/IleniaTaccogna/Iscrizione-Atleti-Federazioni.git",immagine:"assets/atleti.jpg"},

];  

function inserisciProgetti():void{
    const sezioneProgetti= document.getElementById("progetti");

    if (sezioneProgetti) {
        progetti.forEach(progetto => {
          const div = document.createElement("div");
          div.className = "progetto";
    
          div.innerHTML = `
             <div class="card">
            <img class="card-img-top" src=${progetto.immagine} alt="Negozio Online">
            <div class="card-body">
            <h5 class="card-title">${progetto.titolo}</h5>
            <p class="card-text">${progetto.descrizione}</p>
             <a href= ${progetto.link} class="btn">Link al progetto</a>
            </div>
          `;
          sezioneProgetti.appendChild(div);
        });

    }
}


document.addEventListener("DOMContentLoaded",inserisciProgetti);
console.log("asdljasndlknasdlkjnasdlsand");

