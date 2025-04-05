# CLAUDE.md - Development Notes

## Project: Tobi's Portfolio Website

This document contains important information for Claude AI to assist with this project efficiently.

### Project Structure
- React application created with Vite
- TypeScript for type safety
- CSS for styling (no preprocessors or frameworks)

### Key Files
- `src/App.tsx` - Main application component
- `src/components/` - React components for different sections of the portfolio
- `index.html` - HTML entry point
- `src/index.css` - Main stylesheet

### Commands to Run
- `npm run dev` - Starts the development server
- `npm run build` - Builds the production version
- `npm run lint` - Runs ESLint to check for code issues
- `npm run preview` - Locally preview production build

### Known Issues
- Timeline circles may need position adjustments for proper alignment
- Make sure to check responsiveness across various viewport sizes

### Code Conventions
- Use functional components with hooks
- Use TypeScript for type safety
- Keep components small and focused on a single responsibility
- Comment complex logic or calculations
- Use CSS classes with descriptive names

### Future Improvements
- Add animations for improved user experience
- Implement dark/light theme toggle
- Add form validation for contact section
- Optimize images and assets
- Add internationalization support

### Deployment
- Currently configured for deployment on standard static hosting services
- Build with `npm run build` and deploy the `dist` folder