<template>
  <li class="inline-flex items-center cursor-pointer">
    <span v-text="headerItem.name" />
    <svg
      v-if="headerItem.subMenus.length"
      class="w-3 h-3 fill-current text-gray-400 font-normal"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    ><path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.81812 6.06056L3.06066 3.30311L0.93934 5.42443L5.81812 10.3032L10.6969 5.42443L8.57557 3.30311L5.81812 6.06056Z"
    /></svg>
  </li>
</template>

<script>
export default {
    props: {
        headerItem: {
            type: Object,
            required: true    
        }
    }
}
</script>