import React from 'react';
import LeftMenu from './LeftMenu';

const Python = () => {
    return (
        <div class="container mx-auto mt-10 ">
                <div class="flex flex-wrap my-10">
                <div class="md:flex-[70] bg-white md:px-10 py-10 px:10 w-full">
                    Python 
                    is a very good programmingv langufe lets learn more about it jjbhj
                    hjvbvv
                    jhbhjbhjvh
                    vhgvghvgc
                    gbhhjvxh
                     bhcbhdbhcdbhcbhdcdvhcvhvh hjvbhjvdhcjvd hvbhjvghsvx ghvghcx gfcxtdc tftsfxrtcsx ghcvsafgxfg tgsafcrtdcvb vcffdag fgcsfcfcx 
                </div>

                <div id="summary" class=" px-8 py-10 bg-gray-200 h-full  ">
                    <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                    <div class="flex justify-between mt-10 mb-5">
                    <span class="font-semibold text-sm uppercase">Items 3</span>
                    <span class="font-semibold text-sm">590$</span>
                    </div>
                    <div>
                    <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                    <select class="block p-2 text-gray-600 w-full text-sm">
                        <option>Standard shipping - $10.00</option>
                    </select>
                    </div>
                    <div class="py-10">
                    <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                    <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full"/>
                    </div>
                    <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                    <div class="border-t mt-8">
                    <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                        <span>Total cost</span>
                        <span>$600</span>
                    </div>
                    <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                    </div>
                </div>

                </div>
  </div>

    );
};

export default Python;