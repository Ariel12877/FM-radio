/* Radios argentinas ” streams pÃºblicos (lista ampliada, noviembre 2026)
   Solo streams https directos (sin .m3u8 / HLS), para que funcionen con <audio>
   en Chrome, Edge y Firefox, y tambiÃ©n si la pÃ¡gina estÃ¡ en https.
   Las marcadas con âš  estÃ¡n armadas por analogÃ­a y hay que probarlas. */
const STATIONS = [
  {
    id: "radiotop",
    name: "Radio Top",
    freq: "FM 105.9",
    url: "https://live-ar1.cdnrad.com/hls/radio-2075/live.m3u8"
  },
   {
    id: "Pobre Johnny",
    name: "Radio Pobre Johnny",
    freq: "FM 88.9",
    url: "https://stream4.suenas.net/pobrejohnny"
  },
  /* ===== Chaco (agregadas) ===== */
  {
    id: "El mañanero",
    name: "El mañanero V.Beta",
    freq: "FM 97.5",
    // Stream detectado en la captura. Es HTTP; requiere proxy HTTPS para GitHub Pages.
    url: "https://streaming.radiosenlinea.com.ar/9464/stream"
  },
   {
    id: "FM libertad Machagai",
    name: "FM Libertad Machagai",
    freq: "FM 99.5",
    // Stream detectado en la captura. Es HTTP; requiere proxy HTTPS para GitHub Pages.
    url: "http://streaming01.shockmedia.com.ar/8428/stream"
  },
   {
    id: "VIP FM",
    name: "Vip Radio Machagai",
    freq: "FM 104.9",
    url: "https://s2.netradiofm.com:5416/stream/?type=http&nocache=1"
  },
  {
    id: "Master FM",
    name: "Master FM Machagai",
    freq: "102.5",
    url: "https://ssl2.veemesoft.com.ar/a5ded807684d25c964b2"
  },
  {
    id: "laradio1047",
    name: "La Radio 104.7",
    freq: "FM 104.7",
    url: "https://server.laradio.online/proxy/laradio1047?mp=/stream"
  },
  {
    id: "facundoquiroga",
    name: "Facundo Quiroga",
    freq: "FM 95.9",
    url: "https://01.solumedia.com.ar:9038/stream"
  },
  {
    id: "radiofan",
    name: "Radio Fan",
    freq: "FM 96.9",
    url: "https://streaming5.locucionar.com/proxy/radiofan969?mp=/stream"
  },
  {
   id: "WALTER FM",
    name: "Radio WALTER 80/90",
    freq: "Online",
    url: "https://stream.zeno.fm/qoxmfycvaftvv"
  },
  {
    id: "Ñande Reko Radio",
    name: "Ñande Reko Radio",
    freq: "Online",
    url: "https://devnec.com:8001/radio62"
  },
   {
   id: "Polca Paraguaya",
    name: "Polca Paraguaya",
    freq: "Online",
    url: "https://stream.zeno.fm/tvsx850x1f8uv"
  },
  {
    id: "Retro FM",
    name: "Retro FM",
    freq: "Online",
    url: "https://argentina.shockmedia.com.ar:8018/stream"
  }, 
{
    id: "Radio Mocovl AM 800",
    name: "Radio Mocovl AM 800",
    freq: "AM 800",
    url: "https://live-ar1.cdnrad.com/hls/radio-1930/live.m3u8"
  },
  {
    id: "Futuro",
    name: "Radio Futuro",
    freq: "FM 99.9",
    url: "https://edge03.radiohdvivo.com/futuro989"
  },
  {
    id: "Radio Con Vos",
    name: "Radio Con Vos",
    freq: "FM 89.9",
    url: "https://server1.stweb.tv/rcvos/live/playlist.m3u8"
  },
  {
    id: "lra26",
    name: "Nacional Resistencia",
    freq: "AM 620",
    url: "https://sa.mp3.icecast.magma.edge-access.net/sc_rad26"
  },
  {
    id: "fmgualamba",
    name: "FM Gualamba",
    freq: "FM 93.7",
    url: "https://ssl.radiosnethosting.com/index.php?port=9072"
  },
  /* ===== Tus radios de siempre (sin tocar) ===== */
  {
    id: "nacional",
    name: "Nacional",
    freq: "AM 870",
    url: "https://sa.mp3.icecast.magma.edge-access.net/sc_rad1"
  },
   {
    id: "Lentos de Todos Los Tiempos",
    name: "Lentos de Todos Los Tiempos",
    freq: "Online",
    url: "https://s3.conectarmedia.com:8016/stream"
  },
  {
    id: "FM Milenium ",
    name: "FM Milenium ",
    freq: "106.7",
    url: "https://sonicpanel.hostradios.com/8002/stream"
  },
  {
    id: "Vale 97.5",
    name: "Vale 97.5",
    freq: "FM 95.5",
    url: "https://vale.stweb.tv/vale/live/playlist.m3u8"
  },
  {
    id: "mitre",
    name: "Mitre",
    freq: "AM 790",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/AM790_56AAC.aac"
  },
  {
    id: "rockpop",
    name: "Rock & Pop",
    freq: "FM 95.9",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/ROCKANDPOPAAC.aac"
  },
  {
    id: "aspen",
    name: "Aspen",
    freq: "FM 102.3",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/ASPEN.mp3"
  },
  {
    id: "metro",
    name: "Metro",
    freq: "FM 95.1",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/METRO.mp3"
  },
  {
    id: "lared",
    name: "La Red",
    freq: "AM 910",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/LA_RED_AM910AAC.aac"
  },
  {
    id: "urbana",
    name: "Urbana Play",
    freq: "FM 104.3",
    url: "https://cdn.instream.audio:9660/stream"
  },
  {
    id: "am750",
    name: "AM 750",
    freq: "AM 750",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/AM750AAC.aac"
  },

  /* ===== Nuevas ===== */
  {
    id: "doradofm",
    name: "Dorado FM",
    freq: "FM 98.3",
    url: "https://sslstream.online:7269/stream"
  },
   {
    id: "Radio Chamame",
    name: "Radio Chamame",
    freq: "Online",
    url: "https://stream.zenolive.com/84y7b87p4gruv"
  },
  {
    id: "Pasionfm",
    name: "Pasion Fm",
    freq: "FM 98.7",
    url: "https://live-ar1.cdnrad.com/hls/radio-2009/live.m3u8"
  },
   {
    id: "Esto es KchaK",
    name: "Esto es KchaK",
    freq: "Online",
    url: "https://stream.zeno.fm/kd0p50swchruv"
  },
   {
    id: "Radio Welo el 5to Bronco",
    name: "Radio Welo el 5to Bronco",
    freq: "Online",
    url: "https://server01.heplayer.com/8052/;"
  },
  {
    id: "Las Lomitas",
    name: "Nacional Las Lomitas Formosa",
    freq: "AM 1270",
    url: "https://sa.mp3.icecast.magma.edge-access.net/sc_rad20"
  },
    {
    id: "Sentir FM",
    name: "Sentir FM",
    freq: "FM 98.3",
    url: "https://stream.zeno.fm/uwqe3chde78uv"
  },
   {
    id: "Cadena Heat",
    name: "Heat FM",
    freq: "FM 91.9",
    url: "https://24403.live.streamtheworld.com/CADENAHEAT_SC"
  },

  /* ===== AM de Buenos Aires ===== */
  {
    id: "madre",
    name: "Radio Madre",
    freq: "AM 530",
    url: "https://cdn.instream.audio:9288/stream" // âš  la lista original estaba en http; la pasÃ© a https
  },
  {
    id: "radioargentina",
    name: "Radio Argentina",
    freq: "AM 570",
    url: "https://server.laradio.online:15224/live.mp3"
  },
  {
    id: "continental",
    name: "Continental",
    freq: "AM 590",
    url: "https://edge03.radiohdvivo.com/continental"
    // alternativa si falla: https://edge01.radiohdvivo.com/continental
  },
  {
    id: "rivadavia",
    name: "Rivadavia",
    freq: "AM 630",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/RIVADAVIAAAC.aac"
  },
  {
    id: "cooperativa",
    name: "Cooperativa",
    freq: "AM 770",
    url: "https://cdn.instream.audio:9582/stream"
  },
  {
    id: "zonica",
    name: "Radio Zonica",
    freq: "AM 820",
    url: "https://streamlky.alsolnet.com/radiozonica"
  },
  {
    id: "delpueblo",
    name: "Del Pueblo",
    freq: "AM 830",
    url: "https://streaming6.locucionar.com:24248/stream"
  },
  {
    id: "cnnradio",
    name: "CNN Radio",
    freq: "AM 950",
    url: "https://unlimited2-ar.dps.live/cnn-ar/aac/icecast.audio"
  },
  {
    id: "genesis",
    name: "Genesis",
    freq: "AM 970",
    url: "https://01.solumedia.com.ar:8216/"
  },
  {
    id: "la990",
    name: "La 990",
    freq: "AM 990",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/AM990AAC.aac"
  },
  {
    id: "ondalatina",
    name: "Onda Latina",
    freq: "AM 1010",
    url: "https://streaming2.locucionar.com/proxy/ondalatina?mp=/stream"
  },
  {
    id: "delplata",
    name: "Del Plata",
    freq: "AM 1030",
    url: "https://streaming01.shockmedia.com.ar:10586/stream"
  },
  {
    id: "guemes",
    name: "Güemes",
    freq: "AM 1050",
    url: "https://server.radiostreaming.com.ar/8564/stream"
  },
  {
    id: "delaciudad",
    name: "De la Ciudad",
    freq: "AM 1110",
    url: "https://radio01.ferozo.com/proxy/ra01001160?mp=/stream"
  },
  {
    id: "federal",
    name: "Radio Federal",
    freq: "AM 1180",
    url: "https://sonic.host-live.com/8176/stream"
  },
  {
    id: "radiosur",
    name: "Radio Sur",
    freq: "AM 1200",
    url: "https://stream.xweb.ar:8008/"
  },
  {
    id: "ecomedios",
    name: "Eco Medios",
    freq: "AM 1220",
    url: "https://stream-159.zeno.fm/uv3vkhw2qvduv"
  },

  /* ===== FM de Buenos Aires (CABA) ===== */
  {
    id: "blackie",
    name: "Blackie",
    freq: "FM 89.1",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/BLACKIE_89_1.mp3"
  },
  {
    id: "arpeggio",
    name: "Arpeggio",
    freq: "FM 89.5",
    url: "https://cloudstream2032.conectarhosting.com/8074/stream"
  },
  {
    id: "laboca",
    name: "La Boca",
    freq: "FM 90.1",
    url: "https://s24.myradiostream.com/14984/listen.mp3"
  },
  {
    id: "delta",
    name: "Delta",
    freq: "FM 90.3",
    url: "https://cdn.instream.audio/:9069/stream"
  },
  {
    id: "vorterix",
    name: "Vorterix",
    freq: "FM 92.1",
    url: "https://ice2.edge-apps.net/radio1_high-20057.audio"
  },
  {
    id: "nacionalrock",
    name: "Nacional Rock",
    freq: "FM 93.7",
    url: "https://sa.mp3.icecast.magma.edge-access.net/sc_rad39" // âš  mismo patrÃ³n que tu Nacional AM 870
  },
  {
    id: "disney",
    name: "Radio Disney",
    freq: "FM 94.3",
    url: "https://27353.live.streamtheworld.com/DISNEY_ARG_BA_ADP/HLS/playlist.m3u8?dist=web-radiodisney" // âš  link viejo, puede estar caÃ­do
  },
  {
    id: "concepto",
    name: "Concepto",
    freq: "FM 95.5",
    url: "https://radios.solumedia.com:6002/stream"
  },
  {
    id: "nacionalclasica",
    name: "Nacional Clasica",
    freq: "FM 96.7",
    url: "https://sa.mp3.icecast.magma.edge-access.net/sc_rad37"
  },
  {
    id: "infobae",
    name: "Infobae",
    freq: "FM 97.1",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/INFOBAEAAC.aac"
  },
  {
    id: "La mega",
    name: "La Mega",
    freq: "FM 98.3",
    url: "https://mega.stweb.tv/mega983/live/playlist.m3u8"
  },
  {
    id: "nacionalfolklorica",
    name: "Nacional Folklorica",
    freq: "FM 98.7",
    url: "https://sa.mp3.icecast.magma.edge-access.net/sc_rad38"
  },
  {
    id: "la100",
    name: "La 100",
    freq: "FM 99.9",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/FM999_56.mp3"
  },
  {
    id: "blue",
    name: "Blue FM",
    freq: "FM 100.7",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/BLUE_FM_100_7AAC.aac"
  },
  {
    id: "dsports",
    name: "D Sports",
    freq: "FM 103.1",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/DSPORTSRADIOAAC_SC"
    // en dÃ­as de partido a veces la bloquean por derechos
  },
  {
    id: "sonido",
    name: "Sonido",
    freq: "FM 103.5",
    url: "https://streaming.radiosenlinea.com.ar/8780/stream/1/"
  },
  {
    id: "lnmusica",
    name: "LN+ Musica",
    freq: "FM 104.9",
    url: "https://stream.radio.co/s2ed3bec0a/listen"
  },
  {
    id: "los40",
    name: "Los 40",
    freq: "FM 105.5",
    url: "https://radios.solumedia.com:6158/stream?icy=http"
  },
  {
    id: "pasion",
    name: "Radio Pasion",
    freq: "FM 102.7",
    url: "https://live-ar1.cdnrad.com/hls/radio-1969/live.m3u8"
  },
  {
    id: "berlin",
    name: "Radio Berlin",
    freq: "FM 107.9",
    url: "https://unlimited5-us.dps.live/berlin/aac/icecast.audio"
  },

  /* ===== CÃ³rdoba ===== */
  {
    id: "cadena3am",
    name: "Cadena 3",
    freq: "AM 700",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/AM700.mp3"
  },
  {
    id: "cadena3fm",
    name: "Cadena 3 FM",
    freq: "FM 100.5",
    url: "https://liveradio.mediainbox.net/radio3.mp3"
  },
  {
    id: "fmcordoba",
    name: "FM Cordoba",
    freq: "FM 91.9",
    url: "https://liveradio.mediainbox.net/fmcordoba.mp3"
  },
  {
    id: "suquia",
    name: "Radio Suqui­a",
    freq: "FM 96.5",
    url: "https://streaming01.shockmedia.com.ar:10945/"
  },
  {
    id: "mia",
    name: "Radio Mi­a",
    freq: "FM 104.1",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/FM1041_56AAC.aac"
  },
  {
    id: "unicordoba",
    name: "Radio Universidad Cordoba",
    freq: "AM 580",
    url: "https://radios.solumedia.com:10976/stream"
  },

  /* ===== Santa Fe y Rosario ===== */
  {
    id: "lt3",
    name: "LT3 Rosario",
    freq: "AM 680",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/LT3AAC_SC"
  },
  {
    id: "lt10",
    name: "LT10 Radio UNL",
    freq: "FM 97.3",
    url: "https://radio.arcast.net:1060/stream"
  },

  /* ===== Mendoza ===== */
  {
    id: "estaciondelsol",
    name: "Estacion del Sol",
    freq: "FM 96.7",
    url: "https://estaciondelsolonline.com.ar:8000/radio.aac"
  },

  /* ===== Buenos Aires (interior) ===== */
  {
    id: "lu9",
    name: "LU9 Mar del Plata",
    freq: "AM 670",
    url: "https://servidor1.hostradios.com:8110/stream"
  },
  {
    id: "lu2",
    name: "LU2 Bahia Blanca",
    freq: "AM 840",
    url: "https://streaming6.locucionar.com:24228/stream?ver=22915"
  },

  /* ===== Patagonia ===== */
  {
    id: "lu19",
    name: "LU19 Cipolletti",
    freq: "AM 690",
    url: "https://sonic.host-live.com/8064/stream"
  },
  {
    id: "fmlaredonda",
    name: "Fm la redonda Solo Futbol",
    freq: "FM 100.3",
    url: "https://01.solumedia.com.ar:8290/stream"
  },
  {
    id: "laredneuquen",
    name: "La Red Neuquen",
    freq: "FM 93.7",
    url: "https://server.laradio.online/proxy/julian_liyo?mp=/stream"
  },
  {
    id: "radio3trelew",
    name: "Radio 3 Trelew",
    freq: "ONLINE",
    url: "https://radio01.ferozo.com/proxy/ra01000981?mp=/stream"
  },
  {
    id: "fmdelmar",
    name: "FM Del Mar",
    freq: "ONLINE",
    url: "https://icecast.gesatel.com.ar:8443/vivo"
  },

  /* ===== Misiones ===== */
  {
    id: "radiolight",
    name: "Radio Light",
    freq: "FM 88.9",
    url: "https://streamall.alsolnet.com/radiolightfm" // âš  el link original estaba en http; lo pasÃ© a https
  },

  /* ===== Solo online ===== */
  {
    id: "purorocknaciona",
    name: "Puro rock naciona",
    freq: "103.5",
    url: "https://srv591.grupomultimedios.com.ar:9902/radio/8110/radio.mp3?t=1794530808506"
  },
  {
    id: "FOLKLORE RADIO",
    name: "DEL PUEBLO MIO FOLKLORE RADIO",
    freq: "ONLINE",
    url: "https://centova.heplayer.com/proxy/dpmfolklore/stream"
  },
  {
    id: "Radio 10",
    name: "Radio 10",
    freq: "ONLINE",
    url: "https://stream.zeno.fm/4r530f2a9f0uv"
  },
   {
    id: "Radio Latina 101.1",
    name: "Radio Latina 101.1",
    freq: "ONLINE",
    url: "https://stream-gtlc.telecentro.net.ar/hls/radiolatinahls/0/playlist.m3u8?uid=c787e307dd6c302dc3e51a7d2b5df6f4"
  },
   {
    id: "FM Sentir",
    name: "FM sentir II",
    freq: "FM 104.3",
    // Stream detectado en la captura. Es HTTP; requiere proxy HTTPS para GitHub Pages.
    url: "https://fm-sentir-audio-proxy-production.up.railway.app/sentir"
  },
  {
    id: "eldesta",
    name: "El Destape Radio",
    freq: "ONLINE",
    url: "https://live-ar1.cdnrad.com/hls/radio-2123/live.m3u8"
  }
];


