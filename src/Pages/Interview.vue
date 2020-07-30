<template>
  <AdminLayout>
    <div class="bg-white rounded-md shadow-md mx-4 p-5 mt-5 space-y-6">
      <QuestionSet
        v-for="i in 5"
        :key="i"
      />
    </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from '../Layouts/AdminLayouts.vue'
import QuestionSet from '../components/Interview/QuestionSet.vue'
export default {
    components: { AdminLayout, QuestionSet },
    data () {
      return {
        isVisible: false
      }
    }
}
</script>