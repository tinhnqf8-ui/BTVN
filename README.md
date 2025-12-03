# React TypeScript Project - BTVN

## 📦 Các Thư Viện Cần Cài Đặt

### 1. Thư Viện Core (Cốt lõi)

```bash
npm install react react-dom
npm install react-router-dom
npm install @reduxjs/toolkit react-redux redux redux-persist
```

**Giải thích:**
- **react, react-dom**: Thư viện React cơ bản để xây dựng giao diện
- **react-router-dom**: Quản lý điều hướng (routing) giữa các trang trong ứng dụng
- **@reduxjs/toolkit**: Công cụ quản lý state toàn cục (global state) của ứng dụng, phiên bản hiện đại của Redux
- **react-redux**: Kết nối Redux với React components
- **redux-persist**: Lưu trữ state vào localStorage/sessionStorage để giữ dữ liệu khi refresh trang

---

### 2. Quản Lý Form

```bash
npm install react-hook-form yup @hookform/resolvers
```

**Giải thích:**
- **react-hook-form**: Thư viện quản lý form với performance cao, ít re-render
- **yup**: Thư viện validate dữ liệu form (kiểm tra email, password, required fields...)
- **@hookform/resolvers**: Kết nối react-hook-form với yup để validate

**Ví dụ sử dụng:**
```tsx
// Validate form đăng nhập
const schema = yup.object({
  email: yup.string().email('Email không hợp lệ').required('Bắt buộc nhập email'),
  password: yup.string().min(6, 'Mật khẩu tối thiểu 6 ký tự').required('Bắt buộc nhập mật khẩu'),
});
```

---

### 3. Giao Diện & Animation

```bash
npm install framer-motion
npm install clsx
npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons
```

**Giải thích:**
- **framer-motion**: Thư viện tạo animation mượt mà, hiệu ứng chuyển động cho components
- **clsx**: Thư viện nhỏ gọn để kết hợp các className có điều kiện
- **@fortawesome/react-fontawesome**: Thư viện icon FontAwesome cho React
- **@fortawesome/free-solid-svg-icons**: Bộ icon solid (đặc) miễn phí
- **@fortawesome/free-brands-svg-icons**: Bộ icon các thương hiệu (Facebook, Twitter...) miễn phí

**Ví dụ animation:**
```tsx
<motion.div
  initial={{ opacity: 0, y: -20 }}    // Trạng thái ban đầu: trong suốt, ở trên
  animate={{ opacity: 1, y: 0 }}       // Trạng thái sau: hiện rõ, về vị trí
  transition={{ duration: 0.5 }}       // Thời gian chuyển động 0.5s
>
  Nội dung được animate
</motion.div>
```

---

### 4. Gọi API

```bash
npm install axios
```

**Giải thích:**
- **axios**: Thư viện HTTP client để gọi API, hỗ trợ Promise, interceptors, timeout...

**Ví dụ:**
```tsx
const getProducts = async () => {
  const response = await axios.get('https://api.example.com/products');
  return response.data;
};
```

---

### 5. Infinite Scroll (Cuộn Vô Hạn)

```bash
npm install react-waypoint
npm install --save-dev @types/react-waypoint
```

**Giải thích:**
- **react-waypoint**: Phát hiện khi người dùng cuộn đến một vị trí nhất định, dùng để tải thêm dữ liệu khi cuộn xuống cuối trang
- **@types/react-waypoint**: Type definitions cho TypeScript

**Ví dụ:**
```tsx
// Khi user cuộn đến Waypoint thì tự động load thêm sản phẩm
<Waypoint onEnter={() => loadMoreProducts()} />
```

---

### 6. SEO (Tối Ưu Công Cụ Tìm Kiếm)

```bash
npm install react-helmet-async
npm install --save-dev @types/react-helmet
```

**Giải thích:**
- **react-helmet-async**: Thay đổi title, description, meta tags của từng trang để SEO tốt hơn
- Phiên bản async (bất đồng bộ) của react-helmet, phù hợp với React 18+

**Ví dụ:**
```tsx
<Helmet>
  <title>Trang chủ - Shop điện thoại</title>
  <meta name="description" content="Mua điện thoại giá rẻ, chính hãng" />
  <meta property="og:title" content="Shop điện thoại" />
</Helmet>
```

