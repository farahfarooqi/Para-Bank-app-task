/// <reference types="cypress" /> 

import LoanRequest from "../POM pages/Loan"
import Register from "../POM pages/Registration"
const credentials = require('../fixtures/data.json')
const ln = new Register();
const loan= new LoanRequest();

describe('Request Loan', () => {
  beforeEach(()=>{
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.url().should('eq','https://parabank.parasoft.com/parabank/index.htm')
    .and('contain','parabank.parasoft')
     cy.contains('Register').click()
     ln.setfirstname(credentials[0].Firstname)
      ln.setlastname(credentials[0].Lastname)
      ln.setaddress(credentials[0].Address)
      ln.setcity(credentials[0].City)
      ln.setstate(credentials[0].State)
      ln.setzipcode(credentials[0].Zipcode)
      ln.setphonenumber(credentials[0].Phonenumber)
      ln.setssn(credentials[0].SSN)
      // generate unique usernames
     let username = '';
      const characters = 'abcdefghijklmnopqrstuvwxyz';
      for (let i = 0; i < 8; i++) {
        username += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      ln.setusername(username)
      ln.setpassword(credentials[0].Password)
      ln.setrepeatepassword(credentials[0].repeatepassword)
      ln.clickonregister()
})

    it('Apply for loan', () => {
      loan.RequestLoan()
      loan.Setloanamount()
      loan.Setdownpayment()
      loan.Clickapplyloan()
      loan.Verifyloanapplysuccessfully()
      loan.Verifyloanapproval()
    })

    it('Apply for loan with empty fields', () => {
      loan.RequestLoan()
      loan.Clickapplyloan()
     // loan.Verifyloannotapplied()
    })

    
  })
