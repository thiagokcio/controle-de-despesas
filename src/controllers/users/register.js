const knex = require('../../../services/knex');
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        const userAlreadyExists = await knex("usuarios")
            .where({ email })
            .first();

        if (userAlreadyExists) {
            return res
                .status(400)
                .json("Já existe um usuário cadastrado com esse email.");
        }

        const hashedPassword = await bcrypt.hash(senha, 10);

        const insertUser = await knex("usuarios")
            .insert({
                nome,
                email,
                senha: hashedPassword,
            })
            .returning("*");

        const { senha: _, ...user } = insertUser[0]

        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json('Erro no servidor.')
    }
};

module.exports = registerUser;
