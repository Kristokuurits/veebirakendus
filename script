const pageTitle = document.title;

if (pageTitle === "Veebileht") {
// Objektide massiiv
let objektideAndmed = [];


// DOM elementide valimine
const objektiVorm = document.getElementById('objekti-vorm');
const nimiSisend = document.getElementById('nimi');
const hindSisend = document.getElementById('hind');
const kogusSisend = document.getElementById('kogus');
const objektideLoend = document.getElementById('objektide-loend');
const otsinguVorm = document.getElementById('otsingu-vorm');
const otsinguSisend = document.getElementById('otsingu-sisend');


// Funktsioon uue objekti lisamiseks
function lisaObjekt(e) {
  e.preventDefault();


  // Uue objekti loomine
  const uusObjekt = {
    nimi: nimiSisend.value,
    hind: hindSisend.value,
    kogus: parseInt(kogusSisend.value)
  };


  // Lisatakse uus objekt massiivi
  objektideAndmed.push(uusObjekt);


  // Uue objekti kuvamine loendis
  kuvaObjekt(uusObjekt);


  // Vormi väljade tühjendamine
  nimiSisend.value = '';
  hindSisend.value = '';
  kogusSisend.value = '';
}


// Funktsioon objekti kuvamiseks loendis
function kuvaObjekt(objekt) {
  const rida = document.createElement('tr');


  // Loob rida sisu
  rida.innerHTML = `
    <td>${objekt.nimi}</td>
    <td>${objekt.hind}</td>
    <td>${objekt.kogus}</td>
    <td>
      <button class="btn btn-sm btn-primary" onclick="muudaObjekt(${objektideAndmed.indexOf(objekt)})">Muuda</button>
      <button class="btn btn-sm btn-danger" onclick="eemaldaObjekt(${objektideAndmed.indexOf(objekt)})">Eemalda</button>
    </td>
  `;


  // Lisab rea objektide loendisse
  objektideLoend.appendChild(rida);
}


// Funktsioon objekti muutmiseks
function muudaObjekt(indeks) {
  // Küsib kasutajalt uued väärtused
  const uusNimi = prompt('Sisesta uus nimi:');
  const uusHind = prompt('Sisesta uus hind:');
  const uusKogus = parseInt(prompt('Sisesta uus kogus:'));


  // Muudab objekti väärtused
  objektideAndmed[indeks].nimi = uusNimi;
  objektideAndmed[indeks].hind = uusHind;
  objektideAndmed[indeks].kogus = uusKogus;


  // Värskendab objekti kuvamist loendis
  objektideLoend.innerHTML = '';
  objektideAndmed.forEach(kuvaObjekt);
}


// Funktsioon objekti eemaldamiseks
function eemaldaObjekt(indeks) {
  // Eemaldab objekti massiivist
  objektideAndmed.splice(indeks, 1);


  // Värskendab objekti kuvamist loendis
  objektideLoend.innerHTML = '';
  objektideAndmed.forEach(kuvaObjekt);
}


// Funktsioon otsingu tegemiseks
function otsiObjekte(e) {
  e.preventDefault();


  const otsingusõna = otsinguSisend.value.toLowerCase();


  // Kustutab otsingu välja
  otsinguSisend.value = '';


  // Otsib objekte ja kuvab ainult sobivad
  objektideLoend.innerHTML = '';
  objektideAndmed.forEach(function (objekt) {
    if (objekt.nimi.toLowerCase().includes(otsingusõna)) {
      kuvaObjekt(objekt);
    }
  });
}
// Sündmusekuulajad
objektiVorm.addEventListener('submit', lisaObjekt);
otsinguVorm.addEventListener('submit', otsiObjekte);
}
// esimese lehe kood l]ppeb
// kood ostukorvi jaoks
else if (pageTitle === "Tooted") {
  var ostukorvi = [];

  // Funktsioon, mis lisab toote ostukorvi
  function lisaToodeKorvi() {
      var tooteNimi = document.getElementById("toote-nimi").value;
      var tooteHind = parseFloat(document.getElementById("toote-hind").value);
      var tooteKogus = parseInt(document.getElementById("toote-kogus").value);
  
      if (tooteNimi && !isNaN(tooteHind) && !isNaN(tooteKogus) && tooteHind > 0 && tooteKogus > 0) {
          var toode = {
              nimi: tooteNimi,
              hind: tooteHind,
              kogus: tooteKogus
          };
  
          ostukorvi.push(toode);
  
          // Uuenda ostukorvi summat
          uuendaOstukorviSumma();
  
          // Tühjenda vormi väljad
          document.getElementById("toote-nimi").value = "";
          document.getElementById("toote-hind").value = "";
          document.getElementById("toote-kogus").value = "";
      } else {
          alert("Palun sisestage kehtiv toote nimi, hind ja kogus.");
      }
  }
  
  // Funktsioon ostukorvi summa uuendamiseks
  function uuendaOstukorviSumma() {
      var ostukorviSumma = 0;
      for (var i = 0; i < ostukorvi.length; i++) {
          ostukorviSumma += ostukorvi[i].hind * ostukorvi[i].kogus;
      }
      var ostukorviSummaElement = document.getElementById("summa-väärtus");
      ostukorviSummaElement.textContent = ostukorviSumma.toFixed(2); // Kohandame kuvatava summa kahe komakohaga
  }
  
}
//kood nimede jaoks
else if (pageTitle === "Nimed") {
  var nimedeMassiiv = [];

  function lisaNimi() {
      var nimi = document.getElementById("nimi").value;
      if (nimi.trim() === "") {
          alert("Nimi ei saa olla tühi!");
          return;
      }
  
      // Jagame nime ees- ja perenimeks
      var nimed = nimi.split(" ");
      var eesnimi = nimed[0].charAt(0).toUpperCase() + nimed[0].slice(1).toLowerCase();
      var perenimi = nimed[1].charAt(0).toUpperCase() + nimed[1].slice(1).toLowerCase();
  
      // Loome emaili aadressi nii, et see oleks "ees.perenim@tthk.ee"
      var email = eesnimi.toLowerCase() + "." + perenimi.toLowerCase() + "@tthk.ee";
  
      var nimeObjekt = {
          nimi: eesnimi + " " + perenimi,
          email: email
      };
  
      nimedeMassiiv.push(nimeObjekt);
  
      // Kuvame nimede listi
      kuvaNimed();
  
      // Tühjendame sisestusvälja
      document.getElementById("nimi").value = "";
  }
  
  function kuvaNimed() {
      var nimedeList = document.getElementById("nimede-list");
      nimedeList.innerHTML = "";
  
      for (var i = 0; i < nimedeMassiiv.length; i++) {
          var li = document.createElement("li");
          li.textContent = nimedeMassiiv[i].nimi + " (" + nimedeMassiiv[i].email + ")";
          nimedeList.appendChild(li);
      }
  }
  
  function otsiNime() {
      var otsitavNimi = document.getElementById("otsi-nimi").value.toLowerCase();
      var leitudNimed = nimedeMassiiv.filter(function (nimiObjekt) {
          return nimiObjekt.nimi.toLowerCase().includes(otsitavNimi);
      });
  
      var tulemusedList = document.getElementById("otsi-tulemused");
      tulemusedList.innerHTML = "";
  
      for (var i = 0; i < leitudNimed.length; i++) {
          var li = document.createElement("li");
          li.textContent = leitudNimed[i].nimi + " (" + leitudNimed[i].email + ")";
          tulemusedList.appendChild(li);
      }
  }
  
}
//kood sünjavanuse jaoks
else if (pageTitle === "Sünjavanus") {

// Massiiv inimeste lisamiseks
const lisatudInimesed = [];

function lisaIsik() {
    var nimiInput = document.getElementById("nimi");
    var isikukoodInput = document.getElementById("isikukood");
    var nimi = nimiInput.value.trim();
    var isikukood = isikukoodInput.value.trim();

    if (nimi !== "" && isikukood !== "") {
        var isik = {
            nimi: nimi,
            isikukood: isikukood
        };
        lisatudInimesed.push(isik);
        kuvaIsikudJaVanus();
        
        // Tühjendame väljad sisestuse jaoks
        nimiInput.value = "";
        isikukoodInput.value = "";
    }
}

function kuvaIsikudJaVanus() {
    var isikudList = document.getElementById("isikud-list");
    isikudList.innerHTML = ""; // Tühjendame nimekirja

    for (var i = 0; i < lisatudInimesed.length; i++) {
        var isik = lisatudInimesed[i];
        var listItem = document.createElement("li");
        var vanusJaSunniaeg = leiaVanusJaSunniaegIsikukoodist(isik.isikukood);
        if (vanusJaSunniaeg) {
            listItem.textContent = "Nimi: " + isik.nimi + ", Isikukood: " + isik.isikukood + ", Sünniaeg: " + vanusJaSunniaeg.sunniaeg + ", Vanus: " + vanusJaSunniaeg.vanus + " aastat";
        } else {
            listItem.textContent = "Nimi: " + isik.nimi + ", Isikukood: " + isik.isikukood + " (kehtetu isikukood)";
        }
        isikudList.appendChild(listItem);
    }
}

function leiaVanusJaSunniaegIsikukoodist(isikukood) {
    // Eeldame, et isikukoodis on sünnikuupäeva esimesed 10 numbrit
    var paev = parseInt(isikukood.substring(5, 7));
    var kuu = parseInt(isikukood.substring(3, 5));
    var aasta = parseInt(isikukood.substring(1, 3));

    // Kontrollime, kas aasta algab 1 või 2-ga (sõltuvalt isikukoodi vormist)
    if (aasta >= 0 && aasta <= 99) {
        if (aasta >= 0 && aasta <= 21) {
            aasta = 2000 + aasta;
        } else {
            aasta = 1900 + aasta;
        }
    } else {
        return null;
    }

    // Kontrollime kuupäeva ja kuu kehtivust
    if (kuu >= 1 && kuu <= 12 && paev >= 1 && paev <= 31) {
        var sunniaeg = aasta + "-" + (kuu < 10 ? "0" + kuu : kuu) + "-" + (paev < 10 ? "0" + paev : paev);
        var tananeAasta = new Date().getFullYear();
        var vanus = tananeAasta - aasta;
        return { sunniaeg: sunniaeg, vanus: vanus };
    } else {
        return null;
    }
}
}



