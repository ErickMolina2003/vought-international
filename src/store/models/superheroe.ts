import { SuperHeroe } from "@/store/models/superhero-interface";
import { Module, Mutation, VuexModule } from "vuex-module-decorators";

interface SuperheroeState {
  superheroes: SuperHeroe[];

  setAvailableHeroes(heroes: SuperHeroe[]): void;
}

@Module({namespaced: true, name: "HeroesStore" })
class HeroesStore extends VuexModule implements SuperheroeState {
    superheroes: SuperHeroe[] = [];

  @Mutation
  setAvailableHeroes(heroes: SuperHeroe[]): void {
    this.superheroes.push(...heroes);
  }

}

export default HeroesStore;
