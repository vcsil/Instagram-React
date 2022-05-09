import React from "react";

const listaPost  = [["meowed", "img/gato-telefone.svg"   , "respondeai"      , "101.523"], 
                    ["barked", "img/dog.svg", "adorable_animals", "99.159"]];

const listaHeart = ["heart-outline", "heart-sharp"]
const listaCor   = ["md hydrated", "vermelho md hydrated"]

let likes = [];
for (let i = 0; i < listaPost.length; i++) {
    likes.push(0);
}

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
            <img src={props.hrefMidia} alt={description} onClick={props.acao}/>
        </div>
    );
}

function Acoes(props) {
    return (
        <div class="acoes">
            <div>
                <ion-icon name={props.heart} onClick={props.acao} class={props.cor} id={"coracao"+props.id} ></ion-icon>
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
            <Acoes heart={props.heart} acao={props.acao} cor={props.heartCor} id={props.index} />
            <Curtidas hrefFundo={props.hrefFundo} userFundo={props.userFundo} likes={props.likes} />
        </div>

    );
}

function Post(props) {
    const userPerfil  = "assets/img/" + props.user + ".svg";
    const userMidia   = "assets/" + props.userMidia;
    const fundoPerfil = "assets/img/" + props.userFundo + ".svg";

    return (
        <div class="post">
            <Topo hrefPerfil={userPerfil} userPerfil={props.user} />
            <Conteudo hrefMidia={userMidia} userPerfil={props.user} acao={props.acao1} />
            <Fundo hrefFundo={fundoPerfil} userFundo={props.userFundo} likes={props.likes} 
                   heart={props.heart} heartCor={props.heartCor} acao={props.acao2} 
                   index={props.index} />
        </div>
    );
}


export default function Posts() {
    // Logica
    const [like, setLike] = React.useState(0);

    function likedMidia () {
        console.log(1, "curtiu")
        like === 0 ? setLike(like + 1) : setLike(like)
    }

    function likedHeart () {
        console.log(2, "curtiu descurtiu")
        like === 1 ? setLike(like - 1) : setLike(like + 1)
    }


    // UI
    return (
        <div class="posts">
            {listaPost.map((post, index) => (
                <Post user={post[0]} userMidia={post[1]} userFundo={post[2]} likes={post[3]} 
                      heart={listaHeart[like]} acao1={likedMidia} acao2={likedHeart} 
                      heartCor={listaCor[like]} index={index} />
            ))}
        </div>
    );
}