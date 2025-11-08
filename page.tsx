"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ArticleCard from "./components/ArticleCard";
import SettingsModal from "./components/SettingsModal";

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  source: { name: string };
}

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("/api/news");
        const data = await res.json();
        if (data.error) setError(data.error);
        else setArticles(data.articles || []);
      } catch (err) {
        setError("Failed to fetch news");
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar onSettingsClick={() => setSettingsOpen(true)} />
      <main className="max-w-4xl mx-auto p-4 grid gap-6 sm:grid-cols-2 mt-6">
        {loading && <p className="text-center col-span-full">⏳ Loading latest news...</p>}
        {error && <p className="text-center text-red-600 col-span-full">❌ {error}</p>}
        {!loading && !error && articles.map((a, i) => <ArticleCard key={i} article={a} />)}
      </main>
      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
      <Footer />
    </div>
  );
}