---

### 7. Bảo Mật & Tiện Ích

```bash
npm install dompurify slugify
npm install --save-dev @types/dompurify
```

**Giải thích:**
- **dompurify**: Làm sạch HTML để chặn tấn công XSS (Cross-Site Scripting) khi hiển thị nội dung HTML từ user
- **slugify**: Chuyển đổi chuỗi tiếng Việt có dấu thành chuỗi không dấu, thân thiện với URL

**Ví dụ DOMPurify:**
```tsx
// Chặn script độc hại trong HTML
const dirtyHTML = '<img src=x onerror=alert("XSS")>';
const cleanHTML = DOMPurify.sanitize(dirtyHTML);
// Kết quả: '<img src="x">' - đã loại bỏ onerror
```

**Ví dụ Slugify:**
```tsx
import slugify from 'slugify';

const title = 'Điện thoại iPhone 15 Pro Max';
const slug = slugify(title, { lower: true, locale: 'vi' });
// Kết quả: 'dien-thoai-iphone-15-pro-max'
// Dùng làm URL: /san-pham/dien-thoai-iphone-15-pro-max
```

---

### 8. Dev Dependencies (Thư Viện Phát Triển)

```bash
npm install --save-dev typescript @types/react @types/react-dom @types/node
npm install --save-dev vite @vitejs/plugin-react-swc
npm install --save-dev tailwindcss postcss autoprefixer
npm install --save-dev eslint eslint-plugin-react-hooks eslint-plugin-react-refresh
npm install --save-dev typescript-eslint @eslint/js globals
npm install --save-dev sass-embedded
```

**Giải thích:**
- **typescript**: Ngôn ngữ TypeScript, thêm type checking cho JavaScript
- **@types/...**: Định nghĩa kiểu dữ liệu TypeScript cho các thư viện JavaScript
- **vite**: Build tool cực nhanh, thay thế cho Webpack/Create React App
- **@vitejs/plugin-react-swc**: Plugin React cho Vite, dùng SWC compiler (nhanh hơn Babel)
- **tailwindcss**: Framework CSS utility-first để styling nhanh
- **postcss, autoprefixer**: Xử lý CSS, tự động thêm vendor prefixes (-webkit, -moz...)
- **eslint**: Công cụ kiểm tra lỗi code, format code
- **sass-embedded**: Hỗ trợ viết SCSS/SASS

---

## 📁 Cấu Trúc Thư Mục Chi Tiết

