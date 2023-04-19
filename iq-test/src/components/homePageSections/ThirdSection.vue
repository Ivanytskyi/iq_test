<template>
  <section class="third-section-wrap">
    <div class="third-section">
      <div class="third-section-content">
        <p class="third-section-content-text">
          Также по результатам теста
          <b>вы получите</b> подробные <b>советы</b> по определению наиболее перспективной <b>для вашего типа интеллекта сферы деятельности</b>,
          которая принесет вам скорейший финансовый результат.
        </p>
        <div class="third-section-img" />
        <ActiveButton
          class="third-section-btn"
          :content="'пройти тест'"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ActiveButton from '@/components/buttons/ActiveButton'
export default {
  components: { ActiveButton }
}
</script>
<style>
.third-section-wrap {
  height: 550px;
}

.third-section-content {
  width: 248px;
  height: 228px;
  margin: 25px auto 0 auto;
  text-align: center;
}

.third-section-content-text b {
  text-transform: uppercase;

}

.third-section-content h1 {
  font-family: 'Yeseva One';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  text-transform: uppercase;
  color: #FFC700;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.third-section  {
  padding-top: 40px;
}

.third-section-img {
  background-image: url("/src/assets/images/image_2.png");
  background-size: cover;
  width: 232px;
  height: 180px;
  margin-left: auto;
}

.third-section-info span {
  color: var(--color-yellow);
}

.third-section-content-text {
  text-align: start;
  font-family: 'PT Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */
  color: var(--color-black);
  letter-spacing: 0.05em;
}

.third-section-btn {
  padding-bottom: 30px;
}
</style>