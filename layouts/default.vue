<template>
  <div>
    <top-header/>
    <main id="main" role="main">
      <nuxt/>
    </main>
    <bottom-footer/>
  </div>
</template>

<script>
import TopHeader from '~/components/TopHeader.vue'
import BottomFooter from '~/components/BottomFooter.vue'

export default {
  components: {
    TopHeader,
    BottomFooter
  }
}
</script>


<style>
@import '../assets/scss/styles.scss';

html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.teaser,
.column {
  font-size: 2rem;
  text-align: center;
  line-height: 3;
  background: #ebeff2;
  border-radius: 10px;
  margin: 10px 5px;
}

.grid {
  display: flex;
}

.column {
  flex: 1;
}
</style>

