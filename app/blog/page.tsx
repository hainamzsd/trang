"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    slug: "post1",
    title: "Chart Móc Len: Trợ Thủ Đắc Lực Của Nàng Mê Len",
    excerpt: "Khám phá bí quyết đọc chart móc len từ A-Z cùng Wool Forest. Hướng dẫn chi tiết về các loại chart móc len, cách đọc và sử dụng chart hiệu quả cho người mới bắt đầu.",
    image: "/ANH/ANH1.png",
    date: "2024-01-15",
    readTime: "10 phút",
    author: "Wool Forest",
    category: "Hướng dẫn móc len",
    featured: true
  },
  {
    id: 2,
    slug: "post2", 
    title: "Học Móc Len Tại Wool Forest: Biến Sở Thích Thành Chất Riêng",
    excerpt: "Khám phá hành trình học móc len từ cơ bản đến nâng cao cùng Wool Forest. Hướng dẫn chi tiết về dụng cụ, kỹ thuật và dự án cho người mới bắt đầu.",
    image: "/ANH/ANH5.png",
    date: "2024-01-10",
    readTime: "12 phút",
    author: "Wool Forest",
    category: "Học móc len",
    featured: true
  }
]

export default function BlogPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog Wool Forest",
    "description": "Khám phá thế giới móc len đầy màu sắc, từ những mẹo hay cơ bản đến những kỹ thuật nâng cao.",
    "url": "https://woolforest.shop/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Wool Forest",
      "logo": {
        "@type": "ImageObject",
        "url": "https://woolforest.shop/logo.png"
      }
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "image": `https://woolforest.shop${post.image}`,
      "datePublished": post.date,
      "dateModified": post.date,
      "author": {
        "@type": "Organization",
        "name": post.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Wool Forest",
        "logo": {
          "@type": "ImageObject",
          "url": "https://woolforest.shop/logo.png"
        }
      },
      "url": `https://woolforest.shop/${post.slug}`,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://woolforest.shop/${post.slug}`
      }
    }))
  }

  return (
    <>
      <Script
        id="blog-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      {/* Google Ads (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16994659085"
        strategy="afterInteractive"
      />
      <Script
        id="google-ads"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16994659085');
          `
        }}
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-24">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blog Wool Forest
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Khám phá thế giới móc len đầy màu sắc, từ những mẹo hay cơ bản đến những kỹ thuật nâng cao. 
              Cùng Wool Forest biến sợi len thành những tác phẩm nghệ thuật!
            </p>
          </motion.div>

          {/* Featured Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Bài Viết Nổi Bật</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  <Link href={`/${post.slug}`}>
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-pink-600 text-white text-sm font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString('vi-VN')}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center text-pink-600 font-medium group-hover:text-pink-700 transition-colors">
                        <span>Đọc tiếp</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* All Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Tất Cả Bài Viết</h2>
            <div className="space-y-6">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <Link href={`/${post.slug}`}>
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <div className="relative h-48 md:h-full">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                      
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs font-medium rounded">
                            {post.category}
                          </span>
                          <span className="text-gray-400">•</span>
                          <span className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString('vi-VN')}</span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-pink-600 transition-colors">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <User className="w-4 h-4" />
                              <span>{post.author}</span>
                            </div>
                          </div>

                          <div className="flex items-center text-pink-600 font-medium hover:text-pink-700 transition-colors">
                            <span>Đọc tiếp</span>
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">Bạn có ý tưởng bài viết?</h2>
              <p className="text-lg mb-6 opacity-90">
                Chia sẻ với chúng tôi những câu chuyện, mẹo hay về móc len của bạn!
              </p>
              <Link href="/contact">
                <button className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors">
                  Liên Hệ Với Chúng Tôi
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
} 