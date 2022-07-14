<script lang="ts">
import { defineComponent, inject } from 'vue'
import { storeToRefs } from 'pinia'
import { useDisplay } from 'vuetify'
import { useAppConfigStore } from '@/store/modules/application'

export default defineComponent({
  emits: ['close-nav-menu'],
  setup() {
    const { lgAndUp } = useDisplay()
    const { appName, appLogo, appMenuIsVerticalNavMini } = storeToRefs(
      useAppConfigStore()
    )
    const isMouseHovered = inject('isMouseHovered')
    const icons = {
      mdiRecordCircleOutline: 'mdi-record-circle-outline',
      mdiRadioBoxBlank: 'mdi-radiobox-blank',
      mdiClose: 'mdi-close'
    }
    return {
      appName,
      appLogo,
      appMenuIsVerticalNavMini,
      lgAndUp,
      isMouseHovered,
      icons
    }
  }
})
</script>

<template>
  <div class="vertical-nav-header d-flex align-center justify-space-between">
    <div class="d-flex align-center text-decoration-none">
      <v-img :src="appLogo" width="30px" class="me-4 app-logo"></v-img>
      <v-slide-x-transition>
        <h2
          v-show="!(appMenuIsVerticalNavMini && !isMouseHovered)"
          class="app-title"
        >
          {{ appName }}
        </h2>
      </v-slide-x-transition>
    </div>

    <v-slide-x-transition mode="out-in">
      <div v-if="lgAndUp">
        <div
          v-if="!(appMenuIsVerticalNavMini && !isMouseHovered)"
          class="d-flex align-center"
          @click.stop="appMenuIsVerticalNavMini = !appMenuIsVerticalNavMini"
        >
          <v-icon
            v-show="!appMenuIsVerticalNavMini"
            size="20"
            class="cursor-pointer"
            :icon="icons.mdiRecordCircleOutline"
          />
          <v-icon
            v-show="appMenuIsVerticalNavMini"
            size="20"
            class="cursor-pointer"
            :icon="icons.mdiRadioBoxBlank"
          />
        </div>
      </div>
      <v-icon
        v-else
        size="20"
        class="d-inline-block"
        :icon="icons.mdiClose"
        @click.stop="$emit('close-nav-menu')"
      >
      </v-icon>
    </v-slide-x-transition>
  </div>
</template>

<style lang="scss" scoped>
.vertical-nav-header {
  padding: 19px 19px 20px;

  .app-title {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1;
  }

  .app-logo {
    transition: all 0.18s ease-in-out;

    .v-navigation-drawer--rail:not(.v-navigation-drawer--is-hovering) & {
      transform: translateX(-5px);
    }
  }
}
</style>
