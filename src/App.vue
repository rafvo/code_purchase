<template>
  <main class="wrapper">
    <v-app>
      <v-main class="mx-5">
        <CodePurchaseForm />
      </v-main>
    </v-app>
  </main>
</template>

<script>
import CodePurchaseForm from "@/components/forms/CodePurchaseForm.vue";

export default {
  name: "App",
  components: {
    CodePurchaseForm,
  },
  data: () => ({}),
};
</script>

<style>
#app {
  background: #fafafa;
}
</style>