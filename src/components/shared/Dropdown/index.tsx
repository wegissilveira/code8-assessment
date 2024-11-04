import { useState } from "react"
import classes from "./dropdown.module.scss"

type DropdownProps = {
   label: string
   values: number[]
   onSelect: (value: number) => void
}

/**
 * A functional component that renders a dropdown with a label and options based on the values array provided.
 *
 * @param {DropdownProps} props - The properties passed to the component.
 * @prop {string} label - The text to display as the label for the dropdown.
 * @prop {number[]} values - An array of numbers to display as options in the dropdown.
 * @prop {(value: number) => void} onSelect - A function to call when a value is selected from the dropdown, passing the new value.
 *
 * @returns {JSX.Element} A JSX element representing the dropdown.
 */
const Dropdown = (props: DropdownProps) => {
   const { label, values, onSelect } = props

   const [selectedValue, setSelectedValue] = useState<number>(values[0] || 0)

   const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const value = parseInt(event.target.value, 10)
      setSelectedValue(value)
      onSelect(value)
   }

   return (
      <div>
         <span>{label}: </span>
         <select className={classes.dropdownSelect} value={selectedValue ?? ""} onChange={handleChange}>
            {values.map((value, index) => (
               <option key={`${label}-${value}-${index}`} value={value}>
                  {value}
               </option>
            ))}
         </select>
      </div>
   )
}

export default Dropdown
