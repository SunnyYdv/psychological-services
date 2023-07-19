import React, { memo } from 'react'
import {IconProps} from "../../types/svg";
import cls from 'classnames'

export const Facebook: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
      <svg className={cls('fill-current', className)}
           width="24"
           height="24"
           viewBox="0 0 24 24"
           fill="none" xmlns="http://www.w3.org/2000/svg"
           {...otherProps}
      >
          <path d="M16 2C16 1.44771 15.5523 1 15 1H13C11.6739 1 10.4021 1.50044 9.46447 2.39124C8.52678 3.28204 8 4.49022 8 5.75V7.6C8 8.15228 7.55228 8.6 7 8.6H6C5.44772 8.6 5 9.04772 5 9.6V11.4C5 11.9523 5.44772 12.4 6 12.4H7C7.55228 12.4 8 12.8477 8 13.4V19C8 19.5523 8.44772 20 9 20H11C11.5523 20 12 19.5523 12 19V13.4C12 12.8477 12.4477 12.4 13 12.4H14.2291C14.6834 12.4 15.0806 12.0938 15.1962 11.6545L15.6699 9.85449C15.8367 9.22041 15.3585 8.6 14.7028 8.6H13C12.4477 8.6 12 8.15228 12 7.6V5.75C12 5.49804 12.1054 5.25641 12.2929 5.07825C12.4804 4.90009 12.7348 4.8 13 4.8H15C15.5523 4.8 16 4.35228 16 3.8V2Z" fill="#B0BDFF"/>
          <path d="M16 4H13.2727C12.0672 4 10.911 4.47411 10.0586 5.31802C9.20617 6.16193 8.72727 7.30653 8.72727 8.5V11.2H6V14.8H8.72727V22H12.3636V14.8H15.0909L16 11.2H12.3636V8.5C12.3636 8.26131 12.4594 8.03239 12.6299 7.8636C12.8004 7.69482 13.0316 7.6 13.2727 7.6H16V4Z" stroke="#1E1E1E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
  )
})

Facebook.displayName = 'Facebook'