```
BTVN/
├── public/                          # Thư mục chứa file tĩnh (static)
│   └── assets/                      # Hình ảnh, icon công khai
│
├── src/                             # Thư mục source code chính
│   ├── main.tsx                     # File khởi đầu ứng dụng (entry point)
│   ├── Route.tsx                    # Cấu hình các route/đường dẫn
│   │
│   ├── assets/                      # Tài nguyên trong source
│   │   ├── icons/                   # File icon SVG, PNG...
│   │   └── images/                  # File hình ảnh
│   │       └── index.ts             # Export tất cả hình ảnh để import dễ dàng
│   │
│   ├── components/                  # Components dùng chung trong toàn bộ app
│   │   │
│   │   ├── ErrorBoundaries/         # Bắt lỗi React
│   │   │   ├── ErrorBoundaries.tsx  # Component bắt lỗi
│   │   │   ├── ErrorFallback.tsx    # Giao diện hiển thị khi có lỗi
│   │   │   └── index.tsx
│   │   │
│   │   ├── Modal/                   # Modal popup (dùng createPortal)
│   │   │   ├── Modal.tsx            # Component modal
│   │   │   └── index.tsx
│   │   │   
│   │   │   # createPortal: Render modal ra ngoài DOM tree chính,
│   │   │   # tránh bị ảnh hưởng bởi z-index, overflow của parent
│   │   │
│   │   ├── InfiniteScroll/          # Cuộn vô hạn
│   │   │   ├── InfiniteScroll.tsx   # Component wrapper cho infinite scroll
│   │   │   └── index.tsx
│   │   │   
│   │   │   # react-waypoint: Phát hiện khi scroll đến cuối trang
│   │   │   # để tự động load thêm dữ liệu (như Facebook, Instagram)
│   │   │
│   │   ├── SEO/                     # Tối ưu SEO
│   │   │   ├── SEOHead.tsx          # Wrapper cho react-helmet-async
│   │   │   └── index.tsx
│   │   │   
│   │   │   # react-helmet-async: Thay đổi title, meta description
│   │   │   # cho từng trang để Google index tốt hơn
│   │   │
│   │   └── common/                  # UI components cơ bản
│   │       ├── Button/              # Component nút bấm
│   │       ├── Input/               # Component input
│   │       ├── Loading/             # Component loading spinner
│   │       └── ...
│   │
│   ├── features/                    # Chia theo tính năng (feature-based)
│   │   │                            # Mỗi feature có đầy đủ: components, hooks, services, types, redux
│   │   │
│   │   ├── auth/                    # Tính năng đăng nhập/đăng ký
│   │   │   ├── components/          # Components riêng của auth (LoginForm, RegisterForm...)
│   │   │   ├── hooks/               # Custom hooks của auth (useAuth, useLogin...)
│   │   │   ├── services/            # API services của auth (loginAPI, registerAPI...)
│   │   │   ├── types/               # TypeScript types của auth (User, LoginRequest...)
│   │   │   └── authSlice.ts         # Redux slice quản lý state auth
│   │   │
│   │   ├── product/                 # Tính năng sản phẩm
│   │   │   ├── components/          # ProductCard, ProductList...
│   │   │   ├── hooks/               # useProducts, useProductDetail...
│   │   │   │   └── useProducts.ts
│   │   │   ├── services/            # getProducts, getProductById...
│   │   │   ├── types/               # Product, ProductFilter...
│   │   │   └── productSlice.ts      # Redux slice quản lý state products
│   │   │
│   │   ├── comment/                 # Tính năng bình luận
│   │   │   ├── components/          # CommentItem, CommentForm...
│   │   │   ├── types.ts             # Comment, CreateCommentRequest...
│   │   │   └── commentSlice.ts      # Redux slice quản lý comments
│   │   │
│   │   └── counter/                 # Ví dụ counter đơn giản
│   │       └── counterSlice.ts
│   │
│   ├── hooks/                       # Custom hooks dùng chung toàn app
│   │   ├── useDebounce.ts           # Hook debounce (trì hoãn) - dùng cho search
│   │   ├── useLocalStorage.ts       # Hook tương tác với localStorage
│   │   ├── useInfiniteScroll.ts     # Hook xử lý infinite scroll
│   │   └── useScrollToTop.ts        # Hook scroll lên đầu trang
│   │
│   ├── layout/                      # Các layout chung
│   │   └── DefaultLayout/           # Layout mặc định (Header + Content + Footer)
│   │       ├── DefaultLayout.tsx    # Component layout chính
│   │       ├── index.tsx
│   │       └── components/          # Components trong layout
│   │           │
│   │           ├── Header/          # Phần header (logo, menu, search, user...)
│   │           │   ├── Header.tsx
│   │           │   ├── index.tsx
│   │           │   └── components/  # Components nhỏ trong Header
│   │           │       ├── SearchForm/
│   │           │       │   ├── SearchForm.tsx      # Form tìm kiếm
│   │           │       │   ├── SearchResult/       # Kết quả tìm kiếm
│   │           │       │   └── index.tsx
│   │           │       ├── UserMenu/               # Menu user (avatar, dropdown)
│   │           │       ├── Notification/           # Thông báo
│   │           │       ├── MyCourses/              # Khóa học của tôi
│   │           │       └── ModalList/              # Danh sách modal
│   │           │
│   │           ├── Footer/          # Phần footer
│   │           │   ├── Footer.tsx
│   │           │   └── index.tsx
│   │           │
│   │           ├── Sidebar/         # Thanh bên (menu phụ)
│   │           │   ├── Sidebar.tsx
│   │           │   └── index.tsx
│   │           │
│   │           └── AppLogo/         # Logo ứng dụng
│   │               ├── AppLogo.tsx
│   │               └── index.tsx
│   │
│   ├── pages/                       # Các trang (pages/screens)
│   │   │
│   │   ├── DefaultLayout/           # Các trang dùng DefaultLayout
│   │   │   │
│   │   │   ├── Home/                # Trang chủ
│   │   │   │   ├── Home.tsx
│   │   │   │   └── index.tsx
│   │   │   │
│   │   │   ├── Auth/                # Các trang liên quan đăng nhập
│   │   │   │   ├── Login/           # Trang đăng nhập
│   │   │   │   │   ├── Login.tsx
│   │   │   │   │   └── index.tsx
│   │   │   │   └── Register/        # Trang đăng ký
│   │   │   │       ├── Register.tsx
│   │   │   │       └── index.tsx
│   │   │   │
│   │   │   ├── Profile/             # Trang thông tin cá nhân
│   │   │   │   ├── Profile.tsx
│   │   │   │   └── index.tsx
│   │   │   │
│   │   │   ├── ModalDemo/           # Trang demo Modal
│   │   │   │   ├── ModalDemo.tsx
│   │   │   │   └── index.tsx
│   │   │   │
│   │   │   └── ScrollDemo/          # Trang demo Infinite Scroll
│   │   │       ├── ScrollDemo.tsx
│   │   │       └── index.tsx
│   │   │
│   │   ├── Error/                   # Các trang lỗi
│   │   │   ├── NotFound/            # Trang 404 - Không tìm thấy
│   │   │   │   ├── NotFound.tsx
│   │   │   │   └── index.tsx
│   │   │   └── ServerError/         # Trang 500 - Lỗi server
│   │   │
│   │   └── BuggyComponent/          # Trang test ErrorBoundary
│   │       ├── BuggyComponent.tsx   # Component cố tình throw error
│   │       └── index.tsx
│   │
│   ├── services/                    # Các service gọi API
│   │   ├── api.ts                   # Cấu hình Axios instance (baseURL, headers, interceptors...)
│   │   ├── product/                 # API liên quan sản phẩm
│   │   │   └── index.ts             # getProducts(), getProductById()...
│   │   └── user/                    # API liên quan user
│   │       └── index.ts             # getUserProfile(), updateProfile()...
│   │
│   ├── store/                       # Redux store
│   │   ├── index.tsx                # Cấu hình store (configureStore, persistor)
│   │   └── reducers/
│   │       └── index.ts             # Root reducer (kết hợp tất cả slices)
│   │
│   ├── styles/                      # Styles toàn cục
│   │   ├── index.css                # CSS chính (import Tailwind, global styles)
│   │   └── variables.scss           # Biến SCSS (colors, spacing, breakpoints...)
│   │
│   ├── types/                       # TypeScript types dùng chung
│   │   ├── common.ts                # Types chung: ApiResponse, PaginationParams...
│   │   ├── api.ts                   # Types cho API: AxiosConfig, ErrorResponse...
│   │   └── index.ts                 # Export tất cả types
│   │
│   └── utils/                       # Các hàm tiện ích
│       ├── http.ts                  # HTTP client wrapper
│       ├── callApi.ts               # Function gọi API chung
│       ├── sanitize.ts              # Wrapper cho DOMPurify (chống XSS)
│       ├── slug.ts                  # Wrapper cho slugify (tạo URL thân thiện)
│       ├── constants.ts             # Các hằng số: API_URL, ITEMS_PER_PAGE...
│       └── helpers.ts               # Các hàm helper: formatDate, formatMoney...
│
├── .env                             # Biến môi trường (API keys, URLs...)
├── .env.example                     # Ví dụ file .env (commit lên git)
├── .gitignore                       # File/folder không commit lên git
├── eslint.config.js                 # Cấu hình ESLint
├── index.html                       # File HTML gốc
├── package.json                     # Danh sách dependencies, scripts
├── postcss.config.js                # Cấu hình PostCSS (dùng cho Tailwind)
├── README.md                        # File hướng dẫn này
├── tailwind.config.js               # Cấu hình Tailwind CSS
├── tsconfig.json                    # Cấu hình TypeScript chung
├── tsconfig.app.json                # Cấu hình TypeScript cho app
├── tsconfig.node.json               # Cấu hình TypeScript cho Node (Vite config)
└── vite.config.ts                   # Cấu hình Vite build tool
```


