import type { FormType, PersonalFormInputWrapType, ErrMessageType } from "../types/props";

export default function PersonalFormInputWrapp({
  form,
  setForm,
  errMessage,
  setErrMessage,
  wrapClass,
  placeholder,
  type,
  name,
  id,
  labelText,
}: PersonalFormInputWrapType) {


  const errorKey = `${name}Err` as keyof ErrMessageType;
  /** Handle input value change */
  const handleChangeInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    //Update form
    setForm(prev => ({ ...prev, [name]: value }));

    //Clear the specific error
    setErrMessage?.(prev => ({
      ...prev,
      [errorKey]: "", // clear that specific field's error
    }));
  };

  /** Dynamically resolve the corresponding error key */
  const errorText = errMessage?.[errorKey];

  return (
    <div className={wrapClass}>
      {errorText && <span className="error">{errorText}</span>}
      
      <label htmlFor={id}>{labelText}</label>
      <input
        onChange={handleChangeInfo}
        value={form[name as keyof FormType] ?? ""}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        aria-invalid={!!errorText}
        aria-describedby={errorText ? `${id}-error` : undefined}
      />
    </div>
  );
}