/* ============================================================
   Radio Argentina — Nueva UI móvil + Ecualizador integrado
   ============================================================ */

const player = document.getElementById("player");
const btnPlay = document.getElementById("btnPlay");
const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");
const btnFav = document.getElementById("btnFav");
const btnEq = document.getElementById("btnEq");
const stationNameEl = document.getElementById("stationName");
const freqEl = document.getElementById("freq");
const stationList = document.getElementById("stationList");
const stationSearch = document.getElementById("stationSearch");
const visualizer = document.getElementById("visualizer");
const connText = document.getElementById("connText");
const bitrateEl = document.getElementById("bitrate");
const liveTimerEl = document.getElementById("liveTimer");
const needleFm = document.getElementById("needleFm");
const needleAm = document.getElementById("needleAm");
const eqPanel = document.getElementById("eqPanel");
const eqClose = document.getElementById("eqClose");
const eqSliders = document.getElementById("eqSliders");
const eqReset = document.getElementById("eqReset");
const sidePanel = document.getElementById("sidePanel");
const sideTitle = document.getElementById("sideTitle");
const sideBody = document.getElementById("sideBody");
const sideClose = document.getElementById("sideClose");

let currentStation = null;
let isPlaying = false;
let favorites = new Set(JSON.parse(localStorage.getItem("radio-favs") || "[]"));
let liveSeconds = 0;
let liveTimerInterval = null;
let currentFilter = "all";
let sleepTimer = null;

