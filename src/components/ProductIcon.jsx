import {
  Archive,
  BedDouble,
  ChefHat,
  DoorClosed,
  LockKeyhole,
  Rows3,
  Store,
  Table2,
} from 'lucide-react'

const customIcons = {
  wardrobe: ({ size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3.5" y="2.5" width="17" height="19" rx="1.5" />
      <path d="M12 2.5v19" />
      <path d="M7.5 10.5v2.5M16.5 10.5v2.5" />
      <path d="M6 21.5V22.5M18 21.5V22.5" />
    </svg>
  ),
  showcase: ({ size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="4" y="2.5" width="16" height="18" rx="1.5" />
      <path d="M7 6h10M7 10.5h10M7 15h10" />
      <path d="M9.5 6v4.5M14.5 10.5V15" />
      <path d="M6 20.5v1.5M18 20.5v1.5" />
    </svg>
  ),
  dressing: ({ size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="6.5" y="2.5" width="11" height="8.5" rx="4.2" />
      <path d="M12 11v2.5" />
      <rect x="3" y="13.5" width="18" height="6.5" rx="1.2" />
      <path d="M12 13.5v6.5" />
      <path d="M10.6 16.8h.01M13.4 16.8h.01" />
      <path d="M5 20v2M19 20v2" />
    </svg>
  ),
}

const icons = {
  archive: Archive,
  wardrobe: null,
  shirt: null,
  chef: ChefHat,
  door: DoorClosed,
  table: Table2,
  showcase: null,
  dressing: null,
  mirror: null,
  bed: BedDouble,
  rack: Rows3,
  locker: LockKeyhole,
  store: Store,
}

export default function ProductIcon({ name, size = 26, strokeWidth = 1.5, ...rest }) {
  const Custom = customIcons[name]
  if (Custom) {
    return <Custom size={size} strokeWidth={strokeWidth} />
  }

  const Icon = icons[name] || Archive
  return <Icon size={size} strokeWidth={strokeWidth} {...rest} />
}
