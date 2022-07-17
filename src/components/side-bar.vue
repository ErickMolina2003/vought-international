<template>
  <v-card>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      app
      class="side-bar-color"
      @click="applyStyle"
    >
      <v-list-item class="px-2 my-3">
        <v-list-item>
          <v-img
            src="../assets/Vought_International_Logo_.webp"
            width="3rem"
            height="3rem"
          ></v-img>
        </v-list-item>
      </v-list-item>

      <v-divider class="mx-4" style="background-color:red"></v-divider>
      <v-spacer></v-spacer>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="applyStyle"
        >
          <v-list-item-icon>
            <v-icon class="style">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="style">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "SideBarMenu",
})
export default class SideBarMenu extends Vue {
  drawer = true;
  items = [{ title: "SuperHeroes", icon: "mdi-account" }];
  mini = false;

  counterStyle = false;

  applyStyle() {
    this.$route.path != '/' ?  this.$router.push("/") : '';
    this.counterStyle
      ? (this.counterStyle = false)
      : (this.counterStyle = true);
    const elementsToStyle = document.querySelectorAll(".style");
    if (this.counterStyle) {
      elementsToStyle.forEach((e) => {
        e.classList.add("active");
      });
      return;
    }
    elementsToStyle.forEach((e) => {
      e.classList.remove("active");
    });
  }
}
</script>

<style scoped>
.side-bar-color {
  background-color: #181b32;
}

body,
a,
p,
.v-list-item__title,
.v-icon {
  color: #5a5b6e;
  font-size: 1.5rem !important;
}

.active {
  color: #0ed4c1;
}
</style>
