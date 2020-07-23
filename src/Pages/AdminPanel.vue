<template>
<div class="h-screen flex bg-gray-200 w-full antialiased">
    <aside class="w-1/5 bg-gray-800 flex flex-col">
        <div class="inline-flex justify-center items-center p-3.5 bg-gray-900">
            <svg class="w-8 h-8 text-white mr-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span class="font-semibold mr-2 text-2xl text-white">WorkStation</span>
        </div>
        <div class="px-3 py-2 mt-2 text-gray-400 font-semibold flex items-center"> <!-- Menus goes here -->
            <ul class="w-full space-y-2">
                <li class="inline-flex items-center rouned-md py-2 px-2 w-full bg-gray-900 rounded-md cursor-pointer hover:text-gray-500 hover:bg-gray-900">
                    <svg class="w-7 h-7" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                    <spam class="ml-2">
                        Dashboard
                    </spam>
                </li>
                <li class="inline-flex items-center rouned-md py-2 px-2 w-full rounded-md cursor-pointer hover:text-gray-500 hover:bg-gray-900">
                    <svg class="w-7 h-7" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    <spam class="ml-2">
                        Team
                    </spam>
                </li>
                <li class="inline-flex items-center rouned-md py-2 px-2 w-full rounded-md cursor-pointer hover:text-gray-500 hover:bg-gray-900">
                    <svg class="w-7 h-7" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                    <spam class="ml-2">
                        Project
                    </spam>
                </li>
                <li class="inline-flex items-center rouned-md py-2 px-2 w-full rounded-md cursor-pointer hover:text-gray-500 hover:bg-gray-900">
                    <svg class="w-7 h-7" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <spam class="ml-2">
                        Calender
                    </spam>
                </li>
                <li class="inline-flex items-center rouned-md py-2 px-2 w-full rounded-md cursor-pointer hover:text-gray-500 hover:bg-gray-900">
                    <svg class="w-7 h-7" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    <spam class="ml-2">
                        Report
                    </spam>
                </li>
            </ul>
        </div>
    </aside>
    <div class="w-4/5 bg-gray-100">
        <div class="bg-white border shadow-sm flex justify-between items-center">
            <div class="relative"> <!-- Seach Input Container -->
                <svg class="absolute top-7 left-6 w-5 h-5 text-gray-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <input class="text-black font-normal text-base ml-4 my-3 py-3 px-8 bg-gray-100 rounded-md focus:text-black focus:bg-white outline-none border border-transparent focus:border focus:border-gray-200 hover:border-gray-100 hover:bg-white" type="text" id="search" name="search" placeholder="Search" autocomplete="off">
            </div>
            <div class="mr-5 flex items-center justify-between space-x-2"> <!-- Profile Avatar Section -->
                <div class="rounded-full w-10 h-10 inline-flex items-center justify-center cursor-pointer hover:text-gray-500 hover:bg-gray-100">
                    <svg class="w-7 h-7 text-gray-400 hover:text-gray-700 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                </div>

                <a href="#">
                    <img class="w-9 h-w-9 rounded-full" src="https://pbs.twimg.com/profile_images/1239889016431861760/jmP-jjik_400x400.jpg" alt="Nitin Kaware">
                </a>
            </div>
        </div>
    </div>
</div>
</template>