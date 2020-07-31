<template>
  <span 
    class="mt-2 text-sm px-2 py-0.5 rounded-full font-normal border border-gray-400 cursor-pointer select-none transition ease-in-out duration-300"
    :class="customBadgeClasses"
    @click="onBadgeClicked()"
  >
    {{ skill.name }}
  </span>
</template>

<script>
export default {
    props: {
        skill: {
            type: Object,
            required: true
        }
    },
    computed: {
        customBadgeClasses () {
            if(this.skill.isChecked) {
                return ['text-white', 'bg-gray-500', 'hover:bg-gray-400']
            }       

            return ['text-black', 'bg-gray-100', 'hover:bg-gray-200']
        }
    },
    methods: {
        onBadgeClicked () {
            this.$emit('badgeToggled', this.skill)
        }
    }
}
</script>