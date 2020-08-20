<template>
  <div class="absolute w-full h-full top-0 left-0 flex justify-center">
    <div class="modal-overlay absolute w-full h-full bg-black opacity-25 top-0 left-0"></div>
    <div class="absolute w-1/3 h-auto bg-white rounded-md shadow-lg top-16">
      <div class="m-6 space-y-4">
        <div class="flex flex-col">
          <label
            class="text-red-500 uppercase text-sm font-medium"
            for="key"
          >Key</label>
          <input
            type="text"
            class="px-2 py-1.5 border border-red-500 rounded-md outline-none focus:outline-none focus:shadow-outline text-gray-900"
            value="isBazaarvoiceEnabled"
          >
          <span class="text-sm text-red-500">The given key is not a valid key</span>
        </div>
        <div class="flex flex-col">
          <label
            class="text-gray-500 uppercase text-sm font-medium"
            for="key"
          >Value</label>
          <input
            type="text"
            class="px-2 py-1.5 border rounded-md outline-none focus:outline-none focus:shadow-outline text-gray-900"
            value="1"
          >
        </div>
        <div class="flex flex-col relative">
          <label
            class="text-gray-500 uppercase text-sm font-medium"
            for="key"
          >Platform</label>
          <select
            class="px-2 py-1.5 border rounded-md appearance-none outline-none focus:outline-none focus:shadow-outline text-gray-900"
          >
            <option
              value="1"
              selected
            >
              Desktop
            </option>
            <option
              value="2"
            >
              Mobile
            </option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 py-10 text-gray-700">
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            ><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
          </div>
        </div>
        <div class="flex flex-col">
          <label
            class="text-gray-500 uppercase text-sm font-medium"
            for="key"
          >Is Post Login?</label>
          <input
            type="text"
            class="px-2 py-1.5 border rounded-md outline-none focus:outline-none focus:shadow-outline text-gray-900"
            value="1"
          >
        </div>
        <div class="flex flex-col">
          <label
            class="text-gray-500 uppercase text-sm font-medium"
            for="key"
          >App Version?</label>
          <input
            type="text"
            class="px-2 py-1.5 border rounded-md outline-none focus:outline-none focus:shadow-outline text-gray-900"
            value="1.1.31"
          >
        </div>
        <div class="flex flex-col">
          <label
            class="text-gray-500 uppercase text-sm font-medium"
            for="key"
          >Enviourment</label>
          <input
            type="text"
            class="px-2 py-1.5 border rounded-md outline-none focus:outline-none focus:shadow-outline text-gray-900"
            value="live"
          >
        </div>
        <div class="flex justify-end items-center space-x-6">
          <button
            class="font-medium text-gray-800 hover:text-gray-600 outline-none focus:outline-none"
            @click="$emit('on-cancel-clicked')"
          >
            Cancel
          </button>
          <button class="px-4 py-1.5 bg-blue-500 text-white rounded-md outline-none focus:outline-none focus:shadow-outline hover:bg-blue-600">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
      appSetting: {
        type: Object,
        required: true
      }
    },
    created () {
      window.addEventListener('keyup', this.onCancelClicked);
    },
    unmounted () {
      window.removeEventListener('keyup', this.onCancelClicked);
    },
    methods: {
      onCancelClicked (event) {
        if (event.keyCode === 27) {
          this.$emit('on-cancel-clicked')
        }
      }
    }
}
</script>