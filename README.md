# Harihar Institute Website

A modern, responsive website for Harihar Institute, built with React, Vite, Tailwind CSS, and shadcn/ui.

## Features

- Responsive design for all devices (mobile, tablet, desktop)
- Modern UI components using shadcn/ui
- Tailwind CSS for styling
- React Router for navigation
- TypeScript for type safety
- Optimized performance with Vite

## Pages

- Home
- Courses
- About
- Faculty
- Results
- Gallery
- Contact

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build files will be created in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/
│       └── ... (shadcn/ui components)
├── pages/
│   ├── Home.tsx
│   ├── Courses.tsx
│   ├── About.tsx
│   ├── Faculty.tsx
│   ├── Results.tsx
│   ├── Gallery.tsx
│   └── Contact.tsx
├── assets/
│   └── ... (images and other static files)
├── App.tsx
└── main.tsx
```

## Technologies Used

- React
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Router
- Lucide Icons

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
