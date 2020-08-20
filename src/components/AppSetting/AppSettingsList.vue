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
      isEditAppSettingModalVisible: false,
      currentEditingAppSetting: {}
    }
  },
  methods: {
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