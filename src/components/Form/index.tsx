import React, { useState, FormEvent, useEffect } from "react"
import classes from "./form.module.scss"
import { FieldModel } from "Models/FieldModel"
import Button from "components/shared/Button"
import cx from "classnames"

type FormProps = {
   title: string
   buttonLabel: string
   fields: FieldModel[]
   onSubmit: (data: Record<string, string>) => void
}

/**
 * A functional component that renders a form with the given title, button label, and fields.
 *
 * @prop {string} title - The title of the form.
 * @prop {string} buttonLabel - The label of the submit button.
 * @prop {FieldModel[]} fields - An array of FieldModel objects that represent the fields of the form.
 * @prop {(data: Record<string, string>) => void} onSubmit - A function to call when the form is submitted, passing the form data as an object.
 *
 * @returns {JSX.Element} A JSX element representing the form.
 */
const Form = (props: FormProps) => {
   const { title, buttonLabel, fields, onSubmit } = props

   const [formData, setFormData] = useState<Record<string, string>>({})
   const [errors, setErrors] = useState<Record<string, string>>({})
   const [messageWasSent, setMessageWasSent] = useState(false)

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, type } = e.target
      let formattedValue = value
   
      if (type === 'tel') {
         formattedValue = value.replace(/[^0-9]/g, '')
      }
   
      setFormData({ ...formData, [name]: formattedValue })
      setErrors({ ...errors, [name]: '' })
   }

   const validate = () => {
      let valid = true
      const newErrors: Record<string, string> = {}
   
      fields.forEach((field) => {
         const value = formData[field.name] || ''
   
         if (field.required && !value) {
            newErrors[field.name] = `${field.name} is required`
            valid = false
         } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            newErrors[field.name] = 'Invalid email address'
            valid = false
         } else if ((field.type === 'phone') && value.length < 8) {
            newErrors[field.name] = 'Phone number must be at least 8 digits'
            valid = false
         }
      })
   
      setErrors(newErrors)
      return valid
   }   

   const handleSubmit = (e: FormEvent) => {
      e.preventDefault()
      if (validate()) {
         onSubmit(formData)
         setFormData({})
         setMessageWasSent(true)
      }
   }

   useEffect(() => {
      setTimeout(() => {         
         setMessageWasSent(false)
      }, 5000)
   }, [messageWasSent])

   return (
      <div className={classes.formContainer}>
         <div className={classes.formHeader}>
            <h2>{title}</h2>
            {messageWasSent &&
               <p className={classes.formSuccessText}>Message sent successfully</p>
            }
         </div>
         <form onSubmit={handleSubmit} noValidate>
            {fields.map((field) => (
               <div 
                  key={field.name} 
                  className={
                     cx(classes.inputWrapper, 
                        {[classes.commentInput]: field.type === 'textarea'}
                     )
                  }>
                  <input
                     type={field.type === 'phone' ? 'tel' : field.type}
                     name={field.name}
                     placeholder={field.name + (field.required ? ' *' : '')}
                     value={formData[field.name] || ''}
                     onChange={handleChange}
                  />
                  {errors[field.name] && 
                     <span className={classes.formErrorText}>{errors[field.name]}</span>}
               </div>
            ))}
            <Button label={buttonLabel} type="submit" />
         </form>
      </div>
   )
}

export default Form
