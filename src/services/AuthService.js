import axios from './axios'

const login = (username, password) => {
    return axios
      .post("http://localhost:8080/api/auth/login",{username,password})
      .then((response) => {
        if (response.data.accessToken) {
          console.log(response.data.accessToken)
          //Session Saving
          window.sessionStorage.setItem("login",true)
          
        }
        return response.data;
      });
};

const AuthService = {
    login
}

export default AuthService;