const { faker } = require('@faker-js/faker')
const express = require("express")

const app = express()
const port = 8000

const createUserObj = () => ({
    _id: Math.floor(Math.random() * 10000).toString(),
    firstName: faker.user.firstName(),
    lastName: faker.user.lastName(),
    phoneNumber: faker.user.phoneNumber(),
    email: faker.user.email(),
    passsword: faker.user.password(),
})

const createCompanyObj = () => ({
    _id:  Math.floor(Math.random() * 10000).toString(),
    name: faker.company.name(),
    address: {
        street: faker.company.street(),
        city: faker.company.city(),
        state: faker.company.state(),
        zipcode: faker.company.zipCode(),
        country: faker.company.country(),
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