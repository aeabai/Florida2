import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';

const allowedCategories = new Set([
  'Leadership',
  'Personal Growth',
  'Communication',
  'Team Development',
  'Perspective Shift',
  'Emotional Impact',
  'Purpose',
  'General Impact',
  'Other'
]);

function clean(value, maximum) {
  return String(value || '').replace(/\s+/g, ' ').trim().slice(0, maximum);
}

const displayName = clean(process.env.TESTIMONIAL_DISPLAY_NAME, 100);
const category = clean(process.env.TESTIMONIAL_CATEGORY, 40);
const quote = clean(process.env.TESTIMONIAL_QUOTE, 4000);

if (!displayName || !quote || !allowedCategories.has(category)) {
  throw new Error('Approved testimonial is missing a valid display name, category, or quote.');
}

if (/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i.test(displayName + ' ' + quote)) {
  throw new Error('Publication stopped because the public fields contain an email address.');
}

const path = new URL('../data/approved-testimonials.json', import.meta.url);
const testimonials = JSON.parse(await readFile(path, 'utf8'));
const id = createHash('sha256').update(displayName + '\n' + quote).digest('hex').slice(0, 12);

if (!testimonials.some((item) => item.id === id)) {
  testimonials.push({
    id,
    displayName,
    category,
    quote,
    approvedAt: new Date().toISOString().slice(0, 10)
  });
  await writeFile(path, JSON.stringify(testimonials, null, 2) + '\n');
}
