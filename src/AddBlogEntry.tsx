import './AddBlogEntry.css'
import {BlogEntry} from "./BlogEntry";
import {ChangeEvent, useState} from "react";
import { v4 as uuid } from 'uuid';


type Props = {
    onAddBlog: (newBlog: BlogEntry) => void
}

export default function AddBlogEntry(props: Props) {

    const [title, setTitle] = useState<string>("")
    const [author, setAuthor] = useState<string>("")
    const [content, setContent] = useState<string>("")

    function onTitleChange(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value)
    }

    function onAuthorChange(event: ChangeEvent<HTMLInputElement>) {
        setAuthor(event.target.value)
    }

    function onContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setContent(event.target.value)
    }

    function onBlogEntrySave() {
        props.onAddBlog({id: uuid(), title, content, author})
    }

    return <div className='add-blog-entry'>
        <label>Title</label>
        <input value={title} placeholder="Title" onChange={onTitleChange}/>
        <label>Author</label>
        <input value={author} placeholder="Author" onChange={onAuthorChange}/>
        <label>Content</label>
        <textarea value={content} placeholder="Content" onChange={onContentChange}/>
        <button onClick={onBlogEntrySave}>Save</button>
    </div>
}
