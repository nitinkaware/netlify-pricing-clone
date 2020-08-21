<template>
  <div class="align-middle inline-block w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200 overflow-x-auto">
    <table class="w-full">
      <thead>
        <tr>
          <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Key
          </th>
          <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Value
          </th>
          <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Platform
          </th>
          <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            IS POST LOGIN
          </th>
          <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            App Version
          </th>
          <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Enviourment
          </th>
          <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
        </tr>
      </thead>

      <tbody class="bg-white">
        <AppSettingTableRaw
          v-for="appSetting in appSettings"
          :key="appSetting.Id"
          :app-setting="appSetting"
          @on-edit-clicked="onEditingButtonClicked"
          @saved="onSaved"
        />
      </tbody>
    </table>

    <div class="bg-white px-4 py-2 text-gray-700 flex justify-between items-center">
      <div>
        Showing 1 to 10 of 20 results
      </div>
      <div class="space-x-2">
        <button class="px-4 py-2 border rounded-md">
          Previous
        </button>
        <button class="px-4 py-2 border rounded-md">
          Next
        </button>
      </div>
    </div>

    <transition name="modal">
      <EditAppSettingModal
        v-if="isEditAppSettingModalVisible"
        :app-setting="currentEditingAppSetting"
        @on-cancel-clicked="onCancelClicked"
      />
    </transition>

    <transition
      enter-active-class="transition-all duration-300 ease-in-out"
      leave-active-class="transition-all duration-300 ease-in-out"
      enter-to-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-75"
      enter-from-class="opacity-0 scale-75"
    >
      <div
        v-if="isShow"
        class="absolute bottom-5 right-5 space-y-2"
      >
        <div
          class="bg-green-300 text-gray-800 px-4 py-4 rounded-md flex space-x-2"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="check-circle w-6 h-6"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path></svg>
          <span>
            Saved
          </span>
          <span class="font-medium">
            {{ currentEditingAppSetting.Key }}
          </span>
        </div> 
      </div>
    </transition>
  </div>
</template>

<script>
import AppSettingTableRaw from './AppSettingTableRaw.vue'
import EditAppSettingModal from './Modal.vue'
export default {
  components: { AppSettingTableRaw, EditAppSettingModal },
  props: {
      appSettings: {
          type: Array,
          required: true
      }
  },
  data () {
    return {
      isShow: false,
      isEditAppSettingModalVisible: false,
      currentEditingAppSetting: {}
    }
  },
  methods: {
      onSaved (appSetting) {
        this.isShow = true
        this.currentEditingAppSetting = appSetting
        
        setTimeout(() => {
            this.isShow = false
        }, 5000);
      },
      onEditingButtonClicked (appSetting) {
        this.currentEditingAppSetting = appSetting
        this.isEditAppSettingModalVisible = true
      },
      onCancelClicked () {
        this.currentEditingAppSetting = {}
        this.isEditAppSettingModalVisible = false
      }
  }
}
</script>