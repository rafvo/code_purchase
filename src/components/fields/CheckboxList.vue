<template>
  <div>
    <v-checkbox
      v-for="(item, key) in list"
      :key="key"
      :value="item[valueKeyProp]"
      :true-value="item[valueKeyProp]"
      :false-value="falseValue"
      :label="item[labelProp]"
      @change="onChange($event, key)"
    ></v-checkbox>
  </div>
</template>

<script>
import Vue from "vue";
import _cloneDeep from "lodash/cloneDeep";

export default {
  props: {
    list: {
      type: Array,
      default: () => [{ id: 1, label: "opção 1" }],
      required: false,
    },
    valueKeyProp: {
      type: String,
      default: "id",
      required: false,
    },
    labelProp: {
      type: String,
      default: "label",
      required: false,
    },
    falseValue: {
      type: String,
      default: null,
      required: false,
    },
  },
  data() {
    return {
      checked: {},
    };
  },
  computed: {},
  methods: {
    onChange(payload, key) {
      if (payload == this.falseValue) this.remove(key);
      else this.add(key);
    },
    add(key) {
      const obj = _cloneDeep(this.list[key]);
      Vue.set(this.checked, key, obj);
      this.emitInput();
    },
    remove(key) {
      Vue.delete(this.checked, key);
      this.emitInput();
    },
    emitInput() {
      this.$emit("input", Object.values(this.checked));
    },
  },
};
</script>

<style>
</style>