/* ---- Web Audio EQ ---- */
const EQ_BANDS = [
  { freq: 60,    label: "60" },
  { freq: 150,   label: "150" },
  { freq: 400,   label: "400" },
  { freq: 1000,  label: "1k" },
  { freq: 2400,  label: "2.4k" },
  { freq: 6000,  label: "6k" },
  { freq: 15000, label: "15k" }
];

const EQ_PRESETS = {
  flat:   [0, 0, 0, 0, 0, 0, 0],
  bass:   [8, 6, 3, 0, -1, -2, -3],
  treble: [-3, -2, -1, 0, 3, 6, 8],
  voice:  [-2, -1, 2, 5, 4, 1, -1],
  rock:   [5, 3, -1, 1, 3, 4, 5]
};

let audioCtx = null;
let sourceNode = null;
let filters = [];
let analyser = null;
let eqGains = [0, 0, 0, 0, 0, 0, 0];
let animId = null;

function initAudioGraph() {
  if (audioCtx) return;
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  sourceNode = audioCtx.createMediaElementSource(player);

  filters = EQ_BANDS.map((b, i) => {
    const f = audioCtx.createBiquadFilter();
    f.type = i === 0 ? "lowshelf" : (i === EQ_BANDS.length - 1 ? "highshelf" : "peaking");
    f.frequency.value = b.freq;
    f.Q.value = 1.2;
    f.gain.value = eqGains[i];
    return f;
  });

  analyser = audioCtx.createAnalyser();
  analyser.fftSize = 64;
  analyser.smoothingTimeConstant = 0.75;

  let prev = sourceNode;
  filters.forEach(f => {
    prev.connect(f);
    prev = f;
  });
  prev.connect(analyser);
  analyser.connect(audioCtx.destination);
}

