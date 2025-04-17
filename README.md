# EduPulse— Interactive Web Platform

## 📚 Overview
The **EduPulse** is a professional, feature-rich web application that simulates virtual science labs, educational games, and personalized dashboards for students, teachers, and parents. Built using HTML, CSS, JavaScript, and Firebase, the tool promotes immersive STEM learning via gamification, analytics, and role-based interaction.

---

## 🚀 Features
### 🔐 Authentication
- Role-based login and registration system (Student, Teacher, Parent)
- Firebase Authentication (with username uniqueness, password validation)
- Real-time database registration and login verification

### 👨‍🎓 Student Dashboard (stuhome.html)
- Subject Labs: Physics, Chemistry, Biology, Maths
- Interactive Educational Games:
  - `game-periodic.html`: Periodic Table Puzzle
  - `game-magnet.html`: Magnet Maze Challenge
  - `game-cell.html`: Cell Structure Drag-and-Drop
- Achievement badges
- Dashboard cards styled with tiles

### 🎓 College Student Dashboard (colhome.html)
- Labs: C, C++, Java, HTML, JavaScript, Python
- Educational Games:
  - `game-code.html`: Code Cruncher
  - `game-debug.html`: Debug Blitz
  - `game-trivia.html`: Tech Trivia Tower
- Badge system
- Compact, responsive tiles

### 👨‍🏫 Teacher Dashboard (teachhome.html)
- View student progress
- Upload labs/assignments
- Monitor achievements and quiz scores
- Post announcements

### 👪 Parent Dashboard (parenthome.html)
- Monitor child’s labs and progress
- View achievements and insights
- Download reports
- Manage child profiles

### 📄 Additional Pages
- `index.html`: Landing page with animated header & dropdowns
- `about.html`: Vision, Mission, FAQs, Testimonials
- `soon.html`: Placeholder for future features
- `login.html`: Unified role-based authentication and registration interface

---

## 🧪 Technologies Used
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend / DB**: Firebase Realtime Database, JDoodle Compilers (Updating)
- **Animations & UI**: CSS Grid, Flexbox, Keyframes
- **Persistent State**: LocalStorage (used in games)

---

## 📂 Folder Structure
```
├── index.html
├── about.html
├── login.html
├── stuhome.html
├── colhome.html
├── teachhome.html
├── parenthome.html
├── game-periodic.html
├── game-magnet.html
├── game-cell.html
├── game-code.html
├── game-debug.html
├── game-trivia.html
├── comingsoon.html
├── style.css
├── validation.js
└── README.md
```

---

## 🛠️ Setup Instructions
1. Clone the repo or extract the zip
2. Add your Firebase credentials inside the `<script>` tag in `login.html`
3. Ensure you host on a Firebase project or localhost
4. Open `index.html` in browser to begin

   (or)

open the following link on your browser : https://aruthra615.github.io/Web-Project#

---

## To Do
- Add multiplayer lab simulations
- Enable teacher feedback in real-time
- Improve mobile responsiveness
- Integrate leaderboard API for games

---

## 👩‍💻 Author
Made with love for learning by Aruthra and Advaith

> Empowering education through immersive simulations ✨
