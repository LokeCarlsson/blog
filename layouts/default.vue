<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="scss">
@import '~assets/styles/variables.scss';

html {
  font-family: $body-font;
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

body {
  background: #0f2027;
  background: linear-gradient(90deg,#2f454e,#203a43,#11252d);
  color: $text-color;
}

.container {
  text-align: center;
  padding-top: 75px
}

.title {
  font-family: $title-font; /* 1 */
  display: block;
  font-weight: 600;
  font-size: 80px;
  color: $text-color;
  letter-spacing: 1px;
}

a {
  color: white;
}

</style>
