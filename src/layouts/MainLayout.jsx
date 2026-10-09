import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SkeletonNavbar from '../components/skeleton/SkeletonNavbar';
import SkeletonFooter from '../components/skeleton/SkeletonFooter';
import SkeletonWrapper from '../components/skeleton/SkeletonWrapper';
import { useSkeleton } from '../context/SkeletonContext';

const MainLayout = () => {
  const { isLoading } = useSkeleton();

  return (
    <div className="flex flex-col min-h-screen bg-app-main text-app-primary antialiased selection:bg-blue-600/30 selection:text-blue-200 transition-colors duration-300">
      <SkeletonWrapper loading={isLoading} skeleton={<SkeletonNavbar />}>
        <Navbar />
      </SkeletonWrapper>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SkeletonWrapper loading={isLoading} skeleton={<SkeletonFooter />}>
        <Footer />
      </SkeletonWrapper>
    </div>
  );
};

export default MainLayout;
