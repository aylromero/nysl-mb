var mapa = document.getElementById("mapa");

Vue.component("boton", {
  props: ["team1", "team2", "date", "month", "location", "time", "url", "id"],
  methods: {
    showLandscapeMap(url, location, time) {
      mapa.innerHTML =
        `<iframe src='` +
        url +
        `' allowfullscreen></iframe><br />
                        <b class="text-left col">` +
        location +
        ` school</b>
                        <b class="text-left col">` +
        time +
        `</b>`;
    }
  },
  template: `
              <div class="content">
                <button v-on:click="showLandscapeMap(url, location, time)"
                 class="buttom btn btn-link" type="button" data-toggle="collapse" :data-target="'#match'+month+id"
                  aria-expanded="false" :aria-controls="'#match'+month+id">
                  <div class="row">
                    <b class="text-left col">
                      {{ team1 }} vs {{ team2 }}
                    </b>
                    <b class="text-left col">{{ date }}</b>
                  </div>
                </button>
                </div>
  `
});

Vue.component("collapse", {
  props: ["location", "time", "url", "month", "id"],
  template: `
              <div class="collapse" :id="'match'+month+id">
                <div class="card card-body">
                  <div class="row">
                    <b class="text-left col">{{ location }} school</b>
                    <b class="text-left col">{{ time }}</b>
                  </div>
                  <br />
                  <iframe id="mapa" :src="url" allowfullscreen></iframe>
                </div>
              </div>
  `
});
var app = new Vue({
  el: "#app",
  data: {
     view: 'home',
    matches: matches
  },
  methods: {
  }
  
});