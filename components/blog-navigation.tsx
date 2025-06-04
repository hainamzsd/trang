import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BlogNavigationProps {
  currentPost: "post1" | "post2"
}

export default function BlogNavigation({ currentPost }: BlogNavigationProps) {
  const posts = {
    post1: {
      title: "Chart Móc Len: Trợ Thủ Đắc Lực Của Nàng Mê Len",
      path: "/post1",
    },
    post2: {
      title: "Học Móc Len Tại Wool Forest: Biến Sở Thích Thành Chất Riêng",
      path: "/post2",
    },
  }

  const currentIndex = currentPost === "post1" ? 0 : 1
  const nextPost = currentIndex === 0 ? posts.post2 : null
  const prevPost = currentIndex === 1 ? posts.post1 : null

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between border-t border-b border-gray-200 py-4">
        {prevPost ? (
          <Link
            href={prevPost.path}
            className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <div className="text-right">
              <span className="text-sm text-gray-500">Bài viết trước</span>
              <p className="font-medium">{prevPost.title}</p>
            </div>
          </Link>
        ) : (
          <div></div>
        )}

        {nextPost ? (
          <Link
            href={nextPost.path}
            className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors group"
          >
            <div className="text-left">
              <span className="text-sm text-gray-500">Bài viết tiếp theo</span>
              <p className="font-medium">{nextPost.title}</p>
            </div>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
} 