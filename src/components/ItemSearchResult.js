
const ItemSearchResult = ({ item, setVisualItem }) => {
    const selectItem = () => {
        setVisualItem(item);
    }

    return (
        <div 
            className='d-flex m-2 align-items-center'
            style={{ cursor: 'pointer' }}
            onClick={selectItem}
        >
            <img src={'https://marvel-api-ten.vercel.app/'+item['path']}
                style={{ height: '64px', width: '64px' }}
                alt={item['name']}
                />
            <div className='sm-3' style={{ marginLeft: '0.8rem' }}>
                <div>{item['name']}</div>
                <div className='text-muted'>{item['Rate']+'%'}</div>
            </div>
        </div>
    );
};

export default ItemSearchResult;
