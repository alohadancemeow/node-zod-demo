import { z } from "zod";

export const userRegistrationSchema = z.object({
  username: z.string().min(3, "Username must have at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must have at least 8 characters"),
});

export const userLoginSchema = z.object({
  username: z.string(),
  password: z.string().min(8, "Password must have at least 8 characters"),
});
