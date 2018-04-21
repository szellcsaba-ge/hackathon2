<template>
  <div class="hello">
    <div class="title">
      <img class="logo" src="../assets/logo.png" height="150">
      <h1 class="h1">
        {{ msg }}
      </h1>
    </div>
    <GmapMap
      :center="{lat:47.540252, lng:19.070899}"
      :zoom="16"
      map-type-id="terrain"
      style="width: 100%; height: 500px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Lunch finder',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
}
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
  font-family: Arial Black;
  font-size: 6em;
  color: rgba(0, 0, 0, 1);
}
.logo {
  margin: auto 30px;
}
</style>
