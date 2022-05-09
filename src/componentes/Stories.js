import React from "react";

const listaStories = ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics",
    "respondeai", "filomoderna", "memeriagourmet"];

function Story(props) {
    const href = "assets/img/" + props.follow + ".svg"

    return (
        <div class="story">
            <div class="imagem">
                <img src={href} alt={props.follow} />
            </div>
            <div class="usuario"> {props.follow} </div>
        </div>

    );
}

export default function Stories() {
    return (
        <div class="stories">
            {listaStories.map((name) => (<Story follow={name} />))}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}