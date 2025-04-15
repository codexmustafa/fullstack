const registerUser = async (req, res) => {
    // res.send('registered User');
    // get user data
    // validate
    // check if user exists
    // create user in database
    //token generation
    //save token in database
    //send token as email to user
    //send success status to user
    // console.log(req.body);
    // const {name,password, email} = req.query;
    const {name,password,email} = req.body;
    if(!name || !email || !password) {
        return res.status(400).json({
            message: 'All Fields are required'
        })
    }
    console.log(req.body.email);
}

export { registerUser }

