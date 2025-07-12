import { generateToken } from "../utils/auth.js";

const default_user = {
  id: 1,
  email: "walter@hotmail.com",
  pass: "123456",
};

export const login =  async(req, res) => {
  const { email, pass } = req.body;
  try {
    
    if (!email || !pass) res.status(200).json({message:"Debe completar las credenciales."});
    if(email === default_user.email && pass === default_user.pass) {
      const token = generateToken(default_user);
      console.log('token',token)
      
      return res.status(200).json({ message: "Ingresando....", token: token });
    }else{
      return  res.status(401).json({message:'Unauthorized.'})
    }
  } catch (error) {
    return res.status(500).json({ message: "Error en servidor (Controlador)." });
  }
};
