import React from 'react'
import './CustomButton.css'
import { AiOutlinePlusCircle } from "react-icons/ai";

interface CustomButtonProps {
    text: string,
    onClick: () => void,
}

function CustomButton(props: CustomButtonProps) {
    return (<div className='buttonBody' onClick={() => props.onClick()}>
        <AiOutlinePlusCircle fill="#000000" size={30} className="icon"/>
        {props.text}
    </div>)
}

export default CustomButton;