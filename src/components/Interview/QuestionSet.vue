<template>
  <div
    class="px-4 py-2 rounded-md max-w-3xl"
    :class="{
      'bg-gray-50 hover:bg-gray-200 transition ease-in-out duration-300': !isVisible,
      'border border-gray-00 border-dashed': isVisible,
    }"
  >
    <div
      class="flex justify-between items-center cursor-pointer"
      @click="isVisible = !isVisible"
    >
      <h1 class="font-medium text-gray-800">
        What is the difference between let and var?
      </h1>
      <span>
        <svg
          class="w-7 h-7 text-gray-500 hover:text-gray-400 transform duration-700 ml-6"
          :class="{ 'rotate-180' : isVisible}"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            v-if="!isVisible"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          <path
            v-if="isVisible"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </div>
    <div
      v-if="isVisible"
      class="mt-5"
    >
      <span class="text-gray-500">
        Let is a mathematical statement that was adopted by early programming languages like Scheme and Basic. It has been borrowed from dozens of other languages that use let already as a traditional keyword as close to var as possible.
      </span>

      <p class="text-gray-500 uppercase tracking-normal text-sm font-semibold mt-5">
        Topic Mentioned
      </p>    
      <div class="space-x-2 mt-1 space-y-2">
        <span class="inline-flex items-center justify-between text-sm font-medium text-gray-700 border border-gray-300 px-3 py-0.5 rounded-full">Scope Level</span>
        <span class="inline-flex items-center justify-between text-sm font-medium text-gray-600 bg-gray-300 px-3 py-0.5 rounded-full">function scope</span>
        <span class="inline-flex items-center justify-between text-sm font-medium text-gray-700 border border-gray-300 px-3 py-0.5 rounded-full">Hoisted</span>
        <span class="inline-flex items-center justify-between text-sm font-medium text-gray-600 bg-gray-300 px-3 py-0.5 rounded-full">ES6</span>
        <span class="inline-flex items-center justify-between text-sm font-medium text-gray-700 border border-gray-300 px-3 py-0.5 rounded-full">Modern JavaScript</span>
        <span class="inline-flex items-center justify-between text-sm font-medium text-gray-700 border border-gray-300 px-3 py-0.5 rounded-full">Scope Level</span>
        <span class="inline-flex items-center justify-between text-sm font-medium text-gray-700 border border-gray-300 px-3 py-0.5 rounded-full">function scope</span>
        <span class="inline-flex items-center justify-between text-sm font-medium text-gray-700 border border-gray-300 px-3 py-0.5 rounded-full">Hoisted</span>
        <span class="inline-flex items-center justify-between text-sm font-medium text-gray-700 border border-gray-300 px-3 py-0.5 rounded-full">ES6</span>
        <span class="inline-flex items-center justify-between text-sm font-medium text-gray-600 bg-gray-300 px-3 py-0.5 rounded-full">Modern JavaScript</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
      return {
        isVisible: false
      }
    }
}
</script>