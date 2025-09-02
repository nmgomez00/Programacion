import * as z from "zod";
export const userValidation = z
  .object({
    username: z
      .string()
      .nonempty("Este campo debe ser completado")
      .min(5, "Mínimo 5 caracteres"),
    email: z
      .email("El correo no es válido")
      .nonoptional("Este campo debe ser completado"),
    password: z
      .string()
      .regex(
        /^(?=.*[@#+-])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/,
        "El formato es incorrecto"
      ),
    confirmPassword: z
      .string()
      .regex(
        /^(?=.*[@#+-])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/,
        "El formato es incorrecto"
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });
