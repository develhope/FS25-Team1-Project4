import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import { FaArrowLeft } from 'react-icons/fa';

function AvatarSettings() {
    return (
        <div>
            <BackgroundImage />
            <div class="absolute lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto my-auto flex gap-4 top-[6rem] right-0 left-0 bottom-0">
                <div class="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
                    {/* <!--  --> */}
                    <div class="">
                        <h1 class="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-extrabold mb-2 dark:text-white bg-transparent">Profile</h1>
                        <h2 class="text-grey text-center text-sm mb-4 dark:text-white">Nome utente</h2>
                        <form>
                            {/* <!-- Cover Image --> */}
                            <div class="w-full rounded-sm bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8MHx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat items-center">
                                {/* <!-- Profile Image --> */}
                                <div class="mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-[url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxwcm9maWxlfGVufDB8MHx8fDE3MTEwMDM0MjN8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat">
                                    <div class="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">
                                        <input type="file" name="profile" id="upload_profile" hidden required />

                                        <label for="upload_profile">
                                            <svg
                                                data-slot="icon"
                                                class="w-6 h-5 text-blue-700"
                                                fill="none"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                                                ></path>
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                                                ></path>
                                            </svg>
                                        </label>
                                    </div>
                                </div>
                                <div class="flex justify-end">
                                    {/* <!--  --> */}
                                    <input type="file" name="profile" id="upload_cover" hidden required />

                                    <div class="bg-white flex items-center gap-1 rounded-tl-md px-2 text-center font-semibold">
                                        <label for="upload_cover" class="inline-flex items-center gap-1 cursor-pointer">
                                            Cover
                                            <svg
                                                data-slot="icon"
                                                class="w-6 h-5 text-blue-700"
                                                fill="none"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                                                ></path>
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                                                ></path>
                                            </svg>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* <h2 class="text-center mt-1 font-semibold dark:text-gray-300">Upload Profile and Cover Image</h2> */}
                            <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                                <div class="w-full  mb-4 mt-6">
                                    <label for="" class="mb-2 dark:text-white">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        class="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div class="w-full  mb-4 lg:mt-6">
                                    <label for="" class=" dark:text-white">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        class="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>

                            <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                                <div class="w-full">
                                    <h3 class="dark:text-white mb-2 ">Sex</h3>
                                    <select class="w-full text-grey border-2 rounded-lg p-4 pl-2 pr-2 dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800">
                                        <option disabled value="">
                                            Select Sex
                                        </option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div class="w-full">
                                    <h3 class="dark:text-white mb-2">Date Of Birth</h3>
                                    <input
                                        type="date"
                                        class="text-grey p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <FaArrowLeft />
        </div>
    );
}

export default AvatarSettings;
