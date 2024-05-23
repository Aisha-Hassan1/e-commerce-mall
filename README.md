# E-Commerce Mall Project

Welcome to the E-Commerce Mall Project! This project provides a comprehensive solution for managing an online mall, where administrators can manage products, and customers can shop efficiently.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Introduction
This project is a full-featured e-commerce platform designed for an online mall. It allows administrators to manage products and users, while customers can browse products, add them to their cart, and proceed with purchases. The backend API is built with Node.js.

## Features
- **Admin Features:**
  - Add new products
  - Delete existing products
  - View all products
- **Customer Features:**
  - Browse all products
  - Add products to the cart
  - View cart and prices
  - Register a new account
  - Login to the platform

## Technologies Used
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)

## Installation
To set up the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Aisha-Hassan1/e-commerce-mall.git
    ```
2. Navigate to the project directory:
    ```bash
    cd e-commerce-mall
    ```
3. Install the necessary dependencies:
    ```bash
    npm init -y
    npm i -D nodemon
    npm i express 
    npm install mongoose
    ```
4. Set up your environment variables. Update a `.server.js` file in the root directory and add the following:
    ```
    PORT=3000
    
    ```
5. Start the server:
    ```bash
    npm start
    ```
6. Your API will be running at `http://localhost:3000`.


## License
This project is licensed under the MIT License.

---

Thank you for exploring the E-Commerce Mall Project! We hope it provides a robust platform for managing and shopping in an online mall. If you have any questions or feedback, feel free to reach out.
