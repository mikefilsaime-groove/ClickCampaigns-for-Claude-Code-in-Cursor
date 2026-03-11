/**
 * Pexels Image Search
 * Usage: node scripts/pexels-search.js "search query" [count]
 *
 * Returns URLs for stock photos matching the query.
 * Requires PEXELS_API_KEY in .env
 */

import { createClient } from 'pexels';
import { config } from 'dotenv';

config();

const client = createClient(process.env.PEXELS_API_KEY);

async function searchPhotos(query, perPage = 5) {
  try {
    const response = await client.photos.search({ query, per_page: perPage });

    if (response.photos.length === 0) {
      console.log(`No photos found for: "${query}"`);
      return;
    }

    console.log(`\n📸 Pexels results for: "${query}"\n`);

    response.photos.forEach((photo, i) => {
      console.log(`${i + 1}. ${photo.alt || 'Untitled'}`);
      console.log(`   Photographer: ${photo.photographer}`);
      console.log(`   Large: ${photo.src.large}`);
      console.log(`   Medium: ${photo.src.medium}`);
      console.log(`   Small: ${photo.src.small}`);
      console.log('');
    });

    // Return JSON for programmatic use
    return response.photos.map(p => ({
      alt: p.alt,
      photographer: p.photographer,
      urls: p.src
    }));

  } catch (error) {
    console.error('Error searching Pexels:', error.message);
    process.exit(1);
  }
}

// CLI usage
const query = process.argv[2];
const count = parseInt(process.argv[3]) || 5;

if (!query) {
  console.log('Usage: node scripts/pexels-search.js "search query" [count]');
  console.log('Example: node scripts/pexels-search.js "business meeting" 3');
  process.exit(1);
}

if (!process.env.PEXELS_API_KEY) {
  console.error('Error: PEXELS_API_KEY not found in .env');
  process.exit(1);
}

searchPhotos(query, count);
