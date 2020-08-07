<template>
  <div
    class="px-4 py-2 rounded-md"
    :class="{
      'bg-gray-50 hover:bg-gray-200 transition ease-in-out duration-300': !isVisible,
      'border border-gray-00 border-dashed': isVisible,
    }"
  >
    <div
      class="flex justify-between items-center cursor-pointer"
      @click="isVisible = !isVisible"
    >
      <h1
        class="font-medium text-gray-800"
        v-text="question.question"
      />
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
    <transition name="dropdown">
      <div
        v-if="isVisible"
        class="mt-5"
      >
        <span
          class="text-gray-500"
          v-text="question.answer"
        />

        <p class="text-gray-500 uppercase tracking-normal text-sm font-semibold mt-5">
          Topic Mentioned
        </p>    

        <div class="space-x-2 mt-1 space-y-2 select-none">
          <Badge 
            v-for="(topic, index) in question.topics"
            :key="index"
            :badge="topic"
            :is-checked="topic.isChecked || false"
            class="inline-flex items-center justify-center"
            @badgeToggled="onBadgeToggled"
          >
            <template v-slot:badgeName>
              {{ topic.name }}
            </template>
          </Badge>
        </div>
        <div class="mt-4 flex items-center justify-start space-x-1">
          <span
            class="w-28 text-gray-500 uppercase tracking-normal text-sm font-semibold underline cursor-pointer select-none"
            @click="isAddAnswer = !isAddAnswer"
          >
            {{ isAddAnswer ? 'Hide answer' : 'Add Answer' }}
          </span>
          
          <div
            v-if="isSaving"
            class="inline-flex items-center space-x-1"
          >
            <span class="text-sm font-medium text-gray-400">
              <svg
                class="w-4 h-4 animate-spin"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              ><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
            </span>
          
            <span class="text-sm font-medium text-gray-400">
              Saving...
            </span>
          </div>
          
          <div
            v-if="isSaved"
            class="inline-flex items-center space-x-1"
          >
            <span class="text-sm font-medium text-gray-400">
              <svg
                class="w-4 h-4"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              ><path d="M5 13l4 4L19 7"></path></svg>
            </span>
          
            <span class="text-sm font-medium text-gray-400">
              Saved
            </span>
          </div>
        </div>
        
        <textarea
          v-show="isAddAnswer"
          v-model="answer"
          class="focus:border-blue-500 focus:outline-none focus:shadow-outline text-black font-normal text-base my-3 py-2 px-2 bg-gray-100 rounded-md focus:text-black focus:bg-white outline-none border border-transparent focus:border focus:border-gray-200 hover:border-gray-100 hover:bg-white transition duration-200 ease-in-out w-full"
        ></textarea>
      </div>
    </transition>
  </div>
</template>

<script>
import Badge from '../Common/Elements/Badge.vue'

export default {
  components: { Badge },
    props: {
      question: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        isVisible: false,
        isAddAnswer: false,
        isSaving: false,
        isSaved: false,
        answer: null,
        setTimeout: null
      }
    },
    watch: {
      isSaved(newValue) {
        if(newValue) {
          setTimeout(() => {
            this.isSaved = false
          }, 3000)
        }
      },
      isSaving (newValue) {
        if(newValue) {
          setTimeout(() => {
            this.isSaving = false
            this.isSaved = true
          }, 2000)
        }
      },
      answer() {
        this.isSaved = false
        
        if (this.setTimeout) {
          clearTimeout(this.setTimeout)
        }

        this.setTimeout = setTimeout(() => {
          this.isSaving = true
        }, 2000);
      }
    },
    methods: {
      onBadgeToggled ({ badge, isChecked }) {
        let topic = this.question.topics.find(topic => topic.id === badge.id)
        
        if(topic) {
          topic.isChecked = isChecked
        }
      }
    }
}
</script>