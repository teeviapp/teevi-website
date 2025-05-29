import React from "react"

interface IconProps {
  className?: string
  size?: number
}

export const ModernUIIcon: React.FC<IconProps> = ({
  className = "",
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}>
    <path
      d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M3 12H4M12 3V4M20 12H21M12 20V21M18.364 5.63604L17.6569 6.34315M5.63604 5.63604L6.34315 6.34315M17.6569 17.6569L18.364 18.364M6.34315 17.6569L5.63604 18.364"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

export const ExtensionsIcon: React.FC<IconProps> = ({
  className = "",
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}>
    <path
      d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const OfflineIcon: React.FC<IconProps> = ({
  className = "",
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}>
    <path
      d="M19 9L19 17C19 18.1046 18.1046 19 17 19L7 19C5.89543 19 5 18.1046 5 17L5 9"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M12 14V6M12 6L9 9M12 6L15 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const PrivacyIcon: React.FC<IconProps> = ({
  className = "",
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}>
    <path
      d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 12L11 14L15 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const TelegramIcon: React.FC<IconProps> = ({
  className = "",
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
  </svg>
)

export const TrackingIcon: React.FC<IconProps> = ({
  className = "",
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}>
    <path
      d="M9 11L12 14L22 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
