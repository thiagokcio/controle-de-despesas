const knex = require("../../../services/knex");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const userFound = await knex("usuarios")
            .where({ email })
            .first();

        if (!userFound) {
            return res
                .status(404)
                .json("Email e/ou senha incorretos.");
        }

        const validatePassword = await bcrypt.compare(senha, userFound.senha);

        if (!validatePassword) {
            return res
                .status(400)
                .json("Email e/ou senha incorretos.");
        }

        const token = jwt.sign(
            { id: userFound.id }, 
            process.env.SENHA_JWT, 
            {expiresIn: "1h"}
        );

        return res.status(200).json({ token });
        
    } catch (error) {
        return res.status(500).json("Erro no servidor.");
    }
};

module.exports = loginUser;
