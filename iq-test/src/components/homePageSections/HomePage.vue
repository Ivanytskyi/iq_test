<template>
  <FirstSection />
  <SecondSection />
  <ThirdSection />
  <FourthSection />
</template>
<script>
import FirstSection from '@/components/homePageSections/FirstSection'
import SecondSection from '@/components/homePageSections/SecondSection'
import ThirdSection from '@/components/homePageSections/ThirdSection'
import FourthSection from '@/components/homePageSections/FourthSection'
export default {
  components: { FourthSection, ThirdSection, SecondSection, FirstSection }
}
</script>
