import React from 'react'
import { FormattedMessage } from 'react-intl'

export default function Reverse() {
  return (
    <div>
        <div className="text-[14px] font-300 px-[20px] sm:px-[0px] text-[#454655] py-[24px] border-[#ECEDEE]">
            ©2023 - <FormattedMessage id='reverse'/>
        </div>
    </div>
  )
}
