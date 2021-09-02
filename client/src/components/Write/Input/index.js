import "./style.css";

const Input = ({ title, value, setValue, inputType ='text' }) => {
    return (
        <div className="input-wrapper">
            <div>{title}</div>
            <input type={inputType} 
              value={value}
              onChange={(event) => setValue(event.target.value)} />
        </div>
    )
}
export default Input;