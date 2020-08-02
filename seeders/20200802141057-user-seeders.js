"use strict";
const bcrypt = require("bcrypt");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            "users",
            [
                {
                    name: "arfan",
                    profession: "Back End",
                    role: "admin",
                    email: "arfan.jadul10@gmail.com",
                    password: await bcrypt.hash("123qweasd", 10),
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    name: "golang",
                    profession: "Back End",
                    role: "student",
                    email: "golang@gmail.com",
                    password: await bcrypt.hash("123qweasd", 10),
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("users", null, {});
    },
};
