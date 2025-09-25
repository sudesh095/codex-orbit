import { Link } from 'react-router-dom'
import '../styles.css'

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path}`

const blogs = [
  {
    id: 'viewmodel',
    title: 'Viemodel and Its Working',
    subtitle: ' ViewModel is one of the most powerful components of Android Jetpack.',
    image: 'https://github.com/user-attachments/assets/e9a9667e-a5c3-402e-8d33-ccbb7c8f8e01',
    file: withBase('blogs/viewmodel.md')
  },
  {
    id: 'xml-to-compose',
    title: 'XML and Its Growing Pains',
    subtitle: 'My journey from using XML for years to finally embracing Jetpack Compose.',
    image: withBase('blogs/assets/xml_to_compose.png'),
    file: withBase('blogs/xml-to-compose.md')
  },
  {
    id: 'inline-reified-noinline',
    title: 'Inline Reified Noinline',
    subtitle: 'Most essential for advanced Kotlin developers are `inline`, `noinline` crossinline`, and `reified`.',
    image: withBase('blogs/assets/inline_reified_noinline.png'),
    file: withBase('blogs/inline-reified-noinline.md')
  },
  {
    id: 'higher-order-functions',
    title: 'High Order Functions',
    subtitle: 'Cleaner and smarter code with functions inside functions.',
    image: withBase('blogs/assets/high_order_function.png'),
    file: withBase('blogs/higher-order-functions.md')
  },
  {
    id: 'api-vs-implementation',
    title: 'API vs Implementation',
    subtitle: 'Learn what api and implementation mean in Gradle.',
    image: withBase('blogs/assets/api_vs_implementation.png'),
    file: withBase('blogs/api-vs-implementation.md')
  },
]
// https://github.com/user-attachments/assets/e9a9667e-a5c3-402e-8d33-ccbb7c8f8e01
export default function Home() {
  return (
    <div className="container">
      <div className="blog-grid">
        {blogs.map((blog) => (
          <Link to={`blogs/${blog.id}`} key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-subtitle">{blog.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
