import { ref } from 'vue'
import { VerticalNav } from '#/navigation'
import VerticalNavMenuSectionTitle from '@/layouts/components/vertical-nav-menu/components/vertical-nav-menu-section-title/VerticalNavMenuSectionTitle.vue'
import VerticalNavMenuLink from '@/layouts/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue'
import VerticalNavMenuGroup from '@/layouts/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue'

export default () => {
  const resolveNavItemComponent = (item: VerticalNav) => {
    if (item.subheader) {
      return VerticalNavMenuSectionTitle
    }
    if (item.children) {
      return VerticalNavMenuGroup
    }
    return VerticalNavMenuLink
  }
  const isMouseHovered = ref(false)
  return {
    resolveNavItemComponent,
    isMouseHovered
  }
}
