<template>
<li 
    class="inline-flex items-center relative"
    @mouseover="handleDropdown(true)"
    @mouseleave="handleDropdown(false)"
>
    <span class="cursor-pointer" v-text="headerItem.name" />
    <svg
    class="w-3 h-3 fill-current text-gray-400 font-normal"
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    ><path fill-rule="evenodd" clip-rule="evenodd" d="M5.81812 6.06056L3.06066 3.30311L0.93934 5.42443L5.81812 10.3032L10.6969 5.42443L8.57557 3.30311L5.81812 6.06056Z" /></svg>
    <transition name="fade">
        <div class="absolute origin-top-right w-72 h-58 shadow-3xl top-6 rounded-md bg-white" v-if="isVisible">
            <h1 class="px-10 mt-5 uppercase font-semibold text-base tracking-wide text-green-netlify-400 cursor-pointer hover:text-green-netlify-500" v-text="headerItem.subMenu.title" />
            <ul class="mt-6 mb-10">
                <li class="px-10 py-2 font-bold text-base cursor-pointer hover:bg-gray-100" v-for="menu in headerItem.subMenu.menus" :key="menu" v-text="menu" />
            </ul>
        </div>
    </transition>
</li>
</template>

<script>
export default {
    props: {
        headerItem: {
            type: Object,
            required: true    
        }
    },
    data() {
        return {
            isVisible: false,
            setTimeout: null
        }
    },
    methods: {
        handleDropdown (isVisible) {
            if (this.setTimeout) {
                clearTimeout(this.setTimeout)
            }

            if (isVisible) {
                this.isVisible = isVisible
            }

            this.setTimeout = setTimeout(() => {
                this.isVisible = isVisible
            }, 100)
        }
    }
}
</script>