<template>
  <div>
    <CodePurchaseLanguagesTable
      :list="codePurchase.codePurchaseLanguages"
      :codesByLanguage="codePurchase.totalCodes"
    />
    <v-list-item>
      <v-list-item-avatar>
        <v-icon class="blue darken-1" dark>
          mdi-format-text-rotation-none
        </v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title v-text="'Observações'"></v-list-item-title>
        <v-list-item-subtitle
          :style="{
            'white-space': 'pre-wrap',
          }"
        >
          <p v-if="codePurchase.observations">
            {{ codePurchase.observations }}
          </p>
          <span v-else> Nenhuma Observação </span>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
import CodePurchase from "@/domain/models/codePurchase";
import CodePurchaseLanguagesTable from "@/components/tables/CodePurchaseLanguagesTable.vue";

export default {
  components: {
    CodePurchaseLanguagesTable,
  },
  props: {
    codePurchase: {
      type: Object,
      default: () => new CodePurchase(),
      required: false,
    },
  },
};
</script>

<style>
</style>