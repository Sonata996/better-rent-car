import { NavigateHeader } from 'components/NavigateHeader/NavigateHeader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <NavigateHeader />
      </header>
      <Suspense fallback={'LOADING PAGE...'}>
        <Outlet />
      </Suspense>
    </>
  );
};
