import { TOKEN_SECRET } from "../config.js";
import jsonwebtoken from "jsonwebtoken"

function createAccesToken (payload){
return new Promise ((resolve, reject) => {
    jsonwebtoken.sign({
        payload
     
     },TOKEN_SECRET,{
         expiresIn:"1d"
     },(err, token) => {
         if (err) reject(err);
         resolve(token)
        
     })
})

}

export default createAccesToken