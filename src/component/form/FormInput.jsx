const FormInput = ({
 name,
 placeholder,
 value,
 onChange,
}) => {
  return (
    <div className="flex items-center justify-center">
        <label htmlFor={name}>
            {name}
        </label>
        <input type="text" placeholder={placeholder || ''}/>
    </div>
  )
}

export default FormInput