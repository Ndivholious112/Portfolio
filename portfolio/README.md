# 🚀 Ndivho Nemutshili - Portfolio

A modern, responsive portfolio website showcasing my work as a **Full Stack Developer & UI/UX Designer**. Built with Angular and deployed on GitHub Pages.

## 🌐 Live Demo

**View my portfolio:** [https://ndivholious112.github.io/Portfolio/](https://ndivholious112.github.io/Portfolio/)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with dark theme and smooth animations
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Built with Angular for optimal loading speeds
- 🎯 **Interactive Elements** - Hover effects, smooth transitions, and engaging UX
- 📂 **Project Showcase** - Featured projects with live demos and source code links
- 🎓 **Education Section** - Academic background and achievements
- 📞 **Contact Information** - Easy ways to get in touch
- 🌙 **Dark Theme** - Modern dark color scheme with accent gradients

## 🛠️ Technologies Used

### Frontend Framework
- **Angular 19** - Modern web framework for building scalable applications
- **TypeScript** - Strongly typed programming language
- **RxJS** - Reactive programming library

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **CSS Animations** - Custom animations and transitions
- **Google Fonts** - Inter font family for modern typography

### Development Tools
- **Angular CLI** - Command-line interface for Angular development
- **GitHub Pages** - Free hosting and deployment
- **GitHub Actions** - CI/CD automation (future enhancement)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── hero/          # Landing section with profile image
│   │   │   ├── about/         # About me section
│   │   │   ├── projects/      # Projects showcase
│   │   │   ├── skills/        # Skills and technologies
│   │   │   ├── education/     # Education background
│   │   │   ├── contact/       # Contact information
│   │   │   ├── navbar/        # Navigation component
│   │   │   └── footer/        # Footer component
│   │   ├── services/
│   │   │   └── data.service.ts # Centralized data management
│   │   └── app.routes.ts      # Application routing
│   ├── assets/                # Static assets (images, icons)
│   └── styles.css             # Global styles and Tailwind imports
├── dist/                      # Build output (generated)
└── package.json               # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** (comes with Node.js)
- **Git** (for version control)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ndivholious112/Portfolio.git
   cd Portfolio/portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:4200/`

The application will automatically reload when you make changes to the source files.

## 📦 Build & Deployment

### Local Build
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

This command will:
1. Build the project for production
2. Deploy to the `gh-pages` branch
3. Update the live site automatically

## 🎨 Customization

### Adding New Projects
Edit `src/app/services/data.service.ts` and add new entries to the `_projects` array:

```typescript
{
  title: 'Your Project Name',
  description: 'Brief description of your project',
  thumbnail: 'assets/project-image.png',
  tags: ['Technology1', 'Technology2'],
  type: 'web', // or 'figma' for design projects
  liveLink: 'https://your-live-demo.com',
  sourceLink: 'https://github.com/your-repo'
}
```

### Updating Personal Information
Modify the following in `data.service.ts`:
- `_name` - Your full name
- `_jobTitle` - Your professional title
- `_profilePic` - Path to your profile image
- `_projects` - Your project portfolio
- `_education` - Your educational background

### Styling Changes
- **Global styles:** `src/styles.css`
- **Component styles:** Individual `.css` files in each component folder
- **Tailwind config:** Modify utility classes directly in templates

## 🤝 Contributing

While this is a personal portfolio, feel free to:

1. **Fork the repository**
2. **Create a feature branch:** `git checkout -b feature/amazing-feature`
3. **Make your changes**
4. **Test thoroughly**
5. **Submit a pull request**

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Ndivho Nemutshili**
- **Email:** [Your email here]
- **LinkedIn:** [Your LinkedIn profile]
- **GitHub:** [https://github.com/Ndivholious112](https://github.com/Ndivholious112)

---

⭐ **Star this repo if you found it helpful!**

*Built with ❤️ using Angular and Tailwind CSS*
