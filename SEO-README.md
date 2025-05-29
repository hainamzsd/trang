# SEO Setup - Robots.txt và Sitemap

Tôi đã thêm robots.txt và sitemap cho project Next.js của bạn để cải thiện SEO.

## Files đã được tạo:

### 1. `/public/robots.txt`
File này kiểm soát cách các search engine crawl website của bạn.

**Cần thay đổi:**
- Thay `https://woolforest.shop` bằng domain thực của bạn

**Tính năng:**
- Cho phép tất cả search engines truy cập
- Chặn truy cập vào các thư mục nhạy cảm (/api/, /admin/, /_next/)
- Cho phép truy cập vào các trang quan trọng
- Thiết lập crawl delay để tránh overload server

### 2. `/app/sitemap.ts`
File này tự động tạo XML sitemap cho website.

**Cần thay đổi:**
- Thay `https://woolforest.shop` bằng domain thực của bạn
- Cập nhật các routes nếu bạn có thêm/bớt trang

**Tính năng:**
- Tự động include tất cả static pages
- Include các product categories dựa trên folder structure
- Thiết lập priority và change frequency cho từng loại trang
- Sẵn sàng để thêm dynamic product pages

## Cách sử dụng:

### 1. Cập nhật domain
Trong cả 2 files, thay `https://woolforest.shop` bằng domain thực:
```typescript
const baseUrl = 'https://woolandlens.com' // Ví dụ
```

### 2. Thêm dynamic product pages (tùy chọn)
Nếu bạn có database products, uncomment và customize phần này trong `sitemap.ts`:
```typescript
const products = await getProducts() // Your product fetching function
const productPages: MetadataRoute.Sitemap = products.map(product => ({
  url: `${baseUrl}/products/${product.category}/${product.slug}`,
  lastModified: new Date(product.updatedAt),
  changeFrequency: 'weekly',
  priority: 0.7,
}))
```

### 3. Test sitemap
Sau khi deploy, bạn có thể test sitemap tại:
- `https://woolforest.shop/sitemap.xml`
- `https://woolforest.shop/robots.txt`

### 4. Submit to search engines
- **Google Search Console:** Submit sitemap URL
- **Bing Webmaster Tools:** Submit sitemap URL

## Lợi ích SEO:

1. **Robots.txt:**
   - Hướng dẫn search engines crawl hiệu quả
   - Bảo vệ các trang không muốn index
   - Cải thiện crawl budget

2. **Sitemap:**
   - Giúp search engines discover tất cả pages
   - Cung cấp metadata về tần suất update
   - Thiết lập priority cho các trang quan trọng

## Customization:

### Thêm/bớt pages trong sitemap:
```typescript
// Thêm page mới
{
  url: `${baseUrl}/new-page`,
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.7,
}
```

### Cập nhật robots.txt:
```
# Thêm rule mới
Disallow: /private-section/
Allow: /public-section/
```

## Next Steps:

1. Thay đổi domain trong cả 2 files
2. Deploy và test
3. Submit sitemap to Google Search Console
4. Monitor crawling trong Search Console
5. Thêm structured data (JSON-LD) cho products nếu cần 