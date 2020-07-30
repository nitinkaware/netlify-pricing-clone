<template>
  <AdminLayout>
    <div class="bg-white rounded-md shadow-md mx-4 p-5 mt-5">
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
    <div class="bg-gray-500 rounded-md shadow-md m-4 p-5">
      <div class="shadow-2xl bg-white rounded-md max-w-lg overflow-hidden p-6">
        <div class="flex flex-col justify-center items-center space-y-2">
          <span class="w-10 h-10 bg-green-100 flex items-center justify-center rounded-full mb-3">
            <svg
              class="w-6 h-6 text-green-700"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ><path d="M5 13l4 4L19 7"></path></svg>
          </span>
          <span class="font-semibold text-lg">Payment Successfull</span>
          <span class="text-sm text-gray-500 font-medium text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus voluptates nam alias necessitatibus repellat! Itaque quod omnis quaerat distinctio, doloremque sunt odit facere inventore dolores autem obcaecati molestias minus et?</span>
        </div>
        <div class="flex items-center justify-center mt-6 space-x-2">
          <button class="px-20 py-1.5 rounded-md border border-gray-300 text-gray-900 hover:bg-gray-50 focus:outline-none">
            Cancel
          </button>
          <button class="px-20 py-1.5 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 focus:outline-none">
            Deactivate
          </button>
        </div>
      </div>
    </div>
    <div class="bg-gray-500 rounded-md shadow-md m-4 p-5">
      <div class="shadow-2xl bg-white rounded-md max-w-lg overflow-hidden">
        <div class="p-4 flex space-x-4">
          <div class="bg-red-100 w-10 h-10 rounded-full inline-flex flex-shrink-0 items-center justify-center mx-auto">
            <svg
              class="w-6 h-6 text-red-500"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
          </div>
          <div>
            <h1 class="font-medium">
              Deactivate Account
            </h1>
            <p class="font-medium text-sm text-gray-500">
              Are you sure you want to deactivate your account? All of your data will be permanantly removed. This action can not be undone?
            </p>
          </div>
        </div>
        <div class="bg-gray-50 flex items-center justify-end space-x-4 px-6 py-2">
          <button class="font-normal px-4 py-1.5 bg-white rounded-md border border-gray-200 text-gray-900 focus:outline-none hover:bg-gray-50">
            Cancel
          </button>
          <button class="font-medium px-4 py-1.5 rounded-md bg-red-600 text-white hover:bg-red-500 focus:outline-none">
            Deactivate
          </button>
        </div>
      </div> 
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