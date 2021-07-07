import React from "react";
import styled from "styled-components";

import Image from "../../../components/Image";

import '../../../styles/Home/workers-info.scss'

const CustomCard = styled.div`
  min-height: 18rem;
  max-height: 20rem;
  ${({ color }) => color && `background-color : ${color};`}
  position : relative;

`;

export default function Card(props) {
  return (
    <CustomCard
      className="w-100 text-center justify-content-center align-items-center p-4"
      {...props}
    >
	  <div className="triangle"></div>
     <div className="mt-4 px-4">
	<Image src={props.icon} className="my-3"/>
     <p className="p-0 m-0 card-text">
      {props.children}
      </p>
     </div>
    </CustomCard>
  );
}
