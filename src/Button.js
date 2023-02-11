import "./style.css";
import React from "react";
import { Link } from "react-router-dom";

function Button({text, image, link}) {
    return (
        <Link to={link} className="Button">
            <img className="Icon" src={image} />
            <p className="Button_text">{text}</p>
        </Link>
    )
}

export default Button;