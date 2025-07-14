import bcrypt from "bcrypt";

export const hasheando = (pass) => {
  const saltRounds = 10; // Número de "salts" para aumentar la complejidad

  bcrypt.hash(pass, saltRounds, (err, hashedPassword) => {
    if (err) throw new Error(err);

    console.log("Contraseña hasheada:", hashedPassword);
    return hashedPassword;
  });
};

// Verificar la contraseña
export const verificarHash = (pass, hash) => {
  bcrypt.compare(pass, hash, (err, isMatch) => {
    // if (err) throw new Error(err);
    if (isMatch) {
      console.log("La contraseña es válida.");
      return true;
    } else {
      console.log("La contraseña es incorrecta.");
      return false;
    }
  });
};
