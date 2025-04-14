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
  - `Hero.tsx` - Landing page with animated profile card and tech stack marquee
  - `Skills.tsx` - Skills section with animated progress bars
  - `Journey.tsx` - Career journey overview
  - `ProjectTimeline.tsx` - Timeline of notable projects
  - `EducationTimeline.tsx` - Educational background
  - `CVTimeline.tsx` - Work experience timeline
  - `Contact.tsx` - Contact information section
  - `Footer.tsx` - Website footer with copyright and social links
  - `Header.tsx` - Navigation header
  - `Modal.tsx` - Project detail modal component
- `index.html` - HTML entry point
- `src/index.css` - Main stylesheet

### Commands to Run
- `npm run dev` - Starts the development server
- `npm run build` - Builds the production version
- `npm run lint` - Runs ESLint to check for code issues
- `npm run preview` - Locally preview production build

### Features
- Mouse-tracked 3D parallax effects on profile card and image
- Auto-scrolling technology marquee
- Animated skill bars and statistics counters
- Interactive timeline components for projects, education, and work experience
- Responsive design for various screen sizes
- Social media integration

### Code Conventions
- Use functional components with hooks
- Use TypeScript for type safety
- Keep components small and focused on a single responsibility
- Comment complex logic or calculations
- Use CSS classes with descriptive names

### Current Contact Information
- Email: tobias.welti@outlook.com
- Phone: +49 17636384058
- LinkedIn: https://www.linkedin.com/in/tobias-welti-896022231/
- GitHub: https://github.com/weltitob
- Instagram: https://www.instagram.com/tobsq/

### Future Improvements
- Add dark/light theme toggle
- Add form validation for contact section
- Optimize images and assets
- Add internationalization support
- Implement a blog section

### Deployment
- Currently configured for deployment on standard static hosting services
- Build with `npm run build` and deploy the `dist` folder