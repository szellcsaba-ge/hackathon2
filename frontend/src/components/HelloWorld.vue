<template>
  <div class="hello">
    <div class="title">
      <img class="logo" src="../assets/logo.png" height="150">
      <h1 class="h1">
        {{ msg }}
      </h1>
    </div>
    <GmapMap
      :center="center"
      :zoom="16"
      map-type-id="roadmap"
      style="width: 100%; height: 500px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        @click="toggleInfoWindow(m, index)"
      />
      <GmapInfoWindow
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
        @closeclick="infoWinOpen=false"
      >
        {{ infoContent }}
      </GmapInfoWindow>
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      center: {
        lat: 47.540252,
        lng: 19.070899,
      },
      msg: 'Lunch finder',
      markers: [
      ],
      infoContent: '',
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
    };
  },
  mounted: function () {
    this.loadPlaces();
  },
  methods: {
    toggleInfoWindow: function (marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoContent = marker.infoText;

      if (this.currentMidx === idx) {
        this.infoWinOpen = !this.infoWinOpen;
      } else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
    loadPlaces: function () {
      this.$http.get('http://localhost/api/v1/sample.json').then((data, status, request) => {
        for (let place of data.body.places) {
          this.markers.push({
            position: { lat: place.latitude, lng: place.longitude },
            infoText: place.place_name
          })
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.title {
  display: flex;
  justify-content: center;
  margin: 1em;
}
.h1 {
  margin: auto 0;
  font-family: Arial Black, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 6em;
  color: rgba(0, 0, 0, 1);
}
.logo {
  margin: auto 30px;
}
</style>
