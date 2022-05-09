import React from "react";

const listaPost  = [["meowed", "img/gato-telefone.svg"  , "respondeai"      , "101.523"], 
                    ["barked", "img/dog.svg"            , "adorable_animals", "99.159" ]];

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
                <ion-icon name={props.heart} onClick={props.acao} class={props.cor}></ion-icon>
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
    let likes = (String(props.likes)).slice(0, (props.tamanho))

    return (
        <div class="fundo">
            <Acoes heart={props.heart} acao={props.acao} cor={props.heartCor} />
            <Curtidas hrefFundo={props.hrefFundo} userFundo={props.userFundo} likes={likes} />
        </div>

    );
}

function Post(props) {
    // Lógica
    const userPerfil  = "assets/img/" + props.user + ".svg";
    const userMidia   = "assets/" + props.userMidia;
    const fundoPerfil = "assets/img/" + props.userFundo + ".svg";

    let tamanho = (props.likes).length

    const [like, setLike] = React.useState(0);
    const [nLikes, setNLikes] = React.useState(Number(props.likes))

    function likedMidia () {
        if (like === 0) {
            setLike(1)
            setNLikes(nLikes + 0.001)
            console.log(1, nLikes)
        }
    }

    function likedHeart () {
        if (like === 1) {
            setLike(0);
            setNLikes(nLikes - 0.001)
            console.log(5, likes)

        } else {
            setLike(1);
            setNLikes(nLikes + 0.001)
            console.log(5, likes)
        }
    }

    //UI
    return (
        <div class="post">
            <Topo hrefPerfil={userPerfil} userPerfil={props.user} />
            <Conteudo hrefMidia={userMidia} userPerfil={props.user} acao={likedMidia} />
            <Fundo hrefFundo={fundoPerfil} userFundo={props.userFundo} likes={nLikes} 
                   heart={listaHeart[like]} heartCor={listaCor[like]} acao={likedHeart} 
                   tamanho={tamanho} />
        </div>
    );
}


export default function Posts() {
    // UI
    return (
        <div class="posts">
            {listaPost.map((post) => (
                <Post user={post[0]} userMidia={post[1]} userFundo={post[2]} likes={post[3]}  />
            ))}
        </div>
    );
}