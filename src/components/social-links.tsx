import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-3">
      <a
        href="https://www.linkedin.com/in/brunofelix-dev/"
        className="w-8 h-8 flex items-center justify-center rounded-full border border-amber-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-[#b5a265] hover:border-[#b5a265] hover:text-white transition-colors"
        aria-label="LinkedIn"
        target="_blank"
      >
        <LinkedinIcon className="h-4 w-4" />
      </a>
      <a
        href="https://github.com/BrunoFelixDeSousa"
        className="w-8 h-8 flex items-center justify-center rounded-full border border-amber-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-[#b5a265] hover:border-[#b5a265] hover:text-white transition-colors"
        aria-label="GitHub"
        target="_blank"
      >
        <GithubIcon className="h-4 w-4" />
      </a>
      <a
        href="mailto:brunofelixdesousa@hotmail.com"
        className="w-8 h-8 flex items-center justify-center rounded-full border border-amber-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-[#b5a265] hover:border-[#b5a265] hover:text-white transition-colors"
        aria-label="GitHub"
        target="_blank"
      >
        <MailIcon className="h-4 w-4" />
      </a>
    </div>
  );
}
