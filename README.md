# Tiler Pro — WorkFlow Guide

বাংলায় Wall & Floor Tiling কাজের ধাপে ধাপে গাইড। Next.js App Router, TypeScript, Lucide icons এবং LocalStorage দিয়ে তৈরি।

## ফিচার
- মোবাইল-ফার্স্ট বাংলা UI, সাদা ব্যাকগ্রাউন্ড
- সাইট প্রস্তুতি, বাথরুম, ফ্লোর, ওয়াল, কিচেন, বারান্দা, সিঁড়ি, ওয়াটারপ্রুফিং, গ্রাউট, টুলস, সেফটি, ইন্সপেকশন ও হ্যান্ডওভার গাইড
- প্রতিটি গাইডে ইলাস্ট্রেশন, টুল আইকন, উপকরণ, নির্দেশনা ও checklist
- প্রজেক্ট তৈরি, একাধিক প্রজেক্ট, progress ও site notes
- LocalStorage persistence
- JSON export/import, print/PDF
- টাইলের সংখ্যা ও ওয়েস্টেজ ক্যালকুলেটর
- PWA manifest

## লোকাল কম্পিউটারে চালানো
Node.js-এর একটি সাম্প্রতিক LTS সংস্করণ ইনস্টল করুন। তারপর প্রজেক্ট ফোল্ডারে:

```bash
npm install
npm run dev
```

ব্রাউজারে `http://localhost:3000` খুলুন।

Production build যাচাই:
```bash
npm run build
npm run start
```

## Vercel-এ ফ্রি হোস্টিং
1. এই ZIP extract করে GitHub-এ একটি নতুন repository তৈরি করুন।
2. সব ফাইল repository-তে upload/commit করুন।
3. Vercel-এ লগইন করে **Add New → Project** নির্বাচন করুন।
4. GitHub repository import করুন।
5. Framework Preset হিসেবে Next.js শনাক্ত হলে সেটি রাখুন; কোনো environment variable প্রয়োজন নেই।
6. **Deploy** চাপুন। সফল হলে Vercel একটি `*.vercel.app` URL দেবে।
7. URL মোবাইলের Chrome-এ খুলুন → browser menu → **Add to Home screen** বা **Install app** (মেনুর নাম ফোনভেদে আলাদা হতে পারে)।

## ডেটা সংরক্ষণ
প্রজেক্টের checklist, notes ও progress একই ব্রাউজারের LocalStorage-এ থাকে। এটি cloud sync নয়; browser data clear করলে হারাতে পারে। নিয়মিত JSON export রাখুন।

## গুরুত্বপূর্ণ সীমাবদ্ধতা
- সাইটের ছবি ফাইল বেছে নেওয়ার UI রাখা হয়েছে, কিন্তু ছবির binary সংরক্ষণ এখনো implement করা হয়নি।
- ভাষা toggle UI আছে; এই প্রথম সংস্করণের সব কনটেন্ট বাংলা, পূর্ণ English translation নয়।
- নির্দেশনার সময়, মিক্স অনুপাত, কিউরিং ও উপকরণের ব্যবহার সংশ্লিষ্ট পণ্যের TDS এবং approved project specification অনুযায়ী যাচাই করতে হবে।
- ইলাস্ট্রেশনগুলো original SVG-style diagrams; বাস্তব সাইটের ছবি নয়।
- `localStorage`-এর কারণে ডেটা অন্য ডিভাইসে স্বয়ংক্রিয়ভাবে sync হয় না।

## Tech
- Next.js 14
- React 18
- TypeScript
- Lucide React
