// Write your solution in this file!
var customerName = 'bob';
const leastFavoriteCustomer = 'clark'

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = `not ${customerName.toLowerCase()}`
}

function overwriteBestCustomer() {
  bestCustomer = `maybe ${customerName.toLowerCase()}`
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = `maybe ${customerName.toLowerCase()}`
}