---

## 🔧 File Cấu Hình Quan Trọng

### `vite.config.ts` - Cấu hình Vite
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Tạo alias (shortcut) để import cho ngắn gọn
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@features': path.resolve(__dirname, './src/features'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@services': path.resolve(__dirname, './src/services'),
      '@store': path.resolve(__dirname, './src/store'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@types': path.resolve(__dirname, './src/types'),
    },
  },
})
```

**Giải thích:**
- **alias**: Thay vì `import Button from '../../../components/Button'` → dùng `import Button from '@components/Button'`
- Giúp code sạch hơn, dễ refactor, không sợ sai đường dẫn

---

## 📝 Ví Dụ Sử Dụng Chi Tiết

### 1. 🎭 Modal với createPortal

**Tại sao dùng createPortal?**
- Modal thường cần hiển thị ở trên cùng, nhưng nếu render trong component con, có thể bị ảnh hưởng bởi CSS `overflow: hidden` hoặc `z-index` của parent
- `createPortal` cho phép render Modal ra ngoài DOM tree chính (thường là vào `body`), tránh các vấn đề trên

**File: `src/components/Modal/Modal.tsx`**
```tsx
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;           // Mở/đóng modal
  onClose: () => void;       // Hàm đóng modal
  children: ReactNode;       // Nội dung bên trong modal
  title?: string;            // Tiêu đề modal (optional)
}

