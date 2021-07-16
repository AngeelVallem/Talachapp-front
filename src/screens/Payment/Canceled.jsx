import React,{useEffect} from "react";
import Loader from 'react-loader-spinner'
import {useHistory} from "react-router-dom"
import {colors } from "../../globals/index"
export default function Canceled() {

	const history = useHistory();

	useEffect(() => {
		history.push('/home')
	},[])
	
  return (
	<div className="fix-screen container d-flex justify-content-center align-items-center">
	<Loader
	  type="Puff"
	  color={colors.orange}
	  height={200}
	  width={200}
	/>
	</div>
  );
}
