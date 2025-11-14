import { useParams } from 'react-router-dom'
import { marked } from "marked";
import { useEffect, useState } from 'react'
import './styles/globals.css'

export default function Blog() {
  const { blogId } = useParams()
  const [content, setContent] = useState<string>('Loading...')

useEffect(() => {
  if (blogId) {
    fetch(`${import.meta.env.BASE_URL}blogs/${blogId}.md`)
      .then((res) => res.text())
      .then((md) => setContent(marked.parse(md))) // convert md → html
      .catch(() => setContent("<p>Blog not found.</p>"))
  }
}, [blogId])

return (
  <div
    className="blog-container markdown"
    dangerouslySetInnerHTML={{ __html: content }}
  />
)
}
