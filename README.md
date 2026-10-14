# Kovai Stores

A responsive, light-themed grocery website for Kovai Stores, Marathupalayam, Erode. Built with React JSX, Vite, Tailwind CSS v4, React Router and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm run preview
```

Deploy `dist/` to a static host. The build includes direct-entry HTML files for `/products` and `/about`.

## Included

- Home page with original grocery photography, categories, wholesale section, store story and map link.
- Products page with search, category filters, product details and an enquiry shortlist saved in localStorage.
- About page with Karthik M, the store's two-year history and community focus.
- Responsive navigation, keyboard-accessible dialogs, reduced-motion support, descriptive image text and a skip link.
- Bulk enquiry file download with customer details and requested quantities. The file is prepared in the browser; no request is sent to the store.

## Content to confirm before business launch

Product entries introduce a representative grocery range, with availability confirmed in store. Images are AI-generated illustrations of ingredients, not photos of the actual premises or inventory. The map link searches the supplied store name and locality; replace it with a verified business listing when available.

No phone number, opening hours, exact street address, inventory prices, delivery promise or testimonials have been invented. Add these when supplied by the business. A live enquiry delivery service or checkout requires a separately configured backend and business contact information.

## Images

Fifteen original assets were created with the built-in image generation tool and saved in `public/images/` as optimized WebP files: five homepage/category photos and ten distinct product photos. Each catalogue product uses its own image in the product card, detail dialog and enquiry list. The complete prompts are recorded in `IMAGE_PROMPTS.md` and `PRODUCT_IMAGE_PROMPTS.md`.
