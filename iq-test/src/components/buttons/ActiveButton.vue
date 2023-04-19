<template>
  <div>
    <button class="active-btn">
      <router-link to="/test">
        {{ content }}
      </router-link>
    </button>
  </div>
</template>

<script>
export default {
  props: ['content']
}
</script>

<style>
.active-btn {
  width: 189px;
  height: 41px;
  background: radial-gradient(50% 50% at 50% 50%, #FFC700 0%, #FFC700 100%);
  border-radius: 20px;
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #0D0C11 !important;
  border: none;
}
.active-btn a {
  color: var(--color-black);
}

</style>