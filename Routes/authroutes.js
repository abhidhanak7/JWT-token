const { Router } = require('express')
const authController = require('../controllers/authcontroller')

const router = Router();

router.post('/signup', authController.signup_post)
router.post('/login', authController.login_post)
router.post('/forgotpassword', authController.forgotpassword_post)
router.post('/editpassword', authController.editpassword_post)
router.post('/datetime', authController.datetime_post)
module.exports = router;





// router.post('/emailcheck', authController.emailcheck_post)
// router.post('/appp', authController.appp_post)
// appp_post,
    // emailcheck_post
    // }