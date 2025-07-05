import React, { useState } from 'react';
import Post from './Post';
import { v4 as uuidv4 } from 'uuid';


function PostList(){
    const [posts, setPosts] = useState([
        {
            id: uuidv4(),
            title: "Como a tecnologia está mudando o mercado financeiro",
            subtitle: "Uma análise sobre inovação e transformação digital",
            likes: 87,
            Read: false,
        },
        {
            id: uuidv4(),
            title: "5 hábitos de produtividade que transformam seu dia",
            subtitle: "Dicas práticas para quem busca mais foco e resultado",
            likes: 42,
            Read: true,
        },
        {
            id: uuidv4(),
            title: "Desmistificando o Open Finance no Brasil",
            subtitle: "Entenda o impacto para consumidores e empresas",
            likes: 103,
            Read: false,
        }
    ]);

    function handleRead(id){
        setPosts(prevState => (
            prevState.map(post => (
                post.id === id ? {...post, read: !post.read} : post
            ))
        ))
    }

    function handleRemove(id){
        setPosts(prevState => (
            prevState.filter(post => (
                post.id !== id
            ))
        ))
    }

    return(
        <>
            {posts.map(post => (
                <Post 
                    key={post.id}
                    post={post}
                    onRead={handleRead}
                    onRemove={handleRemove}
                />
            ))}
        </>
    );
}

export default PostList;