const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  if (!isOpen) return null;

  // createPortal render ra ngoài root, vào thẻ body
  return createPortal(
    <AnimatePresence>
      {/* Overlay tối phía sau */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClose}  // Click overlay để đóng
      >
        {/* Hộp modal */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-lg p-6 max-w-md w-full"
          onClick={(e) => e.stopPropagation()}  // Không đóng khi click vào modal
        >
          {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
          {children}
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          >
            Đóng
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body  // Render vào body thay vì vào component cha
  );
};

export default Modal;
```

**Sử dụng:**
```tsx
function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Mở Modal</button>
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Xác nhận">
        <p>Bạn có chắc chắn muốn xóa sản phẩm này?</p>
      </Modal>
    </>
  );
}
```

---

### 2. 📝 Form với react-hook-form + yup

**Tại sao dùng react-hook-form?**
- Form thông thường re-render nhiều lần khi typing → chậm
- react-hook-form dùng uncontrolled components, ít re-render hơn → nhanh
- Tích hợp tốt với yup để validate

**File: `src/pages/Auth/Login/Login.tsx`**
```tsx
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Schema validation
const loginSchema = yup.object({
  email: yup
    .string()
    .email('Email không hợp lệ')
    .required('Vui lòng nhập email'),
  password: yup
    .string()
    .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
    .required('Vui lòng nhập mật khẩu'),
});

type LoginFormData = yup.InferType<typeof loginSchema>;

