/**
 * Creates an item to show in the search results
 * 64x64 img, name, rate and wheel is displayed
 * 
 * TODO: move styling out to css file
 */
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
                <div className='otherInfo row' style={{ marginLeft: '0.8rem'}}>
                    <div className='text-muted' style={{ paddingRight: '0.5rem' }}>
                        {item['Rate']+'%'}
                    </div>
                    <div className='text-muted'>{'| '+item['wheel']+' wheel'}</div>
                </div>
            </div>
        </div>
    );
};

export default ItemSearchResult;
