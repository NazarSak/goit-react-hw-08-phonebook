import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import { AppBar } from './appBar/AppBar';
import { Navigation } from './navigation/Navigation';

export const Layout = () => {
    return (
      <div>
        <Navigation />

  
        <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        </main>
     
      </div>
    );
  };