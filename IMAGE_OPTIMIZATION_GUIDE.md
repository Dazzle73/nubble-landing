# Nubble Landing Page - Image Optimization Guide

## 🎯 **Critical Images to Replace**

### 1. **Open Graph Image** (`/public/og-image.png`)
- **Current**: Placeholder text file
- **Required**: 1200x630 PNG image
- **Purpose**: Social media sharing (Facebook, Twitter, LinkedIn)
- **Source Template**: `/public/og-image-source.svg` (convert to PNG)
- **Content**: Nubble branding, "Break Free From Snacking" headline, app store badges

### 2. **Apple Touch Icon** (`/public/apple-touch-icon.png`)
- **Current**: Placeholder text file
- **Required**: 180x180 PNG image
- **Purpose**: iOS home screen icon when users add site to home screen
- **Source Template**: `/public/apple-touch-icon-source.svg` (convert to PNG)
- **Content**: Nubble logo with rounded corners, green background

### 3. **Favicon ICO** (`/public/favicon.ico`)
- **Current**: Missing (using SVG fallback)
- **Required**: Multi-size ICO file (16x16, 32x32, 48x48)
- **Purpose**: Browser tab icon for legacy browsers
- **Source Template**: `/public/favicon-source.svg` (convert to ICO)
- **Content**: Simple Nubble "N" logo

## 🛠️ **Conversion Instructions**

### **Method 1: Online Converters (Recommended)**
1. **For PNG conversion**: Use [Canva](https://canva.com) or [Figma](https://figma.com)
   - Import the SVG source files
   - Export as PNG with correct dimensions
   - Optimize with [TinyPNG](https://tinypng.com)

2. **For ICO conversion**: Use [ICO Convert](https://icoconvert.com)
   - Upload the favicon-source.svg
   - Generate multi-size ICO file
   - Download and replace `/public/favicon.ico`

### **Method 2: Command Line (Advanced)**
```bash
# Install ImageMagick
# Convert SVG to PNG
magick og-image-source.svg -resize 1200x630 og-image.png
magick apple-touch-icon-source.svg -resize 180x180 apple-touch-icon.png

# Convert SVG to ICO
magick favicon-source.svg -resize 16x16 favicon-16.png
magick favicon-source.svg -resize 32x32 favicon-32.png
magick favicon-source.svg -resize 48x48 favicon-48.png
magick favicon-16.png favicon-32.png favicon-48.png favicon.ico
```

## 📊 **Performance Optimization Status**

### ✅ **Completed**
- Next.js image optimization configuration
- WebP/AVIF format support
- Lazy loading system with OptimizedImage component
- Performance monitoring with Web Vitals
- Google Analytics 4 integration
- Conversion tracking for app store downloads
- Security headers and caching optimization

### 🔄 **In Progress**
- Replace placeholder images with branded assets
- Bundle size analysis and optimization

### 📋 **Next Steps**
1. Replace the 3 critical placeholder images
2. Test social media sharing with new Open Graph image
3. Verify iOS home screen icon appearance
4. Run Lighthouse audit for performance score
5. Monitor Core Web Vitals in Google Analytics

## 🎨 **Design Guidelines**

### **Brand Colors**
- Primary Green: `#4ADE80`
- Dark Background: `#143638`
- Gradient: `#143638` to `#000000`

### **Typography**
- Font Family: Inter
- Weights: 400 (regular), 600 (semibold), 700 (bold)

### **Logo Guidelines**
- Use white "N" on green background for icons
- Maintain proper contrast ratios
- Include subtle decorative elements for visual interest

## 🚀 **Launch Checklist**

- [ ] Replace og-image.png with branded 1200x630 PNG
- [ ] Replace apple-touch-icon.png with branded 180x180 PNG  
- [ ] Create and add favicon.ico with multi-size support
- [ ] Test social media sharing on Facebook/Twitter
- [ ] Verify iOS home screen icon
- [ ] Run Lighthouse performance audit
- [ ] Set up Google Analytics 4 with real measurement ID
- [ ] Configure Google Ads conversion tracking
- [ ] Test app store download tracking
- [ ] Monitor Core Web Vitals data

## 📈 **Analytics Setup**

### **Environment Variables Needed**
```bash
# Add to .env.local
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXX
```

### **Tracking Events**
- App Store clicks (iOS/Android)
- Onboarding quiz starts
- Quiz completions
- Core Web Vitals metrics
- Page views and user engagement

---

**🎉 Once these images are replaced, your Nubble landing page will have complete, professional-grade SEO, analytics, and performance optimization!**
