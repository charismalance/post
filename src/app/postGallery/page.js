import React from 'react';
import Navbar from '../commponents/navbar/page';
const login = () => {
  return ( <div>
<Navbar></Navbar>

{/* 
<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt=""/>
    </div>
</div> */}






<section class="flex items-center  dark:bg-gray-800">
        <div class="p-4 mx-auto max-w-7xl">
            <div class="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-2">
                <a class="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row dark:bg-gray-700" href="#">
                    <div class="relative w-full overflow-hidden lg:w-2/4 h-80">
                        <img class="object-cover w-full h-full transition-all hover:scale-110"
                            src="/p1.jpg" alt=""/>
                        <span class="absolute px-4 py-2 text-xs text-white bg-blue-500 rounded top-4 left-4">
                            Read More
                        </span>
                    </div>
                    <div
                        class="relative flex self-center flex-1 p-8 ml-0 bg-white border rounded shadow dark:border-gray-700 dark:bg-gray-700 lg:items-center lg:-ml-12">
                        <div>
                            <span class="block mb-2 text-xs font-semibold text-blue-700 uppercase dark:text-blue-300">
                                6th
                                Jun, 2022
                            </span>
                            <h2 class="mb-3 text-2xl font-bold leading-9 text-black dark:text-white">
                            Post 1 Headline
                                                        </h2>
                            <p class="text-sm leading-7 text-gray-400">

                            A spa is a location where mineral-rich spring water (and sometimes seawater) is used to give medicinal baths 
                            Spa towns or spa resorts (including hot springs resorts) typically offer various health treatments, which are also known as balneotherapy
                                                       </p>
                        </div>
                    </div>
                </a>
                <a class="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row dark:bg-gray-700" href="#">
                    <div class="relative w-full overflow-hidden lg:w-2/4 h-80">
                        <img class="object-cover w-full h-full transition-all hover:scale-110"
                            src="https://i.postimg.cc/fbT9FYhB/pexels-stijn-dijkstra-2583852.jpg" alt=""/>
                        <span class="absolute px-4 py-2 text-xs text-white bg-blue-500 rounded top-4 left-4">
                            Read More
                        </span>
                    </div>
                    <div
                        class="relative self-center flex-1 p-8 ml-0 bg-white border rounded shadow dark:border-gray-700 dark:bg-gray-700 lg:items-center lg:-ml-12">
                        <span class="block mb-2 text-xs font-semibold text-blue-700 uppercase dark:text-blue-300"> 6th
                            Jun, 2022
                        </span>
                        <h2 class="mb-3 text-2xl font-bold leading-9 text-black dark:text-white">
                            Lorem ipsum dolor sit amet, consectetur
                        </h2>
                        <p class="text-sm leading-7 text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                    </div>
                </a>
                <a class="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row dark:bg-gray-700" href="#">
                    <div class="relative w-full overflow-hidden lg:w-2/4 h-80">
                        <img class="object-cover w-full h-full transition-all hover:scale-110"
                            src="https://i.postimg.cc/sgKBp1ZS/pexels-sam-kolder-2387866.jpg" alt=""/>
                        <span class="absolute px-4 py-2 text-xs text-white bg-blue-500 rounded top-4 left-4">
                            Read More
                        </span>
                    </div>
                    <div
                        class="relative self-center flex-1 p-8 ml-0 bg-white border rounded shadow dark:border-gray-700 dark:bg-gray-700 lg:items-center lg:-ml-12">
                        <span class="block mb-2 text-xs font-semibold text-blue-700 uppercase dark:text-blue-300"> 6th
                            Jun, 2022
                        </span>
                        <h2 class="mb-3 text-2xl font-bold leading-9 text-black dark:text-white">
                            Lorem ipsum dolor sit amet, consectetur
                        </h2>
                        <p class="text-sm leading-7 text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                    </div>
                </a>
                <a class="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row dark:bg-gray-700" href="#">
                    <div class="relative w-full overflow-hidden lg:w-2/4 h-80">
                        <img class="object-cover w-full h-full transition-all hover:scale-110"
                            src="/p2.jpg" alt=""/>
                        <span class="absolute px-4 py-2 text-xs text-white bg-blue-500 rounded top-4 left-4">
                            Read More
                        </span>
                    </div>
                    <div
                        class="relative self-center flex-1 p-8 ml-0 bg-white border rounded shadow dark:border-gray-700 dark:bg-gray-700 lg:items-center lg:-ml-12">
                        <span class="block mb-2 text-xs font-semibold text-blue-700 uppercase dark:text-blue-300"> 6th
                            Jun, 2022
                        </span>
                        <h2 class="mb-3 text-2xl font-bold leading-9 text-black dark:text-white">
                            Lorem ipsum dolor sit amet, consectetur
                        </h2>
                        <p class="text-sm leading-7 text-gray-400">
                           
In the 19th century, women primarily participated in the "new games" which included golf, lawn tennis, cycling, and field hockey
                        </p>
                    </div>
                </a>
            </div>
        </div>
    </section>





  </div> );
};

export default login;