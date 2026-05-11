# 🥔 Potato - Premium Food Delivery Platform

Potato is a high-fidelity, full-stack food delivery application designed with a **Royal Forest & Gold** aesthetic. It provides a seamless, luxurious experience for customers to browse, order, and track gourmet meals, while offering a robust management dashboard for administrators.

![Potato Hero](frontend/public/potato_hero.png)

## 🌐 Live Demo

- **Frontend**: [https://potato-frontend-6b2l.onrender.com](https://potato-frontend-6b2l.onrender.com)
- **Admin Panel**: [https://potato-admin.onrender.com](https://potato-admin.onrender.com)
- **Backend API**: [https://potato-backend-jdzs.onrender.com](https://potato-backend-jdzs.onrender.com)


## ✨ Key Features

- **Royal Forest UI**: A sophisticated, cinematic interface using deep forest greens and golden amber accents.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens.
- **Live Order Tracking**: Customers can track their order status in real-time.
- **Admin Dashboard**: A comprehensive panel to manage food items, categories, and order fulfillment.
- **Secure Payments**: Integrated with Stripe for seamless checkout experiences.
- **Authentication**: Secure login/signup system for personalized ordering.
- **Glassmorphism Elements**: Modern UI components with backdrop blurs and subtle glows.

## 🚀 Tech Stack

- **Frontend**: React.js, Vite, Vanilla CSS (Custom Design System)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas)
- **State Management**: React Context API
- **Payments**: Stripe API

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Tanmoy200405/Potato.git
cd Potato
```

### 2. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` folder:
```env
MONGODB_URI=your_mongodb_atlas_url
JWT_SECRET=your_random_secret
STRIPE_SECRET_KEY=your_stripe_secret
```
Start the server:
```bash
node server.js
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

### 4. Admin Panel Setup
```bash
cd ../admin
npm install
npm run dev
```

## 🌍 Deployment

This project is configured for one-click deployment via **Render** using the provided `render.yaml` blueprint.

### Deployment Steps:
1. Push your code to GitHub.
2. Go to [Render Dashboard](https://dashboard.render.com/).
3. Select **Blueprints** and connect this repository.
4. Add your Environment Variables in the Render Dashboard for the `potato-backend` service.

## 🎨 Design System

Potato uses a custom CSS-variable based design system:
- **Primary**: `#FFB800` (Golden Amber)
- **Background**: `#09261E` (Deep Forest Green)
- **Surface**: `#123C30` (Emerald Slate)
- **Typography**: Outfit & Playfair Display

---
Developed with ❤️ by [Tanmoy](https://github.com/Tanmoy200405)
