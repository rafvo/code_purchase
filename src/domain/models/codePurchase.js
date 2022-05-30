import CodePurchaseLanguages from "./codePurchaseLanguages";

export default class CodePurchase {
  constructor({
    id = "",
    totalCodes = 0,
    observations = "",
    codePurchaseLanguages = [],
  } = {}) {
    this.id = id;
    this.totalCodes = totalCodes;
    this.observations = observations;
    this.codePurchaseLanguages = codePurchaseLanguages;
  }

  /*seta as propriedades da instância com a validação*/
  create(json = null) {
    var model = CodePurchase.fromJson(json);

    Object.keys(json).forEach((key) => {
      this[key] = model[key];
    });
  }

  static fromJson(json = null) {
    var model = new CodePurchase(json);

    model.id = json["id"] ? parseInt(json["id"]) : "";
    model.totalCodes = json["totalCodes"] ? parseInt(json["totalCodes"]) : 0;
    model.observations = json["observations"] ? json["observations"] : null;

    if (json["codePurchaseLanguages"]) {
      model.codePurchaseLanguages = json["codePurchaseLanguages"].map((e) =>
        CodePurchaseLanguages.fromJson(e)
      );
    }

    return model;
  }
}
