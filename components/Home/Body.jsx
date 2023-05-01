import Image from "next/image";
import { useEffect, useState } from "react";

export default function Body() {
  const [pc, setPc] = useState(false);
  function setInitialPositions() {
    if (window.innerWidth < 768) {
      setPc(false);
    } else {
      setPc(true);
    }
  }

  useEffect(() => {
    setInitialPositions();
    window.addEventListener("resize", setInitialPositions);

    return () => {
      window.removeEventListener("resize", setInitialPositions);
    };
  }, []);

  return (
    <div className="pt-[100px] bg-white text-[#2E2E2E] flex flex-col font-poppins  items-center align-center p-5 justify-center">
      <div className="heading mb-5">
        <h1 className="md:text-[4rem] text-[3rem]">Why OwnBoon?</h1>
        <h3 className="md:text-[1.5rem] text-[1.5rem] py-1 ">
        Elevate Your Self-Improvement Journey
        </h3>
      </div>

      <div className="my-auto mx-auto px-5  justify-center flex flex-row md:flex-nowrap flex-wrap">
        <div className="bodyimg1">
          <Image
            width={600}
            height={600}
            loading="lazy"
            src="/bodyimage1.webp"
            alt="Gif"
          />
        </div>
        <div className="flex flex-col ml-4  text-center md:text-left align-center justify-center">
          <h4 className="md:text-[1.5rem] sm:text-[1.5rem] text-[1.2rem] font-poppins font-semibold py-3">
          A Better Community of Like-Minded People
          </h4>
          <p className="text-[1rem] md:text-[1.2rem] break-normal max-w-2xl">
          OwnBoon provides a welcoming community of like-minded individuals who are dedicated to personal growth and self-improvement. Connect with others who share your goals, join specific group chats based on your interests, and access a wealth of resources to help you on your journey.
          </p>
        </div>
      </div>
      <div className="my-auto mx-auto p-5  justify-center flex flex-row md:flex-nowrap flex-wrap">
        {pc ? (
          <>
            <div className="flex flex-col ml-4  text-center md:text-left align-center justify-center">
              <h4 className="md:text-[1.5rem] sm:text-[1.5rem] text-[1.2rem] font-poppins font-semibold py-3">
                Find Support and Encouragement

              </h4>
              <p className=" text-[1rem] md:text-[1.2rem] break-normal max-w-2xl">
                Whether you need advice or simply a listening ear, the OwnBoon community is here to support you. Use the vent zone to share your feelings and receive life advice, or connect with a gym buddy or study partner to stay on track and motivated. 

              </p>
            </div>
            <div className="bodyimg2">
              <Image
                width={600}
                height={600}
                loading="lazy"
                src="/bodyimage2.webp"
                alt="Gif"
              />
            </div>
          </>
        ) : (
          <>
            <div className="bodyimg2">
              <Image
                width={600}
                height={600}
                loading="lazy"
                src="/bodyimage2.webp"
                alt="Gif"
              />
            </div>
            <div className="flex flex-col ml-4  text-center md:text-left align-center justify-center">
              <h4 className="md:text-[1.5rem] sm:text-[1.5rem] text-[1.2rem] font-poppins font-semibold py-3">
                Find Support and Encouragement

              </h4>
              <p className=" text-[1rem] md:text-[1.2rem] break-normal max-w-2xl">
              Whether you need advice or simply a listening ear, the OwnBoon community is here to support you. Use the vent zone to share your feelings and receive life advice, or connect with a gym buddy or study partner to stay on track and motivated. 
              </p>
            </div>
          </>
        )}
      </div>

      <div className="my-auto mx-auto p-5  justify-center flex flex-row md:flex-nowrap flex-wrap">
        <div className="bodyimg3">
          <Image
            width={600}
            height={600}
            loading="lazy"
            src="/bodyimage3.webp"
            alt="Gif"
          />
        </div>

        <div className="flex flex-col ml-2 text-center md:text-left align-center justify-center">
          <h4 className="md:text-[1.5rem] sm:text-[1.5rem] text-[1.2rem] font-poppins font-semibold py-3">
            Grow Your Self-Improvement Journey

          </h4>
          <p className=" text-[1rem] md:text-[1.2rem] break-normal max-w-2xl">
          With OwnBoon, you'll have access to personalized roadmaps and exclusive blog content on self-improvement and productivity. Stay informed with the latest tips and techniques from top influencers across different platforms and share your own progress and experiences with a supportive community
          </p>
        </div>
      </div>
      <div className="my-auto mx-auto p-5  justify-center flex flex-row md:flex-nowrap flex-wrap">
        {pc ? (
          <>
            <div className="flex flex-col ml-4  text-center md:text-left align-center justify-center">
              <h4 className="md:text-[1.5rem] sm:text-[1.5rem] text-[1.2rem] font-poppins font-semibold py-3">
                Boost Your Productivity
              </h4>
              <p className=" text-[1rem] md:text-[1.2rem] break-normal max-w-2xl">
              OwnBoon offers a variety of productivity tools, Focus Planet and Lofi sessions and an AI scheduler to help you stay organized and focused. You can also access the right study techniques and tips based on your mood to help you stay on track and improve your workflow. 

              </p>
            </div>
            <div >
              <Image
                width={600}
                height={600}
                loading="lazy"
                src="/bodyimage4.webp"
                alt="Gif" className="animate-float"
              />
            </div>
          </>
        ) : (
          <>
            <div >
              <Image
                width={600}
                height={600}
                loading="lazy"
                src="/bodyimage4.webp"
                alt="Gif"
              />
            </div>
            <div className="flex flex-col ml-4  text-center md:text-left align-center justify-center">
              <h4 className="md:text-[1.5rem] sm:text-[1.5rem] text-[1.2rem] font-poppins font-semibold py-3">
                Boost Your Productivity
              </h4>
              <p className=" text-[1rem] md:text-[1.2rem] break-normal max-w-2xl">
                OwnBoon offers a variety of productivity tools, Focus Planet and Lofi sessions and an AI scheduler to help you stay organized and focused. You can also access the right study techniques and tips based on your mood to help you stay on track and improve your workflow. 

              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
