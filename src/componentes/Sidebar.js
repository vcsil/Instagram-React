import React from "react";

function Usuario(props) {
    return (
        <div class="usuario">
            <img src={props.hrefUser} alt={props.hrefUser} />
            <div class="texto">
                <strong>{props.user}</strong>
                {props.userName}
            </div>
        </div>
    );
}

function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.hrefSugest} alt={props.userSugest} />
                <div class="texto">
                    <div class="nome">{props.userSugest}</div>
                    <div class="razao">{props.info}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}

export default function Sidebar() {
    return (

        <div class="sidebar">
            <Usuario hrefUser="assets/img/catanacomics.svg" user="catanacomics" userName="Catana" />

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                <Sugestao hrefSugest="assets/img/bad.vibes.memes.svg" userSugest="bad.vibes.memes"
                          info="Segue você" />
                <Sugestao hrefSugest="assets/img/chibirdart.svg" userSugest="chibirdart"
                          info="Segue você" />
                <Sugestao hrefSugest="assets/img/razoesparaacreditar.svg" userSugest="razoesparaacreditar"
                          info="Segue você" />
                <Sugestao hrefSugest="assets/img/adorable_animals.svg" userSugest="adorable_animals"
                          info="Segue você" />
                <Sugestao hrefSugest="assets/img/smallcutecats.svg" userSugest="smallcutecats"
                          info="Segue você" />
            </div>

            <div class="links">
                <a href="https://about.instagram.com/" target="_blank" rel="noreferrer">Sobre </a> •
                <a href="https://help.instagram.com/"> Ajuda </a> •
                <a href="https://about.instagram.com/blog" target="_blank" rel="noreferrer"> Imprensa </a> •
                <a href="https://developers.facebook.com/docs/instagram" target="_blank" rel="noreferrer"> API </a> •
                <a href="https://www.instagram.com/about/jobs/"> Carreiras </a> •
                <a href="https://www.instagram.com/legal/privacy/"> Privacidade </a> •
                <a href="https://www.instagram.com/legal/terms/"> Termos </a> •
                <a href="https://www.instagram.com/explore/locations/"> Localizações </a> •
                <a href="https://www.instagram.com/directory/profiles/"> Contas mais relevantes</a> •
                <a href="https://www.instagram.com/directory/hashtags/"> Hashtags</a> •
                <a href="https://www.instagram.com"> Idioma</a>
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}