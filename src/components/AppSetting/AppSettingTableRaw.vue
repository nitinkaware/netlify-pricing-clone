<template>
  <tr>
    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
      <div class="flex items-center">
        <div class="text-sm leading-5 text-gray-900">
          {{ appSetting.Key }}
        </div>
      </div>
    </td>

    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
      <div class="text-sm leading-5 text-gray-900">
        <div v-if="![0,1, '0', '1', true, false].includes(appSetting.Value)">
          <span>{{ appSetting.Value }}</span>
        </div>

        <ToggleCheckbox
          v-else
          :value="appSetting.Value"
          @toggled="onToggled"
        />
      </div>
    </td>

    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
      <div class="text-sm leading-5 text-gray-900">
        {{ appSetting.PlatformId }}
      </div>
    </td>

    <td
      class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"
    >
      {{ appSetting.IsPostLoginSetting }}
    </td>
              
    <td
      class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"
    >
      {{ appSetting.AppVersion }}
    </td>
              
    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
      {{ appSetting.AppEnviourment }}
    </td>

    <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium space-x-2">
      <a
        href="#"
        class="text-indigo-600 hover:text-indigo-900"
        @click="$emit('on-edit-clicked', appSetting)"
      >Edit</a>
      <a
        href="#"
        class="text-indigo-600 hover:text-indigo-900"
      >Delete</a>
    </td>
  </tr>
</template>

<script>

import ToggleCheckbox from './ToggleCheckbox.vue'

export default {
    components: { ToggleCheckbox },
    props: {
        appSetting: {
            type: Object,
            required: true
        }
    },
    data () {
        return {

        }
    },
    methods: {
      onToggled (isChecked) {
        this.appSetting.Value = isChecked
        this.$emit('saved', this.appSetting)
      }
    }
}
</script>