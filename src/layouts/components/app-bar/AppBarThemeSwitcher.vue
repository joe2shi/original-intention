<template>
  <v-fade-transition mode="out-in">
    <v-icon :key="appIsDark" @click="toggleTheme">
      {{ appIsDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}
    </v-icon>
  </v-fade-transition>
</template>

<script lang="ts">
import { useAppConfigStore } from '@/store/modules/application'
import { useTheme } from 'vuetify'
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const { appIsDark } = storeToRefs(useAppConfigStore())
    const theme = useTheme()
    const toggleTheme = () => {
      appIsDark.value = theme.global.current.value.dark
      theme.global.name.value = theme.global.current.value.dark
        ? 'light'
        : 'dark'
    }
    return {
      appIsDark,
      toggleTheme
    }
  }
}
</script>
