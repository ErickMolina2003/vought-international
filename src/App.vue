<template>
  <v-app>
    <side-bar-menu></side-bar-menu>
    <v-main class="main-v">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import SideBarMenu from "../src/components/side-bar.vue";
import axios from "axios";
import { getModule } from "vuex-module-decorators";
import HeroesStore from "@/store/models/superheroe";
import { Component } from "vue-property-decorator";
import { SuperHeroe } from "@/store/models/superhero-interface";

@Component({
  components: {
    SideBarMenu,
  },
})
class App extends Vue {
  heroesStore = getModule(HeroesStore, this.$store);

  created() {
    axios({
      method: "GET",
      url: "https://vought-international-default-rtdb.firebaseio.com/heroes.json",
      responseType: "stream",
    }).then((response) => {
      if (response.status == 200) {
        const results: SuperHeroe[] = [];
        for (const id in response.data) {
          results.push(response.data[id]);
        }
        this.heroesStore.setAvailableHeroes(results);
      }
    });
  }
}

export default App;
</script>

<style scoped>
.main-v {
  background-color: #070e27 !important;
}
</style>