function applyEqGains() {
  if (!filters.length) return;
  filters.forEach((f, i) => { f.gain.value = eqGains[i]; });
}

function buildEqUI() {
  eqSliders.innerHTML = "";
  EQ_BANDS.forEach((b, i) => {
    const div = document.createElement("div");
    div.className = "eq-band";
    div.innerHTML = `
      <span class="gain-val" id="gainVal${i}">0</span>
      <input type="range" min="-12" max="12" step="0.5" value="0" data-idx="${i}" aria-label="Banda ${b.label} Hz" />
      <label>${b.label}</label>
    `;
    const input = div.querySelector("input");
    input.addEventListener("input", () => {
      eqGains[i] = parseFloat(input.value);
      document.getElementById("gainVal" + i).textContent = (eqGains[i] > 0 ? "+" : "") + eqGains[i];
      applyEqGains();
      document.querySelectorAll(".eq-preset").forEach(p => p.classList.remove("active"));
    });
    eqSliders.appendChild(div);
  });
}

function setEqPreset(name) {
  const vals = EQ_PRESETS[name] || EQ_PRESETS.flat;
  eqGains = vals.slice();
  applyEqGains();
  document.querySelectorAll(".eq-band input").forEach((inp, i) => {
    inp.value = vals[i];
    document.getElementById("gainVal" + i).textContent = (vals[i] > 0 ? "+" : "") + vals[i];
  });
  document.querySelectorAll(".eq-preset").forEach(p => {
    p.classList.toggle("active", p.dataset.preset === name);
  });
}

