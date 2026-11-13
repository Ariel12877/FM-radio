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
    name: "AZUL FM 97.5",
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


/* ---- Orden de la lista: primero las de Chaco / Machagai, después por categoría ---- */
const TOP_IDS = ["radiotop", "Pobre Johnny", "El mañanero", "FM libertad Machagai",
                 "VIP FM", "Master FM", "laradio1047", "facundoquiroga"];
const CAT_ORDER = ["chaco", "musica", "noticias", "folklore", "deportes"];
const CAT_LABEL = { chaco: "Chaco y Machagai", musica: "Música", noticias: "Noticias", folklore: "Folklore", deportes: "Deportes" };
const CAT_BY_ID = {
  noticias: ["nacional", "lra26", "Las Lomitas", "mitre", "lared", "continental", "rivadavia", "cnnradio",
             "Radio 10", "Radio Con Vos", "infobae", "cadena3am", "madre", "eldesta", "lu9", "lu2", "lu19", "lt3",
             "unicordoba", "cooperativa", "zonica", "delpueblo", "genesis", "la990", "delplata", "guemes",
             "delaciudad", "federal", "radiosur", "ecomedios", "ondalatina", "Radio Mocovl AM 800"],
  folklore:  ["Radio Chamame", "Polca Paraguaya", "Ñande Reko Radio", "FOLKLORE RADIO", "nacionalfolklorica"],
  deportes:  ["dsports", "fmlaredonda"]
};
(function sortStations() {
  const catOf = {};
  Object.keys(CAT_BY_ID).forEach(cat => CAT_BY_ID[cat].forEach(id => { catOf[id] = cat; }));
  STATIONS.forEach(st => {
    const top = TOP_IDS.indexOf(st.id);
    st.cat = top >= 0 ? "chaco" : (catOf[st.id] || "musica");   // lo que no está en una lista queda en Música
    st._top = top;
  });
  STATIONS.sort((a, b) => {
    if (a.cat !== b.cat) return CAT_ORDER.indexOf(a.cat) - CAT_ORDER.indexOf(b.cat);
    return a.cat === "chaco" ? a._top - b._top : 0;             // el resto mantiene su orden original
  });
})();

/* ============================================================
   Radio Argentina — Nueva UI móvil + Ecualizador integrado
   ============================================================ */

const playerEQ = document.getElementById("player");   // con CORS: pasa por el ecualizador
const playerDirect = new Audio();                      // sin CORS: suena directo (sin ecualizador)
playerDirect.preload = "none";
let player = playerEQ;                                 // el que está sonando ahora
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
let eqPreset = "flat";
let eqAvailable = true;
let animId = null;

/* El ecualizador recuerda cómo lo dejaste */
try {
  const savedEq = JSON.parse(localStorage.getItem("radio-eq") || "null");
  if (savedEq && Array.isArray(savedEq.gains) && savedEq.gains.length === EQ_BANDS.length) {
    eqGains = savedEq.gains.map(g => Math.max(-12, Math.min(12, Number(g) || 0)));
    eqPreset = typeof savedEq.preset === "string" ? savedEq.preset : "";
  }
} catch (e) { /* si falla, queda plano */ }

function saveEq() {
  try { localStorage.setItem("radio-eq", JSON.stringify({ gains: eqGains, preset: eqPreset })); } catch (e) {}
}

