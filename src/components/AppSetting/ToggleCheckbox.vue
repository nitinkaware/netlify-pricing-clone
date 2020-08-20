<template>
  <div class="relative inline-block w-8 mr-2 align-middle select-none">
    <input
      id="toggle"
      v-model="isChecked"
      type="checkbox"
      name="toggle"
      class="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer outline-none transition duration-700 ease-in-out"
      @click="$emit('toggled', !isChecked)"
    />
    <label
      for="toggle"
      class="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
    ></label>
  </div>
</template>

<script>
export default {
    props: ['value'],
    data () {
        return {
            isChecked: this.value
        }
    }
}
</script>