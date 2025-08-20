## Pinnate UI

Token tabanlı React UI kütüphanesi. Storybook, Vitest, Changesets ve Sonar entegre.

### Kurulum

```bash
npm i pinnate
```

Peer: React 18+

### Hızlı Başlangıç

Uygulamayı `PinnateProvider` ile sarmalayın. Sağlayıcı design token’lardan CSS değişkenleri (\--pn-*) üretir; ek global CSS gerektirmez.

```tsx
import { PinnateProvider } from 'pinnate';

export function App() {
  return (
    <PinnateProvider>
      {/* your app */}
    </PinnateProvider>
  );
}
```

Bileşen kullanımı

```tsx
import { Button, Input, Select, Notification } from 'pinnate';

<Button variant="primary" label="Save" />
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

