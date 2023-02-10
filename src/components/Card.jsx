import React from "react";
import characterLuffy from "../img/Luffy.webp"
import characterZorro from "../img/Zorro.jfif"
import characterSanji from "../img/Sanji.jpg"
import cardBack from "../img/back.jpg"

export default class Carta extends React.Component {
    id;
    number;

    constructor(props) {
        super(props);
        this.number = props.number;
        this.id = props.id;
    }

    state = {
        cardState: "backCard"
    }

    handleOnClick() {

    }

    render() {
        let characterCard = '';
        let message = 'character';
        if (this.number === 0) {
            if (this.state.cardState === "backCard") {
                characterCard = <img width='25%' height='30%' src={cardBack} alt={message} />;
            } else if (this.state.cardState === "frontCard") {
                characterCard = <img width='25%' height='30%' src={characterLuffy} alt={message} />;
            } else {
                // resuelta
            }

        } else if (this.number === 1) {
            if (this.state.cardState === "backCard") {
                characterCard = <img width='25%' height='30%' src={cardBack} alt={message} />;
            } else if (this.state.cardState === "frontCard") {
                characterCard = <img width='25%' height='30%' src={characterZorro} alt={message} />;
            } else {
                // resuelta
            }

        } else {
            if (this.state.cardState === "backCard") {
                characterCard = <img width='25%' height='30%' src={cardBack} alt={message} />;
            } else if (this.state.cardState === "frontCard") {
                characterCard = <img width='25%' height='30%' src={characterSanji} alt={message} />;
            } else {
                // resuelta
            }
        }


        return (
            <div>
                {characterCard}
            </div >
        )
    }
}