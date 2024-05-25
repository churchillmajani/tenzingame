import React from "react";
import oneDot from "./images/dice-six-faces-one.png";
import twoDot from "./images/dice-six-faces-two.png";
import threeDot from "./images/dice-six-faces-three.png";
import fourDot from "./images/inverted-dice-4.png";
import fiveDot from "./images/inverted-dice-5.png";
import sixDot from "./images/dice-six-faces-six.png";

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white",
        position: "relative" 
    };

    let display;
    if (props.value === 1) {
        display = oneDot;
    } else if (props.value === 2) {
        display = twoDot;
    } else if (props.value === 3) {
        display = threeDot;
    } else if (props.value === 4) {
        display = fourDot;
    } else if (props.value === 5) {
        display = fiveDot;
    } else {
        display = sixDot;
    }

    const styling = {
        backgroundImage: `url(${display})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "80%",
        height: "80%",
        position: "absolute",
        top: 10,
        left: 10
    };

    return (
        <div
            className="die-face"
            style={styles}
            onClick={props.holdDice}
        >
            <div className="die-num" style={styling}></div>
        </div>
    );
}

