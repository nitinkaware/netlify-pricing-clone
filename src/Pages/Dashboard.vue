<template>
  <AdminLayout>
    <div class="mx-4 my-4">
      <CandidateInformation />
    </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from '../Layouts/AdminLayouts.vue'
import CandidateInformation from '../components/AdminPanel/CandidateInformation.vue'
export default {
    components: { CandidateInformation, AdminLayout },
    data () {
        return {
            isVisible: false
        }
    }
}
</script>