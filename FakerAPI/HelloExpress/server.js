const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker')

const createUserObj = () => ({
    _id: Math.floor(Math.random() * 10000).toString(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    passsword: faker.internet.password(),
})

const createCompanyObj = () => ({
    _id:  Math.floor(Math.random() * 10000).toString(),
    name: faker.company.name(),
    address: {
        street: faker.location.street(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipcode: faker.location.zipCode(),
        country: faker.location.country(),
    },
})

app.get("/api/users/new", (req, res) => {
    const newUser = createUserObj()
    res.json(newUser)
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompanyObj()
    res.json(newCompany)
})

app.get("/api/user/company", (req, res) => {
    const newUser = createUserObj()
    const newCompany = createCompanyObj()
    const responseObject = {
        user: newUser,
        company: newCompany,
    }
    res.json(responseObject)
})

app.listen(port, () => console.log(`express server running on port ${port}`))