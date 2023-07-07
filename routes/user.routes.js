const router = require("express").Router();
const {createNewUser,getQuizesById,makeNewQuiz,getQuizesByEmail, giveQuiz} = require("../controllers/user.controller")

router.post("/create",createNewUser)
router.post("/newquiz",makeNewQuiz)
router.post("/solvequiz",giveQuiz)
router.get("/user/quizes/:email",getQuizesByEmail)
router.get("/quizes/:id", getQuizesById)
module.exports = router