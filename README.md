# Jai Shree Ram Cooling Care Website

Welcome to the official website project for **Jai Shree Ram Cooling Care**, a premium service provider for Air Conditioning, Chillers, and Refrigerators.

## Project Structure
- `index.html`: Main landing page structure.
- `styles.css`: Custom premium styling with modern aesthetics.
- `script.js`: Interactive elements (Mobile menu, smooth scroll).
- `assets/images/`: Images for the website.
- `app.yaml`: Deployment config for Google App Engine.
- `Dockerfile`: Container config for Google Cloud Run.

## Features
- **Responsive Design**: Looks great on Mobile, Tablet, and Desktop.
- **Premium UI**: Modern gradients, glassmorphism headers, and smooth animations.
- **Service Showcase**: Dedicated sections for AC, Chiller, and Fridge services.
- **Contact Form**: Integrated UI for customer inquiries.

## Deployment on Google Cloud Platform (GCP)

### Option 1: Google App Engine (Recommended for Static Sites)
1. Install [Google Cloud SDK](https://cloud.google.com/sdk/docs/install).
2. Initialize your project:
   ```bash
   gcloud init
   ```
3. Deploy the application:
   ```bash
   gcloud app deploy
   ```
4. Visit your site at `https://[YOUR_PROJECT_ID].uc.r.appspot.com`.

### Option 2: Google Cloud Run
1. Build the container image:
   ```bash
   gcloud builds submit --tag gcr.io/[YOUR_PROJECT_ID]/cooling-care-site
   ```
2. Deploy to Cloud Run:
   ```bash
   gcloud run deploy cooling-care-site --image gcr.io/[YOUR_PROJECT_ID]/cooling-care-site --platform managed
   ```
3. Allow unauthenticated invocations if prompted to make it public.

### Option 3: Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Run `firebase init` and select Hosting.
3. Choose `.` as the public directory.
4. Run `firebase deploy`.

## Local Development
To view the site locally, simply open `index.html` in your browser.
For a better experience (hot functionality), use a simple HTTP server:
```bash
python3 -m http.server
```
Then visit `http://localhost:8000`.

---
© 2025 Jai Shree Ram Cooling Care.
