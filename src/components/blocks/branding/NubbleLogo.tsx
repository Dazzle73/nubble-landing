import Image from 'next/image'

interface NubbleLogoProps {
  className?: string
  width?: number
  height?: number
}

export const NubbleLogo = ({ 
  className = '', 
  width = 130, 
  height = 40 
}: NubbleLogoProps) => {
  return (
    <Image
      src="/nubble-logo-white.png"
      alt="Nubble logo"
      width={width}
      height={height}
      className={className}
      priority
    />
  )
}