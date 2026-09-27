import React from 'react'
import Separator from '../../atoms/separator'

type Props = {
    children: React.ReactNode,
    id?: string,
    bgUrl?: string,
    bgColor?: string,
    classes?: string
}

const Section = ({
  children,
  id,
  bgUrl,
  bgColor,
  classes
}: Props) => {
  return (
    <section
      id={id}
      style={{ backgroundImage: `url("${bgUrl}")` }}
      className={`${classes}`}
    >
      <div
        className="container mw-100 p-0"
        style={{ backgroundColor: bgColor }}
      >
        <div className="row w-100 mx-0 site-section">
          {children}
        </div>
      </div>
      <Separator/>
    </section>
  )
}

export default Section