function Login() {
  const {
    register,           // Đăng ký input vào form
    handleSubmit,       // Hàm xử lý submit
    formState: { errors, isSubmitting }  // errors: lỗi validate, isSubmitting: đang submit
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),  // Dùng yup để validate
  });
  
  const onSubmit = async (data: LoginFormData) => {
    try {
      // Gọi API đăng nhập
      const response = await loginAPI(data);
      console.log('Đăng nhập thành công:', response);
    } catch (error) {
      console.error('Đăng nhập thất bại:', error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Đăng nhập</h1>
      
      {/* Input Email */}
      <div className="mb-4">
        <label className="block mb-2">Email</label>
        <input
          {...register('email')}  // Đăng ký input
          type="email"
          className="w-full border px-3 py-2 rounded"
          placeholder="example@email.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      
      {/* Input Password */}
      <div className="mb-4">
        <label className="block mb-2">Mật khẩu</label>
        <input
          {...register('password')}
          type="password"
          className="w-full border px-3 py-2 rounded"
          placeholder="••••••••"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>
      
      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {isSubmitting ? 'Đang đăng nhập...' : 'Đăng nhập'}
      </button>
    </form>
  );
}
```

---

### 3. ♾️ Infinite Scroll với react-waypoint

**Kịch bản:** Load danh sách sản phẩm, khi scroll xuống cuối thì tự động load thêm

**File: `src/pages/ScrollDemo/ScrollDemo.tsx`**
```tsx
import { useState, useEffect } from 'react';
import { Waypoint } from 'react-waypoint';

interface Product {
  id: number;
  name: string;
  price: number;
}

function ScrollDemo() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);  // Còn dữ liệu để load không?
  
  // Fetch products khi page thay đổi
  useEffect(() => {
    loadProducts(page);
  }, [page]);
  
  const loadProducts = async (pageNum: number) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/products?page=${pageNum}&limit=10`);
      const data = await response.json();
      
      if (data.products.length === 0) {
        setHasMore(false);  // Hết dữ liệu
      } else {
        setProducts(prev => [...prev, ...data.products]);  // Thêm vào cuối list
      }
    } catch (error) {
      console.error('Lỗi load products:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleLoadMore = () => {
    if (!loading && hasMore) {
      setPage(prev => prev + 1);  // Tăng page lên 1
    }
  };
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Danh sách sản phẩm</h1>
      
      {/* Danh sách sản phẩm */}
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded">
            <h3 className="font-bold">{product.name}</h3>
            <p className="text-red-500">{product.price.toLocaleString()}đ</p>
          </div>
        ))}
      </div>
      
      {/* Waypoint: Khi scroll đến đây thì gọi handleLoadMore */}
      {hasMore && (
        <Waypoint onEnter={handleLoadMore}>
          <div className="text-center py-4">
            {loading ? (
              <p>Đang tải thêm sản phẩm...</p>
            ) : (
              <p className="text-gray-400">Scroll xuống để tải thêm</p>
            )}
          </div>
        </Waypoint>
      )}
      
      {/* Hết dữ liệu */}
      {!hasMore && (
        <p className="text-center py-4 text-gray-500">
          Đã hiển thị hết sản phẩm
        </p>
      )}
    </div>
  );
}
```

**Giải thích:**
- `<Waypoint onEnter={handleLoadMore}>`: Khi user scroll đến component này, gọi `handleLoadMore`
- Mỗi lần load xong, tăng `page` lên 1 để load trang tiếp theo
- Dùng `hasMore` để biết còn dữ liệu không, tránh gọi API vô ích

---

### 4. 🔍 SEO với react-helmet-async

**Tại sao cần SEO?**
- Google, Facebook crawl website để hiển thị title, description, thumbnail
- React SPA mặc định chỉ có 1 title duy nhất trong `index.html`
- react-helmet-async cho phép đổi title, meta description cho từng trang

**Setup trong `main.tsx`:**
```tsx
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <ErrorBoundary>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </ReduxProvider>
    </ErrorBoundary>
  </HelmetProvider>
);
```

**File: `src/components/SEO/SEOHead.tsx`**
```tsx
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

function SEOHead({ title, description, keywords, image, url }: SEOHeadProps) {
  return (
    <Helmet>
      {/* Title */}
      <title>{title}</title>
      
      {/* Meta tags cơ bản */}
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}

export default SEOHead;
```

**Sử dụng trong từng trang:**
```tsx
import SEOHead from '@components/SEO';

function HomePage() {
  return (
    <>
      <SEOHead
        title="Trang chủ - Shop điện thoại"
        description="Mua điện thoại chính hãng, giá tốt nhất thị trường"
        keywords="điện thoại, iphone, samsung, xiaomi"
        image="https://myshop.com/thumbnail.jpg"
        url="https://myshop.com"
      />
      
      <div>Nội dung trang chủ...</div>
    </>
  );
}

function ProductDetailPage() {
  const product = { name: 'iPhone 15 Pro Max', price: 30000000 };
  
  return (
    <>
      <SEOHead
        title={`${product.name} - ${product.price.toLocaleString()}đ`}
        description={`Mua ${product.name} giá tốt, bảo hành chính hãng`}
        keywords="iphone 15 pro max, điện thoại iphone"
        image="https://myshop.com/products/iphone-15.jpg"
      />
      
      <div>Chi tiết sản phẩm...</div>
    </>
  );
}
```

