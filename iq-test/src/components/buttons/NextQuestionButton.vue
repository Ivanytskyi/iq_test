<template>
  <button class="active-btn">
    Далее
  </button>
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

.active-btn:disabled {
  background: #DADADA;
  box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  color: #8E8E8E !important;
}

</style>