function openEq() {
  initAudioGraph();
  if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
  eqPanel.hidden = false;
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  const nav = document.getElementById("navEq");
  if (nav) nav.classList.add("active");
}

function closeEq() {
  eqPanel.hidden = true;
}

/* ---- Visualizer ---- */
function startVisualizer() {
  if (!analyser) return;
  const bars = visualizer.querySelectorAll(".bar");
  const data = new Uint8Array(analyser.frequencyBinCount);

  function frame() {
    if (!isPlaying) return;
    analyser.getByteFrequencyData(data);
    bars.forEach((bar, i) => {
      const v = data[i + 2] || 0;
      const h = Math.max(4, (v / 255) * 44);
      bar.style.height = h + "px";
    });
    animId = requestAnimationFrame(frame);
  }
  visualizer.classList.add("playing");
  frame();
}

function stopVisualizer() {
  cancelAnimationFrame(animId);
  visualizer.classList.remove("playing");
  visualizer.querySelectorAll(".bar").forEach(b => { b.style.height = "8px"; });
}

/* ---- Dial needle ---- */
function updateDial(station) {
  if (!station) {
    if (needleFm) needleFm.style.left = "50%";
    if (needleAm) needleAm.style.left = "50%";
    return;
  }
  const f = station.freq || "";
  const num = parseFloat(String(f).replace(/[^\d.]/g, "")) || 0;
  if (String(f).toUpperCase().includes("AM") || (num > 200 && num < 2000)) {
    const pct = Math.min(100, Math.max(0, ((num - 530) / (1600 - 530)) * 100));
    if (needleAm) needleAm.style.left = pct + "%";
    if (needleFm) needleFm.style.left = "50%";
  } else {
    const pct = Math.min(100, Math.max(0, ((num - 88) / (108 - 88)) * 100));
    if (needleFm) needleFm.style.left = pct + "%";
    if (needleAm) needleAm.style.left = "50%";
  }
}

