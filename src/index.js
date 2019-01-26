import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return <div className="ui container comments">
        <ApprovalCard>
            Are you sure ?
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Sam" timeAgo={faker.date.recent().toDateString()} content="Nice blog post" avatar={faker.image.avatar()} />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Sandy" timeAgo="1 AM" content="i like this" avatar={faker.image.avatar()} />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="William" timeAgo="6 PM" content="good" avatar={faker.image.avatar()} />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Seiya" timeAgo="2 PM" content="marvelous" avatar={faker.image.avatar()} />
        </ApprovalCard>
    </div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
