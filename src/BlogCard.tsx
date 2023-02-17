import React from 'react';
import {BlogEntry} from "./BlogEntry";
import "./BlogCard.css"
type Props ={
blogEntry : BlogEntry
}
function BlogCard(props : Props) {
    return (
        <div className={"blog-entry"}>
            <div className={"blog-head"}>
            <h1>{props.blogEntry.title}</h1>
            </div>
            <p>
                {props.blogEntry.content}
            </p>
            <div className={"blog-footer"}>
                {props.blogEntry.author}
            </div>
        </div>
    );
}

export default BlogCard;
