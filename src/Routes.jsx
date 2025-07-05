import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import PostList from './pages/Posts';
import Post from './pages/Post';
import NotFound from './pages/NotFound';

import { animated, useSpring } from 'react-spring';

function Routes(){

    const style = useSpring({
        from: {opacity: 0},
        to: {opacity: 1}
    })


    return(
        <animated.div style={style}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/posts" component={PostList} />
                <Route exact path="/posts/:id" component={Post} />
                <Route component={NotFound} />
            </Switch>
        </animated.div>
    );
}

export default Routes;