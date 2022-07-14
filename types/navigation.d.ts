import { RouteLocationRaw } from "vue-router";

export interface VerticalNav {
  subheader?: string;
  title: string;
  icon?: string;
  badge?: string;
  badgeColor?: string;
  resource?: string;
  action?: string;
  disabled?: boolean;
  to?: string | RouteLocationRaw;
  href?: string;
  target?: string;
  children?: VerticalNav[];
}
