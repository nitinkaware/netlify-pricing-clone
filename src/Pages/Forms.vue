<template>
  <AdminLayout>
    <div class="mx-4 p-5 mt-5">
      <h1 class="text-2xl font-semibold text-gray-600">
        Add a new candidate
      </h1>
      <div class="bg-white rounded-md shadow-md p-4">
        <div class="text-gray-600 border-b-2 pb-2">
          <h2 class="text-gray-600 font-semibold -mb-1">
            Profile
          </h2>
          <small class="text-gray-600 font-semibold">The candidat's personal information like name, email...</small>
        </div>
        <div class="mt-4 flex items-center">
          <label class="text-gray-600 font-medium mr-3">Full Name</label>
          <input
            type="text"
            class="focus:border-blue-500 focus:outline-none focus:shadow-outline text-black font-normal text-base ml-4 my-3 py-2 px-2 bg-gray-100 rounded-md focus:text-black focus:bg-white outline-none border border-transparent focus:border focus:border-gray-200 hover:border-gray-100 hover:bg-white transition duration-200 ease-in-out"
          >
        </div>
        <div class="mt-4 flex items-center">
          <label class="text-gray-600 font-medium mr-3">Email</label>
          <input
            type="text"
            class="focus:border-blue-500 focus:outline-none focus:shadow-outline text-black font-normal text-base ml-4 my-3 py-2 px-2 bg-gray-100 rounded-md focus:text-black focus:bg-white outline-none border border-transparent focus:border focus:border-gray-200 hover:border-gray-100 hover:bg-white transition duration-200 ease-in-out"
          >
        </div>
      </div>
    </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from '../Layouts/AdminLayouts.vue'
export default {
    components: { AdminLayout }
}
</script>