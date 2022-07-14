import { VerticalNav } from '#/navigation'
import { useRouter } from 'vue-router'
import { useAppConfigStore } from '@/store/modules/application'
import { storeToRefs } from 'pinia'
import { inject, ref, Ref, watch } from 'vue'
import useNav from '@/layouts/composables/useNav'

export default function useVerticalNavMenuGroup(item: VerticalNav) {
  const handlerToggleGroup = (value: boolean) => {
    if (value) {
      if (openGroups.value.indexOf(item.title) === -1) {
        openGroups.value.push(item.title)
      }
    } else {
      openGroups.value = openGroups.value.filter((title) => {
        return item.title != title
      })
    }
  }

  // ------------------------------------------------
  // isMouseHovered
  // ------------------------------------------------
  const isMouseHovered = inject('isMouseHovered') as Ref<boolean>
  watch(isMouseHovered, (val) => {
    if (appMenuIsVerticalNavMini.value) {
      isOpen.value = val && isActive.value
    }
  })

  // ------------------------------------------------
  // menuIsVerticalNavMini
  // ------------------------------------------------
  const { appMenuIsVerticalNavMini } = storeToRefs(useAppConfigStore())
  watch(appMenuIsVerticalNavMini, (val) => {
    if (!isMouseHovered) {
      if (val) {
        isOpen.value = false
      } else if (!val && isActive.value) {
        isOpen.value = true
      }
    }
  })

  // ------------------------------------------------
  // openGroups
  // ------------------------------------------------
  const openGroups = inject('openGroups') as Ref<string[]>
  watch(
    openGroups,
    (currentOpenGroups) => {
      const clickedGroup = currentOpenGroups[currentOpenGroups.length - 1]
      if (clickedGroup !== item.title && !isActive.value) {
        if (!doesHaveChild(clickedGroup)) isOpen.value = false
      }
    },
    { deep: true }
  )

  // ------------------------------------------------
  // isOpen
  // ------------------------------------------------
  const { appVerticalMenuAccordion: isAccordion } = storeToRefs(
    useAppConfigStore()
  )
  const isOpen = ref(false)
  watch(isOpen, (val) => {
    if (isAccordion) {
      handlerToggleGroup(val)
    }
  })

  const updateGroupOpen = (val: boolean) => {
    isOpen.value = val
  }

  // ------------------------------------------------
  // isActive
  // ------------------------------------------------
  const isActive = ref(false)
  watch(isActive, (val) => {
    /*
      If menu is collapsed and not hovered(optional) then don't open group
    */
    if (val) {
      if (!appMenuIsVerticalNavMini.value) isOpen.value = val
    } else {
      isOpen.value = val
    }
  })

  const { isNavGroupActive } = useNav()
  const updateIsActive = () => {
    if (item.children) {
      isActive.value = isNavGroupActive(item.children)
    }
  }
  const { currentRoute } = useRouter()
  watch(currentRoute, updateIsActive, { immediate: true })

  // ------------------------------------------------
  // Other Methods
  // ------------------------------------------------
  const doesHaveChild = (title: string) =>
    item.children?.some((child) => child.title === title)

  return {
    isOpen,
    isActive,
    updateGroupOpen,
    openGroups,
    isMouseHovered,
    updateIsActive,
    handlerToggleGroup
  }
}
