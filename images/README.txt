IMAGES FOLDER — Anthony | Unleashing Genius
============================================

Replace the placeholder boxes in index.html with real photos
by saving your images here and updating the <img> tags.

REQUIRED IMAGES
---------------

1. hero.jpg
   Used in: Hero section (right panel, full bleed)
   Recommended: Portrait or action shot, minimum 1200×1600px
   Aspect ratio: tall (the panel fills full viewport height)

   In index.html, replace the <div class="photo-placeholder"> block with:
     <img
       src="images/hero.jpg"
       alt="Anthony speaking on stage"
       class="hero-photo"
     >

2. about.jpg
   Used in: About section (left panel, 4:5 ratio)
   Recommended: Candid workshop shot, portrait, or with Kadence
   Minimum: 800×1000px

   In index.html, replace the <div class="about-photo-placeholder"> block with:
     <div class="about-photo-wrap">
       <img
         src="images/about.jpg"
         alt="Anthony leading a workshop"
         class="about-photo"
       >
     </div>

3. og-image.jpg
   Used in: Social sharing preview (Open Graph / Twitter Card)
   Recommended: 1200×630px, landscape
   Can be a cropped version of hero.jpg

OPTIONAL
--------

4. favicon.ico
   Used in: Browser tab icon
   Size: 32×32px or 64×64px .ico file
   You can generate one free at: https://favicon.io

TIPS
----
- Save images as JPG for photos (quality 80–90% is fine)
- Keep file sizes under 400KB for fast load times
- Use descriptive alt text — it matters for accessibility and SEO
- File names are case-sensitive on Linux/Netlify — use lowercase
