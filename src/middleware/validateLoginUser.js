const knex = require("../../services/knex");
const jwt = require("jsonwebtoken");

const validateLoginUser = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json("Não autorizado.");
    }

    const token = authorization.split(" ")[1];

    try {
        const { id } = jwt.verify(token, process.env.SENHA_JWT);

        const userFound = await knex("usuarios").where({ id }).first();

        if (!userFound) {
            return res.status(404).json("Usuário não encontrado.");
        }

        const { senha, ...user } = userFound;

        req.user = user;

        next();
    } catch (error) {
        return res.status(401).json("Não autorizado.");
    }
};

module.exports = validateLoginUser;
