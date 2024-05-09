import {Boxes} from "../components/ui/background-boxes"

export default function workexp(){
  return(
    <div id="workexp" className=" h-full relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg p-4 sm:p-10">
    <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

    <Boxes />

      {/* <div className="container bg-grey mx-auto w-full h-full"> */}
          <div className="h-auto sm:h-[40rem] relative wrap overflow-hidden z-20 pb-5 sm:pb-10">
          <h2 className="text-white text-3xl sm:text-4xl text-center pb-5 sm:pb-10 pt-10 sm:pt-24 underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Work Experience</h2>
              <div className="border-2 absolute border-opacity-20 h-full border" style={{ left: '50%', borderColor: '#3498db' }}></div>
              {/* right timeline */}
              <div className="mb-4 sm:mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-full sm:w-5/12 px-2">
                      <div className="text-right text-white text-sm sm:text-base">Sep 2022 - Present</div> {/* Date from */}
                  </div>
                  <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-6 h-6 sm:w-8 sm:h-8 rounded-full">
                      <h1 className="mx-auto font-semibold text-md text-white">1</h1>
                  </div>
                  <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-full sm:w-5/12 px-4 py-3 sm:px-6 sm:py-4">
                      <h3 className="mb-2 font-bold text-gray-800 text-lg sm:text-xl ">ThinkLabs.io</h3>
                      <p className="text-xs sm:text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 text-justify">At ThinkLabs, I spearheaded the development of dynamic web applications and AI-powered chatbots, enhancing user interaction and operational efficiency through innovative software solutions.</p>
                  </div>
              </div>

              {/* left timeline */}
              <div className="mb-4 sm:mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-full sm:w-5/12 px-2">
                      <div className="text-left text-white text-sm sm:text-base">Aug 2020 - Jul 2022</div> {/* Date from */}
                  </div>
                  <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-6 h-6 sm:w-8 sm:h-8 rounded-full">
                      <h1 className="mx-auto text-white font-semibold text-md">2</h1>
                  </div>
                  <div className="order-1 bg-red-400 rounded-lg shadow-xl w-full sm:w-5/12 px-4 py-3 sm:px-6 sm:py-4">
                      <h3 className="mb-2 font-bold text-white text-lg sm:text-xl ">TATA Consultancy Services</h3>
                      <p className="text-xs sm:text-sm font-medium leading-snug tracking-wide text-white text-opacity-100 text-justify">At TATA Consultancy Services, I crafted client-centric web solutions and robust microservices architectures, significantly enhancing system interconnectivity and operational productivity.</p>
                  </div>
              </div>

              <div className="mb-4 sm:mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-full sm:w-5/12 px-2">
                      <div className="text-right text-white text-sm sm:text-base">May 2019 - Aug 2019</div> {/* Date from */}
                  </div>
                  <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-6 h-6 sm:w-8 sm:h-8 rounded-full">
                      <h1 className="mx-auto font-semibold text-md text-white">3</h1>
                  </div>
                  <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-full sm:w-5/12 px-4 py-3 sm:px-6 sm:py-4">
                      <h3 className="mb-2 font-bold text-gray-800 text-lg sm:text-xl">TechieAid</h3>
                      <p className="text-xs sm:text-sm font-medium leading-snug tracking-wide text-gray-900 text-opacity-100 text-justify">At TechieAid, I developed and refined Android applications and data algorithms, improving functionality and system reliability through meticulous testing and integration techniques.</p>
                  </div>
              </div>
          </div>
      {/* </div> */}
    </div>
  );
}
