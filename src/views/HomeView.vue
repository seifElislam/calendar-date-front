<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <calendar-page-vue/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import CalendarPageVue from '@/components/CalendarPage.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
    CalendarPageVue
  }
}
</script>
