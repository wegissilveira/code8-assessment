import { useState, useRef } from "react"
import classes from "./sliderValue.module.scss"

type SliderValueProps = {
   label: string
   min: number
   max: number
   onChange: (value: number) => void
}

/**
 * A functional component that renders a slider with a value label that can be dragged
 * to select a value within a given range.
 *
 * @param {SliderValueProps} props - The properties passed to the component.
 * @prop {string} label - The text to display as the label for the value.
 * @prop {number} min - The minimum value that the slider can represent.
 * @prop {number} max - The maximum value that the slider can represent.
 * @prop {(value: number) => void} onChange - A function to call when the slider value changes, passing the new value.
 *
 * @returns {JSX.Element} A JSX element representing the slider with a value label.
 */
const SliderValue = (props: SliderValueProps) => {
   const { label, min, max, onChange } = props

   const [value, setValue] = useState<number>(min)
   const sliderRef = useRef<HTMLDivElement>(null)

   const updateValueFromPosition = (clientX: number) => {
      if (sliderRef.current) {
         const sliderRect = sliderRef.current.getBoundingClientRect()
         const offsetX = clientX - sliderRect.left
         const width = sliderRect.width

         let newValue = min + (offsetX / width) * (max - min)
         newValue = Math.max(min, Math.min(max, Math.round(newValue)))

         setValue(newValue)
         onChange(newValue)
      }
   }

   const handleMouseMove = (event: MouseEvent) => {
      updateValueFromPosition(event.clientX)
   }

   const handleTouchMove = (event: TouchEvent) => {
      updateValueFromPosition(event.touches[0].clientX)
   }

   const startDrag = () => {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", stopDrag)
      document.addEventListener("touchmove", handleTouchMove)
      document.addEventListener("touchend", stopDrag)
   }

   const stopDrag = () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", stopDrag)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", stopDrag)
   }   

   const handlePosition = ((value - min) / (max - min)) * 100

   return (
      <div className={classes.sliderValueContainer}>
         <span className={classes.sliderValueLabel}>{label}: </span>
         <div
            ref={sliderRef}
            className={classes.sliderValueRangeBar}
            onMouseDown={startDrag}
            onTouchStart={startDrag}
         >
            <div className={classes.sliderValueRangeLimitLeft}/>
            <div className={classes.sliderValueRangeLimitRight}/>
            <div  
               className={classes.sliderValueRangeHandler}
               style={{left: `${handlePosition}%`}}
            />
         </div>
      </div>
   )
}

export default SliderValue
