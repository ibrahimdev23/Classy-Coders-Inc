const Employees = require("./Employees");

class SalesPerson extends Employees {
  #totalSales = 0;

  constructor(name, position, clients) {
    super(name, position);
    this.clients = clients;
  }

  getSalesNumbers() {
    return this.#totalSales;
  }

  makeSale(amount) {
    this.#totalSales += amount;
  }
}

module.exports = {
  SalesPerson,
};
