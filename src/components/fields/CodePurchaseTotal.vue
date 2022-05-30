<template>
  <div>
    <ValidationProvider v-slot="{ errors }" :name="label" :rules="allRules">
      <v-text-field
        v-model="TotalCodes"
        :label="label"
        append-outer-icon="mdi-plus-circle"
        prepend-icon="mdi-minus-circle"
        :error-messages="errors"
        @click:prepend="decrement"
        @click:append-outer="increment"
        filled
      >
        <template v-slot:label>
          <FieldLabel :label="label" :required="requiredLabel" />
        </template>
      </v-text-field>
    </ValidationProvider>
  </div>
</template>

<script>
import FieldLabel from "@/components/label/FieldLabel";

export default {
  components: {
    FieldLabel,
  },
  props: {
    bindValue: {
      type: [String, Number],
      default: 0,
      required: false,
    },
    label: {
      type: String,
      default: "Quantos códigos de cada",
      required: false,
    },
    defaultRules: {
      type: String,
      default: "integer|min_value:1",
      required: false,
    },
    rules: {
      type: String,
      default: "",
      required: false,
    },
    requiredLabel: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  data() {
    return {
      totalCodes: 0,
    };
  },
  computed: {
    TotalCodes: {
      get() {
        return this.totalCodes;
      },
      set(payload) {
        if (!payload) payload = 0;
        this.totalCodes = payload;
        this.emitInput();
      },
    },
    /*validation rules*/
    listRules() {
      return [this.defaultRules, this.rules];
    },
    cleanListRules() {
      const results = this.listRules.filter((element) => {
        return element !== "";
      });

      return results;
    },
    allRules() {
      return this.cleanListRules.join("|");
    },
  },
  methods: {
    increment() {
      this.totalCodes++;
      this.emitInput();
    },
    decrement() {
      this.totalCodes--;
      this.emitInput();
    },
    emitInput() {
      this.$emit("input", this.totalCodes);
    },
  },
};
</script>

<style>
</style>