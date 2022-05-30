<template>
  <div>
    <ValidationProvider v-slot="{ errors }" :name="label" :rules="rules">
      <FieldLabel :label="label" :required="requiredLabel" />
      <CheckboxList
        v-model="Checked"
        :list="list"
        unique-key-prop="id"
        label-prop="name"
      />
      <VeeValidateErrorMessage :vv-errors="errors" />
    </ValidationProvider>
  </div>
</template>

<script>
import CodePurchaseLanguages from "@/domain/models/codePurchaseLanguages";
import CheckboxList from "./CheckboxList.vue";
import VeeValidateErrorMessage from "@/components/veeValidate/VeeValidateErrorMessage";
import FieldLabel from "@/components/label/FieldLabel";

export default {
  components: {
    CheckboxList,
    VeeValidateErrorMessage,
    FieldLabel,
  },
  props: {
    label: {
      type: String,
      default: "Quais linguagens você deseja:",
      required: false,
    },
    requiredLabel: {
      type: Boolean,
      default: false,
      required: false,
    },
    rules: {
      type: String,
      default: "",
      required: false,
    },
  },
  data() {
    return {
      list: [],
      checked: [],
    };
  },
  computed: {
    Checked: {
      get() {
        return this.checked;
      },
      set(payload) {
        this.checked = payload;
        this.emitInput();
      },
    },
  },
  methods: {
    emitInput() {
      this.$emit("input", this.checked);
    },
  },
  created() {
    this.list = CodePurchaseLanguages.getAll();
  },
};
</script>

<style>
</style>
