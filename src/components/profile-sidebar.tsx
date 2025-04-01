import { contactDetails, profileDetails } from '../constants';
import SocialLinks from './social-links';

type ContactItemProps = {
  icon: React.ElementType;
  text: string;
};

const ContactItem = ({ icon: Icon, text }: ContactItemProps) => (
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded">
      <Icon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
    </div>
    <span className="text-sm text-gray-700 dark:text-gray-300">{text}</span>
  </div>
);

export function ProfileSidebar() {
  return (
    <div className="relative bg-white dark:bg-black rounded-xl border-2 border-[#b5a265] pt-6 flex flex-col items-center">
      <div className="relative -top-[75px] w-32 h-32 mb-4">
        <div className="absolute inset-0 rounded-2xl overflow-hidden border-4 border-[#b5a265]">
          <img
            src={profileDetails.imageUrl}
            alt="Bruno Félix de sousa"
            width={128}
            height={128}
            className="object-cover"
          />
        </div>
      </div>
      <div className="relative -top-[65px]">
        <h2 className="text-xl text-center sm:text-2xl font-inter font-bold text-gray-800 dark:text-white mb-1">
          {profileDetails.name}
        </h2>

        <p className="text-sm text-center text-gray-600 dark:text-gray-400 mb-5 mt-2 border rounded-sm border-[#b5a265] bg-[#f8f3e3] dark:bg-[#1a1a1a] p-2 font-semibold font-inter ml-8 mr-8">
          {profileDetails.title}
        </p>

        <SocialLinks />

        <div className="w-full mt-6 space-y-3 border-[#b5a265] bg-[#f8f3e3] dark:bg-[#1a1a1a] p-2 rounded-sm">
          {contactDetails.map((details, index) => (
            <ContactItem key={index} icon={details.icon} text={details.text} />
          ))}
        </div>

        <div className="w-full flex justify-center">
          <button className="mt-8 px-6 py-2 bg-transparent border border-[#b5a265] rounded-sm text-[#b5a265] text-sm font-medium hover:bg-[#b5a265] hover:text-white transition-colors">
            Ver Resumo
          </button>
        </div>
      </div>
    </div>
  );
}
