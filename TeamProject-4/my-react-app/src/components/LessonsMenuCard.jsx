import React from 'react';

function LessonsMenuCard({ svg, title, description, link }) {
    return (
        <div className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1rem)]">
            <div className="relative m-[1rem] text-lg bg-white bg-opacity-45 p-[30px] rounded-[20px]">
                <div className="group relative cursor-pointer overflow-hidden bg-white px-12 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                    <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                    <div className="relative z-10 mx-auto max-w-md">
                        <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                            {svg}
                        </span>
                        <h1 class="mb-6 mt-6 font-extrabold leading-none tracking-tight text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl dark:text-white">
                            {title}
                        </h1>
                        <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                            <p>{description}</p>
                        </div>
                        <div className="pt-5 text-base font-semibold leading-7">
                            <p>
                                <a href={link} className="text-sky-500 transition-all duration-300 group-hover:text-white">
                                    Go learn it! &rarr;
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LessonsMenuCard;
