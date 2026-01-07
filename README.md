# 🍜 MOKCHA (먹자) - Korean Restaurant Ordering Platform

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)

## 📖 About The Project

**MOKCHA** (먹자 - meaning "Let's Eat" in Korean) is a modern, full-stack restaurant ordering platform that provides seamless food ordering experience with comprehensive user management and order tracking capabilities. Built with React TypeScript and a custom backend, this application offers an intuitive interface for discovering dishes, placing orders, and managing your dining experience.

### ✨ Key Features

- 🔐 **Complete Authentication System** - Login, Signup, and Logout functionality
- 🏠 **Dynamic Home Page** - Popular Dishes, Fresh Menu, About Restaurant, and User Reviews sections
- 🍽️ **Smart Product Filtering** - Filter by category (Dishes, Salads, Desserts, Drinks, Other)
- 🔍 **Real-time Search** - Instant search functionality across all menu items
- 💰 **Price-based Sorting** - Sort items by newest arrivals and price range
- 📄 **Pagination** - Smooth navigation through extensive menu catalog
- 📦 **Order Management** - Track orders through Paused, Processing, and Finished states
- 👤 **User Profile** - Manage personal information, phone number, bio, points, and profile image
- 📊 **Order History** - Complete history of placed orders with total pricing
- 📱 **100% Responsive Design** - Optimized for all devices and screen sizes
- 🔄 **Real-time Updates** - Backend integration with Axios for dynamic data
- 🍞 **Toast Notifications** - Elegant user feedback system

## 🛠️ Built With

### Frontend Technologies

