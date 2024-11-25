# Routing

```sh
app
├── api
│   ├── payments
│   │   └── route.tsx   # /api/payments route using standard Request and Response
├── blog
│   ├── "[slug]"
│   │   └── page.tsx    # /blog/[slug] dynamic pages
│   ├── layout.tsx      # layout for blog segment
│   └── not-found.tsx   # not found page for blog segment
├── products
│   ├── "[id]"
│   │   └── page.tsx
│   ├── page.tsx        # /products page
│   ├── error.tsx       # display fallback ui for unexpected error
│   └── loading.tsx     # loading display while the content of a route segment load
├── dashboard
│   └── page.tsx        # /dashboard page
├── globals.css
├── layout.tsx          # app root layout, contain at least the <html> and <body> tags
├── page.tsx            # / page
├── middleware.ts       # modify response based on the incoming request
```
