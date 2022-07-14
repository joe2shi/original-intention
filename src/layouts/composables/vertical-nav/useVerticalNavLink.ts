import useNav from '@/layouts/composables/useNav'
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import { VerticalNav } from '#/navigation'

export default function useVerticalNavMenuLink(item: VerticalNav) {
  const { isNavLinkActive, navLinkProps } = useNav()
  const { currentRoute } = useRouter()

  const isActive = ref(false)

  const linkProps = navLinkProps.value(item)

  watch(
    () => currentRoute.value.name,
    () => {
      isActive.value = isNavLinkActive(item)
    },
    { immediate: true }
  )

  return {
    isActive,
    linkProps
  }
}
