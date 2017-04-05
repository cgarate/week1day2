/*
  calculateSalesTax()
  Loop over companySalesData
    Init the object that will contain the totals with the name values in companySalesData.
  End Loop

  Loop over CompanySalesData
    Call getTotal and increment the values of the sales totals.
    Call getTax and increment the values of the tax totals
  End Loop

*/

var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

// This function will add up the sales and return a total. It will receive an array and add up its values.
function getTotal(arr) {

}

// This function will receive a province and a total and it will calculate and return the sales tax
function getTax(province, total) {

}

function calculateSalesTax(salesData, taxRates) {
  var salesTaxTotals = {};

}


var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/