---

### 5. 🎨 Animation với framer-motion

**Các animation phổ biến:**

```tsx
import { motion } from 'framer-motion';

// 1. Fade In (Mờ dần hiện ra)
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Nội dung fade in
</motion.div>

// 2. Slide In từ trái
<motion.div
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.3 }}
>
  Trượt từ trái vào
</motion.div>

// 3. Slide In từ dưới (hay dùng cho modal, card)
<motion.div
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.4 }}
>
  Trượt từ dưới lên
</motion.div>

// 4. Scale (Phóng to/thu nhỏ)
<motion.button
  whileHover={{ scale: 1.1 }}  // Hover lên phóng to 1.1 lần
  whileTap={{ scale: 0.95 }}   // Click vào thu nhỏ
  className="px-4 py-2 bg-blue-500 text-white rounded"
>
  Click me
</motion.button>

// 5. Stagger (Hiệu ứng lần lượt cho danh sách)
<motion.ul
  initial="hidden"
  animate="visible"
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.1  // Mỗi child cách nhau 0.1s
      }
    }
  }}
>
  {items.map(item => (
    <motion.li
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {item.name}
    </motion.li>
  ))}
</motion.ul>
```

---

### 6. 🛡️ Bảo mật với DOMPurify (Chống XSS)

**XSS là gì?**
- Cross-Site Scripting: Hacker inject code JavaScript độc hại vào website
- Ví dụ: User nhập comment `<script>alert('Hacked!')</script>`, nếu render trực tiếp sẽ chạy script này

**File: `src/utils/sanitize.ts`**
```tsx
import DOMPurify from 'dompurify';

/**
 * Làm sạch HTML, loại bỏ script độc hại
 */
export const sanitizeHTML = (html: string): string => {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br'],  // Chỉ cho phép các thẻ này
    ALLOWED_ATTR: ['href', 'target']  // Chỉ cho phép attributes này
  });
};
```

**Sử dụng:**
```tsx
import { sanitizeHTML } from '@utils/sanitize';

function CommentItem({ comment }) {
  // Nội dung comment từ user (có thể chứa code độc)
  const dirtyHTML = comment.content;
  
  // Làm sạch trước khi render
  const cleanHTML = sanitizeHTML(dirtyHTML);
  
  return (
    <div
      className="comment"
      dangerouslySetInnerHTML={{ __html: cleanHTML }}
    />
  );
}
```

**Ví dụ cụ thể:**
```tsx
// Input từ hacker
const hackerInput = '<img src=x onerror=alert("XSS")> <b>Bình luận</b>';

// Sau khi sanitize
const clean = sanitizeHTML(hackerInput);
// Kết quả: '<b>Bình luận</b>'
// Đã loại bỏ thẻ <img> và onerror độc hại
```

---

### 7. 🔗 Slugify - Tạo URL thân thiện

**File: `src/utils/slug.ts`**
```tsx
import slugify from 'slugify';

/**
 * Chuyển chuỗi tiếng Việt thành slug URL-friendly
 */
export const createSlug = (text: string): string => {
  return slugify(text, {
    lower: true,        // Chuyển thành chữ thường
    locale: 'vi',       // Hỗ trợ tiếng Việt
    strict: true,       // Loại bỏ ký tự đặc biệt
    trim: true          // Xóa khoảng trắng đầu cuối
  });
};
```

**Sử dụng:**
```tsx
import { createSlug } from '@utils/slug';

// Tạo sản phẩm
const product = {
  id: 123,
  name: 'Điện thoại iPhone 15 Pro Max 256GB'
};

// Tạo slug từ tên
const slug = createSlug(product.name);
// Kết quả: 'dien-thoai-iphone-15-pro-max-256gb'

// URL cuối cùng
const productURL = `/san-pham/${slug}-${product.id}`;
// Kết quả: '/san-pham/dien-thoai-iphone-15-pro-max-256gb-123'

// SEO-friendly, dễ đọc, Google ưu tiên hơn URL dạng /product?id=123
```

