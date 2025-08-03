import { Link } from 'react-router-dom'

const blogs = [
  { id: 'compose_to_xml', title: 'XML and Its Growing Pains' },
  { id: 'compose_to_xml', title: 'XML and Its Growing Pains' },
]

export default function Home() {
  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
