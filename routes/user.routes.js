const router = require("express").Router();
const {createNewUser,getQuizes,makeNewQuiz} = require("../controllers/user.controller")

router.post("/create",createNewUser)
router.post("/newquiz",makeNewQuiz)
router.get("/quizes/:id", getQuizes)
module.exports = router