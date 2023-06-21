import { SetStateAction, useState } from "react";

export function Nom(){

    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");

    const handleClick1 = () => {
        setNom(Math.random().toString(36).replace(/[^a-z]+/g, ''));
    }
    const handleClick2 = () => {
        setPrenom(Math.random().toString(36).replace(/[^a-z]+/g, ''));
    }
    
    return (
        <>
            <div>
                {nom} 
            </div>
            <button onClick={handleClick1}>change nom</button>
            <div>
                {prenom} 
            </div>
            <button onClick={handleClick2}>change prenom</button>
        </>
    )
}


export function Count(){
    const [number, setNumber] = useState(0);

    const addCount = () => {
        setNumber(number + 1)
    }

    return (
        <>
            <div>
                {number}
            </div>
            <button onClick={addCount}> + 1 </button>
        </>
    )
}

export function Course (){
    const [element, setElement] = useState('');
    const handleChangeElement = (evt: { target: { value: SetStateAction<string>; }; }) => {
        setElement(evt.target.value);
    }

    const [list, setToList] = useState<string[]>([]);

    const addList = () => {
        if(element != ''){
            setToList([...list, element]);
        }
        
    }
    return (
        <>
            <div>
                <input type="text" value={element} onChange={handleChangeElement}/>
            </div>
            <button onClick={addList}> add </button>

            <ul>
                {list.map((item) =>
                <li key={item.toString()}>{item}</li>
                )}
            </ul>           
        </>
    )
}

    