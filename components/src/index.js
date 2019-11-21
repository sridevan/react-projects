import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Gana"/> 
            <CommentDetail author="Gree"/> 
            <CommentDetail author="Nagen"/>    
        </div>
    );
}

ReactDom.render(<App />, document.querySelector('#root'))