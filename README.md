# 💰 Tip Calculator

A modern, professional, and responsive Tip Calculator web application built with pure HTML, CSS, and JavaScript. Designed to calculate tips, total bills, and per-person splits efficiently with a clean and intuitive user interface.

![Project Status](https://img.shields.io/badge/Status-Completed-success)
![Technology](https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20JS-blue)

## 📖 Table of Contents
- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Installation & Usage](#installation--usage)
- [How to Use](#how-to-use)
- [Screenshots](#screenshots)

---

## 🧐 About the Project
This project is a lightweight utility tool designed to help users quickly determine the appropriate tip amount based on the quality of service received. It automatically handles the math for splitting the bill among multiple people, ensuring fair distribution.

The application focuses on **User Experience (UX)** and **Interface Design (UI)**, featuring soft shadows, rounded corners, and smooth interactions without relying on heavy frameworks.

## ✨ Features
- **Real-time Calculation**: Instant results upon clicking the calculate button.
- **Smart Validation**: Prevents calculation errors by validating negative numbers or empty fields.
- **Responsive Design**: Fully optimized for Mobile, Tablet, and Desktop screens.
- **Currency Formatting**: Automatically formats results with the Indian Rupee (₹) symbol (adaptable to others).
- **Split Bill Logic**: Calculates exact cost per person.
- **Clean Aesthetic**: Uses a calming color palette and the *Inter* font family for high readability.

## 🛠 Technologies Used
- **HTML5**: Semantic structure and accessibility.
- **CSS3**: Flexbox layout, CSS Variables, and responsive media queries.
- **JavaScript (ES6+)**: DOM manipulation, event handling, and logic implementation.
- **Google Fonts**: Typed with *Inter* for a modern look.
- **Icons**: Inline SVG icons for lightweight performance.

## 📂 Folder Structure
```
tip-calculator/
│
├── index.html          # Main application structure
├── css/
│   └── style.css       # All styling, animations, and responsive rules
├── js/
│   └── script.js       # Calculation logic and validation
└── assets/             # Directory for images/icons
```

## 🚀 Installation & Usage
This is a static web application, meaning it requires no backend server or installation of dependencies (like Node.js or Python).

1. **Clone or Download** the repository to your local machine.
2. Navigate to the `tip-calculator` folder.
3. **Open** the `index.html` file in any modern web browser (Chrome, Firefox, Edge, Safari).

**Double-click `index.html`** is all it takes!

## 📱 How to Use
1. **Bill Amount**: Enter the total bill amount in the input field.
2. **Service Quality**: Select how the service was from the dropdown menu:
   - Excellent (20%)
   - Good (15%)
   - Average (10%)
   - Poor (5%)
3. **Number of People**: Enter the number of people sharing the bill (Defaults to 1).
4. **Calculate**: Click the "Calculate Tip" button.
5. **View Results**: The breakdown for Tip per person, Total per person, and Grand Total will appear below.

## 🎨 Design Decisions
- **Color Palette**: We used Indigo (`#4F46E5`) for primary actions to invoke trust, and Emerald Green (`#10B981`) for money-related values.
- **Feedback**: Error messages appear in soft red to alert the user without being aggressive.
- **Animations**: Subtle fade-in and slide-down effects make the application feel "alive".

## 📄 Credits
- Design & Code: Developed by [Your Name/ID]
- Icons used: Feather Icons (SVG)
- Fonts: Google Fonts

---
*This project was built for educational purposes to demonstrate clean code architecture and modern frontend capabilities.*
