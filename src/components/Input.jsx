const Input = (props) => {
	return (
		<div className="w-full relative">
        {
            props.label && <label className="text-gray-500">{props.label}</label>
        }
			<input
				placeholder={props.placeholder}
				type={props.type ? props.type : "text"}
				required={props.required ? props.required : false}
				className={`w-full border-2 rounded-sm py-2 ${props.icon ?'px-8':'px-2'} border-gray-300 
                ${props.danger && "border-red-500"} 
                ${props.success && "border-green-500"}
                hover:border-gray-500 transition-colors duration-300`}
			/>
            {props.icon && <div className="absolute top-10 left-3 text-gray-500">{props.icon}</div>}
		</div>
	);
};

export default Input;
