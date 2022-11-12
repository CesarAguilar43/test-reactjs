const CustomInput = ({ field, form, isPrevent = true, id, ...props }) => {
  const handlePrevent = (e) => e.preventDefault();
  return (
    <input
      {...field}
      {...props}
      id={id}
      className="form-control"
      onPaste={isPrevent ? handlePrevent : null}
      onCopy={isPrevent ? handlePrevent : null}
      autoComplete="off"
    />
  );
};
export default CustomInput;
