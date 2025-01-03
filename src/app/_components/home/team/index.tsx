import { avatar1, avatar2, avatar3, TeamImage } from '@/_assets/Home';
import Image from 'next/image';

export default function Team() {

  const avatars = [
    avatar1, avatar2, avatar3
  ];

  return (
    <section className="max-w-8xl mx-auto 2xl:container flex flex-col md:flex-row items-center justify-between px-[15px] py-[25px] lg:px-[100px] lg:py-[32px]">
      <div className="w-full md:w-1/2 md:pr-[100px] text-center md:text-start">
        <h2 className="text-mobileheading lg:text-heading2 font-bold mb-4">
          Ensure <span className="text-primary2">Productivity</span> Of Your Team
        </h2>
        <p className="text-secondary4 mb-6">
          Ensure the productivity of every member of your team with our advanced analytics and time tracking services.
        </p>
        <div className="flex items-center space-x-0 mb-6 justify-center lg:justify-start">
  {avatars.map((avatar, index) => (
    <div
      key={index}
      className={`w-12 h-12 rounded-full`}
      style={{ marginLeft: index !== 0 ? '-10px' : '0px' }}
    >
      <Image
        src={avatar}
        alt={`Avatar ${index + 1}`}
        width={5000}
        height={5000}
        className="object-cover shadow-lg rounded-full bg-gray-100"
      />
    </div>
  ))}
  <div
    className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold"
    style={{ marginLeft: '-10px' }}
  >
    <p className='text-4xl font-thin m-auto'>+</p>
  </div>
</div>




        <button className="bg-primary2 text-white py-2 px-6 rounded-lg shadow-lg border border-transparent hover:bg-white hover:text-primary2 hover:border-primary2 transition-all duration-200 ease">
          Learn More
        </button>
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <div className="relative ">
          <Image
            src={TeamImage}
            alt="Illustration"
            height={5000} width={5000}
            className='w-full h-full object-cover'
          />

        </div>
      </div>
    </section>
  );
}
