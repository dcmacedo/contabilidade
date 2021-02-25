import React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'

function ArrowLeft(props: any) {
  const disabeld = props.disabled ? ' arrow--disabled' : ''
  return (
    <svg
      onClick={props.onClick}
      className={'arrow arrow--left' + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  )
}

function ArrowRight(props: any) {
  const disabeld = props.disabled ? ' arrow--disabled' : ''
  return (
    <svg
      onClick={props.onClick}
      className={'arrow arrow--right' + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  )
}

const Dicas_Content = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slidesPerView: 3,
    spacing: 15,
    centered: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <article>
              <Image src="/Dicas e Truques - CTRL+ CTRL-.png" alt="CTRL +" width={300} height={300} />
            </article>
          </div>
          <div className="keen-slider__slide number-slide2">
            <article>
              <Image src="/Dicas e Truques - CTRL+N CTRL+2.png" alt="CTRL+N ou CTRL+2" width={300} height={300} />
            </article>
          </div>
          <div className="keen-slider__slide number-slide3">
            <article>
              <Image src="/Dicas e Truques - CTRL+I CTRL+3.png" alt="CTRL+I ou CTRL+3" width={300} height={300} />
            </article>
          </div>
          <div className="keen-slider__slide number-slide4">
            <article>
              <Image src="/Dicas e Truques - CTRL+S CTRL+4.png" alt="CTRL+S ou CTRL+4" width={300} height={300} />
            </article>
          </div>
          <div className="keen-slider__slide number-slide5">
            <article>
              <Image src="/Dicas e Truques - CTRL+W CTRL+A.png" alt="CTRL+W e CTRL+A" width={300} height={300} />
            </article>
          </div>
          <div className="keen-slider__slide number-slide6">
            <article>
              <Image src="/Dicas e Truques - CTRL+O ALT+F4.png" alt="CTRL+O e ALT+F4" width={300} height={300} />
            </article>
          </div>
        </div>
        {slider && (
          <>
            <ArrowLeft onClick={(e: any) => e.stopPropagation() || slider.prev()} disabled={currentSlide === 0} />
            <ArrowRight
              onClick={(e: any) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
      </div>
      {slider && (
        <div className="dots">
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx)
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              />
            )
          })}
        </div>
      )}
    </>
  )
}

export default Dicas_Content
