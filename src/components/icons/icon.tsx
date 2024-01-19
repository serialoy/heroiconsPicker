import React, { Suspense } from 'react'
import { outlineIcons24, solidIcons24 } from './picker.icons'
import type { IconProps } from './icon.types'

const Icon: React.FC<IconProps> = ({ icon, fallback }) => {
  const pickIcon = () => {
    const { name, type, size } = icon;
    const icons = type === 'solid' ? solidIcons24 : outlineIcons24;
    const Icon = icons[name];
    return (
      <Suspense fallback={fallback ?? (<div>Loading...</div>)}>
        <Icon height={size} width={size} />
      </Suspense>
    );
  }
  return <>{ pickIcon() }</>
}

export default Icon
