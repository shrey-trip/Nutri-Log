# 🍽️ Food Logger App

A beautiful, feature-rich food tracking application that helps you monitor your daily nutrition, set calorie goals, and maintain a healthy lifestyle.

![Food Logger](https://img.shields.io/badge/version-1.0.0-green.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## ✨ Features

- 📊 **Daily Food Tracking** - Log meals with complete nutritional information
- 🎯 **Calorie Goal Setting** - Set and track daily calorie targets
- 🍳 **Custom Meal Sections** - Create personalized meal categories (Breakfast, Lunch, Dinner, Snacks, etc.)
- 📅 **Date Navigation** - Browse and manage food logs across different days
- 💾 **Data Import/Export** - Backup and restore your data in JSON format
- 🌓 **Dark Mode** - Full dark mode support with theme persistence
- 📱 **Progressive Web App** - Install on mobile devices for app-like experience
- 💪 **Macro Tracking** - Monitor protein, carbs, and fats intake

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd food-logger
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5000`

## 📦 Deployment

### Deploy to Vercel

1. Push your code to GitHub

2. Import your repository in Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the configuration

3. Your app will be live at `https://your-app.vercel.app`

### Deploy to Other Platforms

The app includes a `vercel.json` configuration, but you can deploy to any platform that supports Node.js:

**Netlify:**
```bash
npm run build
# Deploy the dist/ folder
```

**Railway/Render:**
- Build command: `npm run build`
- Start command: `npm start`

## 📱 Installing as a Mobile App

### iOS (Safari)
1. Open the app in Safari
2. Tap the Share button
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add"

### Android (Chrome)
1. Open the app in Chrome
2. Tap the three dots menu
3. Tap "Add to Home Screen"
4. Tap "Add"

The app will now work offline and can be launched like a native app!

## 🗂️ Project Structure

```
food-logger/
├── client/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   └── lib/            # Utilities
│   └── index.html
├── server/
│   ├── index.ts            # Express server
│   ├── routes.ts           # API routes
│   └── storage.ts          # Data storage
├── shared/
│   └── schema.ts           # Shared TypeScript types
├── public/
│   ├── manifest.json       # PWA manifest
│   └── sw.js               # Service worker
└── vercel.json             # Vercel config
```

## 💾 Data Storage

All data is stored locally in your browser's localStorage:
- Food entries
- Meal sections
- User settings (calorie goals)

**Important:** Your data persists in the browser. Use the Export feature to backup your data regularly.

## 🔧 Technology Stack

- **Frontend:** React, TypeScript, Tailwind CSS
- **UI Components:** Shadcn UI, Radix UI
- **Routing:** Wouter
- **Date Handling:** date-fns
- **Validation:** Zod
- **Build Tool:** Vite
- **Backend:** Express.js (minimal, for serving)

## 📊 Features in Detail

### Food Entry
Each food entry includes:
- Food name
- Time consumed
- Ingredients list
- Calories
- Protein (grams)
- Carbohydrates (grams)
- Fats (grams)

### Meal Sections
- Create custom meal categories
- Rename sections
- Delete sections
- Reorder sections
- Track totals per section

### Data Management
- **Export:** Download all your data as JSON
- **Import:** Restore from a previous backup
- **Privacy:** All data stays on your device

## 🎨 Customization

The app uses CSS variables for theming. Edit `client/src/index.css` to customize colors:

```css
:root {
  --primary: 142 76% 36%;  /* Main accent color */
  --background: 210 0% 98%; /* Background color */
  /* ... more variables */
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with [Shadcn UI](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)

## 📧 Support

For issues or questions, please open an issue on GitHub.

---

Made with ❤️ for health-conscious individuals
