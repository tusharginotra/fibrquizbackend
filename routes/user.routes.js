const router = require("express").Router();
const {getQuizesById,makeNewQuiz,getQuizesByEmail, giveQuiz, getUserList} = require("../controllers/user.controller")

// router.post("/create",createNewUser)
router.post("/newquiz",makeNewQuiz)
router.post("/solvequiz",giveQuiz)
router.get("/user/quizes/:email",getQuizesByEmail)
router.get("/quizes/:id", getQuizesById)
router.get("/userlist/:id",getUserList)

module.exports = router