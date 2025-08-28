# @bawo-ui


React UI kit with Tailwind-friendly defaults. Includes Theme Provider/Switcher, gradients & color utils, buttons, cards, modal, badge, pagination, copy button, and loaders.

 
```


## Install


 
```
npm i @bawo/ui
```


## Setup
Add dark class toggling support (optional):
```html
<html class="dark"> <!-- toggled by ThemeProvider -->
```
Import optional base styles (or style with Tailwind):
```ts
import "@bawo/ui/styles.css";
```


## Usage
```tsx
import { ThemeProvider } from "bawo-ui/theme";
import { ThemeSwitcher } from "bawo-ui/theme-switcher";
import { Button } from "bawo-ui/button";
import { Card } from "bawo-ui/card";
import { Pagination } from "bawo-ui/pagination";
import { CopyButton } from "bawo-ui/copy-button";
import { Spinner, Dots } from "bawo-ui/loaders";
import * as Color from "bawo-ui/gradients";

function App(){
  const [page, setPage] = React.useState(1);
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bui-bg)] text-[var(--bui-fg)] p-6">
        <ThemeSwitcher />
        <Card className="mt-4">
          <Button variant="primary">Primary</Button>
          <CopyButton text="0xABCD">Copy Address</CopyButton>
          <div className="mt-2" style={{ background: Color.gradient({from:'#10b981', to:'#2563eb'}) }}>Gradient box</div>
        </Card>
        <Pagination page={page} total={120} pageSize={10} onChange={setPage} className="mt-6"/>
        <div className="mt-6 flex items-center gap-3"><Spinner/><Dots/></div>
      </div>
    </ThemeProvider>
  );
}

```


## Tailwind (optional)
Classes like `bui-btn` are provided, but you can fully style via Tailwind by passing `className`.


## License
MIT