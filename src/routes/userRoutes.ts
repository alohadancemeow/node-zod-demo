import express from "express";
import { validateData } from "../middleware/validationMiddleware";
import { userRegistrationSchema, userLoginSchema } from "../schema/userSchema";

const userRouter = express.Router();

userRouter.post(
  "/register",
  validateData(userRegistrationSchema),
  (req, res) => {
    res.json({ message: "User registered successfully!", data: req.body });
  }
);

userRouter.post("/login", validateData(userLoginSchema), (req, res) => {
  res.json({ message: "User logged in successfully!", data: req.body });
});

export default userRouter;
