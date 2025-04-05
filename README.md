# Tobi's Portfolio Website

A modern, interactive personal portfolio website for showcasing projects, skills, and professional journey.

## Overview

This project is a single-page React application built with Vite and TypeScript. It features a responsive design with smooth animations, timeline components, and modal dialogs to present information in an engaging way.

## Features

- Interactive timeline for showcasing projects and professional experience
- Skill bars with animation on scroll
- Modal dialog system for detailed project information
- Smooth scrolling and section highlighting
- Responsive design that works on mobile, tablet, and desktop
- Custom animations for enhanced user experience
- Dark theme with subtle gradient animations

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher recommended)
- npm (v6.0.0 or higher recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the URL displayed in the terminal (typically http://localhost:5173)

## Project Structure

```
portfolio/
├── public/             # Static assets
├── src/
│   ├── components/     # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Journey.tsx
│   │   ├── Skills.tsx
│   │   ├── ProjectTimeline.tsx
│   │   ├── CVTimeline.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── Modal.tsx
│   ├── assets/         # Images and other assets
│   ├── App.tsx         # Main application component
│   ├── App.css         # Component-specific styles
│   ├── index.css       # Global styles
│   └── main.tsx        # Entry point
├── index.html          # HTML template
└── package.json        # Project dependencies and scripts
```

## Customization

The website is designed to be easily customizable:

1. **Content**: Update text content in the component files under `src/components/`
2. **Styling**: Modify colors, fonts, and other styles in `src/index.css`
3. **Images**: Replace placeholder images in the `src/assets/` directory
4. **Projects**: Add or remove projects in the `ProjectTimeline.tsx` component
5. **CV/Resume**: Update your professional experience in the `CVTimeline.tsx` component

## Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

After building the project, you can deploy the `dist` directory to any static hosting service such as:

- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting

## Technologies Used

- React 19
- TypeScript
- Vite
- CSS (Animation, Flexbox, Grid)
- Intersection Observer API for scroll animations

## Browser Support

The website is compatible with all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspiration from modern portfolio design trends
- Custom animations adapted from various open-source projects
- Icons from Lucide icon font