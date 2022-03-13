import React, {useState} from "react"


const NavButton = ({title}) => {
    
    //react state hook
    const [isOpen, setIsOpen] = useState(false)
    // set the value false or otherwise undefined will show up on console

    const clickHandler = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div onClick = {clickHandler}>
            <span>{title}</span>
            {isOpen && (<div>it is a dropdown</div>)}

        </div>
    )
}

export default NavButton;