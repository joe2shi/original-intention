import { VerticalNav } from '#/navigation'
import dashboards from '@/layouts/navigation/vertical/dashboards'
import payments from '@/layouts/navigation/vertical/payments'

// Array of sections
export default [...dashboards, ...payments] as VerticalNav[]
