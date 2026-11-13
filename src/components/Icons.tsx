import type { ReactElement, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export const DropIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3.5c3 3.6 5.5 6.6 5.5 9.6a5.5 5.5 0 1 1-11 0c0-3 2.5-6 5.5-9.6Z" />
    <path d="M9.5 14.2c.9 1 1.7 1.5 2.5 1.5s1.6-.5 2.5-1.5" />
  </svg>
);

export const WavesIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 9c1.6 0 1.6 1.4 3.2 1.4S7.8 9 9.4 9s1.6 1.4 3.2 1.4S14.2 9 15.8 9s1.6 1.4 3.2 1.4" />
    <path d="M3 14c1.6 0 1.6 1.4 3.2 1.4S7.8 14 9.4 14s1.6 1.4 3.2 1.4S14.2 14 15.8 14s1.6 1.4 3.2 1.4" />
    <path d="M3 19c1.6 0 1.6 1.4 3.2 1.4S7.8 19 9.4 19s1.6 1.4 3.2 1.4S14.2 19 15.8 19s1.6 1.4 3.2 1.4" />
  </svg>
);

export const SpringIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 7c2.5-1.6 5-1.6 7.5 0S16.5 8.6 19 7" />
    <path d="M4 12c2.5-1.6 5-1.6 7.5 0s5 1.6 7.5 0" />
    <path d="M4 17c2.5-1.6 5-1.6 7.5 0s5 1.6 7.5 0" />
  </svg>
);

export const CottageIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 10.5 12 4l8 6.5" />
    <path d="M6 10v9h12v-9" />
    <path d="M10.5 19v-5h3v5" />
  </svg>
);

export const TreesIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M8 4.5 4.5 10h7L8 4.5Z" />
    <path d="M8 9.5 3.5 15.5h9L8 9.5Z" />
    <path d="M8 15.5V20" />
    <path d="M16.5 8 13.5 13h6l-3-5Z" />
    <path d="M16.5 12.5 13 17.5h7l-3.5-5Z" />
    <path d="M16.5 17.5V21" />
  </svg>
);

export const DiningIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6 3v7a2 2 0 0 0 4 0V3" />
    <path d="M8 10v11" />
    <path d="M16 3c-1.4 1.6-2 3.4-2 5.4 0 1.4.7 2.2 2 2.4V21" />
  </svg>
);

export const ShowerIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 21V8a4 4 0 0 1 8 0v1" />
    <path d="M13 9h4" />
    <path d="M15 12.5v.01M17.5 15v.01M13 16v.01M16 18.5v.01M19 18v.01" />
  </svg>
);

export const LeafIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M20 4c0 8-4.8 12.5-11 12.5H5.5C5.5 9 11 4 20 4Z" />
    <path d="M4 20c1-5 4.5-9 10-11" />
  </svg>
);

export const UsersIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 20c0-3.2 2.5-5.5 5.5-5.5s5.5 2.3 5.5 5.5" />
    <path d="M16 5.2A3.2 3.2 0 0 1 16 11" />
    <path d="M17.2 14.9c2 .7 3.3 2.5 3.3 5.1" />
  </svg>
);

export const SunIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4" />
  </svg>
);

export const PinIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const PhoneIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
  </svg>
);

export const MailIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const ClockIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 1.8" />
  </svg>
);

export const FacebookIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M14.5 8.5h2.2V5.4h-2.6c-2.2 0-3.6 1.4-3.6 3.7v1.6H8.3v3.1h2.2V21h3.3v-7.2h2.5l.4-3.1h-2.9V9.4c0-.6.3-.9.7-.9Z" />
  </svg>
);

export const ArrowIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h13" />
    <path d="m13 6.5 5.5 5.5L13 17.5" />
  </svg>
);

export const CloseIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export const ChevronLeftIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m14 5.5-6 6.5 6 6.5" />
  </svg>
);

export const ChevronRightIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m10 5.5 6 6.5-6 6.5" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m4.5 12.5 4.5 4.5L19.5 6" />
  </svg>
);

export const StarIcon = (p: IconProps) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="m12 3.6 2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8L12 3.6Z" />
  </svg>
);

const iconMap = {
  spring: SpringIcon,
  waves: WavesIcon,
  cottage: CottageIcon,
  trees: TreesIcon,
  dining: DiningIcon,
  shower: ShowerIcon,
  drop: DropIcon,
  leaf: LeafIcon,
  users: UsersIcon,
  sun: SunIcon,
} as const;

export type IconName = keyof typeof iconMap;

export function Icon({ name, ...props }: { name: IconName } & IconProps): ReactElement {
  const Component = iconMap[name];
  return <Component {...props} />;
}
