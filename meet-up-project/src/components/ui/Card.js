import classes from './Card.module.css';
import { useEffect } from 'react';

import Aos from "aos";
import "aos/dist/aos.css";


function Card(props) {
    useEffect(() => {
        Aos.init({duration:1000});
    }, []);


    return <div data-aos = "zoom-in-left" className = {classes.card}>{props.children}
    </div>
}

export default Card;