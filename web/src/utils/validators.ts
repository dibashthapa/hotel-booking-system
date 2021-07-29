import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Please enter valid address")
    .required("Please enter email address"),
  password: Yup.string()
    .min(8, "Password must be minimum 8 characters")
    .required("Please enter password"),
});

export const registerSchema = Yup.object({
  name: Yup.string().required("Please enter your fullname"),
  email: Yup.string()
    .email("Please enter valid address")
    .required("Please enter email address"),
  password: Yup.string()
    .min(8, "Password must be minimum 8 characters")
    .required("Please enter password"),
});
