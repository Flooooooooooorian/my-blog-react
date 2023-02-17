import React from 'react';
import {BlogEntry} from "./BlogEntry";
import BlogCard from "./BlogCard";
import "../src/BlogGallery.css"

type Props = {
    blogEntries: BlogEntry[]
}
function BlogGallery(props: Props) {
    return (
        <div className={"gallery"}>
            {props.blogEntries.map(blogEntry => <BlogCard blogEntry={blogEntry} />)}
        </div>
    );
}

export default BlogGallery;