else if (pageTitle === "Kaugushüpe") {
  // Massiiv nimede hoidmiseks
var nimed = [];

// Funktsioon, mis lisab nime massiivi
function lisaNimi(nimi) {
  // Kontrolli, kas nimi on juba massiivis
  if (!nimed.includes(nimi)) {
    nimed.push(nimi);
    uuendaNimed();
  }
}

// Funktsioon nimede kuvamiseks
function uuendaNimed() {
  var nimedList = document.getElementById("nimed-list");
  nimedList.innerHTML = ""; // Tühjenda nimede loend

  for (var i = 0; i < nimed.length; i++) {
    var nimi = nimed[i];
    var perenimi = nimi.toLowerCase().split(" ")[1];
    var email = perenimi + "@tthk.ee";
    var listItem = document.createElement("li");
    listItem.textContent = nimi + " (" + email + ")";
    nimedList.appendChild(listItem);
  }
}

const opilased = [
  { nimi: "Anna", tulemused: [4.5, 4.8, 4.6] },
  { nimi: "Mart", tulemused: [5.2, 5.1, 5.4] },
  { nimi: "Kati", tulemused: [4.9, 5.0, 4.7] },
  { nimi: "Jaan", tulemused: [4.3, 4.6, 4.4] },
  { nimi: "Liis", tulemused: [5.0, 5.2, 5.1] },
  { nimi: "Peeter", tulemused: [5.5, 5.3, 5.4] },
  { nimi: "Eva", tulemused: [4.8, 4.9, 4.7] },
  { nimi: "Marten", tulemused: [4.7, 4.6, 4.8] },
  { nimi: "Kairi", tulemused: [5.1, 5.3, 5.0] },
  { nimi: "Rasmus", tulemused: [4.4, 4.5, 4.3] },
];

// Funktsioon, mis arvutab keskmise tulemuse ja ümardab selle 2 komakohta
function arvutaKeskmine(tulemused) {
  const keskmine = tulemused.reduce((sum, tulemus) => sum + tulemus, 0) / tulemused.length;
  return keskmine.toFixed(2);
}

// Funktsioon, mis arvutab keskmise tulemuse ja ümardab selle 2 komakohta
function arvutaKeskmine(tulemused) {
  const keskmine = tulemused.reduce((sum, tulemus) => sum + tulemus, 0) / tulemused.length;
  return keskmine.toFixed(2);
}

// Funktsioon, mis uuendab tabelit õpilaste tulemustega
function uuendaTabel() {
  const tabel = document.querySelector('table');
  tabel.innerHTML = `
      <tr>
          <th>Nimi</th>
          <th>Tulemused</th>
          <th>Parem tulemus</th>
          <th>Keskmine tulemus</th>
      </tr>
  `;
  opilased.forEach((opilane) => {
      const paremTulemus = Math.max(...opilane.tulemused);
      const keskmineTulemus = arvutaKeskmine(opilane.tulemused);
      tabel.innerHTML += `
          <tr>
              <td>${opilane.nimi}</td>
              <td>${opilane.tulemused.join(', ')}</td>
              <td>${paremTulemus}</td>
              <td>${keskmineTulemus}</td>
          </tr>
      `;
  });
}

uuendaTabel(); // Uuendame tabelit algse andmetega

const lisamisVorm = document.getElementById('lisatulemus');
lisamisVorm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nimi = document.getElementById('nimi').value;
  const tulemus = parseFloat(document.getElementById('tulemus').value);
  
  if (!isNaN(tulemus)) {
      // Leiame vastava opilase
      const opilane = opilased.find((op) => op.nimi === nimi);

      if (opilane) {
          opilane.tulemused.push(tulemus); // Lisame uue tulemuse
          uuendaTabel(); // Uuendame tabelit uue tulemusega
      } else {
          alert('Sellise nimega õpilast ei leitud.');
      }
  } else {
      alert('Palun sisestage korrektne tulemus.');
  }
});

}