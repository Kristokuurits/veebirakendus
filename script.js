const pageTitle = document.title;

if (pageTitle === "veebileht") {

let objektideAndmed = [];



const objektiVorm = document.getElementById('objekti-vorm');
const nimiSisend = document.getElementById('nimi');
const hindSisend = document.getElementById('hind');
const kogusSisend = document.getElementById('kogus');
const objektideLoend = document.getElementById('objektide-loend');
const otsinguVorm = document.getElementById('otsingu-vorm');
const otsinguSisend = document.getElementById('otsingu-sisend');



function lisaObjekt(e) {
  e.preventDefault();



  const uusObjekt = {
    nimi: nimiSisend.value,
    hind: hindSisend.value,
    kogus: parseInt(kogusSisend.value)
  };



  objektideAndmed.push(uusobjekt);



  kuvaObjekt(uusobjekt);



  nimiSisend.value = '';
  hindSisend.value = '';
  kogusSisend.value = '';
}



function kuvaObjekt(objekt) {
  const rida = document.createElement('tr');



  rida.innerHTML = `
    <td>${objekt.nimi}</td>
    <td>${objekt.hind}</td>
    <td>${objekt.kogus}</td>
    <td>
      <button class="btn btn-sm btn-primary" onclick="muudaObjekt(${objektideAndmed.indexOf(objekt)})">Muuda</button>
      <button class="btn btn-sm btn-danger" onclick="eemaldaObjekt(${objektideAndmed.indexOf(objekt)})">Eemalda</button>
    </td>
  `;



  objektideLoend.appendChild(rida);
}



function muudaObjekt(indeks) {

  const uusNimi = prompt('Sisesta uus nimi:');
  const uusHind = prompt('Sisesta uus hind:');
  const uusKogus = parseInt(prompt('Sisesta uus kogus:'));



  objektideAndmed[indeks].nimi = uusNimi;
  objektideAndmed[indeks].hind = uusHind;
  objektideAndmed[indeks].kogus = uusKogus;



  objektideLoend.innerHTML = '';
  objektideAndmed.forEach(kuvaObjekt);
}



function eemaldaObjekt(indeks) {

  objektideAndmed.splice(indeks, 1);



  objektideLoend.innerHTML = '';
  objektideAndmed.forEach(kuvaObjekt);
}



function otsiObjekte(e) {
  e.preventDefault();


  const otsingusõna = otsinguSisend.value.toLowerCase();



  otsinguSisend.value = '';



  objektideLoend.innerHTML = '';
  objektideAndmed.forEach(function (objekt) {
    if (objekt.nimi.toLowerCase().includes(otsingusõna)) {
      kuvaObjekt(objekt);
    }
  });
}

objektiVorm.addEventListener('submit', lisaObjekt);
otsinguVorm.addEventListener('submit', otsiObjekte);
}

else if (pageTitle === "Tooted") {
  var ostukorvi = [];


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
  

          uuendaOstukorviSumma();
  

          document.getElementById("toote-nimi").value = "";
          document.getElementById("toote-hind").value = "";
          document.getElementById("toote-kogus").value = "";
      } else {
          alert("Palun sisestage kehtiv toote nimi, hind ja kogus.");
      }
  }
  

  function uuendaOstukorviSumma() {
      var ostukorviSumma = 0;
      for (var i = 0; i < ostukorvi.length; i++) {
          ostukorviSumma += ostukorvi[i].hind * ostukorvi[i].kogus;
      }
      var ostukorviSummaElement = document.getElementById("summa-väärtus");
      ostukorviSummaElement.textContent = ostukorviSumma.toFixed(2);
  }
  
}

else if (pageTitle === "Nimed") {
  var nimedeMassiiv = [];

  function lisaNimi() {
      var nimi = document.getElementById("nimi").value;
      if (nimi.trim() === "") {
          alert("Nimi ei saa olla tühi!");
          return;
      }
  

      var nimed = nimi.split(" ");
      var eesnimi = nimed[0].charAt(0).toUpperCase() + nimed[0].slice(1).toLowerCase();
      var perenimi = nimed[1].charAt(0).toUpperCase() + nimed[1].slice(1).toLowerCase();
  

      var email = eesnimi.toLowerCase() + "." + perenimi.toLowerCase() + "@tthk.ee";
  
      var nimeObjekt = {
          nimi: eesnimi + " " + perenimi,
          email: email
      };
  
      nimedeMassiiv.push(nimeObjekt);
  

      kuvaNimed();
  

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

else if (pageTitle === "Sünjavanus") {


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
        

        nimiInput.value = "";
        isikukoodInput.value = "";
    }
}

function kuvaIsikudJaVanus() {
    var isikudList = document.getElementById("isikud-list");
    isikudList.innerHTML = "";

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

    var paev = parseInt(isikukood.substring(5, 7));
    var kuu = parseInt(isikukood.substring(3, 5));
    var aasta = parseInt(isikukood.substring(1, 3));


    if (aasta >= 0 && aasta <= 99) {
        if (aasta >= 0 && aasta <= 21) {
            aasta = 2000 + aasta;
        } else {
            aasta = 1900 + aasta;
        }
    } else {
        return null;
    }


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

var nimed = [];


function lisaNimi(nimi) {

  if (!nimed.includes(nimi)) {
    nimed.push(nimi);
    uuendaNimed();
  }
}


function uuendaNimed() {
  var nimedList = document.getElementById("nimed-list");
  nimedList.innerHTML = "";

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


function arvutaKeskmine(tulemused) {
  const keskmine = tulemused.reduce((sum, tulemus) => sum + tulemus, 0) / tulemused.length;
  return keskmine.toFixed(2);
}


function arvutaKeskmine(tulemused) {
  const keskmine = tulemused.reduce((sum, tulemus) => sum + tulemus, 0) / tulemused.length;
  return keskmine.toFixed(2);
}


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

uuendaTabel();

const lisamisVorm = document.getElementById('lisatulemus');
lisamisVorm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nimi = document.getElementById('nimi').value;
  const tulemus = parseFloat(document.getElementById('tulemus').value);
  
  if (!isNaN(tulemus)) {

      const opilane = opilased.find((op) => op.nimi === nimi);

      if (opilane) {
          opilane.tulemused.push(tulemus);
          uuendaTabel();
      } else {
          alert('Sellise nimega õpilast ei leitud.');
      }
  } else {
      alert('Palun sisestage korrektne tulemus.');
  }
});

}
