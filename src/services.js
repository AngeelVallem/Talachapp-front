import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = "http://localhost:8080/";

export async function login(user, navigation) {
  const loginUrl = baseUrl + "users/login";

  try {
    const res = await axios.post(loginUrl, user, {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    window.localStorage.setItem("token", res.data.token);
    
    toast("Logeado satisfactoriamente", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigation.push("/");
    console.log(res.data.token);
  } catch (err) {
    toast.error(err.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}

export async function register(user, navigation) {
  const registerUrl = baseUrl + "users/register";

  try {
    const res = await axios.post(registerUrl, user, {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    window.localStorage.setItem("token", res.data.token);
    toast("Registrado exitoso", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigation.push('/')
    return res.data.token
  } catch (err) {
    toast.error(err.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}
