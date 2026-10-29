import express from "express";
import {
  CreateUserController,
  DeleteUserByIdController,
  FindAllUsersController,
  FindUserByIdController,
  UpdateUserController,
} from "../controllers/User.controller.js";

const router = express.Router();

// GET /users - retrieve all users
router.get("/", FindAllUsersController);

// POST /users - create a new user
router.post("/", CreateUserController);

// GET /users/:id - retrieve one user by ID
router.get("/:id", FindUserByIdController);

// DELETE
router.delete("/:id", DeleteUserByIdController);


// Edit
router.patch("/:id", UpdateUserController)
export default router;