/* ---- Player controls ---- */
function setPlayingUI(playing) {
  isPlaying = playing;
  btnPlay.classList.toggle("playing", playing);
  if (playing) {
    connText.textContent = "Conectado";
    bitrateEl.textContent = "• 128 kbps";
    startLiveTimer();
    startVisualizer();
  } else {
    connText.textContent = currentStation ? "Pausado" : "Desconectado";
    bitrateEl.textContent = "—";
    stopLiveTimer();
    stopVisualizer();
  }
  highlightActive();
}

function startLiveTimer() {
  stopLiveTimer();
  liveSeconds = 0;
  liveTimerEl.textContent = "00:00:00";
  liveTimerInterval = setInterval(() => {
    liveSeconds++;
    const h = String(Math.floor(liveSeconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((liveSeconds % 3600) / 60)).padStart(2, "0");
    const s = String(liveSeconds % 60).padStart(2, "0");
    liveTimerEl.textContent = h + ":" + m + ":" + s;
  }, 1000);
}

function stopLiveTimer() {
  clearInterval(liveTimerInterval);
  liveTimerInterval = null;
}

async function playStation(st) {
  if (!st) return;
  currentStation = st;
  stationNameEl.textContent = st.name;
  freqEl.textContent = st.freq || "Online";
  updateDial(st);
  updateFavUI();
  highlightActive();

  try {
    initAudioGraph();
    if (audioCtx && audioCtx.state === "suspended") await audioCtx.resume();
    player.src = st.url;
    player.load();
    await player.play();
    setPlayingUI(true);
  } catch (err) {
    console.warn("Play error:", err);
    connText.textContent = "Error de stream";
    bitrateEl.textContent = "—";
    setPlayingUI(false);
  }
}

function togglePlay() {
  if (!currentStation) {
    const first = getVisibleStations()[0];
    if (first) playStation(first);
    return;
  }
  if (isPlaying) {
    player.pause();
    setPlayingUI(false);
  } else {
    player.play().then(() => setPlayingUI(true)).catch(() => setPlayingUI(false));
  }
}

function stepStation(dir) {
  const list = getVisibleStations();
  if (!list.length) return;
  let idx = list.findIndex(s => s.id === (currentStation && currentStation.id));
  if (idx < 0) idx = 0;
  else idx = (idx + dir + list.length) % list.length;
  playStation(list[idx]);
}

/* ---- Favorites ---- */
function toggleFav() {
  if (!currentStation) return;
  if (favorites.has(currentStation.id)) favorites.delete(currentStation.id);
  else favorites.add(currentStation.id);
  localStorage.setItem("radio-favs", JSON.stringify(Array.from(favorites)));
  updateFavUI();
  if (currentFilter === "fav") renderList();
}

function updateFavUI() {
  const on = currentStation && favorites.has(currentStation.id);
  btnFav.setAttribute("aria-pressed", on ? "true" : "false");
}

/* ---- Filters & list ---- */
function getVisibleStations() {
  let list = STATIONS.slice();
  if (currentFilter === "fav") {
    list = list.filter(s => favorites.has(s.id));
  } else if (currentFilter === "chaco") {
    list = list.filter(s => {
      const n = (s.name + " " + (s.freq || "")).toLowerCase();
      return n.includes("machagai") || n.includes("chaco") || n.includes("resistencia") ||
             ["El mañanero", "FM libertad Machagai", "VIP FM", "Master FM", "radiotop", "Pobre Johnny"].includes(s.id) ||
             s.name.toLowerCase().includes("machagai");
    });
  }
  const q = (stationSearch.value || "").trim().toLowerCase();
  if (q) {
    list = list.filter(s =>
      s.name.toLowerCase().includes(q) ||
      (s.freq || "").toLowerCase().includes(q) ||
      (s.id || "").toLowerCase().includes(q)
    );
  }
  return list;
}

function renderList() {
  const list = getVisibleStations();
  stationList.innerHTML = "";
  if (!list.length) {
    stationList.innerHTML = '<p class="empty-msg">No se encontraron emisoras.</p>';
    return;
  }
  list.forEach(st => {
    const item = document.createElement("div");
    item.className = "station-item" + (currentStation && currentStation.id === st.id ? " active" : "");
    item.dataset.id = st.id;

    const initials = st.name.split(" ").slice(0, 2).map(w => w[0] || "").join("").toUpperCase().slice(0, 3);
    const loc = st.name.toLowerCase().includes("machagai") ? "Machagai" :
                st.name.toLowerCase().includes("resistencia") ? "Resistencia" : "Argentina";

    item.innerHTML = `
      <div class="station-logo">${initials}</div>
      <div class="station-meta">
        <div class="s-name">${st.name}</div>
        <div class="s-loc">${loc}</div>
      </div>
      <div class="station-freq-right">${st.freq || "Online"}</div>
      <div class="station-play">${currentStation && currentStation.id === st.id && isPlaying ? "⏸" : "▶"}</div>
    `;
    item.addEventListener("click", () => {
      if (currentStation && currentStation.id === st.id) togglePlay();
      else playStation(st);
    });
    stationList.appendChild(item);
  });
}

function highlightActive() {
  document.querySelectorAll(".station-item").forEach(el => {
    const active = currentStation && el.dataset.id === currentStation.id;
    el.classList.toggle("active", active);
    const playBtn = el.querySelector(".station-play");
    if (playBtn) playBtn.textContent = active && isPlaying ? "⏸" : "▶";
  });
}

/* ---- Side panels ---- */
function openSide(title, html) {
  sideTitle.textContent = title;
  sideBody.innerHTML = html;
  sidePanel.hidden = false;
}

function closeSide() {
  sidePanel.hidden = true;
}

function showOpciones() {
  openSide("Opciones", `
    <h3>Volumen del sistema</h3>
    <p>Usa los botones de volumen de tu teléfono para ajustar el volumen general.</p>
    <h3>Calidad</h3>
    <p>La mayoría de los streams se reproducen en la mejor calidad disponible (128–192 kbps).</p>
    <h3>Datos móviles</h3>
    <p>El streaming consume aproximadamente 60–90 MB por hora.</p>
  `);
}

function showTemporizador() {
  openSide("Temporizador", `
    <p>Apaga la radio automáticamente después del tiempo elegido.</p>
    <div class="timer-options">
      <button class="timer-btn" data-min="15">15 min</button>
      <button class="timer-btn" data-min="30">30 min</button>
      <button class="timer-btn" data-min="45">45 min</button>
      <button class="timer-btn" data-min="60">60 min</button>
      <button class="timer-btn" data-min="0">Cancelar</button>
    </div>
    <p id="timerStatus" style="margin-top:16px;color:var(--cyan)"></p>
  `);
  sideBody.querySelectorAll(".timer-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      clearTimeout(sleepTimer);
      const min = parseInt(btn.dataset.min, 10);
      const status = document.getElementById("timerStatus");
      if (min === 0) {
        status.textContent = "Temporizador cancelado.";
        return;
      }
      status.textContent = "Se apagará en " + min + " minutos.";
      sleepTimer = setTimeout(() => {
        player.pause();
        setPlayingUI(false);
        status.textContent = "Radio apagada por temporizador.";
      }, min * 60 * 1000);
    });
  });
}

