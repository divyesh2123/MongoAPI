const yup = require("yup");

let newUserSchema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
   
  });

 async function validateNewUser(req, res, next) {
    try {
         req.body = await newUserSchema.validate(req.body);
         next();
    } catch (err) {
        console.error(err);
        res.status(400).send(err.message);
        //err.message contains a proper error message
        // or you can do whatever you want
    }
}

module.exports = {
    validateNewUser: validateNewUser
}