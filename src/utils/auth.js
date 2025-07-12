import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.KEYSECRETOKEN;

export const generateToken = (userData)=>{
    const user = { id:userData.id, email:userData.email };
    const expirate = {expiresIn:'10m'};
    console.log('generation token:',user, secret_key, expirate)
    return  jwt.sign(user, secret_key, expirate);
};

export const verificacionToken = (req, res , next)=>{
    const token = req.headers['authorization'].split(" ")[1];  

    if(!token) return res.status(401).sendStatus(401);
    jwt.verify(token,secret_key,(err)=>{
        if(err)return res.sendStatus(403);
        next();
    })
}