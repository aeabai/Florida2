# Images — Drop Your Photos Here

This folder holds all photos for the Anthony website. Drop your images in here with the exact filenames listed below and they'll automatically appear on the site.

---

## Required Photos

| Filename | Used On | Recommended Size | Description |
|---|---|---|---|
| `hero.jpg` | `index.html` | 1200 × 1600px (portrait) | Headshot or confident action shot. This is the first impression. |
| `about-1.jpg` | `about.html`, `index.html` | 800 × 1000px | Workshop, speaking engagement, or candid — Anthony in his element |
| `about-2.jpg` | `about.html` | 800 × 1000px | Second shot — Anthony with Kadence, in the field, or more personal |
| `coaching.jpg` | `coaching.html`, `index.html` | 1000 × 700px (landscape) | One-on-one coaching session or team workshop moment |
| `youth.jpg` | `youth.html`, `index.html` | 1000 × 700px (landscape) | Youth workshop, group session, or program moment |
| `reentry.jpg` | `reentry.html`, `index.html` | 1000 × 700px (landscape) | Facility session, group circle, or reentry program moment |
| `speaking.jpg` | `speaking.html` | 1000 × 700px (landscape) | On stage, presenting, or leading a workshop — full energy |

---

## Tips

- **Format:** JPG or WEBP recommended for photos. PNG is fine for logos/graphics.
- **Size:** Keep files under 500KB for fast loading. Use [Squoosh](https://squoosh.app) or [TinyJPG](https://tinyjpg.com) to compress.
- **Orientation:** Landscape photos work best for track/program cards. Portrait photos work best for hero and about sections.
- **Alt text:** Alt text is already written in the HTML. Just drop in the photo and it's set.
- **Fallback:** If a photo file is missing, the site shows a clean placeholder — no broken image icons.

---

## Image Display Details

All photo slots use these CSS properties automatically:
```css
object-fit: cover;
width: 100%;
height: 100%;
```

This means your photo fills the space and crops to fit — like Instagram. Faces and key subjects work best when centered.

---

## SVG Placeholders

`hero-placeholder.svg` and `about-placeholder.svg` are included as lightweight SVG placeholders for development. They are not shown in the live site when real photos are present.
