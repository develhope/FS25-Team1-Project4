import React from 'react';

function ContactsForm() {
    return (
        <div className="absolute top-[8rem] w-full animate-slideInLeft ">
            <div class="mx-14 mt-10 ">
                <div class="mt-10 text-center font-bold">Contact Us</div>
                <div class="mt-3 text-center text-4xl font-bold">Give us a Feedback</div>
                <div class="p-8">
                    <div class="flex gap-4">
                        <input
                            type="Name"
                            name="name"
                            class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                            placeholder="Full Name *"
                        />
                        <input
                            type="email"
                            name="email"
                            class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                            placeholder="Email *"
                        />
                    </div>
                    <div class="my-6 flex gap-4">
                        <select
                            name="select"
                            id="select"
                            class="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                        >
                            <option class="font-semibold text-slate-300">Please Select</option>
                        </select>
                        <select
                            name="select"
                            id="select"
                            class="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                        >
                            <option class="font-semibold text-slate-300">option Available</option>
                        </select>
                    </div>
                    <div class="">
                        <textarea
                            name="textarea"
                            id="text"
                            cols="30"
                            rows="10"
                            class="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300"
                        >
                            Message
                        </textarea>
                    </div>
                    <div class="text-center">
                        <a class="cursor-pointer rounded-lg bg-black px-8 py-5 text-sm font-semibold text-white">Submit</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactsForm;
