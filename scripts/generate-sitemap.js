// scripts/generate-sitemap.js

import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

const BASE_URL = 'https://cushkicosy.com';

const links = [
  '/',
  '/shop-classic',
  '/pod',
  '/classic-fabric-sets',
  '/classic-liner-sets',
  '/pod-fabric-sets',
  '/pod-liner-sets',
  '/faq?tab=care',
  '/faq?tab=shipping',
  '/faq?tab=returns',
  '/faq?tab=safety',
  '/our-fabric',
  '/why-cushki',
  '/see-builds',
  '/contact',
];

const stream = new SitemapStream({ hostname: BASE_URL });
const writeStream = createWriteStream('./public/sitemap.xml');

Readable.from(links.map((url) => ({ url })))
  .pipe(stream)
  .pipe(writeStream)
  .on('finish', () => {
    console.log('✅ sitemap.xml generated in /public');
  })
  .on('error', (err) => {
    console.error('❌ Failed to generate sitemap:', err);
  });
