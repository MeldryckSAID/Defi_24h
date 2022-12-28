<script setup>
//import fonctions composable
import { linearData, sortCol } from "../composables/utilsApp.js";

//propriétés de la table
const propTable = defineProps({
  title: { type: String, default: "" }, //titre de la table
  fields: { type: Object, default: () => {} }, //Champs utilisés
  items: { type: Object, default: () => {} }, //Données utilisées
  itemsSvg: { type: Object, default: () => {} }, //Sauvegarde des données
  color: { type: String, default: "color:white;" }, // couleur du texte
});

//Emmission d'un message vers le compsant parent
//Modification des données
const emit = defineEmits(["filterTab"]);
const filterTab = (field) => {
  emit("tableFilter", field);
};
</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>

    <table class="table table-bordered table-striped" :style="color">
      <thead>
        <tr>
          <th v-for="field in fields" :key="field">
            <div class="input-group-text w-100 mb-2">
              <span class="col-10">{{ field.label }}</span>
              <span class="col-2">
                <i
                  v-if="field.sortable"
                  class="fa fa-sort fa-sm float-right"
                  @click="sortCol(items, field)"
                ></i>
              </span>
            </div>
            <div class="input-group">
              <span class="input-group-text">
                <i class="fa fa-filter fa-sm"></i>
              </span>
              <input
                class="form-control"
                @input="filterTab(field)"
                v-model="field.filter"
              />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item">
          <td v-for="field in fields" :key="field">
            {{ item[field.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.athena {
  font-family: "athenaregular";
}
.okiner {
  font-family: "made_okine_sans_personal_usRg";
}
.okinel {
  font-family: "made_okine_sans_personal_usLt";
}
</style>
