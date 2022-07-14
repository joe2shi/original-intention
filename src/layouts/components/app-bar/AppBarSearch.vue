<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const searchContent = ref('')
    return {
      searchContent
    }
  }
})
</script>

<template>
  <v-form class="app-bar-search">
    <v-text-field
      v-model="searchContent"
      hide-details
      density="compact"
      color="primary"
      prepend-inner-icon="mdi-magnify"
      placeholder="Search"
      variant="outlined"
    ></v-text-field>
  </v-form>
</template>

<style lang="scss" scoped>
.app-bar-search {
  :deep(.v-field) {
    width: 290px;
    transition: width 0.15s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    &.v-field--focused {
      width: 380px;
    }
  }
}
</style>
