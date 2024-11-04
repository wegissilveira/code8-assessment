import { FieldModel } from "Models/FieldModel"

export const formObject: FieldModel[] = [
   { name: 'full name', type: 'text', required: true },
   { name: 'email', type: 'email', required: true },
   { name: 'phone number', type: 'phone', required: true },
   { name: 'comments', type: 'textarea', required: true},
]