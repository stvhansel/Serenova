# Serenova - Work-Life Balance Web Application

**Serenova** is a web application designed to help you manage tasks, monitor stress levels with AI, and provide personalized relaxation techniques to promote mental well-being. The platform integrates task management and stress detection in a user-friendly interface, encouraging balance between productivity and mental health.

---

## 🚀 Features

- **Task Management**: Easily organize and manage your daily tasks to stay on track.
- **AI-Based Stress Detection**: Automatically monitor and analyze your stress levels based on activity patterns.
- **Relaxation Techniques**: Get personalized relaxation suggestions to reduce stress and maintain mental balance.

---

## 📑 Table of Contents

- [Features](#-features)
- [Installation](#-installation)
  - [Prerequisites](#prerequisites)
  - [Backend Setup (Laravel)](#backend-setup-laravel)
  - [Frontend Setup (Next.js)](#frontend-setup-nextjs)
  - [Combined Run](#combined-run)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## 💻 Installation

### Prerequisites

Before starting, ensure you have the following installed on your machine:

- PHP (>= 7.3)
- Composer
- Node.js (>= 12.x)
- npm
- MySQL (or any other supported database)
- Git

### Link to Machine Learning Model

[Stress Checker Model](https://github.com/ghazafm/stress-checker-model.git)

---

### Backend Setup (Laravel)

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/serenova.git
    cd serenova
    ```

2. **Install PHP dependencies**:
    ```bash
    composer install
    ```

3. **Configure the environment**:
    Copy the `.env.example` file to create your `.env` file:
    ```bash
    cp .env.example .env
    ```

4. **Set your database credentials** in the `.env` file:
    ```ini
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=serenova
    DB_USERNAME=root
    DB_PASSWORD=
    ```

5. **Generate the application key**:
    ```bash
    php artisan key:generate
    ```

6. **Run database migrations**:
    ```bash
    php artisan migrate
    ```

7. **Run the backend server**:
    ```bash
    php artisan serve
    ```

---

### Frontend Setup (Next.js)

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. **Install Node.js dependencies**:
    ```bash
    npm install
    ```

3. **Run the Next.js development server**:
    ```bash
    npm run dev
    ```

    The app will be running at [http://localhost:3000](http://localhost:3000).

---

### Combined Run

To run both the backend and frontend:

1. **In the first terminal window**, run the Laravel backend:
    ```bash
    php artisan serve
    ```

2. **In the second terminal window**, navigate to the frontend and run:
    ```bash
    cd frontend
    npm run dev
    ```

---

## 🖥️ Usage

Once both the backend and frontend servers are running, you can access Serenova at [http://localhost:3000](http://localhost:3000).

- Use the **Task Management** feature to organize your daily tasks.
- Check your **stress levels** using the AI-powered Stress Checker.
- Access **Relaxation Techniques** to help reduce stress and maintain balance.

---

## 🤝 Contributing

We welcome contributions to Serenova! To contribute:

- Fork the repository
- Create your feature branch (`git checkout -b feature-name`)
- Commit your changes (`git commit -am 'Add new feature'`)
- Push to the branch (`git push origin feature-name`)
- Create a new Pull Request

You can also raise issues or suggest improvements via GitHub Issues.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). See the LICENSE file for more details.

---

Thank you for using **Serenova**! 🌿
