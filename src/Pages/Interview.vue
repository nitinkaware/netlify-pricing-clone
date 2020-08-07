<template>
  <AdminLayout>
    <div class="flex m-4 space-x-4">
      <div class="bg-white rounded-md shadow-md p-5 w-1/3">
        <div
          class="flex flex-col items-center justify-center space-y-4"
        >
          <img
            class="w-32 h-w-32 rounded-full object-cover shadow-inner"
            src="https://pbs.twimg.com/profile_images/1239889016431861760/jmP-jjik_400x400.jpg"
            alt="Nitin Kaware"
          >
          <div class="flex flex-col items-center justify-center space-y-1">
            <span class="text-gray-900 font-medium text-xl">Nitin Kaware</span>
            <span class="text-gray-500 font-medium text-sm">5 Years 2 months experiance</span>
            <span class="text-blue-500 font-normal text-sm inline-flex items-center">
              <svg
                class="w-4 h-4 mr-1"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              ><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              CeX Entertainment Limited
            </span>
          </div>
          <div class="flex flex-wrap items-center justify-center space-x-2">
            <Badge
              v-for="skill in skills"
              :key="skill.id"
              :badge="skill"
              :is-checked="skill.isChecked || false"
              @badgeToggled="onBadgeToggled"
            >
              <template v-slot:badgeName>
                {{ skill.name }}
              </template>
            </Badge>
            <span class="mt-2 text-sm  uppercase tracking-wide underline font-medium cursor-pointer">+10 More</span>
          </div>
        </div> 
      </div>
      <div class="bg-white rounded-md shadow-md p-5 w-2/3 space-y-6">
        <QuestionSet
          v-for="question in filteredQuestions"
          :key="question.id"
          :question="question"
        />
      </div>
    </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from '../Layouts/AdminLayouts.vue'
import QuestionSet from '../components/Interview/QuestionSet.vue'
import Badge from '../components/Common/Elements/Badge.vue'
export default {
    components: { AdminLayout, QuestionSet, Badge },
    data () {
      return {
        isVisible: false,
        skills: [
          {
            id: 1,
            name: 'PHP',
            isChecked: false,
          },
          {
            id: 2,
            name:'Laravel',
            isChecked: false,
          },
          {
              id: 3,
              name:'JavaScript',
              isChecked: false,
          },
          {
              id: 4,
              name:'HTML',
              isChecked: false,
          },
          {
              id: 5,
              name:'VueJs',
              isChecked: false,
          },
          {
              id: 6,
              name:'TailwindCSS',
              isChecked: false,
          },
          {
              id: 7,
              name:'CSS',
              isChecked: false,
          },
          {
              id: 8,
              name:'jQuery',
              isChecked: false,
          }
        ],
        questions: [
          {
            id:1,
            question: 'What is the difference between let and var?',
            answer: 'Let is a mathematical statement that was adopted by early programming languages like Scheme and Basic. It has been borrowed from dozens of other languages that use let already as a traditional keyword as close to var as possible.',
            topics: [
              {id:1, name: 'Scope Level'},
              {id:2, name: 'function scope'},
              {id:3, name: 'Hoisted'},
              {id:4, name: 'ES6'},
              {id:5, name: 'Modern JavaScript'},
              {id:6, name: 'Scope Level'},
              {id:7, name: 'function scope'},
              {id:8, name: 'Hoisted'},
              {id:9, name: 'ES6'},
              {id:10, name: 'Modern JavaScript'},
            ],
            candidate_answer: null,
            skills: [3]
          },
          {
            id:1,
            question: 'What is a promise?',
            answer: 'A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it’s not resolved(for example, network error). It will be in one of the 3 possible states: fulfilled, rejected, or pending.',
            topics: [
              {id:1, name: 'Resolve'},
              {id:2, name: 'Reject'},
              {id:3, name: 'Async Await'},
              {id:4, name: 'Catch'},
              {id:5, name: 'then'}
            ],
            candidate_answer: null,
            skills: [3]
          },
          {
            id:1,
            question: 'What is a callback hell?',
            answer: 'Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic. The callback hell looks like below,',
            topics: [
              {id:1, name: 'Call back function'},
              {id:2, name: 'Nested Callbacks'},
              {id:3, name: 'Multiple functions'},
            ],
            candidate_answer: null,
            skills: [3]
          },
          {
            id:1,
            question: 'What is the latest version of PHP',
            answer: 'The current version of php is 7.4',
            topics: [
              {id:1, name: '7.4'},
            ],
            candidate_answer: null,
            skills: [1]
          },
        ]
      }
    },
    computed: {
      filteredQuestions () {
        if(! this.skills.some(skill => !!skill.isChecked)) {
          return this.questions  
        }

        return this.questions.filter((question) => {
          return question.skills.filter(
            skillId => this.selectedSkills.map(skill => skill.id).includes(skillId)
          ).length > 0
        })
      },
      selectedSkills () {
        return this.skills.filter(skill => !!skill.isChecked)
      }
    },
    methods: {
      onBadgeToggled ({ badge, isChecked }) {
        let skill = this.skills.find(skill => skill.id === badge.id)
        
        if(skill) {
          skill.isChecked = isChecked
        }
      }
    }
}
</script>