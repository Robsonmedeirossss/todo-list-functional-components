import { useParams, useLocation } from 'react-router-dom';

function Post(){
    const { id } = useParams();
    const { search } = useLocation();

    const queryParam = new URLSearchParams(search);

    console.log(queryParam.get('order'));

    return <h1>Post Page de id: {id}</h1>
}

export default Post;