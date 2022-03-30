const { User } = require("../models");

const userData = [
    {
        username: "test",
        email: "test@test.com",
        password: "abc123",
        name: "Test Testerson",
        height: 72.5,
        weight: 200
    }
];

const seedUser = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUser;