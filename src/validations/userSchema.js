const joi = require("joi");

const loginSchema = joi.object({
    email: joi.string().required().messages({
        "any.required": "O campo email é obrigatório.",
        "string.empty": "O campo email é obrigatório.",
        "string.email": "Informe um email válido",
    }),
    senha: joi.string().required().messages({
        "any.required": "O campo senha é obrigatório.",
        "string.empty": "O campo senha é obrigatório.",
    }),
});

const userSchema = loginSchema.append({
    nome: joi.string().required().messages({
        "any.required": "O campo nome é obrigatório.",
        "string.empty": "O campo nome é obrigatório.",
    }),
    senha: joi.string().alphanum().min(4).messages({
        "string.min": "O campo senha deve conter no mínimo 4 caracteres",
        "string.alphanum": "O campo senha deve contar somente caracteres alfanuméricos",
    }),
})

module.exports = {
    userSchema,
    loginSchema
}
