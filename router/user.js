import express from  "express";
import usuarios from "../controllers/user.js"
const router = express.Router();

router.get('/', usuarios.get);

//todos: post, put, delete
router.post('/', usuarios.post);

router.put('/', usuarios.put);

router.delete('/', usuarios.delete);

export default router
