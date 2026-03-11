/**
 * Nano Banana Pro Image Generation (Gemini)
 * Usage: node scripts/generate-image.js "prompt" [output-path]
 *
 * Generates AI images using Google's Nano Banana Pro model.
 * Requires GEMINI_API_KEY in .env
 */

import { GoogleGenAI } from '@google/genai';
import { writeFileSync } from 'fs';
import { config } from 'dotenv';

config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateImage(prompt, outputPath = 'generated-image.png') {
  try {
    console.log(`\n🍌 Generating image with Nano Banana Pro...`);
    console.log(`   Prompt: "${prompt}"\n`);

    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-exp',
      contents: prompt,
      config: {
        responseModalities: ['TEXT', 'IMAGE']
      }
    });

    // Process the response
    for (const candidate of response.candidates || []) {
      for (const part of candidate.content?.parts || []) {
        if (part.text) {
          console.log(`📝 Model response: ${part.text}\n`);
        }
        if (part.inlineData) {
          const imageData = part.inlineData.data;
          const buffer = Buffer.from(imageData, 'base64');
          writeFileSync(outputPath, buffer);
          console.log(`✅ Image saved to: ${outputPath}`);
          return outputPath;
        }
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

if (!prompt) {
  console.log('Usage: node scripts/generate-image.js "prompt" [output-path]');
  console.log('Example: node scripts/generate-image.js "A professional business team celebrating success" hero-image.png');
  process.exit(1);
}

if (!process.env.GEMINI_API_KEY) {
  console.error('Error: GEMINI_API_KEY not found in .env');
  process.exit(1);
}

generateImage(prompt, outputPath);
