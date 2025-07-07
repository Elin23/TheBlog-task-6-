type btnProps = {
    label : string;
    style: string;
    btnType: "button" | "submit" | "reset";
}
function CustomButton({label, style, btnType} : btnProps) {
  return (
    <button className={style} type={btnType}>{label}</button>
  )
}

export default CustomButton
