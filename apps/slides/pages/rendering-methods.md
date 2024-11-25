## Rendering methods

```shell {4-7|9|10,8|11|*}
> next build
...
Route (app)                              Size     First Load JS
├ ● /blog/[slug]                         # SSG
├   ├ /blog/cloud-computing
├   ├ /blog/cybersecurity-tips
├   ├ /blog/machine-learning
├   └ /blog/[other]                      # ISR, on demand
├ ○ /dashboard                           # CSR
├ ○ /products                            # ISR, every 30 sec
└ ƒ /products/[id]                       # SSR, on demand
```
