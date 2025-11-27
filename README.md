This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## API Calls & Axios Interceptor (Global)

This project uses a global Axios instance and common API helpers for all HTTP requests. You can find these utilities in:

- `app/utils/axiosInstance.ts` — Global Axios instance with request/response interceptors for auth, error handling, etc.
- `app/utils/api.ts` — Common functions: `apiGet`, `apiPost`, `apiPut`, `apiPatch`, `apiDelete` for all CRUD operations.

### Usage Example

```
import { apiGet, apiPost } from '@/app/utils/api';

// GET call
const data = await apiGet('/api/some-endpoint');

// POST call
const result = await apiPost('/api/other-endpoint', { foo: 'bar' });
```

- All configuration, error handling, or token auth can be controlled in `axiosInstance.ts`.
- Do not use `axios` directly; always use the exported functions from `api.ts`.
