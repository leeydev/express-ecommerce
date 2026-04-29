# Express E-commerce API

Production-ready E-commerce REST API with authentication, product management, and order processing.

## Features

- 🔐 JWT Authentication
- 🛍️ Product CRUD operations
- 📦 Order management
- 💳 Stripe payment integration
- 🔒 Password hashing with bcrypt
- ✅ Input validation

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login user |
| GET | /api/products | List products |
| POST | /api/products | Create product |
| POST | /api/orders | Create order |

## Installation

```bash
npm install
cp .env.example .env
npm run dev
```

## Testing

```bash
npm test
```
