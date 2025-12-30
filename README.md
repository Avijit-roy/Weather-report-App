# Weather Report App

A lightweight, responsive weather application that delivers current conditions and forecasts for any city worldwide. Built with vanilla HTML, CSS, and JavaScript—no frameworks, no bloat, just fast and reliable weather data at your fingertips.

## Features

- 🔍 **Search by city name** — Find weather for any location globally
- 🌡️ **Current conditions** — Temperature, description, humidity, wind speed, and weather icon
- 📱 **Fully responsive** — Optimized for desktop, tablet, and mobile devices
- ⚠️ **Intelligent error handling** — User-friendly messages for missing cities or network issues
- ⚡ **Zero dependencies** — Pure HTML, CSS, and JavaScript—lightweight and fast
- 🚀 **Easy to deploy** — Works on GitHub Pages, Netlify, or any static host

## Live Demo

🌐 **[View Live Demo](https://Avijit-roy.github.io/Weather-report-App)**

## Tech Stack

- **JavaScript (ES6+)** — Core application logic and API integration
- **HTML5** — Semantic markup
- **CSS3** — Responsive grid and flexbox layouts

**Repository composition:** ~38% JavaScript, ~34% CSS, ~28% HTML

## Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- API key from a weather provider ([OpenWeatherMap](https://openweathermap.org/api) is recommended and free)

## Getting Started

### Quick Start (GitHub Pages)

The easiest way to try the app is through the live demo link above.

### Local Setup

#### Option 1: Direct Browser (Simple)

1. **Clone the repository**
   ```bash
   git clone https://github.com/Avijit-roy/Weather-report-App.git
   cd Weather-report-App
   ```

2. **Open `index.html` in your browser**
   ```bash
   # macOS
   open index.html
   
   # Windows
   start index.html
   
   # Linux
   xdg-open index.html
   ```

⚠️ **Note:** Some browsers block cross-origin API requests when opening files locally. If weather data won't load, use Option 2 instead.

#### Option 2: Local Server (Recommended)

**Python 3:**
```bash
cd Weather-report-App
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

**Node.js (http-server):**
```bash
npm install -g http-server
cd Weather-report-App
http-server
```
Then open the provided localhost URL (usually `http://localhost:8080`).

## Configuration

### Add Your API Key

This app uses [OpenWeatherMap](https://openweathermap.org/api) to fetch weather data.

1. **Sign up for a free API key**
   - Visit [openweathermap.org](https://openweathermap.org/api)
   - Create a free account
   - Generate an API key from your dashboard

2. **Add the key to your app**
   - Open `script.js` in your editor
   - Find: `const API_KEY = 'YOUR_API_KEY';`
   - Replace with your actual key: `const API_KEY = 'abc123xyz...';`
   - Save the file

3. **Test it out**
   - Reload the app in your browser
   - Search for a city to verify it's working

### Security Note

⚠️ **Important for Production:** Exposing API keys in client-side code is not ideal for production. To keep your key secure:

- Use a **backend proxy** — Create a small server that holds the API key and proxies requests
- Use **serverless functions** — Deploy a Vercel/Netlify function that adds the key server-side
- Enable **API key restrictions** — Limit your key to your domain only in OpenWeatherMap settings

## Usage

1. **Enter a city name** — Type any city name (e.g., "London", "Tokyo", "New York")
2. **Press Enter or click Search** — The app fetches and displays weather data
3. **View the results** — See temperature, conditions, humidity, wind speed, and a weather icon
4. **Handle errors gracefully** — Clear messages appear if the city isn't found or there's a network issue

## Project Structure

```
Weather-report-App/
├── index.html          # Main HTML file (markup and layout)
├── styles.css          # Styling and responsive design
├── script.js           # Core logic (API calls, data rendering)
├── assets/             # Images, icons, and static files
│   ├── icons/          # Weather condition icons
│   └── images/         # Background and UI images
├── README.md           # Project documentation
├── LICENSE             # MIT License
└── .gitignore          # Git ignore rules
```

## Customization

### Update Styling
Edit `styles.css` to customize colors, fonts, layout, and responsive breakpoints.

### Extend Features
Modify `script.js` to add new functionality:
- **Hourly forecast** — Display 5-day or hourly predictions (if API supports)
- **Sunrise/Sunset times** — Show daylight hours
- **Multiple units** — Toggle between Celsius and Fahrenheit
- **Geolocation** — Automatically detect user's location
- **Recent searches** — Store and display search history using localStorage

### Add Local Caching
Save frequently searched cities to reduce API calls:
```javascript
// In script.js
localStorage.setItem('lastSearch', cityName);
const lastSearch = localStorage.getItem('lastSearch');
```

## Deployment

### Deploy to GitHub Pages

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Update weather app"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings → Pages**
   - Under "Source," select the **main** branch and **/root** folder
   - Click **Save**

3. **Access your live app**
   - Your app will be published at: `https://username.github.io/Weather-report-App`
   - Wait 1-2 minutes for the site to appear

### Deploy to Netlify

1. Connect your GitHub repository
2. Set build command: `(leave blank — no build needed)`
3. Set publish directory: `./` (root folder)
4. Deploy with one click

### Deploy to Vercel

1. Import your GitHub repository
2. Configure with default settings (no build necessary)
3. Deploy instantly

## Performance & Accessibility

- ✅ **Lightweight** — No heavy frameworks; loads quickly on all devices
- ✅ **Accessible** — Semantic HTML and sufficient color contrast
- ✅ **Fast** — Minimal dependencies and optimized API calls
- 🎨 **Color contrast** — Review `styles.css` to ensure accessibility standards are met

## Troubleshooting

| Issue | Solution |
|-------|----------|
| **API key not working** | Verify the key in `script.js` and check it's activated on OpenWeatherMap dashboard |
| **"Access denied" error** | Likely CORS issue — use a local server instead of opening the file directly |
| **Weather data won't load** | Check browser console (F12) for error messages; verify internet connection |
| **Styling looks broken** | Clear browser cache (Ctrl+Shift+Del) and hard refresh (Ctrl+Shift+R) |

## Contributing

We welcome contributions! Follow these steps to contribute:

1. **Fork the repository**
   ```bash
   # On GitHub, click the "Fork" button
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Edit files as needed
   - Test thoroughly in your browser

4. **Commit with a clear message**
   ```bash
   git commit -m "Add: description of your feature"
   ```

5. **Push and submit a pull request**
   ```bash
   git push origin feature/your-feature-name
   ```

Please include a description of what you've added or improved.

## License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

## Acknowledgments

- 🌦️ Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- 🎨 Design inspiration from popular weather applications
- 💡 Community feedback and contributions

## Contact & Support

**Maintainer:** [Avijit-roy](https://github.com/Avijit-roy)

- 💬 [Open an issue](https://github.com/Avijit-roy/Weather-report-App/issues) for bug reports or feature requests
- 🐙 Visit the [GitHub repository](https://github.com/Avijit-roy/Weather-report-App)

---

**Stay weather-aware!** ☀️ If you find this project helpful, consider giving it a ⭐ on GitHub.
