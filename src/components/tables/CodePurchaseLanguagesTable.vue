<template>
  <div>
    <v-simple-table v-if="list && list.length">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Linguagem de Programação</th>
            <th class="text-left">Quantidade por Linguagem</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in list" :key="key">
            <td>{{ item.name }}</td>
            <td>{{ validCodesByLanguage }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total de Códigos</td>
            <td>
              {{ total }}
            </td>
          </tr>
        </tfoot>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
      required: false,
    },
    codesByLanguage: {
      type: [String, Number],
      default: 1,
      required: false,
    },
  },
  computed: {
    codesByLanguageIsNaN() {
      return isNaN(this.codesByLanguage);
    },
    validCodesByLanguage() {
      return !this.codesByLanguageIsNaN ? this.codesByLanguage : 0;
    },
    total() {
      return this.list ? this.validCodesByLanguage * this.list.length : 1;
    },
  },
};
</script>

<style>
</style>