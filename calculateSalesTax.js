/*
  calculateSalesTax()
  Loop over companySalesData
    Init the object that will contain the totals with the name values in companySalesData and totals in 0.
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
  var total = 0;
  for (position in arr) {
    if (!arr.hasOwnProperty(position)) {
        //The current property is not a direct property of arr
        continue;
      }
      total += Number(arr[position]);
  }
  return total;
}

// This function will receive a province and a total and it will calculate and return the sales tax
function getTax(province, total) {
  var theRate = salesTaxRates[province];
  var taxTotal = 0;

  return taxTotal = Number(theRate) * Number(total);
}

function calculateSalesTax(salesData, taxRates) {
  var salesTaxTotals = {};
  var tempSalesTotal = 0;
  var tempTaxesTotal = 0;

  for (var dataPoint in salesData) {
    if (!salesData.hasOwnProperty(dataPoint)) {
        //The current property is not a direct property of salesData
        continue;
    }
    // Init the object with company name values and total values as zero.
    salesTaxTotals[salesData[dataPoint].name] = { totalSales: 0, totalTaxes: 0};
  }

  for (var dataPoint in salesData) {
    if (!salesData.hasOwnProperty(dataPoint)) {
        //The current property is not a direct property of salesData
        continue;
    }
    // Call getTotal to get the total of the datapoint and add it up to the corresponding incremental value in the totals object.
    tempSalesTotal = getTotal(salesData[dataPoint].sales) + salesTaxTotals[salesData[dataPoint].name].totalSales;
    // Call getTax to get the tax calculation for this datapoint and add it up to the corresponding incremental value in the totals object.
    tempTaxesTotal = getTax(salesData[dataPoint].province, getTotal(salesData[dataPoint].sales)) + salesTaxTotals[salesData[dataPoint].name].totalTaxes;
    // Update the object values
    salesTaxTotals[salesData[dataPoint].name] = { totalSales: tempSalesTotal, totalTaxes: tempTaxesTotal };

  }

  return salesTaxTotals;

}


var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

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