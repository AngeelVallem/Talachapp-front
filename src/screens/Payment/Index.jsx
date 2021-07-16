import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { validateToken } from "../../globals/index";
import { getUser } from "../../services";
import Image from "../../components/Image";
import Button from "../../components/Button";
import { colors } from "../../globals";

import { pay } from "../../services";

import product from "../../assets/Home/premium.png";

import "../../styles/Payment/index.scss";
import VideoSection from "../LandingPage/VideoSection";

export default function PaymentScreen({ user }) {
  const [refresh, setRefresh] = useState(false);

  const createCheckoutSession = async (priceId) => {
    try {
      const token = window.localStorage.getItem("token");
      let options = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          auth: token,
        },
      };
      const { data } = await axios.post(
        "https://talacha-app-boisterous-topi-yd.eu-gb.mybluemix.net/pay/create-checkout-session",
        { priceId },
        options
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubscribe = async () => {
    try {
      const data = await createCheckoutSession(
        "price_1J7iqHI4Gb0YOpfseFBEhG6M"
      );
      const stripePromise = await loadStripe(
        "pk_test_51J7OfDI4Gb0YOpfskBaERdTeGmAFb2MPWCe5PFdmHVqwIZbYaw0LuN4C4oDse6KCZf8NX9joUHdRvbOFNhgSNRUk00RpG2YL9F"
      );
	setRefresh(true)
      await stripePromise.redirectToCheckout({
        sessionId: data.sessionId,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteSubscription = async () => {
    try {
      const token = window.localStorage.getItem("token");
      let options = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          auth: token,
        },
      };
      const { data } = await axios.delete(
        `https://talacha-app-boisterous-topi-yd.eu-gb.mybluemix.net/${user.subscriptionId}`,
        options
      );
      setRefresh(false)
    } catch (error) {
      console.error(error);
    }
  };
  if (user.subscriptionId) {
    return (
	<>
	</>
    );
  }
  return (
    <Button
      text="Pagar suscripcion"
      onClick={handleSubscribe}
      color={colors.teal}
    />
  );
}
