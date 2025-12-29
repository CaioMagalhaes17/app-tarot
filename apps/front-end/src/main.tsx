/* eslint-disable @typescript-eslint/no-explicit-any */
import { createRoot } from 'react-dom/client'
import './index.css'
import "@app/ui/styles.css"
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GoogleOAuthProvider } from '@react-oauth/google'

const GOOGLE_CLIENT_ID = '767695614738-ocj09in8rq8t101jbq88tij91kai406p.apps.googleusercontent.com'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
})
let global: any
if (typeof global === "undefined") {
  (window as any).global = window;
}

document.querySelector('body')?.classList.add('dark')

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </QueryClientProvider>
)
