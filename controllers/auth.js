module.exports.login = (req,res)=>{
	res.status(200).json({message: 'login endpoint ?'})
}

module.exports.register = (req,res)=>{
	res.status(200).json({
		register:{
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email:req.body.email,
			password: req.body.password,
		}
	})
}
