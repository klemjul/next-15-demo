## CSR (Client Side Rendering)

```tsx
// src/app/dashboard/page.tsx - (Static) prerendered as static content

"use client";
...
export default function DashboardPage() {
  const [payments, setPayments] = useState<Payment[]>([]);

  useEffect(() => {
    loadPayments();
  }, []);
...
```

<br/>

### Caractéristiques principales

- Nombreuses interactions utilisateur
- Faible importance SEO
- Données en temps réel
- Premier chargement lourd

<style>
ul {
  font-size: 0.8em; 
  font-weight: 300;
}
</style>
