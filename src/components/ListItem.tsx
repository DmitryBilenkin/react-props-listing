import './ListItem.css';

interface IitemProps {
    item: {
        [key: string]: any    }
};

function ListItem({item}:IitemProps) {
    
    function setTitle(){
        if(item.title.length > 51){
            return item.title.slice(0, 50) + item.title.slice(50).replace(/.+/,'...');
        } else {
            return item.title;
        };
    };
    
    function setCurrency(){
        if(item.currency_code==='USD'){
            return '$';
        } else if(item.currency_code==='EUR'){
            return String.fromCharCode(8364);
        } else {
            return item.currency_code;
        }; 
    };

    function setLevel(){
        if (item.quantity <= 10){
            return "item-quantity level-low";        
        } else if (item.quantity  > 10 && item.quantity <= 20){
            return "item-quantity level-medium";    
        } else if (item.quantity  > 20){
            return "item-quantity level-high";  
        };
    }; 
            
    return (       
        <div className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage.url_570xN} alt='etsy-pict'/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{setTitle()}</p>
                <p className="item-price">{setCurrency() + ' ' + item.price}</p>
                <p className={setLevel()}>{item.quantity} left</p>              
            </div>
        </div>
    );
};

export default ListItem;

