import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Gana" timeAgo='Today at 4.45pm'/> 
            <CommentDetail author="Gree" timeAgo='Yesterday at 3.00pm'/> 
            <CommentDetail author="Nagen" timeAgo='Today at 2.00am'/>    
        </div>
    );
}

ReactDom.render(<App />, document.querySelector('#root'))