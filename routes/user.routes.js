import express from 'express';
import { registerUser } from '../contoller/user.controller.js';// import contoller

const router = express.Router();

router.post('/register', registerUser);


export default router;

// snapChat.098 postman