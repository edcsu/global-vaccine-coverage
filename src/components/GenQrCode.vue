<template>
  <div class="bar-code white mx-auto pa-3" elevation="0" >
    <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
  </div>
</template>
<script>
import QrcodeVue from 'qrcode.vue'
import { appUrl } from '@/Helpers/apiHelpers'
export default {
  name: 'GenQrCode',
  data () {
    return {
      value: appUrl,
      size: 80
    }
  },
  components: {
    QrcodeVue
  }
}
</script>
