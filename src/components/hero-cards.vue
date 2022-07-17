<template>
  <v-container>
    <v-row class="my-2">
      <v-col>
        <h1>SuperHeroes</h1>
      </v-col>
    </v-row>
    <v-row justify="space-between">
      <v-col lg="2" md="3">
        <h3>Hay {{ heroes.length }} superheroes</h3>
      </v-col>
      <v-col lg="2" md="3">
        <v-btn color="#6f4ef6" style="color: white" @click="createSuper">
          <v-icon class="px-1">mdi-plus</v-icon>
          Agregar Super
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="cards">
      <v-col v-for="heroe in heroes" :key="heroe.nombre">
        <v-card class="mx-auto my-12" max-width="374" color="#252d4a">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="250"
            :src="require('../assets/' + heroe.nombre + '.webp')"
          ></v-img>

          <v-card-title class="text">{{ heroe.nombre }}</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="parseFloat(heroe.calificacion)"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">{{ heroe.calificacion }} (413)</div>
            </v-row>

            <div class="my-4 text-subtitle-1 text">{{ heroe.puesto }}</div>

            <div class="text">
              {{ heroe.descripcion }}
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title class="text">Debilidades</v-card-title>

          <v-card-text>
            <v-chip-group
              class="d-flex"
              active-class="deep-purple accent-4 white--text"
              column
            >
              <v-chip v-for="debilidad in heroe.debilidades" :key="debilidad">
                <a style="color: black">{{debilidad}}</a>
              </v-chip>
            </v-chip-group>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import HeroesStore from "@/store/models/superheroe";

@Component({
  name: "HeroCard",
})
export default class HeroCard extends Vue {
  heroesStore = getModule(HeroesStore, this.$store);

  cantidadHeroes = 3;

  pictures = [
    "A-Train",
    "Butchet",
    "Homelander",
    "Maeve",
    "Noir",
    "SoldierBoy",
  ];

  heroes = this.heroesStore.superheroes;

  createSuper() {
    this.$router.push("/create-super");
  }

  getPicture(nombre: string) {
    if (this.pictures.includes(nombre)) return `../assets/${nombre}.webp`;
    return `../assets/Maeve.webp`;
  }
}
</script>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6,
.text {
  color: white;
}
</style>
