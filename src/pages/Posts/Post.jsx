import React from "react";

import Button from "../../components/Button";

import styles from './style.module.css'; 

function Post({post: {id, title, subtitle, likes, read}, onRead, onRemove}){
    return(
        <article className={read? styles.containerArticleReaded : styles.containerArticle}>
            <div className={styles.containerContent}>
                <strong>{read? <s>{title}</s> : title}</strong>
                <p>{subtitle}</p>
                <small>{likes}</small>
            </div>
            <div className={styles.buttons}>
                <Button onClick={() => onRead(id)}>Visualizar</Button>
                <Button onClick={() => onRemove(id)}>Remover</Button>
            </div>
        </article>
    );
}

export default Post;
