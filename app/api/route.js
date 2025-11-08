import { NextResponse } from "next/server";

export async function GET() {
  const yourapikey = process.env.NEWS_API_KEY;

  if (!yourapikey) {
    return NextResponse.json(
      { error: "Missing NEWS_API_KEY in environment variables" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&pageSize=15&apiKey=${yourapikey}`
    );

    if (!response.ok) {
      throw new Error(`News API returned status ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Error fetching news:", err);
    return NextResponse.json(
      { error: "Failed to fetch news from external API" },
      { status: 500 }
    );
  }
}
