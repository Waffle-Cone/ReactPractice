import PropTypes from "prop-types";
import "./Card.scss";

export function CardContainer(props){
    //Initialisation ------------------------------------------------------
    //state  --------------------------------------------------------------
    //Handlers ------------------------------------------------------------
    //View ----------------------------------------------------------------
    return(<div className='cardContainer'> {props.children}</div>);
};

export function Card(props){
    //Initialisation ------------------------------------------------------
    //state  --------------------------------------------------------------
    //Handlers ------------------------------------------------------------
    //View ----------------------------------------------------------------
    return(<div className='card'> {props.children}</div>);
};


