<script lang="ts">
import { defineComponent, inject, PropType, Ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppConfigStore } from '@/store/modules/application'
import { VerticalNav } from '#/navigation'
import useVerticalNavLink from '@/layouts/composables/vertical-nav/useVerticalNavLink'

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<VerticalNav>,
      required: true
    }
  },
  setup(props) {
    const { appMenuIsVerticalNavMini } = storeToRefs(useAppConfigStore())
    const isMouseHovered = inject('isMouseHovered') as Ref<boolean>

    const { linkProps } = useVerticalNavLink(props.item)

    return {
      appMenuIsVerticalNavMini,
      isMouseHovered,
      linkProps
    }
  }
})
</script>

<template>
  <v-list-item
    v-bind="linkProps"
    class="vertical-nav-menu-link"
    active-class="bg-gradient-primary"
  >
    <v-list-item-icon
      :size="!item.icon ? 'x-small' : 'default'"
      start
      :icon="item.icon || 'mdi-checkbox-blank-circle-outline'"
    />
    <v-list-item-title>{{ item.title }}</v-list-item-title>
    <v-spacer />
    <v-list-item-action
      v-if="item.badge && (!appMenuIsVerticalNavMini || isMouseHovered)"
    >
      <v-badge :color="item.badgeColor" :inline="true" :content="item.badge" />
    </v-list-item-action>
  </v-list-item>
</template>
