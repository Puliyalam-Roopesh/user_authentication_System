# 🔐 User Authentication System

This is a full-stack user authentication system built with **Node.js**, **Express**, **MongoDB**, and **JWT (JSON Web Tokens)**. It supports features like user registration, login, and email verification.

---

## 🗂️ Features

- ✅ User registration with hashed passwords
- ✅ Login with JWT authentication
- ✅ Email verification (via Nodemailer)
- ✅ Environment-based configuration
- ✅ Secure password handling using bcrypt
- ✅ MongoDB Atlas cloud database integration

## 🚀 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Security**: JWT, bcrypt
- **Email**: Nodemailer
- **Environment Management**: dotenv


## ⚙️ Environment Variables

Create a `.env` file in the backend folder:

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority
PORT=5000
EMAIL_USER=youremail@example.com
EMAIL_PASS=your_email_password_or_app_password
JWT_SECRET=your_jwt_secret_key
```

> ⚠️ Use an App Password if you’re using Gmail 2FA.


## 📦 Installation & Setup

# 1. Clone the repo
git clone https://github.com/your-username/auth-system.git
cd auth-system/backend

# 2. Install dependencies
npm install

# 3. Set up .env file
# (Refer to the section above)

# 4. Run the server
node server.js
# or with nodemon
npx nodemon server.js

## 🛡️ Security Notes

- Passwords are encrypted with **bcrypt**
- JWT secret and Mongo URI are hidden in `.env`
- Avoid committing `.env` to version control


