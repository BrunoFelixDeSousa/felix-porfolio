import { Briefcase, Code2, FolderGit2, Mail, User2 } from 'lucide-react';
import type React from 'react';
import { useLocation } from 'react-router';
import { PATHS } from '../routes/paths';

export function NavigationSidebar() {
  const { pathname } = useLocation();

  return (
    <>
      {/* Navigation Mobile */}
      <div className="fixed lg:hidden bottom-0 left-0 w-full flex justify-around items-center p-1.5 bg-white dark:bg-black rounded-t-xl border-2 border-[#b5a265]">
        <NavItem
          icon={<User2 className="h-5 w-5" />}
          label="Perfil"
          link={PATHS.PROFILE}
          isActive={pathname === PATHS.PROFILE}
        />
        <NavItem
          icon={<Briefcase className="h-5 w-5" />}
          label="Experiência"
          link={PATHS.EXPERIENCE}
          isActive={pathname === PATHS.EXPERIENCE}
        />
        <NavItem
          icon={<FolderGit2 className="h-5 w-5" />}
          label="Projetos"
          link={PATHS.PROJECTS}
          isActive={pathname === PATHS.PROJECTS}
        />
        <NavItem
          icon={<Code2 className="h-5 w-5" />}
          label="Habilidades"
          link={PATHS.SKILLS}
          isActive={pathname === PATHS.SKILLS}
        />
        <NavItem
          icon={<Mail className="h-5 w-5" />}
          label="Contato"
          link={PATHS.CONTACT}
          isActive={pathname === PATHS.CONTACT}
        />
      </div>

      {/* Navigation Desktop */}
      <div className="hidden lg:flex md:flex-col md:justify-center md:gap-4 p-2 bg-white dark:bg-black rounded-xl border-2 border-[#b5a265] max-h-[450px]">
        <NavItem
          icon={<User2 />}
          label="Perfil"
          link={PATHS.PROFILE}
          isActive={pathname === PATHS.PROFILE}
        />
        <NavItem
          icon={<Briefcase />}
          label="Experiência"
          link={PATHS.EXPERIENCE}
          isActive={pathname === PATHS.EXPERIENCE}
        />
        <NavItem
          icon={<FolderGit2 />}
          label="Projetos"
          link={PATHS.PROJECTS}
          isActive={pathname === PATHS.PROJECTS}
        />
        <NavItem
          icon={<Code2 />}
          label="Habilidades"
          link={PATHS.SKILLS}
          isActive={pathname === PATHS.SKILLS}
        />
        <NavItem
          icon={<Mail />}
          label="Contato"
          link={PATHS.CONTACT}
          isActive={pathname === PATHS.CONTACT}
        />
      </div>
    </>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  link: string;
}

function NavItem({ icon, label, isActive = false, link }: NavItemProps) {
  return (
    <div className="flex flex-col items-center">
      <a
        href={link}
        className={`w-8 md:w-12 h-8 md:h-12 flex items-center justify-center rounded-xl ${
          isActive
            ? 'bg-[#b5a265] text-white'
            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
        aria-label={label}
      >
        {icon}
      </a>
      <span className="text-xs mt-1 text-black dark:text-gray-400 font-poppins">
        {label}
      </span>
    </div>
  );
}
