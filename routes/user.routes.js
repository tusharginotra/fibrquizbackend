const router = require("express").Router();
const {createNewUser,getQuizez} = require("../controllers/user.controller")
router.get("/", createNewUser)
router.post("/create",createNewUser)
module.exports = router