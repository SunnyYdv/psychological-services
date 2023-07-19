import React, { HTMLAttributes } from 'react'
import { Icons } from '../svg/EXPORT'

export type AllIconTypes = typeof Icons

export type IconProps = {
  className?: string
  onClick?(e: React.MouseEvent<HTMLOrSVGElement>): void
} & Partial<HTMLAttributes<SVGElement>>


