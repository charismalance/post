import React from 'react';
import Image from 'next/image'
import Comment from '../comment/page'
const pagePost = () => {
  return (
    <div>
          <article class="flex flex-col shadow my-4">
                {/* <!-- Article Image --> */}
                {/* <a href="#" class="hover:opacity-75"> </a> */}
                    <img class="hover:opacity-75" src="https://clarity-tailwind.preview.uideck.com/images/blog-single-01.png"/>
               
                <div class="bg-white flex flex-col justify-start p-6">
                    <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
                    <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
                    <p href="#" class="text-sm pb-3">
                        By <a href="#" class="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
                    </p>
                    <p class="pb-6">As discussed in the introduction post, one of the best things about Ghost is just how much you can customize to turn your site into something unique. Everything about your layout and design can be changed, so you're not stuck with yet another clone of a social network profile.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id quam at justo ullamcorper vulputate. Donec mattis aliquam urna, sed placerat dolor volutpat vel. Maecenas posuere sem purus, quis feugiat.

Sed ullamcorper dui at risus viverra, nec cursus leo ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Curabitur pretium, libero vitae pharetra rhoncus, tellus urna auctor orci, eu dictum diam diam nec neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce congue dui nec dui lobortis maximus. Morbi bibendum, nisi vel cursus.

Adipiscing elit. Nulla id quam at justo ullamcorper vulputate. Donec mattis aliquam urna, sed placerat dolor volutpat vel. Maecenas quis feugiat.</p>
                    {/* <a href="#" class="uppercase text-gray-800 hover:text-black">Continue Reading <i class="fas fa-arrow-right"></i></a> */}
                </div>
                <Comment/>
            </article>
    </div>
  );
};

export default pagePost;