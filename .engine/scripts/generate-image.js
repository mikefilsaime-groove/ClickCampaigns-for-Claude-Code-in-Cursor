/**
 * Nano Banana 2 Image Generation (Gemini 3.1 Flash Image Preview)
 * Usage: node scripts/generate-image.js "prompt" [output-path] [aspect-ratio] [resolution]
 *
 * Generates AI images using Google's Nano Banana 2 model.
 * Requires GEMINI_API_KEY in .env
 *
 * Aspect ratios: 1:1, 1:4, 1:8, 2:3, 3:2, 3:4, 4:1, 4:3, 4:5, 5:4, 8:1, 9:16, 16:9, 21:9
 * Resolutions: 512, 1K, 2K, 4K (default: 1K)
 */

import { GoogleGenAI } from '@google/genai';
import { writeFileSync } from 'fs';
import { config } from 'dotenv';

config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateImage(prompt, outputPath = 'generated-image.png', aspectRatio = '16:9', imageSize = '2K') {
  try {
    console.log(`\n🍌 Generating image with Nano Banana 2 (gemini-3.1-flash-image-preview)...`);
    console.log(`   Prompt: "${prompt}"`);
    console.log(`   Aspect Ratio: ${aspectRatio} | Resolution: ${imageSize}\n`);

    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-image-preview',
      contents: prompt,
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
        imageConfig: {
          aspectRatio: aspectRatio,
          imageSize: imageSize,
        },
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.text) {
        console.log(`📝 Model response: ${part.text}\n`);
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        const buffer = Buffer.from(imageData, 'base64');
        writeFileSync(outputPath, buffer);
        console.log(`✅ Image saved to: ${outputPath}`);
        return outputPath;
      }
    }

    console.log('⚠️  No image was generated. Try a different prompt.');
    return null;

  } catch (error) {
    console.error('Error generating image:', error.message);
    process.exit(1);
  }
}

// CLI usage
const prompt = process.argv[2];
const outputPath = process.argv[3] || 'generated-image.png';
const aspectRatio = process.argv[4] || '16:9';
const imageSize = process.argv[5] || '2K';

if (!prompt) {
  console.log('Usage: node scripts/generate-image.js "prompt" [output-path] [aspect-ratio] [resolution]');
  console.log('Example: node scripts/generate-image.js "A futuristic AI command center" hero.png 16:9 2K');
  console.log('Aspect ratios: 1:1, 2:3, 3:2, 3:4, 4:3, 9:16, 16:9, 21:9');
  console.log('Resolutions: 512, 1K, 2K, 4K');
  process.exit(1);
}

if (!process.env.GEMINI_API_KEY) {
  console.error('Error: GEMINI_API_KEY not found in .env');
  process.exit(1);
}

generateImage(prompt, outputPath, aspectRatio, imageSize);
