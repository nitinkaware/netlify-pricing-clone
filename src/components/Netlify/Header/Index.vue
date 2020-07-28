<template>
  <header class="max-w-6.5xl mx-auto mt-3 font-bold text-sm bg-gray-100 rounded-lg">
    <div class="flex items-center justify-between p-5">
      <div>
        <ul class="flex items-center space-x-6">
          <component 
            :is="headerItem.componentName" 
            v-for="headerItem in headerItems" 
            :key="headerItem"
            :header-item="headerItem"
          />
        </ul>
      </div>
      <div>
        <ul class="flex items-center space-x-4">
          <li>
            <svg
              class="w-5 h-5"
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            ><circle
              cx="9.41345"
              cy="9.55395"
              r="7.58142"
              stroke="black"
              stroke-width="3"
            /> <path
              d="M12.9279 15.1235L20.332 22.5275"
              stroke="black"
              stroke-width="3"
            /></svg>
            <span class="sr-only">Search Icon</span>
          </li>
          <li>Contact sales</li>
          <li>Login</li>
          <li class="font-thin text-gray-400">
            |
          </li>
          <li class="inline-flex items-center justify-between text-green-700 space-x-1 font-bold">
            <span>Sign up</span>
            <svg
              class="h-4 w-4"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ><path d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import List from './List.vue'
import ListWithDropdown from './ListWithDropdown.vue'
import ListWithDescriptionDropdown from './ListWithDescriptionDropdown.vue'

export default {
    components: { ListWithDropdown, List, ListWithDescriptionDropdown },
    data() {
        return {
            headerItems: [
                {
                    name: 'Platform',
                    componentName: 'ListWithDescriptionDropdown',
                    informationCard: {
                      title: 'The netlify platform',
                      description: '<strong>Instantly build and deploy</strong> your sites to our global network from Git. Custom domains, https, deploy previews, rollbacks and much more.',
                      link: 'Explore how it works'
                    },
                    subMenus: [
                      {
                        title: 'Features',
                        menus: [
                          'Build & Test',
                          'Deploy & Host',
                          'Serverless Functions',
                          'Analytics',
                          'Instant Forms',
                          'Split Testing',
                          'Large Media',
                          'Identity'
                        ]
                      },
                      {
                        title: 'Technologies',
                        menus: [
                          'Jamstack',
                          'Vue.js',
                          'Gatsby',
                          'Angular',
                          'Next.js',
                          'Sitecore',
                          'Drupal',
                          'WordPress',
                        ]
                      }
                    ]
                },
                {
                    name: 'Pricing',
                    componentName: 'List',
                    subMenus: []
                },
                {
                    name: 'Enterprices',
                    componentName: 'ListWithDropdown',
                    subMenu: {
                        title: 'Netlify Enterprise',
                        menus: [
                            'High-Performance Products',
                            'Customers',
                            'Enterprise Whitepaper',
                            'Security at Netlify',
                            'Agency Partner Program',
                        ]
                    }
                },
                {
                    name: 'Jamstack',
                    componentName: 'ListWithDropdown',
                    subMenu: {
                        title: 'About the jamstack',
                        menus: [
                            'Jamstack Introduction',
                            'Jamstack Book',
                            'Jamstack Conferance',
                        ]
                    }
                },
                {
                    name: 'Docs',
                    componentName: 'List',
                    subMenus: []
                },
                {
                    name: 'Blog',
                    componentName: 'List',
                    subMenus: []
                }
            ]
        }
    }
}
</script>