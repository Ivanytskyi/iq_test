<template>
  <nav
    class="header"
  >
    <div class="header-wrap">
      <div
        class="burger-btn-wrap"
        @click="$store.commit('toggleSidebar', !$store.getters.toggleSidebar)"
      >
        <svg
          width="24"
          height="16"
          viewBox="0 0 24 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 16H24V13.3333H0V16ZM0 9.33333H24V6.66667H0V9.33333ZM0 0V2.66667H24V0H0Z"
            fill="#696969"
          />
        </svg>
      </div>
      <div
        v-if="isTestRoute"
        class="test-header"
      >
        <div class="test-header-img" />
        <div v-if="$route.name === 'Test'">
          <p class="text-yellow">
            тест на определение IQ
          </p>
        </div>
      </div>
    </div>
    <div />
  </nav>
</template>

<script>
export default {
  computed: {
    isTestRoute() {
      return this.$route.name === 'Test'
    }
  }
}
</script>

<style>
.header {
  background: #181818;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1;
  height: 46px;
  width: 100%;
}

.header-wrap {
  display: flex;
  flex-direction: row;
}

.burger-btn-wrap {
  text-align: start;
  padding-top: 17px;
  margin-left: 15px;
}

.test-header {
  display: flex;
  flex-direction: row;
  text-transform: uppercase;
  font-family: 'Yeseva One';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-left: 10px;
}

.test-header-img {
  background-image: url("/src/assets/images/image_3.png");
  background-size: cover;
  height: 46px;
  width: 46px;
  margin-right: 5px;
}
</style>