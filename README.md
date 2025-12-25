# 📸 Photo Grid with Infinite Scroll – EventGraphia Frontend Task

This project is a React-based photo grid application built as part of the **EventGraphia Frontend Developer Internship evaluation task**.

The application displays images in a grid layout with **infinite scrolling**, allows users to **preview images in full view**, navigate using **keyboard arrow keys**, and **download high-resolution images**.

---

## 🚀 Live Features

- 📷 **Photo Grid Layout**
  - Displays images in a clean grid
  - **5 images per row**
  - Responsive and visually balanced UI

- ♾️ **Infinite Scrolling**
  - Loads **30 images per scroll**
  - Efficiently implemented using **IntersectionObserver**
  - New images are appended seamlessly

- 🔍 **Full Image Preview**
  - Clicking a thumbnail opens the image in full view (modal)
  - Displays high-resolution image (2000×2000)

- ⌨️ **Keyboard Navigation**
  - ⬅️ Left Arrow → Previous image
  - ➡️ Right Arrow → Next image
  - Enhances accessibility and user experience

- ⬇️ **Download Image**
  - Download button available in full view
  - Downloads ultra-high-resolution image (3900×3900)

---

## 🧠 How It Works

### Image Generation Logic
No backend or external API is used.  
Images are generated dynamically using a serial image number.

For each image number (`n`):

- **Thumbnail**
https://placehold.co/200x200/jpg?text=n


- **Full View**
https://placehold.co/2000x2000/jpg?text=n

Each infinite scroll loads the next **30 sequential images**.

---

## ♾️ Infinite Scrolling Implementation

- Uses the **IntersectionObserver API**
- Observes a loader element at the bottom of the grid
- When the loader enters the viewport:
- The page count increments
- Next batch of 30 images is generated and rendered

This approach ensures:
- Better performance
- No excessive scroll event listeners
- Clean and modern implementation

---

## ⌨️ Keyboard Navigation Logic

Keyboard events are handled when the image modal is open:

- `ArrowRight` → Opens the next image
- `ArrowLeft` → Opens the previous image

Event listeners are properly mounted and cleaned up to prevent memory leaks.

---

## 🗂️ Project Structure
src/
├── components/
│ ├── ImageGrid.jsx
│ ├── ImageCard.jsx
│ ├── ImageModal.jsx
│ └── Loader.jsx
│
├── hooks/
│ └── useInfiniteScroll.js
│
├── utils/
│ └── imageUrls.js
│
├── App.jsx
└── index.js


This structure ensures:
- Clear separation of concerns
- Reusable components
- Scalable and maintainable codebase

---

## 🛠️ Tech Stack

- **React.js**
- **JavaScript (ES6+)**
- **CSS / Tailwind / Styled Components** (based on implementation)
- **IntersectionObserver API**

---

## ▶️ Getting Started

### 1. Clone the repository
bash
git clone <(https://github.com/akashsingh9363/Photo-Grid-System.git)>

### 2. Install dependencies
npm install

### 3. Run the project
npm start

The app will run on:
http://localhost:3000

👨‍💻 Author

Akash Kumar Singh
Frontend Developer Intern Candidate – EventGraphia
