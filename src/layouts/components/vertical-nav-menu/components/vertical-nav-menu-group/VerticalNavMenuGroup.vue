<script lang="ts">
import { defineComponent, PropType, inject, Ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppConfigStore } from '@/store/modules/application'
import { VerticalNav } from '#/navigation'
import useVerticalNavMenu from '@/layouts/composables/vertical-nav/useVerticalNavMenu'
import useVerticalNavGroup from '@/layouts/composables/vertical-nav/useVerticalNavGroup'

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<VerticalNav>,
      required: true
    }
  },
  setup(props) {
    const { appMenuIsVerticalNavMini } = storeToRefs(useAppConfigStore())
    const { resolveNavItemComponent } = useVerticalNavMenu()
    const isMouseHovered = inject('isMouseHovered') as Ref<boolean>
    const { isOpen, updateGroupOpen, isActive, handlerToggleGroup } =
      useVerticalNavGroup(props.item)

    watch(appMenuIsVerticalNavMini, (val) => {
      if (val && !isMouseHovered) handlerToggleGroup(false)
      else {
        handlerToggleGroup(isOpen.value)
      }
    })

    watch(isMouseHovered, (value) => {
      if (appMenuIsVerticalNavMini.value) {
        if (value) handlerToggleGroup(isOpen.value)
        else handlerToggleGroup(false)
      }
    })
    return {
      appMenuIsVerticalNavMini,
      resolveNavItemComponent,
      isActive,
      isOpen,
      isMouseHovered,
      updateGroupOpen
    }
  }
})
</script>

<template>
  <v-list-group :value="item.title">
    <template #activator="{ props }">
      <v-list-item
        v-bind="props"
        :class="{ 'text-primary': isActive }"
        @click="updateGroupOpen(!isOpen)"
      >
        <v-list-item-icon
          start
          :icon="item.icon || 'mdi-checkbox-blank-circle-outline'"
        ></v-list-item-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
        <v-spacer />
        <v-list-item-action
          v-if="item.badge && (!appMenuIsVerticalNavMini || isMouseHovered)"
          class="flex-shrink-0"
        >
          <v-badge
            :color="item.badgeColor"
            :inline="true"
            :content="item.badge"
          >
          </v-badge>
        </v-list-item-action>
      </v-list-item>
    </template>
    <component
      :is="resolveNavItemComponent(child)"
      v-for="child in item.children"
      :key="child.subheader || child.title"
      :item="child"
    ></component>
  </v-list-group>
</template>

<style lang="scss" scoped>
.v-list-item--nav {
  padding-inline-start: 9px;
  padding-inline-end: 9px;
}
</style>
