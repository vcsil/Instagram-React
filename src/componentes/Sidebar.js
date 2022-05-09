import React from "react";

const listaUser = [["catanacomics", "Catana"]];

const listaSugestoes = [["bad.vibes.memes", "Segue você"],
["chibirdart", "Segue você"],
["razoesparaacreditar", "Novo no Instagram"],
["adorable_animals", "Segue você"],
["smallcutecats", "Segue você"]];

function Usuario(props) {
    const hrefUser = "assets/img/" + props.user + ".svg"

    return (
        <div class="usuario">
            <img src={hrefUser} alt={props.user} />
            <div class="texto">
                <strong>{props.user}</strong>
                {props.userName}
            </div>
        </div>
    );
}

function Sugestao(props) {
    const hrefSugest = "assets/img/" + props.user + ".svg"

    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={hrefSugest} alt={props.user} />
                <div class="texto">
                    <div class="nome">{props.user}</div>
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
            {listaUser.map((usuario) => (
                <Usuario user={usuario[0]} userName={usuario[1]} />
            ))}

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {listaSugestoes.map((sugestao) => (
                    <Sugestao user={sugestao[0]} info={sugestao[1]} />
                ))}
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