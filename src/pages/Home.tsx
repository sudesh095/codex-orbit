import { Link } from 'react-router-dom'

const blogs = [
  {
    id: 'xml-to-compose',
    title: 'XML and Its Growing Pains',
    subtitle: 'My journey from using XML for years to finally embracing Jetpack Compose—and why it changed everything for me.',
    image: '/assets/xml_to_compose.png', // place your image in public/images/
  },
  {
    id: 'higher-order-functions',
    title: 'High Order Functions',
    subtitle: 'A simple way to write cleaner and smarter code by using functions inside functions.',
    image: '/assets/higher-order-functions.png',
  },
  {
    id: 'api-vs-implementation',
    title: 'API vs Implementation',
    subtitle: 'Learn what api and implementation mean in Gradle and when you should use them.',
    image: '/assets/api-vs-implementation.png',
  },
]

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {blogs.map((blog) => (
          <Link
            to={`/blog/${blog.id}`}
            key={blog.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {blog.title}
              </h2>
              <p className="text-gray-500 text-sm mt-2">{blog.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
