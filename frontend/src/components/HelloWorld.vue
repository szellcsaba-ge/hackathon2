<template>
  <div class="hello">
    <div class="title">
      <img class="logo" src="../assets/logo.png" height="150">
      <h1 class="h1">
        {{ message }}
      </h1>
    </div>
    <GmapMap
      v-if="places.length > 0"
      :center="center"
      :zoom="16"
      map-type-id="roadmap"
      style="width: 100%; height: 500px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in places"
        :position="m.position"
        :clickable="true"
        @click="toggleInfoWindow(m, index)"
      />
      <GmapInfoWindow
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
        @closeclick="closeInfoWindow()"
      >
        {{ infoContent }}
      </GmapInfoWindow>
    </GmapMap>
    <div
      v-if="currentPlace && currentPlace.infoText"
    >
      <el-table
        :data="[currentPlace]"
      >
        <el-table-column
        prop="infoText"
        label="Név"
        width="180">
        </el-table-column>
        <el-table-column
        prop="address"
        label="address"
        width="300">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script src="./HelloWorld.js"></script>

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
