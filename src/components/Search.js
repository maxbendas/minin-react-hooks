import React, {useContext, useState} from 'react';
import {AlertContext} from "../context/alert/alertContext";

const Search = () => {
    const [value, setValue] = useState('')
    const {show} = useContext(AlertContext)

    console.log(value)
    const onSubmit = (event) => {
        if (event.key !== 'Enter') {
            return
        }
        if (value.trim()){
            console.log(value)
        }else{
            show('Enter your name!')
        }
    }
    return (
        <div className="form-group">
            <input type="text"
                   className="form-control"
                   placeholder="Search..."
                   value={value}
                   onChange={event=>setValue(event.target.value)}
                   onKeyPress={onSubmit}
            />
        </div>
    );
};

export default Search;