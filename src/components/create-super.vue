<template>
  <v-container>
    <v-row class="my-3" justify="space-around">
      <v-col lg="4" md="4">
        <h2>Nombre</h2>
      </v-col>
      <v-col lg="4" md="4">
        <v-text-field
          v-model="nombreSuper"
          label="nombre del super"
          solo
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="my-3" justify="space-around">
      <v-col lg="4" md="4">
        <h2>Calificacion</h2>
      </v-col>
      <v-col lg="4" md="4">
        <v-text-field
          v-model="calificacionSuper"
          label="calificacion"
          solo
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="my-3" justify="space-around">
      <v-col lg="4" md="4">
        <h2>Puesto</h2>
      </v-col>
      <v-col lg="4" md="4">
        <v-text-field v-model="puestoSuper" label="rango" solo></v-text-field>
      </v-col>
    </v-row>
    <v-row class="my-3" justify="space-around">
      <v-col lg="4" md="4">
        <h2>Descripcion</h2>
      </v-col>
      <v-col lg="4" md="4">
        <v-text-field
          v-model="desSuper"
          label="descripcion"
          solo
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="my-3" justify="space-around">
      <v-col lg="4" md="4">
        <h2>Debilidades</h2>
      </v-col>
      <v-col lg="4" md="4">
        <v-select
          solo
          v-model="debilidadesSuper"
          :items="states"
          label="Select"
          multiple
          chips
          hint="What are the target regions"
          persistent-hint
        ></v-select>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col lg="2" md="2" cols="2">
        <v-btn color="#0fae8e" style="color: white" @click="crearSuper">
          Crear Super
        </v-btn>
      </v-col>
      <v-col lg="2" md="2" cols="2">
        <v-btn color="#6f4ef6" style="color: white" @click="cancelarSubmit">
          Cancelar
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { SuperHeroe } from "@/store/models/superhero-interface";
import axios from "axios";
import HeroesStore from "@/store/models/superheroe";
import { getModule } from "vuex-module-decorators";

@Component({
  name: "CreateSuper",
})
export default class CreateSuper extends Vue {
  heroesStore = getModule(HeroesStore, this.$store);
  nombreSuper = "";
  calificacionSuper = null;
  puestoSuper = "";
  desSuper = "";
  debilidadesSuper = [];

  states = [
    "Ryan",
    "Maeve",
    "Butcher",
    "Fuego",
    "Aire",
    "Agua",
    "Acido",
    "Vapor",
  ];

  crearSuper() {
    const newHeroe: SuperHeroe = {
      nombre: this.nombreSuper,
      calificacion: this.calificacionSuper,
      puesto: this.puestoSuper,
      descripcion: this.desSuper,
      debilidades: this.debilidadesSuper,
    };

    axios({
      method: "POST",
      url: "https://vought-international-default-rtdb.firebaseio.com/heroes.json",
      data: JSON.stringify(newHeroe),
    }).then(() => {
      
      this.heroesStore.setAvailableHeroes([newHeroe]);
      this.$router.push("/");
    });
  }

  cancelarSubmit() {
    this.$router.push("/");
  }
}
</script>

<style>
h1,
h2,
h3,
h4,
h5,
h6 {
  color: white;
}
</style>
