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
      center: { lat:47.540252, lng:19.070899 },
      msg: 'Lunch finder',
      markers: [
        {
          position: { lat: 47.540252, lng: 19.070899 },
          infoText: "Itt a Starschema!"
        }
      ],
      infoContent: '',
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
    };
  },
  methods: {
    toggleInfoWindow: function (marker, idx) {
      console.log(marker);
      this.infoWindowPos = marker.position;
      this.infoContent = marker.infoText;

      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker idx
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    }
  }
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
