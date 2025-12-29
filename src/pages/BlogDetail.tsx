import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useEffect, useState } from "react";

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === id);
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!blog) return;

    fetch(blog.file)
      .then(res => res.text())
      .then(setContent)
      .catch(() => setContent("Failed to load content"));
  }, [blog]);

  if (!blog) {
    return <p className="text-center mt-20">Blog not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <span className="text-sm text-[#DE3484] uppercase tracking-wide">
        {blog.category}
      </span>

      <h1 className="text-4xl font-bold mt-2 mb-4">
        {blog.title}
      </h1>

      <p className="text-gray-400 mb-10">
        {blog.date} · {blog.readTime}
      </p>

      <article className="prose prose-invert prose-custom max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSlug]}
          components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
