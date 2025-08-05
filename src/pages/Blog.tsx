import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

export default function Blog() {
  const { blogId } = useParams()
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch(`/codex-orbit/blogs/${blogId}.md`)
      .then((res) => res.text())
      .then(setContent)
  }, [blogId])

  return (
    <div>
      <h2>Blog: {blogId}</h2>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}
