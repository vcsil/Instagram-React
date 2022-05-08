import React from "react";

function Topo(props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={props.hrefPerfil} alt={props.userPerfil}/>
                {props.userPerfil}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

    );
}

function Conteudo(props) {
    let description = (props.userPerfil).slice("/")
    description = description[description.length - 1]

    return (
        <div class="conteudo">
            <img src={props.hrefMidia} alt={description} />
        </div>
    );
}

function Acoes() {
    return (
        <div class="acoes">
            <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>

    );
}

function Curtidas(props) {
    return (
        <div class="curtidas">
            <img src={props.hrefFundo} alt={props.userFundo} />
            <div class="texto">
                Curtido por <strong>{props.userFundo}</strong> e <strong>outras {props.likes} pessoas</strong>
            </div>
        </div>

    );
}

function Fundo(props) {
    return (
        <div class="fundo">
            <Acoes />
            <Curtidas hrefFundo={props.hrefFundo} userFundo={props.userFundo} likes={props.likes} />
        </div>

    );
}

function Post(props) {
    return (
        <div class="post">
            <Topo hrefPerfil={props.hrefPerfil} userPerfil={props.userPerfil} />
            <Conteudo hrefMidia={props.hrefMidia} userPerfil={props.userPerfil} />
            <Fundo hrefFundo={props.hrefFundo} userFundo={props.hrefFundo} likes={props.hrefFundo} />
        </div>
    );
}

export default function Posts() {
    return (
        <div class="posts">
            <Post hrefPerfil="assets/img/meowed.svg" userPerfil="meowed"
                hrefMidia="assets/img/gato-telefone.svg"
                hrefFundo="assets/img/respondeai.svg" userFundo="respondeai" likes="101.523" />

            <Post hrefPerfil="assets/img/barked.svg" userPerfil="barked"
                hrefMidia="assets/img/dog.svg"
                hrefFundo="assets/img/adorable_animals.svg" userFundo="adorable_animals" likes="99.159" />
        </div>
    );
}