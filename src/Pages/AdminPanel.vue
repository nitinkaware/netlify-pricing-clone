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
    <div class="w-4/5 bg-gray-100">
      <div class="bg-white border shadow-sm flex justify-between items-center">
        <div class="relative blue-svg">
          <!-- Seach Input Container -->
          <svg
            class="absolute top-6 left-6 w-5 h-5 text-gray-400 hover:text-blue-300"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          ><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <input
            id="search"
            class="focus:border-blue-500 focus:outline-none focus:shadow-outline text-black font-normal text-base ml-4 my-3 py-2 px-8 bg-gray-100 rounded-md focus:text-black focus:bg-white outline-none border border-transparent focus:border focus:border-gray-200 hover:border-gray-100 hover:bg-white transition duration-200 ease-in-out"
            type="text"
            name="search"
            placeholder="Search"
            autocomplete="off"
          >
        </div>
            
        <div class="mr-5 flex items-center justify-between space-x-2">
          <!-- Profile Avatar Section -->
          <div 
            class="relative rounded-full w-10 h-10 text-gray-400 hover:text-blue-500 cursor-pointer inline-flex items-center justify-center hover:bg-blue-50 transition duration-200 ease-in-out"
            @mouseover="isVisible = true"
            @mouseleave="isVisible = false"
          >
            <svg
              class="w-7 h-7"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <transition name="fade">
              <div
                v-if="isVisible"
                class="absolute bg-white right-0 top-12 rounded-md shadow-3xl w-80 cursor-default"
              >
                <div class="py-3 border-b font-medium uppercase text-gray-400 tracking-wide">
                  <div class="mx-4 flex items-center justify-between">
                    <span>Notifications</span>
                    <span class="text-xs bg-blue-200 text-blue-500 px-2 rounded-full">3 new</span>
                  </div>
                </div>
                <div class="text-gray-400">
                  <div class="flex flex-col mb-10 items-center justify-center">
                    <svg
                      class="w-20 h-20 my-5"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    ><path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
                    <span class="font-semibold text-base">
                      You do not have any Notifications!
                    </span>
                  </div>
                  <ul
                    v-if="false"
                    class="mt-6 mb-10"
                  >
                    <li class="px-10 py-2 font-bold text-base cursor-pointer hover:bg-gray-100">
                      A new order has been placed!
                    </li>
                  </ul>
                </div>
              </div>
            </transition>
          </div>

          <a
            href="#"
            class="border-2 border-gray-200 hover:border-gray-400 rounded-full"
          >
            <img
              class="w-9 h-w-9 object-cover rounded-full"
              src="https://pbs.twimg.com/profile_images/1239889016431861760/jmP-jjik_400x400.jpg"
              alt="Nitin Kaware"
            >
          </a>
        </div>
      </div>
      <div class="mx-4 my-4">
        <CandidateInformation />
      </div>
      <div class="bg-white rounded-md shadow-md mx-4 p-5">
        <div class="max-w-4xl bg-orange-100 p-4 rounded flex space-x-2">
          <div class="w-7 h-7 bg-orange-50 rounded-full inline-flex items-center justify-center">
            <svg
              class="w-5 h-5 text-orange-400"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
          </div>
          <div>
            <h1 class="text-orange-800 font-semibold text-sm">
              Attention Required
            </h1>
            <p class="text-orange-800 font-normal text-sm">
              Your account will be de-activated if you do not verify your email address.
            </p>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-md shadow-md m-4 p-5">
        <div class="max-w-4xl bg-red-100 p-4 rounded flex items-start space-x-2">
          <svg
            class="w-6 h-6 text-red-400"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          ><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <div class="flex flex-col w-full items-start justify-center space-y-2">
            <h1 class="text-red-800 font-semibold text-sm">
              There were 2 errors with your submission.
            </h1>
            <ul class="list-disc list-inside text-red-800 font-normal text-sm">
              <li>Your password must be at least 8 characters</li>
              <li>This email address is alreadu associated with anather account.</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-md shadow-md m-4 p-5">
        <div class="bg-red-400">
          <div class="p-4">
            Top Side
          </div>
          <div>Bottom Side</div>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
import CandidateInformation from '../components/AdminPanel/CandidateInformation.vue'
export default {
    components: { CandidateInformation },
    data () {
        return {
            isVisible: false
        }
    }
}
</script>