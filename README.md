# Jai Shree Ram Cooling Care Website

Welcome to the official website project for **Jai Shree Ram Cooling Care**, a premium service provider for Air Conditioning, Chillers, and Refrigerators in Jamshedpur.

## Live Website
Visit the live site here: **https://jsr-cooling-care-f7c64.web.app**

## Project Structure
- `index.html`: Main landing page structure.
- `css/`: Directory containing all modular CSS files.
  - `variables.css`: Design tokens and color palette.
  - `layout.css`: Base layout and reset styles.
  - `components.css`: Individual UI components (Buttons, Cards, Nav).
  - `sections.css`: Specific styles for home, about, services, etc.
  - `animations.css`: Scroll reveal and hover effects.
  - `responsive.css`: Media queries for mobile and tablet adaptation.
- `js/`: Directory for modular JavaScript functionality.
  - `navbar.js`: Responsive mobile menu logic.
  - `slider.js`: Hero section image slider.
  - `form.js`: Contact form handling.
  - `animations.js`: Scroll reveal logic.
- `assets/images/`: Optimized WebP images for the website.
- `firebase.json` & `.firebaserc`: Deployment configuration for Firebase Hosting.

## Features
- **Responsive Design**: Optimized for Mobile, Tablet, and Desktop.
- **Performance Optimized**: Uses next-gen WebP image formats for fast loading.
- **Premium UI**: Modern gradients, glassmorphism headers, and smooth animations.
- **Service Showcase**: Dedicated sections for AC, Chiller, and Fridge services.
- **Contact Form**: Integrated UI connecting to Formspree for inquiries.
- **SEO Ready**: Includes structured data, meta tags, sitemap.xml, and robots.txt.

## Local Development
1. Clone the repository.
2. Serve the directory using a simple HTTP server:
   ```bash
   python3 -m http.server
   ```
3. Visit `http://localhost:8000` in your browser.

## Deployment
This project is configured for **Firebase Hosting**.
To deploy updates:
1. Ensure you have Firebase CLI installed (`npm install -g firebase-tools`).
2. Run the deployment command:
   ```bash
   firebase deploy
   ```

---
© 2026 Jai Shree Ram Cooling Care.
