import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = "https://talacha-app-boisterous-topi-yd.eu-gb.mybluemix.net/";


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
    navigation.push("/home");
    return res.data.token;
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
    navigation.push("/home");
    return res.data.token;
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

export async function getUser(token) {
  const getByIdUrl = baseUrl + `users/token/${token}`;
  try {
    const res = await axios.get(getByIdUrl);
    
    return res.data.user;
  } catch (err) {}
}

export async function getAll() {
  const getAll = baseUrl + `users`;

  try {
    const res = await axios.get(getAll);

    return res.data.users;
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

export async function getWorkers() {
  const getWorkersUrl = baseUrl + `users/workers`;

  try {
    const res = await axios.get(getWorkersUrl);

    return res.data.workers;
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

export async function getTickets(status) {
  const hasStatus = status ? `tickets?status=${status}` : "tickets";

  const getTicketsUrl = baseUrl + hasStatus;

  try {
    const res = await axios.get(getTicketsUrl);

    return res.data.tickets;
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

export async function generateTicket(ticket, history) {
  const generateUrl = baseUrl + "tickets/generate";
  try {
    const res = await axios.post(generateUrl, ticket, {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    toast("Solicitud de contratacion creada", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    history.push("/tickets");
    return res.data.tickets;
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

export async function changeStatus(id, status) {
  const generateUrl = baseUrl + `tickets/changeStatus/${id}`;

  try {
    const res = await axios.patch(generateUrl, status, {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    return res.data.ticket;
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

export async function getFilteredWorkers(params) {
  const getWorkersUrl = baseUrl + `users?roles=worker${params}`;

  console.log(getWorkersUrl);

  try {
    const res = await axios.get(getWorkersUrl);
    return res.data.users;
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




export async function workerRegister(id, data,history) {
  const generateUrl = baseUrl + `users/${id}`;

  try {
    const res = await axios.patch(generateUrl, data, {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    toast("Registro exitoso", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    history.push("/home");
    alert('Tu card permanecera en invisible hasta realizar el pago')
    return res.data.user;
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