import { NextRequest, NextResponse } from "next/server";
import { searchProducts } from "@/lib/api";

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q");
  if (!q?.trim()) {
    return NextResponse.json([]);
  }

  try {
    const products = await searchProducts(q.trim());
    return NextResponse.json(products);
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json({ error: "Search failed" }, { status: 500 });
  }
}
