import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Image from '../../components/Image'
import sub from '../../assets/Home/sub.svg'
import Button from "../../components/Button";
import {colors} from '../../globals/index'
const Success = () => {
  const [user, setUser] = useState({});

  const history = useHistory();
  const session_id = history.location.search.substr(
    12,
    history.location.search.length - 1
  );

  useEffect(() => {
    const getUpdatedUser = async () => {
      try {
        const token = window.localStorage.getItem("token");
        if (!session_id) {
          return;
        }
        let options = {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": true,
            "Access-Control-Allow-Credentials": true,
            auth: token,
          },
        };

        const { data } = await axios.post(
          "http://localhost:8080/pay/create-subscription",
          { session_id },
          options
        );
        setUser(data.data.user);
        console.log(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    getUpdatedUser();

    return () => {
      setUser({});
    };
  }, [session_id]);

  return (
    <div className="container">
      <div className="row">
        {user && (
          <div className="col-md-4 offset-4">
		  <h1>Gracias por tu suscripción</h1>
		  <small>Disfruta todas las ventajas de ser premium</small>
		  
		  <Image src={sub} size={'500px'}/>
		  
	  </div>
	 
        )}
      </div>
    </div>
  );
};

export default Success;
