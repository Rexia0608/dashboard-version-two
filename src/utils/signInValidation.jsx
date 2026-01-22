import Joi from "joi";

const schema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Email is not valid",
    }),

  mNumber: Joi.string()
    .pattern(/^\+[1-9]\d{1,14}$/)
    .required()
    .messages({
      "string.empty": "Mobile number is required",
      "string.pattern.base":
        "Mobile number must be in international format (e.g. +639171234567)",
    }),

  password: Joi.string().required().messages({
    "string.empty": "Password is required",
  }),
});

const validation = async (isValid) => {
  let notValid = {};

  const { error } = schema.validate(isValid, {
    abortEarly: false,
  });

  if (error) {
    error.details.forEach((item) => {
      notValid[item.path[0]] = item.message;
    });
  }

  return { notValid };
};

export default validation;
