<template>
<li class="inline-flex items-center cursor-pointer relative"
    @mouseover="handleDropdown(true)"
    @mouseleave="handleDropdown(false)" >
    <span v-text="headerItem.name" />
    <svg class="w-3 h-3 fill-current text-gray-400 font-normal"
        viewBox="0 0 11 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
    ><path fill-rule="evenodd" clip-rule="evenodd" d="M5.81812 6.06056L3.06066 3.30311L0.93934 5.42443L5.81812 10.3032L10.6969 5.42443L8.57557 3.30311L5.81812 6.06056Z" /></svg>
    <div class="absolute flex origin-top-right h-112 w-260 shadow-3xl top-6 rounded-md bg-white overflow-hidden antialiased" v-if="isVisible">
        <div class="w-3/5 pt-10 px-10 hover:bg-gray-100">
            <p class="uppercase font-semibold text-base tracking-wide text-matisse-blue-500 cursor-pointer" v-text="headerItem.informationCard.title" />
            <p class="text-black font-medium text-base mt-5" v-html="headerItem.informationCard.description" />
            <p class="flex items-center space-x-1 text-black font-semibold underline text-base mt-5">
                <span v-text="headerItem.informationCard.link" />
                <svg class="w-4 h-4"
                    fill="none" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
            </p>
        </div>
        <div class="pt-10 pl-10 pr-5 border-l border-gray-100" v-for="(subMenu, index) in headerItem.subMenus" :key="index">
            <h1 class="uppercase font-bold text-base tracking-wide text-green-netlify-400 cursor-pointer hover:text-green-netlify-500" v-text="subMenu.title" />
            <ul class="mt-2 mb-10">
                <li class="py-2 font-bold text-base cursor-pointer hover:underline" v-for="menu in subMenu.menus" :key="menu" v-text="menu" />
            </ul>
        </div>
    </div>
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