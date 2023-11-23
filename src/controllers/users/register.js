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

        await knex("usuarios")
            .insert({
                nome,
                email,
                senha: hashedPassword,
            });

        return res.status(201).json('Usuário cadastrado com sucesso.')
    } catch (error) {
        return res.status(500).json('Erro no servidor.')
    }
};

module.exports = registerUser;
