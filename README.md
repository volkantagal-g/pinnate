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

### Component Geliştirme Rehberi

Yeni bir component oluştururken aşağıdaki adımları takip edin:

#### 1. Component Yapısı

```
src/components/
├── Form/                    # Form component'leri
│   ├── Button/
│   │   ├── Button.tsx      # Ana component
│   │   ├── Button.module.scss # Stiller
│   │   ├── index.ts        # Export
│   │   ├── initial-props.json # Initial props (manuel)
│   │   └── Button.stories.tsx # Storybook
├── Display/                 # Display component'leri
├── Navigation/              # Navigation component'leri
└── Feedback/                # Feedback component'leri
```

#### 2. Component Oluşturma Adımları

**a) Component Dosyası (`ComponentName.tsx`)**
```tsx
/**
 * @category Form Elements  // JSDoc category (zorunlu)
 */
import React from 'react';
import s from './ComponentName.module.scss';

export interface ComponentNameProps {
  // Props tanımları
}

export function ComponentName({ 
  // Props destructuring
}: ComponentNameProps): JSX.Element {
  return (
    // JSX
  );
}
```

**b) Initial Props (`initial-props.json`)**
```json
{
  "prop1": "default value",
  "prop2": true,
  "prop3": null,
  "prop4": ["array", "values"],
  "prop5": {
    "nested": "object"
  }
}
```

**c) Export (`index.ts`)**
```ts
export { ComponentName } from './ComponentName';
export type { ComponentNameProps } from './ComponentName';
```

**d) Stiller (`ComponentName.module.scss`)**
```scss
.component {
  // SCSS styles
}
```

**e) Storybook (`ComponentName.stories.tsx`)**
```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentName } from './ComponentName';

const meta: Meta<typeof ComponentName> = {
  title: 'Form/ComponentName',
  component: ComponentName,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Story args
  },
};
```

#### 3. Initial Props Kuralları

- **Manuel Oluştur**: `InitialProps` export'u yerine `initial-props.json` dosyası oluştur
- **Gerçek Değerler**: Component'in gerçek kullanım senaryolarına uygun değerler ver
- **Karmaşık Yapılar**: Array, object, nested structure'ları destekle
- **Null/Undefined**: `undefined` yerine `null` kullan (JSON uyumluluğu için)

#### 4. Metadata Otomatik Oluşturma

```bash
npm run props  # Tüm component'ler için metadata oluşturur
```

Script otomatik olarak:
- Component props'larını parse eder
- JSDoc category'lerini okur
- `initial-props.json` dosyalarını okur
- `dist/component-metadata.json` oluşturur

**Örnek initial-props.json:**
```json
// Button/initial-props.json
{
  "label": "Button",
  "variant": "primary",
  "size": "md",
  "icon": null,
  "iconPosition": "start",
  "onlyIcon": false,
  "error": false,
  "color": false,
  "disabled": false,
  "permissionId": null
}

// Select/initial-props.json
{
  "options": [
    { "label": "Option 1", "value": "option1" },
    { "label": "Option 2", "value": "option2" }
  ],
  "value": null,
  "placeholder": "Select",
  "disabled": false,
  "error": false
}
```

#### 5. Component Kategorileri

JSDoc `@category` ile component'leri kategorilere ayırın:

```tsx
/**
 * @category Form Elements      // Form component'leri
 * @category Display            // Display component'leri  
 * @category Navigation         // Navigation component'leri
 * @category Feedback          // Feedback component'leri
 */
```

#### 6. Mevcut Component Örnekleri

**Form Elements:**
- `Button`, `Input`, `Textbox`, `Checkbox`, `Select`, `Switch`
- `FormLabel`, `InputGroup`, `TextboxGroup`, `CheckboxGroup`, `SelectGroup`
- `InputHint`, `CheckboxGroupBadge`

**Display:**
- `Badge`, `Icon`, `Image`, `Text`, `Paragraph`

**Navigation:**
- `Breadcrumb`

**Feedback:**
- `Tooltip`, `InfoTooltip`, `Modal`, `Notification`, `Alert`

**Other:**
- `Dropdown`

#### 7. Component Geliştirme Süreci

1. **Component Oluştur**: `ComponentName.tsx` dosyasını oluştur
2. **JSDoc Category**: `@category` ile kategorisini belirt
3. **Initial Props**: `initial-props.json` dosyasını manuel oluştur
4. **Export**: `index.ts` ile component'i export et
5. **Stiller**: `ComponentName.module.scss` ile stilleri ekle
6. **Storybook**: `ComponentName.stories.tsx` ile dokümantasyon oluştur
7. **Metadata**: `npm run props` ile metadata oluştur
8. **Test**: Component'i test et ve gerekirse düzenle

### Geliştirme

- `npm run dev` → Storybook
- `npm run build` → Paket üretimi (dist)
- `npm run test` → Testler
- `npm run sonar` → SonarQube taraması
- `npm run props` → Component metadata oluşturma

