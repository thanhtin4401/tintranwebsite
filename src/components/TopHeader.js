import React from "react";

const TopHeader = () => {
  return (
    <section className="h-screen w-full pt-[7rem] pb-10">
      <div className=" flex h-full justify-center mx-auto ">
        <div className=" w-full rounded-3xl border overflow-hidden relative">
          <div className="w-full h-full absolute top-0 bg-black opacity-40"></div>
          <video
            width="100%"
            className="h-full object-cover"
            src="https://res.cloudinary.com/dvzingci9/video/upload/v1665504047/airBnB/video/X2Download.app-_4K_HDR_NON_NUOC_CAO_BANG_UNESCO_GLOBAL_GEOPARK_VIETNAM.-_1080p_ruoqf8.mp4"
            autoPlay
            loop
            muted
          ></video>
          <div className="flex flex-col gap-2 xl:flex-row justify-between px-5 absolute bottom-0 w-full pb-5">
            <div>
              <h1 className=" text-left font-general text-[1.5rem] md:text-[2rem] text-primary-color font-extrabold">
                BECOME TO SOFTWARE DEVELOP
              </h1>
              <h1 className=" text-left font-general  text-[1.5rem] md:text-[2rem] text-primary-color font-extrabold">
                THANH TIN
              </h1>
              <h1 className=" text-[1.5rem] md:text-[2rem] text-white text-left">
                NEW OPPERTUNINY
              </h1>
              <div>
                <div className="justify-start items-center gap-3 flex">
                  <div className="w-[15px] h-[15px] rounded-full border border-white" />
                  <div className="text-left text-white text-[0.8rem] md:text-[1rem] font-light font-['JetBrains Mono']">
                    NEW OPPERTUNINY NEW OPPERTUNINY NEW OPPERTUNINY
                  </div>
                </div>
                <div className="justify-start items-center gap-3 flex">
                  <div className="w-[15px] h-[15px] rounded-full border border-white" />
                  <div className="text-left text-white text-[0.8rem] md:text-[1rem] font-light font-['JetBrains Mono']">
                    NEW OPPERTUNINY NEW OPPERTUNINY NEW OPPERTUNINY
                  </div>
                </div>
              </div>
            </div>
            <div
              className=" w-full xl
            :w-2/4 xl:max-w-[500px]"
            >
              <div className="grid grid-cols-6 grid-rows-4 gap-2 w-full h-full ">
                <div
                  className="col-span-6 sm:col-span-4 rounded-lg row-span-4 overflow-hidden duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[3px_3px_0px_0px_#B9F207]
 transition"
                >
                  <iframe
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d67746.76986809439!2d106.79610851488857!3d10.826273426428578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175275b3a69ce75%3A0xfc7063168fc12eaf!2sDistrict%209%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1652585173750!5m2!1sen!2s"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>

                <div className="col-span-3 sm:col-span-2 rounded-lg row-span-2 bg-black flex items-center justify-between p-4">
                  <h2 className="w-full text-[2rem] text-white font-general font-extrabold">
                    12:00 AM
                  </h2>
                </div>
                <div
                  className="col-span-3 sm:col-span-2 flex justify-between flex-col rounded-lg row-span-2 p-4 bg-black duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[3px_3px_0px_0px_#FFFFFF]
 transition"
                >
                  <div className="flex justify-between w-full">
                    <button
                      className="p-1 bg-slate-500 rounded-full hover:bg-white duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[3px_3px_0px_0px_#B9F207]
 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M18 6C20.07 8.04 20.85 10.89 20.36 13.55C20.77 14.27 21 15.11 21 16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21C15.11 21 14.27 20.77 13.55 20.36C10.89 20.85 8.04 20.07 6 18C3.93 15.96 3.15 13.11 3.64 10.45C3.23 9.73 3 8.89 3 8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3C8.89 3 9.73 3.23 10.45 3.64C13.11 3.15 15.96 3.93 18 6ZM12.04 17.16C14.91 17.16 16.34 15.78 16.34 13.92C16.34 12.73 15.78 11.46 13.61 10.97L11.62 10.53C10.86 10.36 10 10.13 10 9.42C10 8.7 10.6 8.2 11.7 8.2C13.93 8.2 13.72 9.73 14.83 9.73C15.41 9.73 15.91 9.39 15.91 8.8C15.91 7.43 13.72 6.4 11.86 6.4C9.85 6.4 7.7 7.26 7.7 9.54C7.7 10.64 8.09 11.81 10.25 12.35L12.94 13.03C13.75 13.23 13.95 13.68 13.95 14.1C13.95 14.78 13.27 15.45 12.04 15.45C9.63 15.45 9.96 13.6 8.67 13.6C8.09 13.6 7.67 14 7.67 14.57C7.67 15.68 9 17.16 12.04 17.16Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                    <button
                      className="p-1 bg-slate-500 rounded-full hover:bg-white duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[3px_3px_0px_0px_#B9F207]
 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M14.2 2.875C12.9734 2.875 11.797 3.36228 10.9296 4.22963C10.0623 5.09699 9.575 6.27337 9.575 7.5V10.075H7.1C6.976 10.075 6.875 10.175 6.875 10.3V13.7C6.875 13.824 6.975 13.925 7.1 13.925H9.575V20.9C9.575 21.024 9.675 21.125 9.8 21.125H13.2C13.324 21.125 13.425 21.025 13.425 20.9V13.925H15.922C16.025 13.925 16.115 13.855 16.14 13.755L16.99 10.355C16.9984 10.3218 16.9991 10.2872 16.992 10.2537C16.985 10.2202 16.9704 10.1888 16.9494 10.1618C16.9283 10.1348 16.9014 10.1129 16.8707 10.0979C16.84 10.0829 16.8062 10.075 16.772 10.075H13.425V7.5C13.425 7.39823 13.445 7.29745 13.484 7.20342C13.5229 7.10939 13.58 7.02396 13.652 6.95199C13.724 6.88003 13.8094 6.82294 13.9034 6.78399C13.9974 6.74505 14.0982 6.725 14.2 6.725H16.8C16.924 6.725 17.025 6.625 17.025 6.5V3.1C17.025 2.976 16.925 2.875 16.8 2.875H14.2Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                    <button
                      className="p-1 bg-slate-500 rounded-full hover:bg-white duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[3px_3px_0px_0px_#B9F207]
 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                  </div>
                  <h1 className="text-[1rem] text-white font-general font-extrabold text-left">
                    NEW OPPERTUNINY
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
