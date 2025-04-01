import { Outlet } from 'react-router';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { NavigationSidebar } from '../components/navigation-sidebar';
import { ProfileSidebar } from '../components/profile-sidebar';

export function Layout() {
  return (
    <div className="bg-[#f8f3e3] dark:bg-[#1a1a1a] min-h-dvh antialiased flex flex-col">
      <Header />

      <main className="flex-1 md:col-span-3 grid grid-cols-1 md:grid-cols-[290px_1fr] lg:grid-cols-[320px_1fr_80px] gap-4 pt-10 pl-10 pr-10">
        <div className="md:mb-0">
          <ProfileSidebar />
        </div>

        <div className="md:mb-0 bg-white dark:bg-black rounded-xl border-2 border-[#b5a265] font-poppins">
          <Outlet />
        </div>

        <div className="flex items-center justify-center">
          <NavigationSidebar />
        </div>
      </main>
      <Footer />
    </div>
  );
}
