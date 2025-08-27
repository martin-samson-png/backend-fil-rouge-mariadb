import Joi from "joi";

const userSchemaDTO = Joi.object({
  username: Joi.string().min(3).max(15).required().messages({
    "string.empty": "Username is required",
    "string.min": "Minimum length for username is 6 character",
    "any.required": "Username is required",
    "string.max": "Maximum length for username is 15 character",
  }),
  email: Joi.string().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Email incorrecte",
    "any.required": "Email is required",
  }),
  password: Joi.string().min(8).required().messages({
    "string.empty": "Password is required",
    "string.min": "Minimum length for the password is 6 character",
    "any.required": "Password is required",
  }),
});

export default userSchemaDTO;
