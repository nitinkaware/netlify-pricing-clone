<template>
  <div class="min-h-screen flex bg-gray-200 w-full antialiased font-nunito">
    <link
      rel="stylesheet"
      href="https://rsms.me/inter/inter.css"
    >
    <aside class="w-1/5 bg-gray-800 flex flex-col">
      <div class="inline-flex justify-center items-center p-3.5 bg-gray-900">
        <svg
          class="w-8 h-8 text-white mr-2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        ><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span class="font-semibold mr-2 text-2xl text-white">WorkStation</span>
      </div>
      <div class="px-3 py-2 mt-2 text-gray-400 font-semibold flex items-center">
        <!-- Menus goes here -->
        <ul class="w-full space-y-2">
          <li class="inline-flex items-center rouned-md py-2 px-2 w-full bg-gray-900 rounded-md cursor-pointer hover:text-gray-500 hover:bg-gray-900">
            <svg
              class="w-7 h-7 text-gray-200"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            <span class="ml-2 text-gray-200">
              Dashboard
            </span>
          </li>
          <li class="inline-flex items-center rouned-md py-2 px-2 w-full rounded-md cursor-pointer hover:text-gray-300 hover:bg-gray-900">
            <svg
              class="w-7 h-7"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span class="ml-2">
              Team
            </span>
          </li>
          <li class="inline-flex items-center rouned-md py-2 px-2 w-full rounded-md cursor-pointer hover:text-gray-300 hover:bg-gray-900">
            <svg
              class="w-7 h-7"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
            <span class="ml-2">
              Project
            </span>
          </li>
          <li class="inline-flex items-center rouned-md py-2 px-2 w-full rounded-md cursor-pointer hover:text-gray-300 hover:bg-gray-900">
            <svg
              class="w-7 h-7"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <span class="ml-2">
              Calender
            </span>
          </li>
          <li class="inline-flex items-center rouned-md py-2 px-2 w-full rounded-md cursor-pointer hover:text-gray-300 hover:bg-gray-900">
            <svg
              class="w-7 h-7"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ><path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            <span class="ml-2">
              Report
            </span>
          </li>
        </ul>
      </div>
    </aside>
    <div class="w-4/5 bg-gray-100 relative">
      <slot></slot>
    </div>
  </div>
</template>