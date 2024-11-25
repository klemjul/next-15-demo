## Static Optimisation

### Partial Prerendering

Next.js permet de pré-rendre partiellement une page pour qu'une partie du contenu soit rendue à la demande, tout en gardant des sections statiques

### Automatic Code Splitting

Next.js divise automatiquement le code JavaScript en petits bundles par page, afin que seuls les scripts nécessaires à la page actuelle soient chargés.

### Static Optimisation Components

```tsx
// optimize fonts and remove external network requests for improved privacy and performance
import { Roboto } from "next/font";

import Image from "next/image"; // optimise size and format

import Script from "next/script"; // ensure script is only load once

import Link from "next/link"; // prefetching and client-side navigation between routes
```

<style>
p {
  font-size: 0.8em; 
  font-weight: 300;
}
</style>
