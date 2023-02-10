const { response } = require("express");
const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000


app.use(express.json());
app.use(express.urlencoded({extended:true}) );

// Faker generating
const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};

const createUser = () => {
    const newUser ={
        userpass: faker.internet.password(),
        useremail: faker.internet.email() ,
        userphone: faker.phone.phoneNumber(),
        userlname: faker.name.lastName(),
        userfname: faker.name.firstName()
    };
    return newUser;
};
    
const createCompany = () => {
    const newCompany ={
        comname:faker.company.companyName(),
        comadress:{
            street:faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
            contry: faker.address.country(),
        }};
    return newCompany;
};







const Companies =[]
const Users = []

// show all exiting User
app.get('/api/allUser',(request,response) => {
    response.json(Users)
})
app.get('/api/allCompanies',(request,response) => {
    response.json(Companies)
})
app.get('/api/allCompanies/allUser',(request,response) => {
    response.json(Companies)
    response.json(Users)
})



// Create New User 
app.post('/api/newUser',(request,response) =>{
    console.log("$$$$$$request.body$$$$$$",request.body)
    const newUser = request.body
    Users.push(newUser)
    response.json(Users)
})
app.post('/api/newUser1',(request,response) =>{
    const newUser = createUser();
    console.log(newUser);
    Users.push(newUser)
    response.json(Users)
})
app.post('/api/newCompanies',(request,response) =>{
    const newCompanies = createCompany();
    console.log(newCompanies);
    Companies.push(newCompanies)
    response.json(newCompanies)
})
app.post('/api/newUser/newCompanis',(request,response) =>{
    const newUser = createUser();
    const newCompanies = createCompany();
    console.log(newCompanies);
    console.log(newUser);
    Users.push(newUser)
    Companies.push(newCompanies)
    response.json(Users)
    response.json(Companies)
})



// show User by Id 
app.get('/api/selectUser/:id',(request,response) =>{
    console.log(request.params.id);
    let id = request.params.id
    Users.forEach((User)=> {
        if(User.id == id){
            response.json({User})
        }
    })
    response.json({message:"None Founded"})
})

// update by id
app.put('/api/updateUser/:id', (request,response) => {
    console.log('update')
    let id = request.params.id
    console.log('id',id)
    let newUserlist = Users.map((user) => {
        if(user.id == id){
            user = request.body
        }
        return user
    })
    // Users = newUserlist
    console.log('%%new user list%%',newUserlist)
    response.json(newUserlist)
})


app.listen(port, () => console.log(`Listening on Port: ${port}`));