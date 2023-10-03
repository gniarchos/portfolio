import { useEffect, useState } from "react"
import "./Skills.css"
import { Icon } from "@iconify/react"
import "animate.css"
import { useInView } from "react-intersection-observer"

type skillsTypesProps = {
  icon: string
  name: string
}

export default function Skills(props: skillsTypesProps) {
  const [handleAnimations, setHandleAnimations] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (inView) {
      setHandleAnimations(true)
    } else {
      setHandleAnimations(false)
    }
  }, [inView])

  return (
    <div
      ref={ref}
      className={
        handleAnimations
          ? "animate__animated animate__zoomIn"
          : "hidden_for_animation"
      }
    >
      <p className="skill-name">
        <Icon
          icon={props.icon}
          data-aos-delay="20"
          style={{ color: "white" }}
          className="workedWith-logos"
          data-title={props.name}
        />
        {props.name}
      </p>
    </div>
  )
}
