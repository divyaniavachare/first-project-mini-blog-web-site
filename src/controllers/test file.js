// const loginAuthor=async function(req,res){
//     try{
//     let reqBody=req.body
//     let user=req.body.email
//     let password=req.body.password
//     if(!isValidRequestBody(reqBody)) return res.status(400).send({status:false,msg:"enter some data in body"})
//     if(!isValid(user)) return res.status(400).send({status:false,msg:"email is required"})
//     if(!isValid(password)) return res.status(400).send({status:false,msg:"password is required"})
     
//     if(!isValidEmail(user)) return res.status(400).send({status:false,msg:"Provide Valid Email-Id"})
//     let author = await authorModel.findOne({ user, password });
//     if(!author) return res.status(400).send({status:false,msg:"User Password Not Correct"})  
    
//     let token=jwt.sign({
//         authorId:author._id.toString(),
//         Group:"47",
//     },
//     "tokensecretKey"
//     );

//     res.header("x-api-key",token)
//     res.status(200).send({status:true,msg:"token created successfully",token})
// }   catch (error) {
//     res.status(500).send({ status: false, message: error.message })
// }
// }