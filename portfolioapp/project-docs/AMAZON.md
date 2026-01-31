# Amazon Clone - E-Commerce Website

A fully functional e-commerce web application inspired by Amazon, built with vanilla HTML, CSS, and JavaScript. Features a complete shopping experience with product browsing, cart management, checkout flow, and user authentication.

## 🚀 Features

### Core Functionality
- **Product Catalog**: 68+ products across 8 categories (Smartphones, Clothing, Furniture, Makeup, Healthcare, Pet Care, Kids, Accessories)
- **Smart Shopping Cart**: Global cart management with real-time updates, localStorage persistence, and multi-tab synchronization
- **Search & Filter**: Advanced search with category filters, sorting options (price, name, relevance), and result counts
- **Product Details**: Comprehensive product pages with image galleries, specifications, and related recommendations
- **Checkout Flow**: Multi-step checkout process with order confirmation

### User Experience
- **Authentication System**: Modern login/signup pages with password strength indicators, visibility toggles, and real-time validation
- **Toast Notifications**: Custom notification system with 4 types (success, error, warning, info)
- **Loading States**: Professional loading UI with spinners, skeletons, and progress bars
- **Responsive Design**: Mobile-first approach with breakpoints at 600px, 768px, 900px, and 1200px
- **Amazon-Style UI**: Authentic Amazon color scheme (#131921, #232f3e, #37475a) and typography

### Additional Pages
- Customer Service
- Order Tracking
- Your Account
- Gift Cards & Registry
- Sell on Amazon
- Custom 404 Error Page

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Data Storage**: XML for product data, localStorage for cart persistence
- **Icons**: Font Awesome 6.5.1
- **Fonts**: Amazon Ember (fallback to Arial, Helvetica, sans-serif)
- **Design Pattern**: Mobile-first responsive design

## 📁 Project Structure

```
amazon (2).net/
├── assets/
│   ├── css/
│   │   ├── style.css              # Main stylesheet (1160+ lines)
│   │   ├── cart.css               # Shopping cart styles
│   │   ├── checkout.css           # Checkout page styles
│   │   ├── product-detail.css     # Product detail page styles
│   │   ├── toast.css              # Toast notification styles
│   │   ├── loading.css            # Loading states styles
│   │   ├── loginstyle.css         # Login page styles
│   │   └── signup stle.css        # Signup page styles
│   └── js/
│       ├── header.js              # Dynamic navbar & sidebar (238 lines)
│       ├── footer.js              # Footer generation (82 lines)
│       ├── products.js            # Product data loading
│       ├── cart-manager.js        # Global cart management (200+ lines)
│       ├── addTocart.js           # Add to cart functionality
│       ├── updatecartTable.js     # Cart table updates
│       ├── toast.js               # Toast notification system
│       ├── loading.js             # Loading utilities
│       └── product-detail.js      # Product detail page logic
├── pages/
│   ├── 404.html                   # Custom error page
│   ├── accessories.html
│   ├── cartpage.html
│   ├── checkout.html
│   ├── clothing.html
│   ├── customer-service.html
│   ├── deals.html
│   ├── furniture.html
│   ├── gift-cards.html
│   ├── healthcare.html
│   ├── kidssec.html
│   ├── login.html                 # User login
│   ├── makeup.html
│   ├── order-confirmation.html
│   ├── orders.html
│   ├── panel.html
│   ├── petcare.html
│   ├── product-detail.html
│   ├── registry.html
│   ├── search.html
│   ├── sell.html
│   ├── signup.html                # User registration
│   ├── smartphone.html
│   └── your-account.html
├── 404.html                       # Custom error page
├── index.html                     # Homepage
├── login.html                     # User login
├── signup.html                    # User registration
├── products.xml                   # Product database (68 products)
└── README.md                      # This file
```

## 🚦 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional but recommended)

### Installation

1. **Clone or download** the project:
```bash
git clone <repository-url>
cd "amazon (2).net"
```

2. **Option A: Use a local server** (recommended):
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

3. **Option B: Open directly**:
   - Simply open `index.html` in your browser
   - Note: Some features may require a local server

4. **Access the application**:
   - Navigate to `http://localhost:8000` (if using local server)
   - Or open the file directly in your browser

## 💻 Usage

### Browsing Products
1. Navigate to different categories from the homepage or sidebar menu
2. Click on product cards to view detailed information
3. Use the search bar to find specific products
4. Apply filters and sorting on search results

### Shopping Cart
1. Click "Add to Cart" on any product
2. View cart by clicking the cart icon in the navbar
3. Adjust quantities or remove items in the cart page
4. Cart persists across page refreshes and browser tabs

### Checkout
1. Proceed to checkout from the cart page
2. Fill in shipping and payment information
3. Review order summary
4. Complete purchase to see order confirmation

### User Account
1. Sign up for a new account on the signup page
2. Login with your credentials
3. Access account pages (orders, your account, etc.)

## 🎨 Key Features Explained

### Global Cart Manager
- **Technology**: Custom JavaScript class with event-driven architecture
- **Features**: Real-time updates, localStorage persistence, multi-tab sync
- **Storage**: Uses browser localStorage for cart data persistence
- **Events**: Custom `cartUpdated` events for reactive UI updates

### Toast Notification System
- **Types**: Success, Error, Warning, Info
- **Behavior**: Auto-dismiss after 3 seconds, slide-in animation
- **Usage**: `showToast('message', 'type')`

### Loading States
- **Components**: Spinners, skeleton screens, progress bars, overlay
- **Usage**: `LoadingUtils.showOverlay()`, `LoadingUtils.showSkeleton()`

### Responsive Design
- **Mobile**: < 600px (single column, stacked navigation)
- **Tablet**: 600px - 900px (2 columns, optimized spacing)
- **Desktop**: > 900px (full layout, 4-column footer)
- **Large Desktop**: > 1200px (maximum width constraints)

## 🔧 Configuration

### Modifying Products
Edit `products.xml` to add, remove, or modify products:
```xml
<product>
    <id>69</id>
    <name>Product Name</name>
    <price>99.99</price>
    <category>Category</category>
    <image>image-url.jpg</image>
    <description>Product description</description>
</product>
```

### Customizing Colors
Main color variables in `style.css`:
- Primary Dark: `#131921` (navbar)
- Secondary Dark: `#232f3e` (footer)
- Accent: `#37475a` (hover states)
- Warning: `#febd69` (buttons, highlights)

### Navigation Links
Update navigation in:
- `assets/js/header.js` - Navbar and sidebar links
- `assets/js/footer.js` - Footer links and columns

## 📱 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Known Issues

None currently reported.

## 🚀 Future Enhancements

- [ ] Backend integration (Node.js/Express or PHP)
- [ ] Database integration (MySQL/MongoDB)
- [ ] User authentication with sessions
- [ ] Payment gateway integration
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Order history and tracking
- [ ] Admin panel for product management
- [ ] Email notifications
- [ ] Social media integration

## 📄 License

This project is created for educational purposes.

## 👨‍💻 Author

Created as a learning project to demonstrate modern web development practices.

## 🙏 Acknowledgments

- Design inspiration: Amazon.com
- Icons: Font Awesome
- Built with vanilla JavaScript - no frameworks required!

---

**Note**: This is a frontend-only demonstration project. No actual purchases can be made, and no real payment processing occurs.
