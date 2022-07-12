<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAppConfigStore } from '@/store/modules/application'
import LayoutBlank from '@/layouts/variants/blank/LayoutBlank.vue'
import LayoutContentVerticalNav from '@/layouts/variants/content/vertical-nav/LayoutContentVerticalNav.vue'
import LayoutContentHorizontalNav from '@/layouts/variants/content/horizontal-nav/LayoutContentHorizontalNav.vue'

export default defineComponent({
  components: {
    LayoutBlank,
    LayoutContentVerticalNav,
    LayoutContentHorizontalNav
  },
  setup() {
    const { currentRoute } = useRouter()
    const { appContentLayoutNav, appRouteTransition } = storeToRefs(
      useAppConfigStore()
    )
    const resolveLayoutVariant = computed(() => {
      if (currentRoute.value.meta.layout === 'blank') {
        return 'layout-blank'
      }
      if (currentRoute.value.meta.layout === 'content') {
        return `layout-content-${appContentLayoutNav.value}-nav`
      }
      return null
    })
    return {
      resolveLayoutVariant,
      appRouteTransition
    }
  }
})
</script>

<template>
  <component :is="resolveLayoutVariant">
    <router-view v-slot="{ Component }">
      <transition :name="appRouteTransition" mode="out-in" appear>
        <component :is="Component" />
      </transition>
    </router-view>
  </component>
</template>