**Ví dụ với bài viết blog:**
```tsx
const post = {
  id: 456,
  title: 'Hướng dẫn học React từ A đến Z năm 2024'
};

const postSlug = createSlug(post.title);
// 'huong-dan-hoc-react-tu-a-den-z-nam-2024'

const postURL = `/blog/${postSlug}`;
// '/blog/huong-dan-hoc-react-tu-a-den-z-nam-2024'
```

---

### 8. 💾 Redux Persist - Lưu State

**Tại sao cần Redux Persist?**
- Redux state mất hết khi refresh trang
- Redux Persist tự động lưu state vào localStorage
- Khi reload trang, state được khôi phục lại

**File: `src/store/index.tsx`**
```tsx
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';  // localStorage
import rootReducer from './reducers';

// Cấu hình persist
const persistConfig = {
  key: 'root',                    // Key trong localStorage
  storage,                        // Dùng localStorage
  whitelist: ['auth', 'cart'],    // CHỈ lưu auth và cart, không lưu các slice khác
  // blacklist: ['ui']            // KHÔNG lưu slice 'ui'
};

// Wrap reducer với persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Tạo store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Bỏ qua check serialize cho redux-persist
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

// Tạo persistor
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

**Trong `main.tsx`:**
```tsx
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

createRoot(document.getElementById("root")!).render(
  <ReduxProvider store={store}>
    <PersistGate loading={<div>Đang tải...</div>} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </ReduxProvider>
);
```

**Giải thích:**
- **PersistGate**: Đợi Redux Persist load state từ localStorage xong mới render app
- **whitelist**: Chỉ lưu auth và cart (vì UI state không cần lưu)
- **loading**: Component hiển thị trong lúc đang load state

**Kiểm tra trong DevTools:**
- Mở F12 → Application → Local Storage
- Sẽ thấy key `persist:root` chứa state đã lưu

---

## 🚀 Lệnh Chạy Dự Án

```bash
# Cài đặt dependencies
npm install

# Chạy development server (localhost:5173)
npm run dev

# Build production (tạo file tối ưu)
npm run build

# Preview bản build production
npm run preview

# Kiểm tra lỗi code (lint)
npm run lint
```

---

## 📚 Tính Năng Chính

- ✅ **TypeScript** - Kiểm tra kiểu dữ liệu, giảm bug
- ✅ **React Router v7** - Điều hướng giữa các trang
- ✅ **Redux Toolkit** - Quản lý state toàn cục
- ✅ **Redux Persist** - Lưu state vào localStorage
- ✅ **React Hook Form + Yup** - Quản lý form, validate
- ✅ **Framer Motion** - Animation mượt mà
- ✅ **React Waypoint** - Infinite scroll (cuộn vô hạn)
- ✅ **React Helmet Async** - SEO cho từng trang
- ✅ **DOMPurify** - Chống tấn công XSS
- ✅ **Slugify** - Tạo URL thân thiện SEO
- ✅ **Tailwind CSS** - Styling nhanh với utility classes
- ✅ **Axios** - Gọi API
- ✅ **Error Boundary** - Bắt lỗi React
- ✅ **Portal** - Quản lý Modal

---

## 🔒 Bảo Mật

- **DOMPurify**: Chặn XSS khi hiển thị HTML từ user
- **Environment Variables**: Lưu API key, secret vào file `.env` (không commit lên Git)
- **HTTPS**: Production phải dùng HTTPS
- **Input Validation**: Validate input bằng yup trước khi gửi API

---

## 📖 Best Practices (Thực Hành Tốt)

1. **Component Organization**: Chia theo tính năng (feature-based), mỗi feature tự quản lý components, hooks, services
2. **Type Safety**: Dùng TypeScript nghiêm ngặt, định nghĩa type cho mọi thứ
3. **Code Splitting**: Lazy load components, routes để giảm bundle size
4. **Performance**: Dùng `React.memo`, `useMemo`, `useCallback` để tránh re-render không cần thiết
5. **Accessibility**: Follow ARIA guidelines cho người khuyết tật
6. **SEO**: Dùng react-helmet-async để optimize meta tags
7. **Security**: Luôn sanitize user input trước khi render HTML

---

## 📄 License

MIT