// register user


// {
//     "email":"abhi123@gmail.com",
//    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaW5kZCI6eyJfaWQiOiI2MGU1NDE2NjY0MzhhNzA5NzA1NTU5MDQiLCJlbWFpbCI6ImFiaGkxMjNAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkRk9IQmZ6Z0hkS21CUzguY1Z0d1M3LmRzaTlPNy9HOXdCSmRJcmxBVGIyT01VQy80UVhvVS4iLCJfX3YiOjB9LCJpYXQiOjE2MjU2MzcyMzd9.aQoIKLUtEplXGORtfDUyY5FmCOPPefirfhwZO3N877E",
//    "password":"1234",
//    "confirmpassword":"12434"
// }





// generated token
// {
// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaW5kZCI6eyJfaWQiOiI2MGU1NDVlNmEwODBkMjA5YjViNWI4MWMiLCJlbWFpbCI6InRoYW5rc0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRycEYwcTN2OUlRTC5LMFZ5RnRmeUhlSGU1Z3JnT2pwTHZ1SHpyR0JLcGFzWUg0OTVrZ3N1MiIsIl9fdiI6MH0sImlhdCI6MTYyNTYzODQ2OX0.tSZba3wXqsYK9lShKDWKT2ciMvIAwbppmE_eS-7xGa8"
// }





// const new_post = async (req, res) => {
//     try{
//         const abcc = new user({
//             email:jwt.sign({ email: req.body }, 'my-secret-key'),
//             password:req.body.password
//         })
//         const result = await abcc.save().then((doc) => res.status(201).send(doc));
//         res.json(result)
//     }catch (err) {
//         res.send(err)
//     }
// }





//     const body = req.body
//     const findd = await user.findOne({ email: body.email })
//     //console.log(findd)
//     const userrr = {
//         password: jwt.sign({ password: req.body }, 'my-secret-key'),
//         confirmpassword: jwt.sign({ password: req.body }, 'my-secret-key'),
//     };
//     if (confirmpassword != password) {
//         res.json({ error: "password is not matching" })
//     } else {
//         res.json
// }





// const login_get = (req, res) => {

// }
// const password1 = 'password'
// bcrypt.genSalt(saltRounds, function (err, salt) {
//     bcrypt.hash(password1, salt, function (err, hash) {
//     });
//     const result = await abc.save();
//     res.json(result);
// });
// bcrypt.hash(password1 , saltRounds, async(err, hash) => {
//     const result = await abc.save();
//     res.json(result);
// });
// console.log(result)






// const body = req.body
// // console.log(body)
// const abcd = await user.findOne({ email: body.email });
// //console.log(abcd)
// if(abcd){

// }



// var ca = password;
// var base64Url = ca.split('.')[1];
// var decodedValue = JSON.parse(window.atob(base64Url));
// try {
//     const abcd = users.users({


//         password: jwt.sign({ password: req.body }, 'my-secret-key'),
//         confirmpassword: jwt.sign({ password: req.body }, 'my-secret-key')

//     })
//     if (password == confirmpassword) {
//         const result = await abcd.save();
//         res.json(result);
//         console.log(result)
//     }

// }
// catch (err) {
//     res.send(err)
// }





// const forgot_post = async (req, res) => {
//     const body = req.body
//     const abcd = await user.findOne({ email: body.email });
//     // const token = new Cookies(req,res).get(‘access_token’)
//     const verifiedJwt = nJwt.verify(token, secretKey)


//  for user check raw code 
// User.findOne({ email: req.body.email }, function (err, user) {
//     if (!user) {
//         return res.status(401).send({
//             msg: 'The email address ' + req.body.email
//                 + ' is not associated with any account. Double-check your email address and try again.'
//         });
//     }

// const email = req.body.email
// if (email !== User.email) {
//     res.status(400).send("email is already exist")

// } else {
//     res.status(201).send("email is unique")
// }



// email check route


// , function (err, user) {
//     if (err) throw err
//     if (user) {
//         return res.status(400).send({
//             msg: 'The email address you have entered is already associated with another account plsz enter unique email.'
//         });
//     } else {
//         res.status(200).send({ msg: 'This email is unique you can proceed futher' })
//     }
// })



// const emailCheck = async (email) => {
//     // const emailcheck_post = async (emailcheck) => {
//     console.log(email)
//     // const email = req.body.email
//     const abc = await User.findOne({ email: email })
//     console.log(abc)
//     if (abc) {
//         return res.status(400).send({
//             msg: 'The email address you have entered is already associated with another account plsz enter unique email.'
//         });
//     } else {
//         return res.status(200).send({ msg: 'This email is unique you can proceed futher' })
//     }

// }


// const emailcheck_post = async (req, res) => {
//     email: emailCheck(req.body.email)

// }




// const userr = { abc: user }
// const token = jwt.sign({ userr }, 'my-secret-key')
// jwt.sign({ abc: abc }, "secretkey", (err, token) => {
// res.json({
//     token:token     checkDuplicateEmail(email)
// })






// SAMPLE ROUTE FOR GENERATING TOKEN

// const appp_post = (req, res) => {
//     const user = {
//         id: 1,
//         email: "john@gmail.com",
//         password: 12345

//     };
//     jwt.sign({ user: user }, "secretkey", (err, token) => {
//         res.json({
//             token
//         });
//     });

// }
// app.post("/"), async (req, res) => {
//     try {
//         const User = new userdata({
//             name: req.body.name,
//             email: req.body.email,
//             password: req.body.password
//         })
//         const result = await userdata.insertMany(req.body);
//         res.json(result);
//         console.log(result)
//     } catch (err) {
//         res.send(err)
//     }
// }




//how to give refrence in schgema
// for search {_id: ObjectId('60e7d43b9e4be705913a194a')}



// to give refrences to ohter id 
// companyid: {
//     type: mongoose.Schema.Types.ObjectId, ref: 'companies'
// },