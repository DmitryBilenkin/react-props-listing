import './ListItem.css';
import { ReactNode, useState } from 'react';

interface IitemProps {
    item: {
        [key: string]: any
    }
};

function ListItem({item}:IitemProps) {

    const[title, setTitle] = useState<string>(item.title);
    const [currency, setCurrency] = useState<string>(item.currency_code);
    const [level, setLevel] = useState<string>('medium')

    const titleHandler = (tit:string):ReactNode =>{
        if(tit.length > 51){
            const viewPart = tit.slice(0, 50);
            const replPart = tit.slice(50).replace(/.+/,'...'); 

            // console.log(tit);
            // console.log(viewPart);
            // console.log(replPart);
            // console.log(viewPart + replPart);

            // setTitle(viewPart + replPart); -----> cкрипт падает, не понимаю, почему
            setTitle(viewPart) //-------> вывод без многоточия в конце
        }
        return <p className="item-title">{title}</p>
    };

    const currencyHandler = (curr:string):ReactNode=>{
        if(curr==='USD'){
            setCurrency('$');
        } else if(curr==='EUR'){
        setCurrency(String.fromCharCode(8364));
        }    
        return <p className="item-price">{curr + ' ' + item.price}</p>
        }

    const setLevelValue = (quant:number):ReactNode => {
        console.log(quant)
        if (quant <= 10){
            setLevel('low')         
        } else if (quant  > 10 && quant <= 20){
            setLevel('medium')
        } else if (quant  > 20){
            setLevel('high')
        }
        return <p className = {'item-quantity level-' + level} >{quant}</p> //-----------> Не понятно, почему происходит многократный вызов. Скрипт падает
        };   
            
    return (
       
        <div className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage.url_570xN} alt='etsy-pict'/>
                </a>
            </div>
            <div className="item-details">
                {titleHandler(title)}
                {currencyHandler(currency)}
                {setLevelValue(item.quantity)}               
            </div>
        </div>
    )
}

export default ListItem;

