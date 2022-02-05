import { Router } from "express";
import { CreateUser } from "./controllers/CreateUserController";
import { DeleteUser } from "./controllers/DeleteUserController";
import { SelectAllUsers } from "./controllers/SelectAllUsersController";
import { SelectUser } from "./controllers/SelectUserController";
import { UpdateUser } from "./controllers/UpdateUserController";

const router = Router();

const createUser = new CreateUser();
const selectUser = new SelectUser();
const selectAll = new SelectAllUsers();
const deleteUser = new DeleteUser();
const updateUser = new UpdateUser();

//wil be filled with user's input
router.post("/create", createUser.handle);

// will push the information of the user
router.post("/select", selectUser.find);

// will select all users
router.get("/selectAll", selectAll.handle);

//will delete
router.delete("/deleteUser", deleteUser.handle);

//will update
router.put("/updateUser", updateUser.handle);

export { router };
