import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from "next-themes"
import { RouterProvider } from 'react-router-dom'
import { router } from './app/Router.tsx'
import { Provider } from 'react-redux'
import { store } from './app/store.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'



const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(


  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={router} />
          <Toaster />
        </Provider>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
)