function initAudioGraph() {
  if (audioCtx) return;
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return;
  audioCtx = new Ctx();
  sourceNode = audioCtx.createMediaElementSource(playerEQ);

  filters = EQ_BANDS.map((b, i) => {
    const f = audioCtx.createBiquadFilter();
    f.type = i === 0 ? "lowshelf" : (i === EQ_BANDS.length - 1 ? "highshelf" : "peaking");
    f.frequency.value = b.freq;
    f.Q.value = 1.2;
    f.gain.value = eqGains[i];
    return f;
  });

  analyser = audioCtx.createAnalyser();
  analyser.fftSize = 256;
  analyser.smoothingTimeConstant = 0.8;

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

const fmtGain = (g) => (g > 0 ? "+" : "") + g;

function markPreset() {
  document.querySelectorAll(".eq-preset").forEach(p => {
    p.classList.toggle("active", p.dataset.preset === eqPreset);
  });
}

/* Curva de respuesta: se dibuja con los filtros reales, así se ve lo que está haciendo el ecualizador */
const CURVE_FREQS = (() => {
  const n = 64, a = new Float32Array(n);
  for (let i = 0; i < n; i++) a[i] = 20 * Math.pow(1000, i / (n - 1)); // 20 Hz a 20 kHz
  return a;
})();

function updateEqCurve() {
  const line = document.getElementById("eqCurveLine");
  const fill = document.getElementById("eqCurveFill");
  if (!line || !fill) return;
  const n = CURVE_FREQS.length;
  const total = new Float32Array(n);
  if (filters.length) {
    const mag = new Float32Array(n), ph = new Float32Array(n);
    filters.forEach(f => {
      f.getFrequencyResponse(CURVE_FREQS, mag, ph);
      for (let i = 0; i < n; i++) total[i] += 20 * Math.log10(mag[i] || 1e-6);
    });
  }
  const W = 300, H = 84, mid = H / 2, range = 16;
  let d = "";
  for (let i = 0; i < n; i++) {
    const x = (i / (n - 1)) * W;
    const y = Math.max(3, Math.min(H - 3, mid - (total[i] / range) * mid));
    d += (i ? " L" : "M") + x.toFixed(1) + " " + y.toFixed(1);
  }
  line.setAttribute("d", d);
  fill.setAttribute("d", d + " L" + W + " " + mid + " L0 " + mid + " Z");
}

function buildEqUI() {
  eqSliders.innerHTML = "";
  EQ_BANDS.forEach((b, i) => {
    const div = document.createElement("div");
    div.className = "eq-band";
    div.innerHTML = `
      <span class="gain-val" id="gainVal${i}">${fmtGain(eqGains[i])}</span>
      <input type="range" min="-12" max="12" step="0.5" value="${eqGains[i]}" data-idx="${i}" aria-label="Banda ${b.label} Hz" />
      <label>${b.label}</label>
    `;
    const input = div.querySelector("input");
    input.addEventListener("input", () => {
      eqGains[i] = parseFloat(input.value);
      document.getElementById("gainVal" + i).textContent = fmtGain(eqGains[i]);
      applyEqGains();
      eqPreset = "";
      markPreset();
      saveEq();
      updateEqCurve();
    });
    eqSliders.appendChild(div);
  });
  markPreset();
}

function setEqPreset(name) {
  const vals = EQ_PRESETS[name] || EQ_PRESETS.flat;
  eqPreset = EQ_PRESETS[name] ? name : "flat";
  eqGains = vals.slice();
  applyEqGains();
  document.querySelectorAll(".eq-band input").forEach((inp, i) => {
    inp.value = vals[i];
    document.getElementById("gainVal" + i).textContent = fmtGain(vals[i]);
  });
  markPreset();
  saveEq();
  updateEqCurve();
}

/* Algunas emisoras no mandan permiso CORS: esas suenan, pero no se pueden ecualizar */
function setEqAvailable(on) {
  eqAvailable = on;
  const note = document.getElementById("eqNote");
  if (note) note.hidden = on;
  eqPanel.classList.toggle("eq-off", !on);
}

function openEq() {
  initAudioGraph();
  if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
  eqPanel.hidden = false;
  updateEqCurve();
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  const nav = document.getElementById("navEq");
  if (nav) nav.classList.add("active");
}

function closeEq() {
  eqPanel.hidden = true;
}

/* ---- Visualizer ---- */
const VIS_BANDS = 12;
function startVisualizer() {
  cancelAnimationFrame(animId);
  visualizer.classList.add("playing");
  const real = player === playerEQ && !!analyser;
  visualizer.classList.toggle("real", real);
  if (!real) return; // sin acceso al audio, queda la animación simulada

  const bars = visualizer.querySelectorAll(".bar");
  const data = new Uint8Array(analyser.frequencyBinCount);
  const binHz = audioCtx.sampleRate / analyser.fftSize;
  const fMin = 70, fMax = 9000;
  const ranges = [];
  for (let k = 0; k < VIS_BANDS; k++) {
    const a = fMin * Math.pow(fMax / fMin, k / VIS_BANDS);
    const b = fMin * Math.pow(fMax / fMin, (k + 1) / VIS_BANDS);
    const lo = Math.max(0, Math.floor(a / binHz));
    ranges.push([lo, Math.max(lo + 1, Math.ceil(b / binHz))]);
  }

  function frame() {
    if (!isPlaying || player !== playerEQ) return;
    analyser.getByteFrequencyData(data);
    const H = visualizer.clientHeight || 48;
    const vals = ranges.map(([lo, hi], k) => {
      let m = 0;
      for (let b = lo; b < hi; b++) if (data[b] > m) m = data[b];
      const v = Math.pow(m / 255, 1.25) * (1 + k * 0.09);
      return Math.min(1, v);
    });
    const half = bars.length / 2;
    bars.forEach((bar, i) => {
      // espejo: graves en los bordes, agudos hacia el centro
      const edge = i < half ? i : bars.length - 1 - i;
      const k = Math.min(VIS_BANDS - 1, Math.floor((edge / half) * VIS_BANDS));
      bar.style.height = Math.max(4, vals[k] * H) + "px";
    });
    animId = requestAnimationFrame(frame);
  }
  frame();
}

function stopVisualizer() {
  cancelAnimationFrame(animId);
  visualizer.classList.remove("playing", "real");
  visualizer.querySelectorAll(".bar").forEach(b => { b.style.height = "8px"; });
}

/* ---- Dial needle ---- */
/* Las marcas del dial no están a la misma distancia, por eso la aguja se ubica entre marcas */
const DIAL_MAP = {
  fm: { v: [88, 92, 96, 100, 104, 108],       p: [4, 22, 40, 58, 76, 94] },
  am: { v: [530, 700, 900, 1100, 1300, 1600], p: [4, 22, 40, 58, 76, 94] }
};

function dialPct(f, band) {
  const { v, p } = DIAL_MAP[band];
  if (f <= v[0]) return p[0];
  if (f >= v[v.length - 1]) return p[p.length - 1];
  for (let i = 1; i < v.length; i++) {
    if (f <= v[i]) return p[i - 1] + ((f - v[i - 1]) / (v[i] - v[i - 1])) * (p[i] - p[i - 1]);
  }
  return 50;
}

function setNeedle(el, leftPct, mobilePct, on) {
  if (!el) return;
  el.style.left = leftPct + "%";                       // PC: igual que antes
  el.style.setProperty("--pm", mobilePct + "%");       // celular: posición entre marcas
  el.classList.toggle("on", on);
}

function updateDial(station) {
  if (!station) {
    setNeedle(needleFm, 50, 50, true);
    setNeedle(needleAm, 50, 50, false);
    return;
  }
  const f = station.freq || "";
  const num = parseFloat(String(f).replace(/[^\d.]/g, "")) || 0;
  const hasNum = num > 0;
  if (String(f).toUpperCase().includes("AM") || (num > 200 && num < 2000)) {
    const pct = Math.min(100, Math.max(0, ((num - 530) / (1600 - 530)) * 100));
    setNeedle(needleAm, pct, dialPct(num, "am"), hasNum);
    setNeedle(needleFm, 50, 50, false);
  } else {
    const pct = Math.min(100, Math.max(0, ((num - 88) / (108 - 88)) * 100));
    setNeedle(needleFm, pct, dialPct(num, "fm"), hasNum);
    setNeedle(needleAm, 50, 50, false);
  }
}

/* ---- Player controls ---- */
const directOnly = new Set((() => {
  try { return JSON.parse(localStorage.getItem("radio-direct") || "[]"); } catch (e) { return []; }
})());
let playToken = 0;
let starting = false;

function setPlayingUI(playing) {
  isPlaying = playing;
  btnPlay.classList.toggle("playing", playing);
  if (playing) {
    connText.textContent = "Conectado";
    bitrateEl.textContent = "• 128 kbps";
    if (!liveTimerInterval) startLiveTimer();
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

function releaseEl(el) {
  try { el.pause(); } catch (e) {}
  el.removeAttribute("src");
  el.load();
}

async function startOn(el, st, withEq) {
  const other = el === playerEQ ? playerDirect : playerEQ;
  player = el;                 // primero marco cuál es el activo, así los eventos del otro se ignoran
  releaseEl(other);
  if (withEq) {
    initAudioGraph();
    if (audioCtx && audioCtx.state === "suspended") await audioCtx.resume();
  }
  el.src = st.url;
  el.load();
  await el.play();
}

async function playStation(st) {
  if (!st) return;
  const token = ++playToken;
  currentStation = st;
  stationNameEl.textContent = st.name;
  freqEl.innerHTML = dual(st.freq || "Online", freqMobileHtml(st.freq));
  updateDial(st);
  updateFavUI();
  stopLiveTimer();
  highlightActive();
  connText.textContent = "Conectando…";
  bitrateEl.textContent = "—";
  starting = true;

  try {
    if (!directOnly.has(st.id)) {
      try {
        await startOn(playerEQ, st, true);
        if (token !== playToken) return;
        setEqAvailable(true);
        setPlayingUI(true);
        return;
      } catch (err) {
        if (token !== playToken || (err && err.name === "AbortError")) return;
        console.warn("Sin CORS o error, pruebo directo:", st.name, err);
      }
    }
    // Respaldo: la emisora no deja pasar el audio por el ecualizador, pero igual suena
    await startOn(playerDirect, st, false);
    if (token !== playToken) return;
    if (!directOnly.has(st.id)) {
      directOnly.add(st.id);
      try { localStorage.setItem("radio-direct", JSON.stringify(Array.from(directOnly))); } catch (e) {}
    }
    setEqAvailable(false);
    setPlayingUI(true);
  } catch (err) {
    if (token !== playToken || (err && err.name === "AbortError")) return;
    console.warn("Play error:", err);
    connText.textContent = "Error de stream";
    bitrateEl.textContent = "—";
    setPlayingUI(false);
    connText.textContent = "Error de stream";
  } finally {
    if (token === playToken) starting = false;
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

/* Logos móviles: archivos directos identificados en Wikimedia Commons.
   Aspen, Concepto, Delta y Metro: CC BY-SA 4.0 (atribución y compartir igual).
   La 100: archivo identificado en Commons; revisar marca/actualidad del diseño.
   En escritorio se conserva el logo tipográfico original. */
const AZUL_FM_LOGO_DATA_URI = "data:image/jpeg;base64,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";
const STATION_LOGO_IMAGES = {
  "el mañanero": AZUL_FM_LOGO_DATA_URI,
  aspen: "https://upload.wikimedia.org/wikipedia/commons/8/86/Aspen102.jpg",
  concepto: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Concepto_FM.png",
  delta: "https://upload.wikimedia.org/wikipedia/commons/6/65/Delta_90.3_.png",
  metro: "https://commons.wikimedia.org/wiki/Special:FilePath/Metro951.png?width=400",
  la100: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_La100_Verde.JPG?width=400"
};
const STATION_LOGO_DOMAINS = {
  "laradio1047": "laradio1047.com.ar",
  "master fm": "radiomasterfm.com.ar",
  "facundoquiroga": "facundoquiroga.com",
  "fmgualamba": "fmgualamba.com.ar",
  "lra26": "radionacional.com.ar",
  "nacional": "radionacional.com.ar",
  "mitre": "mitre.com.ar",
  "rockpop": "rockandpop.com.ar",
  "metro": "metro951.com",
  "lared": "lared.am",
  "urbana": "urbanaplay.com",
  "am750": "am750.com.ar",
  "continental": "continental.com.ar",
  "rivadavia": "rivadavia.com.ar",
  "cnnradio": "cnnradio.com.ar",
  "vorterix": "vorterix.com",
  "disney": "radiodisney.com.ar",
  "infobae": "infobae.com",
  "la mega": "mega983.com.ar",
  "la100": "la100.com.ar",
  "blue": "bluefm.com.ar",
  "dsports": "dsportsradio.com",
  "los40": "los40.com.ar",
  "cadena3am": "cadena3.com",
  "cadena3fm": "cadena3.com",
  "radio 10": "radio10.com.ar",
  "eldesta": "eldestaperadio.com"
};

function getStationLogo(st) {
  const id = (st.id || "").toLowerCase();
  const name = (st.name || "").toLowerCase();
  const initials = (st.name || "R").split(" ").slice(0, 2).map(w => (w[0] || "")).join("").toUpperCase().slice(0, 3);
  const direct = STATION_LOGO_IMAGES[id];
  const domain = STATION_LOGO_DOMAINS[id] || STATION_LOGO_DOMAINS[name] ||
    Object.entries(STATION_LOGO_DOMAINS).find(([key]) => key.length > 4 && (id.includes(key) || name.includes(key)))?.[1];
  const image = direct || (domain ? `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128` : "");
  if (id.includes("radiotop") || name.includes("radio top")) return { cls: "logo-radiotop", html: "Radio<br><span>Top</span>", src: image };
  if (id.includes("pobre") || name.includes("pobre johnny")) return { cls: "logo-pobre", html: "Pobre<br>Johnny", src: image };
  if (id.includes("mañanero") || id.includes("mananero") || name.includes("mañanero")) return { cls: "logo-mananero", html: "📊", src: image };
  if (id.includes("libertad") || name.includes("libertad")) return { cls: "logo-libertad", html: "FM<br>Libertad", src: image };
  if (id.includes("vip") || name.includes("vip radio")) return { cls: "logo-vip", html: "Vip<br>Radio", src: image };
  return { cls: "logo-default", html: initials, src: image };
}

function getStationLoc(st) {
  const n = (st.name || "").toLowerCase();
  if (n.includes("machagai")) return "Machagai";
  if (n.includes("resistencia")) return "Resistencia";
  if (n.includes("chaco")) return "Chaco";
  return "Argentina";
}

/* ---- Versión celular de los textos (en la PC se sigue viendo exactamente lo de antes) ---- */
function dual(pcHtml, mobHtml) {
  return '<span class="v-pc">' + pcHtml + '</span><span class="v-mob">' + mobHtml + '</span>';
}

/* "FM 105.9" -> "105.9 MHz" · "AM 750" -> "750 kHz" · "Online" -> "Online" */
function freqMobileHtml(f) {
  const raw = String(f || "").trim();
  const num = parseFloat(raw.replace(/[^\d.]/g, ""));
  if (!num) return "Online";
  const isAm = /am/i.test(raw) || (num >= 500 && num <= 1700);
  return isAm ? Math.round(num) + " <small>kHz</small>" : num.toFixed(1) + " <small>MHz</small>";
}

const LOC_BY_ID = { radiotop: "Resistencia", "El mañanero": "Machagai" };
const LOC_WORDS = [
  ["machagai", "Machagai"], ["resistencia", "Resistencia"], ["chaco", "Chaco"],
  ["formosa", "Formosa"], ["trelew", "Trelew"], ["neuquen", "Neuquén"],
  ["cipolletti", "Cipolletti"], ["mar del plata", "Mar del Plata"],
  ["bahia blanca", "Bahía Blanca"], ["rosario", "Rosario"], ["cordoba", "Córdoba"]
];

function getStationLocMobile(st) {
  if (LOC_BY_ID[st.id]) return LOC_BY_ID[st.id];
  const n = (st.name || "").toLowerCase();
  for (const [word, label] of LOC_WORDS) if (n.includes(word)) return label;
  return "Argentina";
}

/* Cada emisora sin logo propio tiene su color, siempre el mismo */
const LOGO_HUES = [212, 196, 262, 336, 14, 152, 176, 232];
function stationHue(st) {
  let h = 0;
  const key = String(st.id || st.name);
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  return LOGO_HUES[h % LOGO_HUES.length];
}

function renderList() {
  const list = getVisibleStations();
  stationList.innerHTML = "";
  if (!list.length) {
    stationList.innerHTML = '<p class="empty-msg">No se encontraron emisoras.</p>';
    return;
  }
  const grouped = currentFilter === "all" && !(stationSearch.value || "").trim();
  let lastCat = null;
  list.forEach(st => {
    if (grouped && st.cat !== lastCat) {
      lastCat = st.cat;
      const sep = document.createElement("div");
      sep.className = "list-sep";
      sep.textContent = CAT_LABEL[st.cat] || "";
      stationList.appendChild(sep);
    }
    const item = document.createElement("div");
    const isActive = currentStation && currentStation.id === st.id;
    item.className = "station-item" + (isActive ? " active" : "") + (isActive && isPlaying ? " is-playing" : "");
    item.dataset.id = st.id;

    const logo = getStationLogo(st);
    const loc = getStationLoc(st);
    const playIcon = isActive && isPlaying ? "⏸" : "▶";

    item.innerHTML = `
      <div class="station-logo ${logo.cls}" style="--h:${stationHue(st)}">
        <span class="v-mob">${logo.src
          ? `<img src="${logo.src}" alt="Identificación de ${st.name}" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:100%;object-fit:contain;border-radius:inherit;background:#fff" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span style="display:none">${logo.html}</span>`
          : logo.html}</span>
        <span class="v-pc">${logo.html}</span>
      </div>
      <div class="station-meta">
        <div class="s-name">${st.name}</div>
        <div class="s-loc">${dual(loc, getStationLocMobile(st))}</div>
      </div>
      <div class="station-freq-right">${dual(st.freq || "Online", freqMobileHtml(st.freq))}</div>
      <div class="station-play">${playIcon}</div>
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
    el.classList.toggle("is-playing", !!(active && isPlaying));
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
    <h3>Instalar / Acceso directo</h3>
    <p>Agregá Radio Argentina a la pantalla de inicio del celular o al escritorio de la PC.</p>
    <button class="timer-btn" id="btnOpenInstall" style="margin-top:8px;width:100%;background:linear-gradient(135deg,#1e90ff,#0a6ad4);border:none;color:#fff">⬇ Instalar / Acceso directo</button>
    <h3>Volumen del sistema</h3>
    <p>Usa los botones de volumen de tu teléfono o PC para ajustar el volumen general.</p>
    <h3>Calidad</h3>
    <p>La mayoría de los streams se reproducen en la mejor calidad disponible (128–192 kbps).</p>
    <h3>Datos móviles</h3>
    <p>El streaming consume aproximadamente 60–90 MB por hora.</p>
  `);
  const btn = document.getElementById("btnOpenInstall");
  if (btn) btn.addEventListener("click", () => {
    closeSide();
    if (window.openShortcutDialog) window.openShortcutDialog();
  });
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

[playerEQ, playerDirect].forEach(el => {
  el.addEventListener("playing", () => { if (el === player) setPlayingUI(true); });
  el.addEventListener("pause", () => { if (el === player && !starting) setPlayingUI(false); });
  el.addEventListener("error", () => {
    // mientras se está conectando, playStation decide si prueba el respaldo
    if (el !== player || starting) return;
    setPlayingUI(false);
    connText.textContent = "Error de conexión";
    bitrateEl.textContent = "—";
  });
});

/* Keyboard */
document.addEventListener("keydown", e => {
  if (e.target.tagName === "INPUT") return;
  if (e.code === "Space") { e.preventDefault(); togglePlay(); }
  if (e.key === "ArrowRight") stepStation(1);
  if (e.key === "ArrowLeft") stepStation(-1);
});

/* Init */
if (window.matchMedia("(max-width: 899px)").matches) {
  // en el celular el visualizador es más ancho: más barritas a los costados del botón de play
  for (let i = visualizer.children.length; i < 40; i++) {
    const b = document.createElement("div");
    b.className = "bar";
    visualizer.appendChild(b);
  }
}
buildEqUI();
renderList();
updateDial(null);
console.log("Radio Argentina ready, stations:", STATIONS.length);


/* ============================================================
   Acceso directo / Instalar (PC + celular)
   ============================================================ */
const shortcutBtn = document.getElementById("shortcutBtn");
const shortcutDialog = document.getElementById("shortcutDialog");
const shortcutNote = document.getElementById("shortcutNote");
const shortcutMsg = document.getElementById("shortcutMsg");
const wayPc = document.getElementById("wayPc");
const wayPhone = document.getElementById("wayPhone");
const dlShortcut = document.getElementById("dlShortcut");
const installPc = document.getElementById("installPc");
const installPhone = document.getElementById("installPhone");

let deferredPrompt = null;

const ua = navigator.userAgent || "";
const isIOS = /iphone|ipad|ipod/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
const isAndroid = /android/i.test(ua);
const isMobileUA = isIOS || isAndroid;
const isMac = !isIOS && /mac/i.test(navigator.platform || "");
const isLinux = !isMobileUA && /linux|x11/i.test(ua);
const pcOS = isMac ? "mac" : isLinux ? "linux" : "windows";
const isStandalone = matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;

const SHORTCUTS = {
  windows: {
    ext: "url",
    mime: "application/internet-shortcut",
    build: (u) => "[InternetShortcut]\r\nURL=" + u + "\r\nIconIndex=0\r\n"
  },
  mac: {
    ext: "webloc",
    mime: "application/xml",
    build: (u) => '<?xml version="1.0" encoding="UTF-8"?>\n' +
      '<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n' +
      '<plist version="1.0"><dict><key>URL</key><string>' + u.replace(/&/g, "&amp;") + "</string></dict></plist>\n"
  },
  linux: {
    ext: "desktop",
    mime: "application/x-desktop",
    build: (u) => "[Desktop Entry]\nVersion=1.0\nType=Link\nName=Radio Argentina\nComment=Radios de Argentina en vivo\nURL=" + u + "\n"
  }
};

function appUrl() {
  const u = new URL("./", location.href);
  u.hash = "";
  u.search = "";
  return u.href;
}

function showShortcutMsg(text) {
  if (shortcutMsg) shortcutMsg.textContent = text || "";
}

function downloadShortcut(os) {
  const def = SHORTCUTS[os];
  if (!def) return;
  const name = "Radio Argentina." + def.ext;
  const blob = new Blob([def.build(appUrl())], { type: def.mime + ";charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  showShortcutMsg("Archivo descargado. Buscalo en Descargas y arrastralo al escritorio.");
}

function refreshShortcutUi() {
  if (!shortcutDialog) return;
  // show/hide install buttons when beforeinstallprompt available
  const canInstall = !!deferredPrompt;
  if (installPc) installPc.hidden = !canInstall || isMobileUA;
  if (installPhone) installPhone.hidden = !canInstall || !isMobileUA;

  // highlight current platform
  if (wayPc && wayPhone) {
    wayPc.querySelector(".tag") && (wayPc.querySelector(".tag").hidden = isMobileUA);
    wayPhone.querySelector(".tag") && (wayPhone.querySelector(".tag").hidden = !isMobileUA);
  }
  if (dlShortcut) dlShortcut.dataset.os = pcOS;

  const insecure = location.protocol === "file:" || !window.isSecureContext;
  if (shortcutNote) {
    shortcutNote.hidden = !insecure;
    shortcutNote.textContent = insecure
      ? "Estás abriendo la app desde un archivo local o sin https. El acceso directo de la PC funciona, pero para instalarla en el celular tiene que estar publicada en una dirección https."
      : "";
  }
}

async function installApp() {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  deferredPrompt = null;
  showShortcutMsg(outcome === "accepted" ? "Listo, la app se está instalando." : "");
  refreshShortcutUi();
}

function openShortcutDialog() {
  showShortcutMsg("");
  refreshShortcutUi();
  if (shortcutDialog.showModal) shortcutDialog.showModal();
  else shortcutDialog.setAttribute("open", "");
}

function closeShortcutDialog() {
  if (shortcutDialog.close) shortcutDialog.close();
  else shortcutDialog.removeAttribute("open");
}

if (shortcutBtn) {
  shortcutBtn.hidden = isStandalone;
  shortcutBtn.addEventListener("click", () => {
    // Celular con instalación disponible: se abre directo el cuadro nativo. Si no, se muestran los pasos.
    if (isMobileUA && deferredPrompt) installApp();
    else openShortcutDialog();
  });
}
if (document.getElementById("shortcutClose")) {
  document.getElementById("shortcutClose").addEventListener("click", closeShortcutDialog);
}
if (shortcutDialog) {
  shortcutDialog.addEventListener("click", (e) => {
    if (e.target === shortcutDialog) closeShortcutDialog();
  });
}
if (dlShortcut) {
  dlShortcut.addEventListener("click", () => downloadShortcut(dlShortcut.dataset.os || pcOS));
}
if (shortcutDialog) {
  shortcutDialog.querySelectorAll(".alt-links [data-os]").forEach((b) => {
    b.addEventListener("click", () => downloadShortcut(b.dataset.os));
  });
}
if (installPc) installPc.addEventListener("click", installApp);
if (installPhone) installPhone.addEventListener("click", installApp);

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  refreshShortcutUi();
  if (shortcutBtn) shortcutBtn.hidden = false;
});

window.addEventListener("appinstalled", () => {
  deferredPrompt = null;
  if (shortcutBtn) shortcutBtn.hidden = true;
  refreshShortcutUi();
});

/* Service Worker */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch((err) => {
    console.warn("SW registration failed:", err);
  });
}

/* Also expose openShortcutDialog for Opciones panel */
window.openShortcutDialog = openShortcutDialog;
