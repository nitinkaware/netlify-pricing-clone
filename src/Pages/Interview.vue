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
              :skill="skill"
              :name="skill.name"
              @badgeToggled="onBadgeToggled"
            />
            <span class="mt-2 text-sm  uppercase tracking-wide underline font-medium cursor-pointer">+10 More</span>
          </div>
        </div> 
      </div>
      <div class="bg-white rounded-md shadow-md p-5 w-2/3 space-y-6">
        <QuestionSet
          v-for="i in 5"
          :key="i"
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
        ]
      }
    },
    methods: {
      onBadgeToggled (payload) {
        let skill = this.skills.find(skill => skill.id === payload.id)
        
        if(skill) {
          skill.isChecked = !payload.isChecked
        }
      }
    }
}
</script>