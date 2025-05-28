import Image from 'next/image';
import ContactInfo from './ContactInfo';
import { profile } from '../data/profile';

interface ProfileImageProps {
  name: string;
  title: string;
}

export default function ProfileImage({ name, title }: ProfileImageProps) {
  return (
    <div className="w-full lg:w-1/3 flex flex-col items-center">
      <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg">
        <Image
          src="/profile.jpg"
          alt="Profile"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority
        />
      </div>
      <div className="mt-6">
        <h3 className="text-2xl font-bold text-gray-900">{profile.name}<span className="ml-2 text-base text-gray-500 font-normal align-middle">{profile.englishName}</span></h3>
        <p className="text-gray-700 font-semibold text-lg mt-1">{profile.degree}</p>
        <p className="text-gray-700 font-semibold text-lg mt-1">{title}</p>
        <p className="text-gray-500 text-sm mt-3">{profile.address}</p>
        <div className="mt-6">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
} 