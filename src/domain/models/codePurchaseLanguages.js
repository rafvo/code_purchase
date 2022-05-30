export default class CodePurchaseLanguages {
  constructor({ id = "", name = "" } = {}) {
    this.id = id;
    this.name = name;
  }

  /*seta as propriedades da instância com a validação*/
  create(json = null) {
    var model = CodePurchaseLanguages.fromJson(json);

    Object.keys(json).forEach((key) => {
      this[key] = model[key];
    });
  }

  static fromJson(json = null) {
    var model = new CodePurchaseLanguages(json);

    model.id = json["id"] ? parseInt(json["id"]) : null;
    model.name = json["name"] ? json["name"] : null;

    return model;
  }

  static getAll(){
    const list = [
      { id: 1, name: 'Vue' },
      { id: 2, name: 'Java' },
      { id: 3, name: 'C/C++' },
      { id: 4, name: 'PHP' },
    ]

    return list.map((e) => CodePurchaseLanguages.fromJson(e))
  }
}
