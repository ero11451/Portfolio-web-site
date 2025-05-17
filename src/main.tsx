import { ReactNode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Provider, useSelector } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

// Lazy load the MainRouter
import MainRouter from './router/main-router.tsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>

        <Suspense fallback={<LoadingProvider >loading</LoadingProvider>}>
          <MainRouter />
        </Suspense>

      </QueryClientProvider>
    </React.StrictMode>
  </>,
)

function LoadingProvider({ children }: { children: ReactNode }): ReactNode {
  const isLoading = true; // useSelector((store: any) => store.notification.loading);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce animation-delay-400"></div>
          </div>
        </div>
      )}
      {children}
    </>
  );
}
