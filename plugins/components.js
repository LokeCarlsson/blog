import Vue from 'vue'
import Page from '~/components/Page.vue'
import Teaser from '~/components/Teaser.vue'
import Grid from '~/components/Grid.vue'
import Feature from '~/components/Feature.vue'
import Slide from '~/components/Slide.vue'

Vue.component('blok-slide', Slide)
Vue.component('blok-page', Page)
Vue.component('blok-teaser', Teaser)
Vue.component('blok-grid', Grid)
Vue.component('blok-feature', Feature)
