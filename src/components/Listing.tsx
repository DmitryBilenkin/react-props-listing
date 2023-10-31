import ListItem from "./ListItem"
import './Listing.css'

interface Iitem {
    [key: string]: any
};

interface IitemsProps {
    items:Iitem[]
}

function Listing({items=[]}:IitemsProps) {
    try{
        items.map(item => {
            if(item.state === 'removed'){
                throw new Error(`Карточка каталога c id: ${item.listing_id} удалена`);                
            };
        });
    }catch(e){
        console.warn(e);
    };
        
    const activeItems = items.filter(item => item.state === 'active');
    return (
        <div className="item-list">
            {activeItems.map((item)=><ListItem key={item.listing_id} item={item} />)}
        </div>
    );
};

export default Listing;
