import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { BlogsPage } from "./pages/BlogsPage";
import { ContactPage } from "./pages/ContactPage";
import BlogDetail from "./pages/BlogDetail";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}
