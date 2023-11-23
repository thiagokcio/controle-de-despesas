const express = require("express");
const registerUser = require("./controllers/users/register");
const loginUser = require("./controllers/users/login");
const validateRequest = require("./middleware/validateRequest");
const { userSchema, loginSchema } = require("./validations/userSchema");
const validateLoginUser = require("./middleware/validateLoginUser");
const getUserProfile = require("./controllers/users/getUserProfile");

const routes = express();

routes.post("/user", validateRequest(userSchema), registerUser);
routes.post("/login", validateRequest(loginSchema), loginUser);

routes.use(validateLoginUser);

routes.get("/profile", getUserProfile);

module.exports = routes;
