# 🚀 Dev Stack Builder

Dev Stack Builder is a responsive web application that helps developers explore different technologies and create their own development stack. Users can browse technologies, check their category, difficulty, and rating, and add their favorite technologies to their stack.

## 🌐 Live Website

[https://assignment-5-dev-stack-eight.vercel.app/](#)

## 📂 GitHub Repository

[GitHub Repository](#)

---

## 🛠️ Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- React-Toastify
- JSON
- Vite
- HTML5
- CSS3

---

## ✨ Features

### 1. 🔍 Explore Technologies
Users can explore different frontend, backend, database, and development tools with their descriptions, ratings, difficulty levels, and categories.

### 2. 🧩 Build Your Own Stack
Users can add technologies to their personal stack and remove them whenever they want. Duplicate technologies cannot be added.

### 3. 🔔 Interactive Notifications
React-Toastify is used to show notifications when technologies are added, removed, duplicated, or when the entire stack is cleared.

---

# ❓ React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. React uses JSX because it makes building and understanding UI components easier.

---

## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data that belongs to a component and can change when the user interacts with the application.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets a React component store and update data.

I used it to store the technologies selected by the user in the **Your Stack** section.

``tsx
const [stack, setStack] = useState<Technology[]>([]);

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders. I used it to fetch the technology data from the JSON file when the Technology section loads.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It helps React update the correct item when the list changes.

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content based on a condition.

I used it to show a message when the stack is empty.

in TechnologySection tsx 191 no. line
{stack.length === 0 ? (
  <p>No technologies selected yet.</p>
) : (
  // selected technologies
)}

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props. A child can send data back by calling a function passed from the parent through props.
