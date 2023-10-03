import { useEffect, useState, useRef } from "react"
import { Icon } from "@iconify/react"
import parse from "html-react-parser"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "animate.css"
import "./Project.css"
import { useInView } from "react-intersection-observer"

type ProjectProps = {
  number: string
  title: string
  desc: string
  moreInfo: string[]
  additionalTitle: string | null
  additionalInfo: string[] | null
  date: string
  techUsed: {
    icon: string
    name: string
  }[]
  siteLink: string | null
  projLink: string
  desktopImages: string[]
  mobileImages: string[]
}

export default function Project(props: ProjectProps) {
  const [showDevice, setShowDevice] = useState("desktop")
  const [hideDeviceButton, setHideDeviceButton] = useState(false)
  const [showDetailedInfo, setShowDetailedInfo] = useState(false)
  const [requiredHeight, setRequiredHeight] = useState(0)
  const divToMeasureDesc = useRef<HTMLDivElement | null>(null)
  const divToMeasureAdditional = useRef<HTMLDivElement | null>(null)

  const [handleAnimations, setHandleAnimations] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (inView) {
      setHandleAnimations(true)
    }
  }, [inView])

  useEffect(() => {
    if (props.desktopImages.length === 0) {
      setShowDevice("mobile")
      setHideDeviceButton(true)
    }
  }, [])

  function changeDevices() {
    if (showDevice === "desktop") {
      setShowDevice("mobile")
    } else {
      setShowDevice("desktop")
    }
  }

  const projectImagesDesktop = props?.desktopImages.map((image) => {
    return (
      <div key={image} className="carousel-div-image">
        <img loading="lazy" src={image} />
      </div>
    )
  })

  const projectImagesMobile = props.mobileImages.map((image) => {
    return (
      <div key={image} className="carousel-div-image">
        <img loading="lazy" src={image} />
      </div>
    )
  })

  function showMoreInfo() {
    const heightOfDesc =
      divToMeasureDesc.current !== null && divToMeasureDesc.current.clientHeight
    const heightOfAdditional =
      divToMeasureAdditional.current !== null &&
      divToMeasureAdditional.current.clientHeight

    const height =
      heightOfDesc !== false &&
      heightOfAdditional !== false &&
      710 - heightOfDesc - heightOfAdditional

    if (height !== false) {
      setRequiredHeight(height)
    }
    setShowDetailedInfo(true)
  }

  const expandClass = {
    height: showDetailedInfo ? `${requiredHeight}px` : "0px",
    overflow: showDetailedInfo ? "auto" : "hidden",
  }

  return (
    <div
      className={
        handleAnimations
          ? "project animate__animated animate__fadeIn"
          : "hidden_for_animation"
      }
    >
      <div ref={ref} className="project-container">
        <div className="project-left">
          <div ref={divToMeasureDesc}>
            <h1 className="project-name">
              <span>{props.number}</span>
              {props.title}
            </h1>
            <div>{parse(props.desc)}</div>
          </div>
          <div style={expandClass} className="detailed-project-info">
            <div>
              <h3 className="features">Features</h3>
              <ul>
                {props.moreInfo.map((feat) => {
                  return <li key={feat}>{feat}</li>
                })}
              </ul>
            </div>
            {props.additionalInfo !== null && (
              <div>
                <h3 className="features">{props.additionalTitle}</h3>
                <ul>
                  {props.additionalInfo.map((morefeat) => {
                    return <li key={morefeat}>{morefeat}</li>
                  })}
                </ul>
              </div>
            )}
          </div>
          {!showDetailedInfo && (
            <button onClick={showMoreInfo} className="read-more-btn">
              Read More
            </button>
          )}
          <div
            ref={divToMeasureAdditional}
            className="projects-additionalInfo-wrapper"
          >
            <p className="project-period">{props.date}</p>
            <div className="using-imgs">
              {props.techUsed.map((tech) => {
                return (
                  <div key={tech.name} title={tech.name}>
                    <Icon icon={tech.icon} width="28" />
                  </div>
                )
              })}
            </div>

            <div className="project-btns">
              {props.siteLink !== null && (
                <a
                  className="project-button-link"
                  target="_blank"
                  href={props.siteLink}
                >
                  Live Site
                </a>
              )}
              <a
                className="project-button-link gitRepo"
                target="_blank"
                href={props.projLink}
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>

        <div className="project-right">
          <div
            className={
              !hideDeviceButton
                ? "project-btns-device"
                : "project-btns-device hideButtons"
            }
          >
            <button
              className={
                showDevice === "desktop"
                  ? "device-selection-btn desktop fadeButton"
                  : "device-selection-btn desktop"
              }
              onClick={changeDevices}
            >
              Desktop
            </button>
            <button
              className={
                showDevice === "mobile"
                  ? "device-selection-btn mobile fadeButton"
                  : "device-selection-btn mobile "
              }
              onClick={changeDevices}
            >
              Mobile
            </button>
          </div>

          {showDevice === "desktop" ? (
            <Carousel
              autoPlay={false}
              width="100%"
              showStatus={false}
              showThumbs={true}
              className="carousel-custom"
            >
              {projectImagesDesktop}
            </Carousel>
          ) : (
            <Carousel
              autoPlay={false}
              width="100%"
              showStatus={false}
              showThumbs={true}
              className="carousel-custom"
            >
              {projectImagesMobile}
            </Carousel>
          )}
        </div>
      </div>
    </div>
  )
}
