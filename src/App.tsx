import './global.css';

import { RouterProvider } from 'react-router';
import { ThemeProvider } from './components/theme/theme-provider';
import { router } from './routes';

export function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}
