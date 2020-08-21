<template>
  <AdminLayout>
    <section class="m-4">
      <div class="flex justify-between items-center mb-2">
        <h1 class="text-xl font-medium">
          App Settings
        </h1>
        <input
          class="px-2 py-1.5 rounded-md placeholder-gray-400"
          type="text"
          placeholder="Search..."
        >
      </div>

      <AppSettingsList :app-settings="appSettings" />
    </section>
  </AdminLayout>
</template>

<script>
import AdminLayout from '../Layouts/AdminLayouts.vue'
import AppSettingsList from '.././components/AppSetting/AppSettingsList.vue'
export default {
    components: { AdminLayout, AppSettingsList },
    data () {
      return {
        isModalVisible: false,
        appSettings: [
          {
            Id: 1,
            Key: 'isBazaarvoiceEnabled',
            Value: true,
            PlatformId: 18,
            IsPostLoginSetting: 0,
            AppVersion: '1.2.2',
            AppEnviourment: null
          },
          {
            Id: 1,
            Key: 'bazaarvoiceJsUrl',
            Value: 'https://display-stg.ugc.bazaarvoice.com/static/webuy/en_IE/bvapi.js	',
            PlatformId: 18,
            IsPostLoginSetting: 0,
            AppVersion: '1.2.2',
            AppEnviourment: null
          },
          {
            Id: 1,
            Key: 'googleAnalyticsTrackingCode',
            Value: 'UA-35304645-14	',
            PlatformId: 18,
            IsPostLoginSetting: 0,
            AppVersion: '1.2.2',
            AppEnviourment: null
          },
          {
            Id: 1,
            Key: 'oauthBaseUrl',
            Value: 'dev-oauth2.cex.uk.webuy.ws	',
            PlatformId: 0,
            IsPostLoginSetting: 0,
            AppVersion: '1.2.2',
            AppEnviourment: 'live'
          },
          {
            Id: 1,
            Key: 'isStockAlertEnabled',
            Value: true,
            PlatformId: 18,
            IsPostLoginSetting: 0,
            AppVersion: '1.2.2',
            AppEnviourment: null
          },
        ]
      }
    },
}
</script>