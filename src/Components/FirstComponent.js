import {useState} from 'react';
import './FirstComponent.css'

const FirstComponent = ()=>{

    const familyArray = [
    {id: 1, name:'Andriele'},
    {id: 2, name:'Oliver'}
]

    const [family, setFamily] = useState(false);

    const handleClick = () =>{
        setFamily(true)
    }

    return (
        <div>
            <div className="input">
                <h2>Minha familia</h2>
                <input onClick={handleClick} type="submit" value="Mostrar minha familia"/>
                {family && <p>Esposa: {familyArray[0].name} </p>}
                {family && <p>Cachorro: {familyArray[1].name} </p>}
            </div>
        </div>
    )



}

export default FirstComponent