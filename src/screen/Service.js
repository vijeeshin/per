import React from 'react'

export const Service = () => {
  return (
    <>
      <div className={"bg-shark "}>
        <div className={"bg-hero-pattern bg-cover bg-right bg-no-repeat "}>
          <div className="container mx-auto  py-5">
            <div className="flex flex-row justify-between items-center px-2 ">
              <a href="/">
                <Logo />
              </a>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row justify-between items-center">
                  <Letter />
                  <span className="px-2  hidden  sm:inline-flex ">
                    <a
                      href="mailto:hello@perfectzdigital.com"
                      className="text-white"
                    >
                      hello@perfectzdigital.com
                    </a>
                  </span>
                </div>
                <Menu />
              </div>
            </div>
            <section>
              <div className=" hidden md:grid md:grid-cols-2 py-44 px-20 ">
                <div>
                  <h1 className="font-montserrat not-italic font-bold lg:text-6xl md:text-4xl  text-white pt-20 pb-10">
                    On-Demand Talent
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-start">
                  <div className="flex flex-row justify-start items-center">
                    <img src={label} />
                    <p className="text-lg tracking-wider text-white px-3">
                      A diverse inventory of highly trained and experienced
                      professionals <br />
                    </p>
                  </div>
                  <div className="flex flex-row justify-start items-center">
                    <img src={label} />
                    <p className="text-lg tracking-wider text-white px-3">
                      Communicate with industry experts to select your talent
                    </p>
                  </div>
                  <div className="flex flex-row justify-start items-center">
                    <img src={label} />
                    <p className="text-lg tracking-wider text-white px-3">
                      Long-term Connection, Guaranteed
                    </p>
                  </div>
                </div>
              </div>
              {/** small Screen */}
              <div className="md:hidden flex flex-col items-center justify-center py-20 px-5">
                <h1 className="font-montserrat not-italic font-bold text-4xl text-center text-white pt-10 pb-10">
                  On-Demand Talent
                </h1>
                <div className="flex flex-col justify-center items-start">
                  <div className="flex flex-row justify-start items-center">
                    <img src={label} />
                    <p className="text-lg tracking-wider text-white px-3">
                      A diverse inventory of highly trained and experienced
                      professionals <br />
                    </p>
                  </div>
                  <div className="flex flex-row justify-start items-center">
                    <img src={label} />
                    <p className="text-lg tracking-wider text-white px-3">
                      Communicate with industry experts to select your talent
                    </p>
                  </div>
                  <div className="flex flex-row justify-start items-center">
                    <img src={label} />
                    <p className="text-lg tracking-wider text-white px-3">
                      Long-term Connection, Guaranteed
                    </p>
                  </div>
                </div>
              </div>
              {/** small Screen */}
            </section>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-row grid-cols-1 lg:grid-rows-2  grid-rows-1 lg:grid-cols-2">
          <div className="hidden lg:block">
            <div className="bg-common bg-center hidden md:block  bg-no-repeat relative top-[-43px] h-[32rem]">
              <div className="w-80  py-36 ml-28">
                <img src={UIUX} />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start px-5 py-10">
            <h1 className="text-5xl font-semibold text-gray-900 font-montserrat mb-5 text-center md:text-left">
              Designing What Matters The Most
            </h1>
            <div className="w-full flex flex-row justify-center items-center p-5 lg:hidden">
              <img src={UIUX} />
            </div>
            <p className="text-xl leading-loose text-gray-400 mb-5 font-lato">
              Ever want to revamp and reorganize your product to be more
              eye-catching? Have you struggled to do so? Don't worry;
              PefectzDigital is here to help! Our modern UI/UX services will
              leave you feeling renewed and fresh!
              <br />
            </p>
            <div className="flex space-x-2.5 items-center justify-start px-4 py-2.5 bg-anzac w-fit">
              <p className="text-sm font-medium text-white">CONTACT US</p>
              <div className="w-1/6 h-full">
                <div className="flex items-center justify-center flex-1 h-full px-1.5 py-0.5">
                  <ArrowForward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-anzac">
        <div className="container mx-auto">
          <div className="hidden lg:grid grid-cols-3 py-20">
            <div className="col-span-2">
              <h1 className="text-5xl font-bold text-gray-900 mb-10npm st">
                Get your team of UX/UI designers now!
                <br />
              </h1>
              <p className="text-2xl leading-8 text-gray-100 py-3">
                If you require a clean and minimalist look, your product will
                have a similar, elegant feel. However, if your brand targets
                younger generations, the project will be funky and youthful. The
                Perfect team makes sure that the product represents the brand
                and attracts customers.
                <br />
              </p>
              <p className="text-2xl leading-8 text-gray-100 py-3">
                Initially, we run multiple UX tests to detect what persona
                favors the brand and attracts a loyal following. Together, we
                will discuss your objectives and help you get there. Then, our
                team of designers engineer color palettes and themes that invoke
                feelings that draw consumers closer.
                <br />
              </p>
              <p className="text-2xl leading-8 text-gray-100 py-3">
                UI/UX services include content and data analysis, logo design,
                brand identity development, branding strategies, and more.
                <br />
              </p>
            </div>
            <div className="col-span-1">
              <img src={manmobile} />
            </div>
          </div>

          <div className="grid lg:hidden grid-cols-1 py-20 px-5">
            <h1 className="text-5xl font-bold text-gray-900 mb-10 ">
              Get your team of UX/UI designers now!
              <br />
            </h1>
            <p className="text-2xl leading-8 text-gray-100 py-3">
              If you require a clean and minimalist look, your product will have
              a similar, elegant feel. However, if your brand targets younger
              generations, the project will be funky and youthful. The Perfect
              team makes sure that the product represents the brand and attracts
              customers.
              <br />
            </p>
            <p className="text-2xl leading-8 text-gray-100 py-3">
              Initially, we run multiple UX tests to detect what persona favors
              the brand and attracts a loyal following. Together, we will
              discuss your objectives and help you get there. Then, our team of
              designers engineer color palettes and themes that invoke feelings
              that draw consumers closer.
              <br />
            </p>
            <p className="text-2xl leading-8 text-gray-100 py-3">
              UI/UX services include content and data analysis, logo design,
              brand identity development, branding strategies, and more.
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto ">
          <div className="flex flex-col space-y-10 items-start justify-end  py-20 px-10 lg:px-0 ">
            <h1 className="text-5xl font-semibold text-gray-900 font-montserrat">
              Become A Well-rounded Individual
            </h1>
            <p className="text-2xl leading-9 text-gray-400 font-lato">
              The training involves a transfer of expertise, information, and
              skills to the freshers. We equip them with knowledge about the
              most advanced and current technological framework. Moreover, we
              familiarize them with the software and systems required by their
              company to excel.
            </p>
            <p className="text-2xl leading-9 text-gray-400 font-lato">
              This way, your freshers return to you as freshly baked and painted
              clay cup that holds immense benefit and know-how within them. By
              the end of the training, they'll know programming languages,
              project management data analysis, and software proficiency. <br />
            </p>
            <p className="text-2xl italic font-mediumitalic leading-9 text-gray-900 font-lato">
              Limited seats are available; sign up now!{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 border-t border-black pt-10 md:pb-40 pb-10 ">
        <div className="container mx-auto  ">
          <h1 className="text-5xl font-semibold text-gray-900 text-center">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="hidden lg:block relative top-[-90px] bg-contact bg-cover py-44 bg-no-repeat">
        <div className="grid grid-row grid-cols-2">
          <div></div>
          <div className="px-40">
            <BlackLogo />
            <div className="flex flex-row justify-start items-center mt-10">
              <Flag />
              <p className="text-xl font-medium leading-3 font-lato px-2 ">
                UAE | INDIA
              </p>
            </div>
            <div className="flex flex-row justify-start items-center mt-10 mb-10">
              <BlackMail />
              <p className="text-sm leading-3 px-2 font-lato">
                hello@perfectzdigital.com
              </p>
            </div>
            <Social />
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-6 items-center justify-end flex-1 px-6 py-10 bg-gray-100 md:hidden">
        form
      </div>

      <div className="flex flex-col space-y-6 items-center justify-end flex-1 px-6 py-10 bg-anzac md:hidden">
        <BlackLogo />
        <div className="flex flex-row justify-start items-center mt-10">
          <Flag />
          <p className="text-xl font-medium leading-3 font-lato px-2 ">
            UAE | INDIA
          </p>
        </div>
        <div className="flex flex-row justify-start items-center mt-10 mb-10">
          <BlackMail />
          <p className="text-sm leading-3 px-2 font-lato">
            hello@perfectzdigital.com
          </p>
        </div>
        <Social />
      </div>
      <div className="bg-black "></div>
    </>
  );
}
