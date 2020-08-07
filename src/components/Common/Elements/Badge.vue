<template>
  <span 
    class="mt-2 text-sm px-2 py-0.5 rounded-full font-normal border border-gray-400 cursor-pointer select-none transition ease-in-out duration-300"
    :class="customBadgeClasses"
    @click="onBadgeClicked()"
  >
    <slot name="badgeName"></slot>
  </span>
</template>

<script>
export default {
    props: {
        badge: {
            type: Object,
            required: true
        },
        isChecked: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    computed: {
        customBadgeClasses () {
            if(this.isChecked) {
                return ['text-white', 'bg-gray-500', 'hover:bg-gray-400']
            }       

            return ['text-black', 'bg-gray-100', 'hover:bg-gray-200']
        }
    },
    methods: {
        onBadgeClicked () {
            this.$emit('badgeToggled', {
                badge: this.badge,
                isChecked: !this.isChecked
            })
        }
    }
}
</script>