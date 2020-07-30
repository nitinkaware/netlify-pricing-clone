<template>
  <div class="bg-white rounded-md shadow-md">
    <div class="border-b border-gray-200">
      <!-- Applicant Information Header -->
      <div class="flex items-center justify-between">
        <div class="p-5 inline-flex items-center space-x-2">
          <img
            class="w-12 h-12 rounded-full object-cover"
            src="https://pbs.twimg.com/profile_images/1239889016431861760/jmP-jjik_400x400.jpg"
            alt="Nitin Kaware"
          >
          <div class="flex flex-col">
            <span class="font-semibold text-lg text-gray-700">
              Nitin Kaware
            </span>
            <span class="-mt-1 text-gray-500 text-sm font-medium">Senior Software Engineer</span>
          </div>
        </div>
        <div
          class="p-5 select-none cursor-pointer"
          @click="isVisible = !isVisible"
        > 
          <svg
            class="w-7 h-7 text-gray-500 hover:text-gray-400 transform duration-700"
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
        </div>
      </div>
      <div
        v-if="isVisible"
        class="p-5 bg-gray-50"
      >
        <div class="flex items-center justify-start">
          <div class="flex-1">
            <p class="text-gray-500 font-semibold text-base">
              Application for
            </p>
            <p class="text-black font-medium text-base">
              Team Lead
            </p>
          </div>
          <div class="flex-1">
            <p class="text-gray-500 font-semibold text-base">
              Salary Expectation
            </p>
            <p class="text-black font-medium text-base">
              14-17 Lacs per annum
            </p>
          </div>
        </div>
        <div class="flex items-center justify-start mt-10">
          <div class="flex-1">
            <p class="text-gray-500 font-semibold text-base">
              Telephone
            </p>
            <p class="text-black font-medium text-base">
              +91 7588543762
            </p>
          </div>
          <div class="flex-1">
            <p class="text-gray-500 font-semibold text-base">
              Email address
            </p>
            <p class="text-black font-medium text-base">
              nitin.kaware1@gmail.com
            </p>
          </div>
        </div>
        <div class="flex justify-start grid-cols-2 mt-10">
          <div class="w-1/2">
            <p class="text-gray-500 font-semibold text-base">
              Experiance
            </p>
            <p class="text-black font-medium text-base">
              5 years 3 months
            </p>
          </div>
          <div class="w-1/2">
            <p class="text-gray-500 font-semibold text-base">
              Skills
            </p>
            <div class="space-x-2 flex flex-wrap items-center">
              <span
                v-for="skill in skills"
                :key="skill"
                class="text-xs font-semibold bg-gray-300 py-0.5 px-2 rounded-full text-gray-700 mb-2 cursor-default"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-start mt-10">
          <div class="flex-1">
            <p class="text-gray-500 font-semibold text-base">
              About
            </p>
            <p class="text-black font-medium text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum id beatae excepturi quaerat rerum ex saepe delectus molestias impedit, magni doloremque tempore, inventore molestiae consequuntur voluptas. Fugiat blanditiis cumque veniam.
            </p>
          </div>
        </div>
        <div class="flex items-center justify-start mt-10">
          <div class="flex-1 space-y-2">
            <p class="text-gray-500 font-semibold text-base">
              Attachments
            </p>
            <div class="border rounded-md">
              <div class="flex items-center justify-between px-5 py-3">
                <div class="flex justify-start items-center space-x-2">
                  <span>
                    <svg
                      class="w-6 h-6 text-gray-500"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    ><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                  </span>
                  <span>
                    resume_back_end_developer.pdf
                  </span>
                </div>
                <a
                  class="text-blue-700 font-semibold cursor-pointer hover:underline"
                  href="#"
                >Download</a>
              </div>
              <span class="block border-b" />
              <div class="flex items-center justify-between px-5 py-3">
                <div class="flex justify-start items-center space-x-2">
                  <span>
                    <svg
                      class="w-6 h-6 text-gray-500"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    ><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                  </span>
                  <span>
                    cover_letter_back_end_developer.pdf
                  </span>
                </div>
                <a
                  class="text-blue-700 font-semibold cursor-pointer hover:underline"
                  href="#"
                >Download</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between border-b border-gray-200">
      <!-- Applicant Information Header -->
      <div class="p-5 inline-flex items-center space-x-2">
        <img
          class="w-12 h-12 rounded-full object-cover"
          src="https://pbs.twimg.com/profile_images/1114103982924783616/0KZgUDNl_400x400.jpg"
          alt="Deepali Patil"
        >
        <div class="flex flex-col">
          <span class="font-semibold text-lg text-gray-700">
            Deepali Patil
          </span>
          <span class="-mt-1 text-gray-500 text-sm font-medium">Software Developer</span>
        </div>
      </div>
      <div class="p-5">
        <svg
          class="w-7 h-7 text-gray-500"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        ><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            isVisible: false,
            skills: ['PHP','Laravel','JavaScript', 'VueJs','HTML', 'CSS']
        }
    },
    methods: {
        
    }
}
</script>