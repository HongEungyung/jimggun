<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>

    <Header class="header"/>
 
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
/* main{
  text-align: center;
  padding: 20px;
} */
.header {
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  z-index: 2;
}
</style>
