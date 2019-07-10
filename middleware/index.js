module.exports = {
	errorHendler: (fun)=>
	   (req, res, next)=>{
			Promise.resolve(fun(req, res, next))
					.catch(next);
		}
}