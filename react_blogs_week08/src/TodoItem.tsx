import React from 'react'
import { post, postStatus } from './model/post-model';

type postitemProps = {
    post: post;
    index: number;
    onDelete: (post: post) => void;
}

const postItem = ({ post, index, onDelete }: postitemProps) => {
    return (
        <div key={post.id} className="card my-1 d-flex flex-row justify-content-between">
            <span className="btn-group">
                <span className="btn btn-primary">{index}</span>
                <span className="btn btn-default">{post.text}</span>
            </span>
            <span className="align-items-center justify-content-between">
                <span className="badge  bg-secondary py-2 ms-2">{postStatus[post.status]}</span>
                <span className="btn btn-danger ms-2" onClick={(event) => {onDelete(post)}}>Del</span>
            </span>
        </div>
    )
}

export default postItem