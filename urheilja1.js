class Henkilo {
  constructor(etunimi, sukunimi, kutsumanimi, syntymavuosi) {
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
  }
}

class Urheilija extends Henkilo {
  constructor(
    etunimi,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    linkkiKuvaan,
    omapaino,
    laji,
    saavutukset
  ) {
    super(etunimi, sukunimi, kutsumanimi, syntymavuosi);
    this.linkkiKuvaan = linkkiKuvaan;
    this.omapaino = omapaino;
    this.laji = laji;
    this.saavutukset = saavutukset;
  }

  get linkkiKuvaan() {
    return this._linkkiKuvaan;
  }

  set linkkiKuvaan(value) {
    this._linkkiKuvaan = value;
  }

  get omapaino() {
    return this._omapaino;
  }

  set omapaino(value) {
    this._omapaino = value;
  }

  get laji() {
    return this._laji;
  }

  set laji(value) {
    this._laji = value;
  }

  get saavutukset() {
    return this._saavutukset;
  }

  set saavutukset(value) {
    this._saavutukset = value;
  }
}

const urheilija1 = new Urheilija(
  "Teemu",
  "Selanne",
  "Teemu",
  1970,
  "linkki_kuvaan1.jpg",
  90,
  "Jääkiekko",
  ["Stanley Cup 2007"]
);
const urheilija2 = new Urheilija(
  "Paavo",
  "Nurmi",
  "Paavo",
  1897,
  "linkki_kuvaan2.jpg",
  70,
  "Kestävyysjuoksu",
  ["Olympiakultaa 1924"]
);

console.log(urheilija1);
console.log(urheilija2);
