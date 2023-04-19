<template>
  <Header />
  <Sidebar />
  <Home />
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import Home from '@/views/Home'
export default {
  components: { Home, Header, Sidebar }
}
</script>
<style>
#app, body, html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  margin: 0;
}

a {
  font-weight: bold;
  color: #FFFFFF;
  text-decoration: none;
}

</style>