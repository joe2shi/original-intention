<script lang="ts">
import { defineComponent, inject, PropType } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppConfigStore } from '@/store/modules/application'
import { VerticalNav } from '#/navigation'

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<VerticalNav>,
      required: true
    }
  },
  setup() {
    const { appMenuIsVerticalNavMini } = storeToRefs(useAppConfigStore())
    const isMouseHovered = inject('isMouseHovered')
    return {
      appMenuIsVerticalNavMini,
      isMouseHovered
    }
  }
})
</script>

<template>
  <div class="v-subtitle text-caption">
    <span
      v-show="
        !appMenuIsVerticalNavMini ||
        (appMenuIsVerticalNavMini && isMouseHovered)
      "
    >
      <span>{{ item.subheader }}</span>
    </span>

    <v-icon
      v-show="appMenuIsVerticalNavMini && !isMouseHovered"
      icon="mdi-minus"
    />
  </div>
</template>

<style lang="scss" scoped>
.v-subtitle {
  padding: 12px 12px 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
