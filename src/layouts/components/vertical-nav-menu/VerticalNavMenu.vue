<script lang="ts">
import { defineComponent, PropType, provide, ref } from 'vue'
import { useAppConfigStore } from '@/store/modules/application'
import { VerticalNav } from '#/navigation'
import useVerticalNavMenu from '@/layouts/composables/vertical-nav/useVerticalNavMenu'
import VerticalNavMenuHeader from '@/layouts/components/vertical-nav-menu/components/vertical-nav-menu-header/VerticalNavMenuHeader.vue'

export default defineComponent({
  components: { VerticalNavMenuHeader },
  props: {
    navMenuItems: {
      type: Array as PropType<VerticalNav[]>,
      required: true
    }
  },
  emits: ['close-nav-menu'],
  setup() {
    const { isMouseHovered, resolveNavItemComponent } = useVerticalNavMenu()
    const { appLogo, appName, appMenuIsVerticalNavMini } = useAppConfigStore()
    const openGroups = ref([])
    provide('isMouseHovered', isMouseHovered)
    provide('openGroups', openGroups)
    return {
      appLogo,
      appName,
      appMenuIsVerticalNavMini,
      isMouseHovered,
      openGroups,
      resolveNavItemComponent
    }
  }
})
</script>

<template>
  <div @mouseenter="isMouseHovered = true" @mouseleave="isMouseHovered = false">
    <slot name="v-nav-menu-header">
      <vertical-nav-menu-header
        @close-nav-menu="$emit('close-nav-menu')"
      ></vertical-nav-menu-header>
    </slot>

    <perfect-scrollbar
      :options="{ maxScrollbarLength: 60, wheelPropagation: false }"
    >
      <v-list
        v-model:opened="openGroups"
        :nav="true"
        density="default"
        active-color="primary"
        class="vertical-nav-menu-items"
      >
        <component
          :is="resolveNavItemComponent(item)"
          v-for="item in navMenuItems"
          :key="item.subheader || item.title"
          :item="item"
        />
      </v-list>
    </perfect-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.ps {
  height: calc(100vh - 64px);
  padding-right: 10px;
}

.vertical-nav-menu-items {
  overflow-x: hidden;
}
</style>
