<template>
  <div>
    <ValidationObserver ref="observer" v-slot="{ invalid }">
      <v-form ref="form">
        <v-card class="mx-auto my-12">
          <v-list-item class="sticky-top border-bottom">
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                Formulário para compra de código
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <ConfirmDialog
                @confirm="insert"
                button-text="Comprar"
                max-width="900px"
                message="Tem Certeza que deseja efetuar a compra?"
                confirm-action="Comprar"
                :loading="inserting"
                :validate-before-opening="invalid"
                @beforeShow="validate"
              >
                <v-row>
                  <v-col>
                    <CodePurchaseItem :code-purchase="codePurchase" />
                  </v-col>
                </v-row>
              </ConfirmDialog>
            </v-list-item-action>
          </v-list-item>

          <v-card-text>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <CodePurchaseLanguagesCheckbox
                  v-model="codePurchase.codePurchaseLanguages"
                  rules="required"
                  required-label
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" xs="12" sm="12" md="3">
                <div class="d-flex flex-direction-row">
                  <CodePurchaseTotal
                    v-model="codePurchase.totalCodes"
                    :bind-value="codePurchase.totalCodes"
                    rules="required"
                    required-label
                  />
                </div>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-textarea
                  v-model="codePurchase.observations"
                  :value="codePurchase.observations"
                  filled
                  label="Observações"
                  placeholder="Alguma dúvida? Recomendação?"
                  auto-grow
                />
              </v-col>
            </v-row>
          </v-card-text>
          <!-- <pre>
            {{ codePurchase }}
          </pre> -->
        </v-card>
      </v-form>
    </ValidationObserver>
  </div>
</template>

<script>
import CodePurchase from "@/domain/models/codePurchase";
import CodePurchaseLanguagesCheckbox from "@/components/fields/CodePurchaseLanguagesCheckbox.vue";
import CodePurchaseTotal from "@/components/fields/CodePurchaseTotal.vue";
import ConfirmDialog from "@/components/dialogs/ConfirmDialog.vue";
import CodePurchaseItem from "@/components/item/CodePurchaseItem.vue";

export default {
  components: {
    CodePurchaseLanguagesCheckbox,
    CodePurchaseTotal,
    ConfirmDialog,
    CodePurchaseItem,
  },
  props: {
    codePurchase: {
      type: Object,
      default: () => new CodePurchase(),
      required: false,
    },
  },
  data() {
    return {
      inserting: false,
    };
  },
  methods: {
    validate() {
      return this.$refs.observer.validate();
    },
    async insert() {
      var valid = await this.validate();
      if (!valid) return;

      this.inserting = true;
      setTimeout(() => {
        this.$toast.success("Compra efetuada com sucesso!", {
          timeout: 2000,
        });
        this.reset();
        this.inserting = false;
      }, 1000);
    },
    reset() {
      this.$refs.form.reset();

      this.$nextTick(() => {
        this.$refs.observer.reset();
      });
    },
  },
};
</script>

<style scoped>
.sticky-top {
  top: 0;
  position: sticky !important;
  height: 100% !important;
  background: #fff !important;
  z-index: 3000;
}

.border-bottom {
  border-bottom: 1px solid #fafafa;
}
</style>