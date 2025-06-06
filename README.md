# Bhavya Shrivastava - Academic Portfolio Website

A modern, responsive academic portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- **Tab-based Navigation**: Clean navigation between About & Talks, Research, Resume, Awards & Grants, and Contact sections
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Professional academic aesthetic with smooth animations
- **PDF Integration**: Resume viewer and download functionality
- **Academic Focus**: Designed specifically for academic professionals and researchers

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Material Tailwind** - UI components
- **Material Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bhavya-shrivastava-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx    # Tab navigation component
│   ├── Hero.tsx         # About & Conference Talks
│   ├── Research.tsx     # Research publications and interests
│   ├── Resume.tsx       # Resume with PDF integration
│   ├── Awards.tsx       # Awards and grants
│   └── Contact.tsx      # Contact information
├── assets/              # Static assets
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## Customization

### Content Updates

1. **Personal Information**: Update the Hero component with your details
2. **Research**: Modify the Research component with your publications and interests
3. **Awards**: Update the Awards component with your achievements
4. **Contact**: Change contact information in the Contact component
5. **Resume PDF**: Replace the PDF file in the public directory

### Styling

The website uses a professional academic color scheme defined in `tailwind.config.js`. You can customize:

- Primary colors (blues)
- Academic navy theme
- Typography (Inter font family)
- Animations and transitions

### Adding New Sections

To add new tabs/sections:

1. Create a new component in `src/components/`
2. Add the tab to the navigation in `Navigation.tsx`
3. Update the tab type and routing in `App.tsx`

## Deployment

### GitHub Pages

1. Update the `deploy` script in `package.json` with your repository details
2. Run `npm run deploy`

### Other Platforms

The built files in the `dist` directory can be deployed to any static hosting service like Netlify, Vercel, or traditional web hosting.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions about this website template, please reach out through the contact information provided on the website. 