function showMisRadios() {
  const favs = STATIONS.filter(s => favorites.has(s.id));
  let html = "<p>Tus emisoras favoritas (" + favs.length + ").</p>";
  if (!favs.length) {
    html += '<p style="margin-top:12px">Marcá con ★ las emisoras que más escuchás.</p>';
  } else {
    html += '<div style="margin-top:12px">';
    favs.forEach(s => {
      html += '<div style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.08)"><strong style="color:#fff">' + s.name + '</strong> · ' + (s.freq || "Online") + '</div>';
    });
    html += '</div>';
  }
  openSide("Mis Radios", html);
}

function showAcerca() {
  openSide("Acerca de", `
    <h3>Radio Argentina</h3>
    <p>Reproductor de radios argentinas en vivo. Sin publicidad.</p>
    <p>Diseño inspirado en una interfaz clásica de radio con dial y ecualizador integrado.</p>
    <p style="margin-top:16px;font-size:0.85rem;opacity:0.7">v2.0 · 2026</p>
  `);
}

/* ---- Event listeners ---- */
btnPlay.addEventListener("click", togglePlay);
btnPrev.addEventListener("click", () => stepStation(-1));
btnNext.addEventListener("click", () => stepStation(1));
btnFav.addEventListener("click", toggleFav);
btnEq.addEventListener("click", openEq);
eqClose.addEventListener("click", closeEq);
eqReset.addEventListener("click", () => setEqPreset("flat"));

