const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");

function ensureAuthenticated(request, response, next){
    const authHearder = request.headers.authorization;

    if(!authHearder){
        throw new AppError("JWT Token não informado", 401);
    }

    const [,token] = authHearder.split(" ");

    try{
      const{ sub: user_id } = verify(token, authConfig.jwt.secret);
      request.user = {
          id: Number(user_id),
        };
        
        return next();
        
    } catch {
        throw new AppError("JWT Token inválido", 401);
    }
}

module.exports = ensureAuthenticated;