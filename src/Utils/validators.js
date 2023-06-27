

const validateEmail = (email) =>{
   return email?.toString().includes('@') && email?.toString().includes('.')
}

const validatePassword = (password) => {
  return  password?.toString().length > 6
};

export {

    validateEmail,
    
    validatePassword,
}