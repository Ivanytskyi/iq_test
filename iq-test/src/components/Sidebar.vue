<template>
  <div
    class="sidebar-wrap"
    :class="{'active': $store.getters.toggleSidebar}"
  >
    <div class="row">
      <div class="close-sidebar-btn">
        <svg 
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="$store.commit('toggleSidebar', !$store.getters.toggleSidebar)"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28 2.82L25.18 0L14 11.18L2.82 0L0 2.82L11.18 14L0 25.18L2.82 28L14 16.82L25.18 28L28 25.18L16.82 14L28 2.82Z"
            fill="#FFC700"
          />
        </svg>
      </div>

      <div class="link-wrap">
        <router-link
          to="/home"
          class="sidebar-link"
          @click="$store.commit('toggleSidebar', !$store.getters.toggleSidebar)"
        >
          Главная
        </router-link>
        <router-link
          to="/info"
          class="sidebar-link"
          @click="$store.commit('toggleSidebar', !$store.getters.toggleSidebar)"
        >
          Информация о тесте
        </router-link>
        <router-link
          to="/test"
          class="sidebar-link"
          @click="$store.commit('toggleSidebar', !$store.getters.toggleSidebar)"
        >
          пройти тест
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
  .sidebar-wrap {
    width: 100%;
    height: 100%;
    background: #181818;
  }

  .link-wrap {
    text-align: start;
    margin: 64px 0 0 23px;
  }

  .sidebar-link {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    text-transform: uppercase;
    margin-bottom: 27px;
    display: block;
    text-decoration: none;
  }

  a.router-link-active {
    color: #F4CE0C;
  }


  .sidebar-wrap {
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    list-style: none;
    margin: 0;
    box-sizing: border-box;
    left: -100%;
    transition: left 100ms;
    box-shadow: 2px 25px 24px rgba(0, 0, 0, 0.2);
  }

  .sidebar-wrap.active {
    left: 0;
  }

  .close-sidebar-btn {
    margin: 18px 13px 0 0;
    text-align: end;
  }

</style>