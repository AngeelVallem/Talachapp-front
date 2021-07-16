import React,{useEffect} from "react";
import {useHistory} from "react-router-dom"
export default function Canceled() {

	const history = useHistory();

	useEffect(() => {
		history.push('/home')
	},[])
	
  return (
    <div className="spinner-border text-warning" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
}