document.querySelectorAll(".eq-preset").forEach(btn => {
  btn.addEventListener("click", () => setEqPreset(btn.dataset.preset));
});

stationSearch.addEventListener("input", () => renderList());

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderList();
  });
});

document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const panel = btn.dataset.panel;
    if (panel === "ecualizador") {
      openEq();
    } else {
      closeEq();
      if (panel === "opciones") showOpciones();
      else if (panel === "temporizador") showTemporizador();
      else if (panel === "misradios") showMisRadios();
      else if (panel === "acerca") showAcerca();
    }
  });
});

sideClose.addEventListener("click", closeSide);

player.addEventListener("playing", () => setPlayingUI(true));
player.addEventListener("pause", () => setPlayingUI(false));
player.addEventListener("error", () => {
  connText.textContent = "Error de conexión";
  bitrateEl.textContent = "—";
  setPlayingUI(false);
});

/* Keyboard */
document.addEventListener("keydown", e => {
  if (e.target.tagName === "INPUT") return;
  if (e.code === "Space") { e.preventDefault(); togglePlay(); }
  if (e.key === "ArrowRight") stepStation(1);
  if (e.key === "ArrowLeft") stepStation(-1);
});

/* Init */
buildEqUI();
renderList();
updateDial(null);
console.log("Radio Argentina ready, stations:", STATIONS.length);
