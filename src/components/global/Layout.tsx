import { Outlet, useNavigate } from 'react-router-dom';

import { useTheme } from '../../contexts/ThemeContext';
import { getBackgroundClass } from '../../utilities/ThemeUtilities';
import { useState } from 'react';
import PageTransition from './Animation/PageTransition';

const Layout = () => {
  const { theme } = useTheme();
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const navigate = useNavigate();

  const handlePageChange = (to: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(to);
      setTimeout(() => setIsTransitioning(false), 800); // reverse animation
    }, 800);
  };

  return (
    <>
      <div
        className={`fixed -z-10 min-h-screen w-full ${getBackgroundClass(
          theme
        )}`}
      />
      <main className="flex flex-col items-center md:px-8 lg:px-16">
        <PageTransition isVisible={isTransitioning} />
        <Outlet context={{ handlePageChange }} />{' '}
        {/* Render child routes here */}
      </main>
    </>
  );
};

export default Layout;
