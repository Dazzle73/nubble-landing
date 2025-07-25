<website_design>
The Nubble landing page is designed as a sophisticated, modern showcase for the AI-powered food tracking app. The design leverages the required dark gradient background (top: #143638 to bottom: #000000) to create a premium, tech-forward aesthetic that aligns perfectly with the app's dark UI.

The page opens with a compelling hero section featuring the Nubble logo prominently in the navbar, alongside a powerful headline about AI-powered nutrition tracking. The hero showcases the main app interface screenshot, giving visitors an immediate preview of the clean, intuitive design they can expect.

The layout flows naturally through three core feature sections, each highlighting a key aspect of the app using the provided screenshots:
1. Smart Calorie Tracking - showcasing the daily nutrition overview with circular progress indicators
2. Progress Monitoring - featuring the weight tracking and goal achievement interface  
3. Comprehensive Analytics - displaying the detailed stats and consumption tracking capabilities

Each feature section uses a side-by-side layout with the app screenshot on one side and compelling copy on the other, creating visual rhythm and allowing users to see exactly how each feature works in practice.

The design maintains visual consistency through careful use of the gradient background, clean typography, and the app's signature green accent color (#4ADE80) pulled from the screenshots. Strategic use of glassmorphism effects and subtle animations creates depth while keeping the focus on the app's functionality.

The page concludes with a compelling call-to-action section encouraging downloads, followed by a clean footer with essential links. Throughout the design, the dark theme creates perfect contrast for the bright, colorful app screenshots, making them the hero elements of each section.
</website_design>

<high_level_design>
1. Color palettes:
   - Primary Background: Linear gradient from #143638 (top) to #000000 (bottom)
   - Accent Green: #4ADE80 (pulled from app's UI elements)
   - Text Primary: #FFFFFF (high contrast on dark background)
   - Text Secondary: #A1A1AA (muted for secondary information)
   - Glass/Panel: rgba(255, 255, 255, 0.1) with backdrop blur for glassmorphism effects
   - Card Backgrounds: rgba(0, 0, 0, 0.3) for subtle contrast panels

2. Typography: Inter (clean, modern sans-serif that works excellently for tech products and maintains readability across all weights from light to bold)
</high_level_design>

<components>
<edit_component>
<file_path>src/components/blocks/heros/with-app-screenshot-on-dark.tsx</file_path>
<design_instructions>Update this hero to showcase Nubble. Change the background to use the specified gradient (from #143638 to #000000). Replace the logo in the navbar with the Nubble logo (https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1753087520781-gbio5v2dz5v.png). Update the main headline to "Track Your Nutrition with AI-Powered Precision" and subtitle to "Nubble uses advanced AI to analyze your food intake, providing personalized insights and helping you achieve your health goals with intelligent tracking." Replace the app screenshot with the main Nubble interface (https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1753087511866-jlxi04nlq.webp). Change the primary button text to "Download for iOS" and secondary button to "View Features". Use Inter font family throughout. Update navigation items to "Features", "How It Works", "Download".</design_instructions>
<references>src/components/blocks/heros/with-app-screenshot-on-dark.tsx</references>
</edit_component>

<edit_component>
<file_path>src/components/blocks/feature-sections/with-product-screenshot-on-left.tsx</file_path>
<design_instructions>Adapt this section to highlight Nubble's calorie tracking feature. Set the section background to transparent to show through the main gradient background. Replace the screenshot with the calorie tracking screen (https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1753087511866-jlxi04nlq.webp). Update the heading to "Smart Calorie Tracking" and description to "Get real-time insights into your daily nutrition with AI-powered calorie counting. Track macronutrients, set personalized goals, and see your progress with beautiful, intuitive visualizations." Feature list items: "AI-powered food recognition", "Real-time macro tracking", "Personalized daily goals", "Visual progress indicators". Use the accent green color (#4ADE80) for highlights and Inter font family.</design_instructions>
<references>src/components/blocks/feature-sections/with-product-screenshot-on-left.tsx</references>
</edit_component>

<edit_component>
<file_path>src/components/blocks/feature-sections/with-product-screenshot.tsx</file_path>
<design_instructions>Transform this section to showcase Nubble's progress monitoring capabilities. Set transparent background to maintain gradient visibility. Replace the product screenshot with the weight progress tracking screen (https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1753087515375-tpau717mhap.webp). Update the heading to "Monitor Your Progress" and description to "Watch your health journey unfold with comprehensive progress tracking. Set weight goals, monitor trends, and celebrate achievements with detailed analytics and visual feedback." Feature highlights: "Weight goal tracking", "Progress visualization", "Achievement milestones", "Historical data analysis". Maintain Inter typography and use green accent color for interactive elements.</design_instructions>
<references>src/components/blocks/feature-sections/with-product-screenshot.tsx</references>
</edit_component>

<edit_component>
<file_path>src/components/blocks/feature-sections/with-large-screenshot-on-dark.tsx</file_path>
<design_instructions>Configure this section to highlight Nubble's comprehensive analytics. Keep the dark theme to complement the main gradient background. Replace the screenshot with the analytics/stats view (https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1753087518762-qm2gkqev34.webp). Update heading to "Comprehensive Analytics" and description to "Dive deep into your nutrition data with advanced analytics. Track daily averages, monitor consumption patterns, and get actionable insights to optimize your health journey." Key features: "Daily nutrition breakdowns", "Weekly trend analysis", "Consumption pattern tracking", "Personalized recommendations". Use white text for excellent contrast and green accents for data highlights.</design_instructions>
<references>src/components/blocks/feature-sections/with-large-screenshot-on-dark.tsx</references>
</edit_component>

<edit_component>
<file_path>src/components/blocks/ctas/simple-centered-with-gradient.tsx</file_path>
<design_instructions>Customize this CTA section for Nubble app download. Replace the gradient background with a subtle glass effect (rgba(255, 255, 255, 0.1) with backdrop blur) to complement the main page gradient. Update the headline to "Ready to Transform Your Nutrition?" and description to "Join thousands of users who've already improved their health with Nubble's AI-powered tracking. Download now and start your journey to better nutrition." Change the primary button to "Download for iOS" with the green accent color (#4ADE80). Add a secondary text link "Available on App Store" below the button. Use Inter font family for all text.</design_instructions>
<references>src/components/blocks/ctas/simple-centered-with-gradient.tsx</references>
</edit_component>

<edit_component>
<file_path>src/components/blocks/footers/simple-footer-with-four-grids.tsx</file_path>
<design_instructions>Adapt this footer for the Nubble landing page with a dark theme. Set background to rgba(0, 0, 0, 0.3) for subtle contrast against the main gradient. Update company name to "Nubble" and description to "AI-powered nutrition tracking for a healthier you." Navigation sections: "Product" (Features, How It Works, Pricing, FAQ), "Company" (About, Blog, Careers, Contact), "Support" (Help Center, Privacy, Terms, Security), "Download" (iOS App, Android App, Web App). Use white text with secondary gray (#A1A1AA) for less important elements. Add social media icons with the green accent color. Copyright: "© 2025 Nubble. All rights reserved."</design_instructions>
<references>src/components/blocks/footers/simple-footer-with-four-grids.tsx</references>
</edit_component>
</components>