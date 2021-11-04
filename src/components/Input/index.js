function Input({children, value, onChange}){
    return(
        <div>
            <label htmlFor="search">{children}</label>
            <input 
                placeholder="Example"
                id="search"
                type="text"
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default Input