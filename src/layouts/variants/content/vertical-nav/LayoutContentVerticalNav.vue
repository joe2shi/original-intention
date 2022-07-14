<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useDisplay } from 'vuetify'
import { useAppConfigStore } from '@/store/modules/application'
import navMenuItems from '@/layouts/navigation/vertical'
import VerticalNavMenu from '@/layouts/components/vertical-nav-menu/VerticalNavMenu.vue'
import AppBarSearch from '@/layouts/components/app-bar/AppBarSearch.vue'
import AppBarThemeSwitcher from '@/layouts/components/app-bar/AppBarThemeSwitcher.vue'

export default defineComponent({
  components: { AppBarThemeSwitcher, AppBarSearch, VerticalNavMenu },
  setup() {
    const display = useDisplay()
    const { appMenuIsVerticalNavMini } = storeToRefs(useAppConfigStore())
    const isVerticalNavMenuActive = ref(true)

    onMounted(() => {
      isVerticalNavMenuActive.value = !display.mdAndDown.value
    })

    return {
      appMenuIsVerticalNavMini,
      isVerticalNavMenuActive,
      navMenuItems
    }
  }
})
</script>

<template>
  <v-app>
    <v-navigation-drawer
      v-model="isVerticalNavMenuActive"
      :width="280"
      :rail-width="58"
      :floating="true"
      :rail="appMenuIsVerticalNavMini"
      :expand-on-hover="appMenuIsVerticalNavMini"
    >
      <vertical-nav-menu
        :nav-menu-items="navMenuItems"
        @close-nav-menu="isVerticalNavMenuActive = false"
      />
    </v-navigation-drawer>
    <v-app-bar flat>
      <app-bar-search />
      <v-spacer />
      <app-bar-theme-switcher />
    </v-app-bar>
    <v-main>
      <slot></slot>
    </v-main>
    <v-footer :app="true">Footer Bar</v-footer>
  </v-app>
</template>

<style lang="scss" scoped>
:deep(.v-main__wrap) {
  padding: 16px;
}

// TODO: Solve Vuetify bate5 input is not vertically centered
:deep(.v-field__field) {
  padding-top: 6px;
}

.v-toolbar,
.v-footer {
  margin-left: 280px;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.2s;
  transition-property: height, transform, max-width, margin, width;
}
</style>
