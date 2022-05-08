import React from "react";

function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.href} alt={props.follow} />
            </div>
            <div class="usuario"> {props.follow} </div>
        </div>

    );
}

export default function Stories() {
    return (
    <div class="stories">
        <Story href="assets/img/9gag.svg" follow="9gag" />
        <Story href="assets/img/meowed.svg" follow="meowed" />
        <Story href="assets/img/barked.svg" follow="barked" />
        <Story href="assets/img/nathanwpylestrangeplanet.svg" follow="nathanwpylestrangeplanet" />
        <Story href="assets/img/wawawicomics.svg" follow="wawawicomics" />
        <Story href="assets/img/respondeai.svg" follow="respondeai" />
        <Story href="assets/img/filomoderna.svg" follow="filomoderna" />
        <Story href="assets/img/memeriagourmet.svg" follow="memeriagourmet" />

        <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </div>
    );
}