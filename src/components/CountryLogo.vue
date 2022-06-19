<template>
 <img :src="'http://www.geognos.com/api/en/countries/flag/'+this.code+'.png'" height="20" alt="Avatar" loading="lazy" />
</template>

<script>
import axios from 'axios'
export default {
  name: 'CountryLogo',
  data () {
    return { code: '' }
  },
  async beforeCreate () {
    const apiCall = await axios.get('http://ip-api.com/json')
    this.code = apiCall.data.countryCode
  }
}
</script>

<style scoped>

</style>