- **[React 18+](https://react.dev/)** - Modern UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Redux](https://redux.js.org/)** - Global state management
- **[Context API](https://react.dev/learn/passing-data-deeply-with-context)** - Additional state management
- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[Axios](https://axios-http.com/)** - HTTP client for API requests

### Styling & UI Components

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[DaisyUI](https://daisyui.com/)** - Component library for Tailwind
- **Toast Library** - User notification system
- **Custom Components** - Reusable UI components

### Backend Integration

- **Custom Backend API** - Self-developed backend system
- **RESTful API** - Standard API architecture
- **Real-time Data Fetching** - Dynamic content loading
- **Authentication System** - Secure user authentication

## 🎯 Core Features

### 🏠 Home Page

**Popular Dishes Section**

- Curated selection of trending menu items
- Visual cards with pricing and descriptions
- Quick add-to-cart functionality

**Fresh Menu Section**

- Latest additions to the menu
- Seasonal and special offerings
- Real-time updates from backend

**About Restaurant**

- Restaurant story and mission
- Location and contact information
- Operating hours

**User Reviews Section**

- Customer testimonials
- Rating system
- User-generated content

### 🍽️ Product Page

**Category Filtering**

- **Dishes**: Main course items
- **Salads**: Fresh salad options
- **Desserts**: Sweet treats
- **Drinks**: Beverage selection
- **Other**: Additional menu items

**Advanced Filtering Options**

- Real-time search across all products
- Sort by newest arrivals
- Filter by price range
- Instant results with backend integration

**Pagination System**

- Smooth page navigation
- Configurable items per page
- Efficient data loading

### 📦 Orders Page

**Access Control**

- Available only to authenticated users
- Secure order management
- Real-time order status updates

**Order States**

- **Paused Orders**: Orders waiting to be processed
- **Processing Orders**: Currently being prepared
- **Finished Orders**: Completed and delivered orders

**Order Management**

- View order details
- Track order status
- Cancel or modify orders (if applicable)

### 👤 My Page (User Profile)

**Profile Information**

- Personal details management
- Phone number
- Bio/Description
- User points system
- Profile image upload and update

**Update Functionality**

- Edit personal information
- Change contact details
- Update profile picture
- Real-time backend synchronization

**Order History**

- Complete list of past orders
- Order details and items
- Total pricing for each order
- Date and time stamps
- Order status history

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 16.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/khamzaevasad/mokcha-client.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd mokcha
   ```

3. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

4. **Configure environment variables**

   Create a `.env` file in the root directory:

   ```env
   VITE_API_BASE_URL=your_backend_api_url
   VITE_API_KEY=your_api_key
   ```

5. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
mokcha/
├── public/
│   ├── images/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   └── store.ts
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── cards/
│   │   ├── help/
│   │   ├── home/
│   │   ├── order/
│   │   ├── product/
│   │   ├── providers/
│   │   └── user/
│   ├── context/
│   │   └── GlobalContext.tsx
│   ├── css/
│   │   └── styles.css
│   ├── data/
│   │   └── constants.ts
│   ├── hooks/
│   │   └── customHooks.ts
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   ├── enums/
│   │   ├── types/
│   │   └── config.ts
│   ├── pages/
│   │   ├── help/
│   │   ├── home/
│   │   ├── order/
│   │   ├── product/
│   │   ├── productInfo/
│   │   ├── user/
│   │   └── index.ts
│   ├── services/
│   │   └── api.ts
│   ├── utils/
│   │   └── helpers.ts
│   ├── Routes.tsx
│   ├── main.tsx
│   └── App.tsx
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 🎨 Features Breakdown

### Authentication System

- **Signup**: Create new user accounts with validation
- **Login**: Secure authentication with JWT tokens
- **Logout**: Clear session and redirect to home
- **Protected Routes**: Access control for authenticated pages
- **Session Management**: Persistent login with local storage

### Product Management

- **Real-time Filtering**: Backend-powered category filters
- **Search Functionality**: Instant search across menu items
- **Price Sorting**: Sort by price range and newest items
- **Responsive Cards**: Beautiful product cards with images
- **Quick View**: Detailed product information modal

### Order System

- **Cart Management**: Add, remove, and update quantities
- **Order Placement**: Seamless checkout process
- **Status Tracking**: Real-time order status updates
- **Order History**: Complete record of past orders
- **State Management**: Redux for cart and order state

### User Profile

- **Profile Updates**: Edit personal information
- **Image Upload**: Profile picture management
- **Points System**: Track loyalty points
- **Order History**: View complete order records
- **Backend Sync**: Real-time data synchronization

## 🔧 State Management

### Redux Store

```typescript
// Global state management
- User authentication state
- Cart items and quantities
- Order status and history
- Product filters and search
```

### Context API

```typescript
// Shared context for:
- Theme preferences
- Language settings
- Notification system
- Global UI state
```

## 🌐 API Integration

The application integrates with a custom backend API:

- **Authentication Endpoints**: Login, signup, logout, token refresh
- **Product Endpoints**: Get products, filter, search, pagination
- **Order Endpoints**: Create orders, update status, get history
- **User Endpoints**: Get profile, update profile, upload image
- **Real-time Updates**: WebSocket for order status updates

## 📱 Responsive Design

```css
/* Mobile First Approach */
- Base styles for mobile devices
- Tablet optimizations (768px+)
- Desktop enhancements (1024px+)
- Large desktop (1280px+)
```

### Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1279px
- **Large Desktop**: 1280px+

## 🎯 User Experience Features

- **Loading States**: Skeleton loaders for better UX
- **Error Handling**: Graceful error messages
- **Toast Notifications**: Success, error, and info messages
- **Smooth Transitions**: CSS and React transitions
- **Optimistic Updates**: Instant UI feedback
- **Image Lazy Loading**: Optimized performance

## 🔒 Security Features

- **JWT Authentication**: Secure token-based auth
- **Protected Routes**: Route guards for authenticated pages
- **Input Validation**: Form validation on client and server
- **XSS Protection**: Sanitized user inputs
- **HTTPS Only**: Secure data transmission

## 🚀 Performance Optimizations

- **Code Splitting**: Lazy loading of route components
- **Image Optimization**: Compressed and responsive images
- **Caching Strategy**: API response caching
- **Bundle Optimization**: Minimized bundle sizes
- **Tree Shaking**: Unused code elimination

## 🧪 Testing (Planned)

```bash
# Unit tests
npm run test

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e
```

## 📝 TODO / Future Enhancements

- [ ] Payment gateway integration
- [ ] Real-time order tracking with map
- [ ] Multi-language support (Korean, English)
- [ ] Dark mode theme
- [ ] Social media authentication
- [ ] Push notifications
- [ ] Restaurant table reservation
- [ ] Favorites and wish list
- [ ] Promotional codes and discounts
- [ ] Customer loyalty program enhancements

### Development Guidelines

- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Khamzaev Asad**

- GitHub: [@khamzaevasad](https://github.com/khamzaevasad)
- Email: xamzayevasad442@gmail.com

## 🙏 Acknowledgments

- React and TypeScript communities
- Redux team for state management solution
- Tailwind CSS and DaisyUI for beautiful styling
- All open-source contributors

## 📞 Contact & Support

For questions, feedback, or support:

- Create an issue on GitHub
- Email: xamzayevasad442@gmail.com

---

<div align="center">
  <p>Made with ❤️ and 🍜</p>
  <p>먹자! (Let's Eat!) - MOKCHA</p>
  <p>© 2026 MOKCHA. All rights reserved.</p>
</div>
