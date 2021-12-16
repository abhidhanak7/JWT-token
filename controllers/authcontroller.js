//REQUIREMENTS
const User = require('../Model/user')
// const passs = require('../Model/user')
const jwt = require('jsonwebtoken')
const jwt_decode = require('jwt-decode')
const bcrypt = require('bcrypt');
const { models } = require('mongoose');



// function for hashing password
const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash(password, salt)
    return pass;
}




// function for cheking duplicate email
const checkDuplicateEmail = async (email) => {
    let statusUpdate = false
    const userr = await User.findOne({ email: email })
    if (userr) {
        statusUpdate = true
        // const fail = "The email address you have entered is already associated with another account plsz enter unique email.";
    }
    return statusUpdate
}










//Route for creatng user and storing  data into database
const signup_post = async (req, res) => {
    console.log("req.body: ", req.body)
    let statusCheck = await checkDuplicateEmail(req.body.email)
    console.log("Check Status : ", statusCheck)

    if (statusCheck === false) {
        try {
            console.log("API called.")
            const pass = await encryptPassword(req.body.password)
            const userdata = new User({
                email: req.body.email,
                password: pass
            })


            const result = await userdata.save()
            res.json(result);
            console.log("Result: ", result)

        } catch (err) {
            res.send(err)

        }
    }
    else {
        res.json({
            message:
                "The email address you have entered is already associated with another account plsz enter unique email."
        })
    }

}











//ROUTE FOR CHECKING PASSWORD
const login_post = async (req, res) => {
    const body = req.body
    const abcd = await User.findOne({ email: body.email });

    if (abcd) {
        const validPassword = await bcrypt.compare(body.password, abcd.password);
        if (!validPassword) {
            res.json({ error: "Invalid Password" });
        } else {

            res.status(200).json({ message: "Valid password" });
        }
    } else {
        res.json({ error: "User does not exist" });
    }
}












// ROUTE FOR GIING A LINK OF EMAIL TOKEN
const forgotpassword_post = async (req, res) => {
    const email = req.body.email
    const findd = await User.findOne({ "email": email })

    if (!findd) {
        res.status(400).send("user not found")
    }
    else {
        let token = jwt.sign(findd.email, 'my-secret-key')
        //    console.log(token);
        res.json({
            token: token
        })
    }
}











// ROUTE FOR UPADTING PASSWORD
const editpassword_post = async (req, res) => {
    try {
        const { email, token, password, confirmpassword } = req.body;
        const findd = await User.findOne({ "email": email });

        if (!findd) {
            res.status(400).send("user not found");
        }
        else {
            const decoded = await jwt.verify(token, 'my-secret-key');
            console.log(decoded);
            // const comp = await jwt.compare(User.email, decoded.email);
            // console.log(comp)
            if (email === decoded) {
                if (password === confirmpassword) {
                    const pass = await encryptPassword(confirmpassword)
                    const printt = await User.findOneAndUpdate({ email: email }, { password: pass })
                    res.json("password succesfully changed")
                    console.log(printt)
                } else {
                    res.status(400).send("password and confirm password are not matching")
                }
            } else {
                res.status(400).send("wrong token is entered")
            }

        }

    } catch (error) {
        res.status(400).send(error)
    }

}



const datetime_post = async (req, res) => { }




// EXPORTING FILES 
module.exports = {
    signup_post,
    login_post,
    forgotpassword_post,
    editpassword_post,
    datetime_post,

}