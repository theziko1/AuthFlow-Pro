import axios from 'axios'


// Register user
const register = async (userData : any) => {
  const response = await axios.post('https://authflow-pro.onrender.com/signup', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData : any) => {
    
    const response = await axios.post('https://authflow-pro.onrender.com/signin', userData)

    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data.data)) 
      const roles = response.data.user.roles;
      localStorage.setItem('role', JSON.stringify(roles.name)) 
      localStorage.setItem('username',JSON.stringify(response.data.user.username))
    }
  
    return response.data

  
 
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('role')
  localStorage.removeItem('username')
}

const authService = {
  register,
  logout,
  login,
}

export default authService