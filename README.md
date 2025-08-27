## Pinnate UI

Token tabanlı React UI kütüphanesi. Storybook, Vitest, Changesets ve Sonar entegre.

### Kurulum

```bash
npm i pinnate
```

#### Peer Dependencies

Bu library React 18+ ve React DOM 18+ gerektirir. Ana projenizde bu dependency'ler zaten olmalı:

```json
{
  "dependencies": {
    "react": "^18.0.0 || ^19.0.0",
    "react-dom": "^18.0.0 || ^19.0.0"
  }
}
```

**Önemli:** React'ları `peerDependencies` olarak tanımladık, bu sayede:
- ✅ Duplicate React sorunu çözülür
- ✅ Hook context hatası düzelir
- ✅ Bundle size küçülür
- ✅ Version conflicts önlenir

### Hızlı Başlangıç

1. **CSS'i import edin (3 yöntemden birini seçin):**
```tsx
// Yöntem 1: Direct path
import 'pinnate/dist/index.css';

// Yöntem 2: Style alias
import 'pinnate/style.css';

// Yöntem 3: Node modules path (fallback)
import '../node_modules/pinnate/dist/index.css';
```

2. **Uygulamayı `PinnateProvider` ile sarmalayın:**
```tsx
import 'pinnate/style.css'; // veya 'pinnate/dist/index.css'
import { PinnateProvider, Button } from 'pinnate';

export function App() {
  return (
    <PinnateProvider>
      <Button label="Merhaba" variant="primary" size="md" />
    </PinnateProvider>
  );
}
```

### Component Kullanımı

**Yöntem 1: Named import**
```tsx
import { Button, Input, Select, Checkbox } from 'pinnate';

<Button label="Kaydet" variant="primary" size="lg" />
<Input placeholder="E-posta adresiniz" />
<Checkbox /> Kabul ediyorum
```

**Yöntem 2: Namespace import (önerilen)**
```tsx
import { p } from 'pinnate';

<p.Provider>
  <p.Button label="Kaydet" variant="primary" size="lg" />
  <p.Input placeholder="E-posta adresiniz" />
  <p.Select 
    options={[{ value: 'tr', label: 'Türkçe' }]} 
    placeholder="Dil seçin" 
  />
  <p.Checkbox /> Kabul ediyorum
</p.Provider>
```

### Component Metadata (Form Builder için)

```tsx
import { Components, type ComponentMetadata } from 'pinnate';

// Tüm component metadata'sını al
console.log(Components);

// Sadece Button metadata'sını al
const buttonMeta = Components.find(c => c.name === 'Button');
console.log(buttonMeta.props); // { label: "string", variant: "primary | secondary | tertiary", ... }
console.log(buttonMeta.initialValues); // { label: "Button", variant: "primary", ... }

// Form Elements kategorisindeki component'leri filtrele
const formComponents = Components.filter(c => c.category === 'Form Elements');
```

İkonlar

```tsx
import { Info } from 'pinnate';
```

### Theming (Design Tokens)

İstediğiniz token’ı runtime’da override edebilirsiniz; tüm bileşenler otomatik güncellenir.

```tsx
<PinnateProvider
  tokens={{
    radius: { lg: '10px' },
    colors: { surface: '#FFFFFF', border: '#D5D7DA' },
  }}
>
  {/* app */}
</PinnateProvider>
```

### Örnekler

Notification (auto-close + actions)

```tsx
import { Notification } from 'pinnate';

<Notification
  open
  title="Action required"
  description="Consectetur adipiscing elita liquid pariatur."
  position="top-right"
  durationMs={5000} // 5sn ilerleme + 500ms fade-out
  primaryAction={{ label: 'Confirm', variant: 'primary', size: 'sm' }}
  secondaryAction={{ label: 'Cancel', variant: 'tertiary', size: 'sm' }}
/>
```

Select (boş durum)

```tsx
import { Select } from 'pinnate';

<Select id="country" options={[]} placeholder="Select" emptyText="No results found" />
```

Switch (reverse + spaceBetween)

```tsx
import { Switch } from 'pinnate';

<Switch label="Notifications" reverse spaceBetween />
```

### Props JSON (otomatik)

`scripts/generate-props.mjs` docgen ile her komponent klasörüne `props.json` üretir. İç içe obje tipleri ve birlik (union) alias’larını (örn. `ButtonVariant`, `ButtonSize`) destekler.

```bash
npm run gen:props
# prebuild’e de eklenebilir
```

#### Tüketim (başka projede)

Paket içerisinde `dist/props.json` (tümü) ve `dist/props/<Component>.json` (bileşen bazlı) yayınlanır.

```ts
// Tüm props şemaları tek JSON
import allProps from 'pinnate/dist/props.json';
const buttonProps = allProps.Button;

// Bileşen bazlı dinamik import
const { default: selectProps } = await import('pinnate/dist/props/Select.json');
```

Not: TypeScript JSON importları için gerekirse `declare module '*.json';` ekleyin.

### Geliştirme

- `npm run dev` → Storybook
- `npm run build` → Paket üretimi (dist)
- `npm run test` → Testler
- `npm run sonar` → SonarQube taraması

