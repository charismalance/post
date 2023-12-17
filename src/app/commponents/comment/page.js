import React from 'react';

const comment = () => {
  return (

   
   <div class="bg-slate-50 rounded-lg border p-1 md:p-3 m-10">
    <h3 class="font-semibold p-1">Discussion</h3>
    <div class="flex flex-col gap-5 m-3">

        {/* <!-- Comment Container --> */}
        <div>
            <div class="flex w-full justify-between border rounded-md">

                <div class="p-3">
                    <div class="flex gap-3 items-center">
                        <img src="https://avatars.githubusercontent.com/u/22263436?v=4"
                                class="object-cover w-10 h-10 rounded-full border-2 border-emerald-400  shadow-emerald-400"/>
                        <h3 class="font-bold">
                            User 1
                          
                        </h3>
                    </div>
                    <p class="text-gray-600 mt-2 pl-12">
                        this is sample commnent
                    </p>
                    {/* <button class="text-right text-blue-500">Reply</button> */}

                    <button class="group relative h-10 w-20 overflow-hidden rounded-lg bg-white text-sm shadow">
    <div class="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span class="relative text-black group-hover:text-white">Reply</span>
  </button>
                </div>
            </div>

            {/* <!-- Reply Container  --> */}
            <div class="text-gray-300 font-bold pl-14">|</div>
            <div class="flex justify-between border-dashed border-2 ml-5  rounded-md">

                <div class="p-3">
                    <div class="flex gap-3 items-center">
                        <img src="https://avatars.githubusercontent.com/u/22263436?v=4"
                                class="object-cover w-10 h-10 rounded-full border-2 border-emerald-400  shadow-emerald-400"/>
                        <h3 class="font-bold">
                            User 2
                          
                        </h3>
                    </div>
                    <p class="text-gray-600 mt-2 pl-12">
                        this is sample commnent
                    </p>
                </div>


            </div>
            {/* <!-- END Reply Container  --> */}



        </div>
        {/* <!-- END Comment Container  --> */}





        <div class="flex w-full justify-between border rounded-md">
            <div class="p-3">

                <div class="flex gap-3 items-center">
                    <img src="https://avatars.githubusercontent.com/u/22263436?v=4"
                            class="object-cover w-10 h-10 rounded-full border-2 border-emerald-400  shadow-emerald-400"/>
                    <h3 class="font-bold">
                        User 4
                    </h3>

                </div>
                <p class="text-gray-600 mt-2 pl-12">
                    this is sample commnent
                </p>
                <button class="group relative h-10 w-20 overflow-hidden rounded-lg bg-white text-sm shadow">
    <div class="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span class="relative text-black group-hover:text-white">Reply</span>
  </button>            </div>

        </div>

    </div>

    <div class="w-full px-3 mb-2 mt-6">
        <textarea
                class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-400 focus:outline-none focus:bg-white"
                name="body" placeholder="Comment" required></textarea>
    </div>

    <div class="w-full flex justify-end px-3 my-3">
        <input type="submit" class="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500 text-lg" value='Post Comment'/>
    </div>


</div>
     

  );
};

export default comment;