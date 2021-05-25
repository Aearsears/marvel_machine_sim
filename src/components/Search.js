import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import ItemSearchResult from './ItemSearchResult';

import { useState } from 'react';

const Search = ({ items, setVisualItem }) => {
    const [search, setSearch] = useState('');

    return (
        <Container className='d-flex flex-column py-2' style={{ height: '50vh', width: '100%' }}>
            <Form.Control type='search' placeholder='Search an item'
                value={search} onChange={(e)=> { setSearch(e.target.value)} }
            />
            <div className='flex-grow-1 my-2 searchResults' 
                style={{ overflowY: 'auto' }}>
                {items.filter((item) => { 
                        const lowered = item['name'].toLowerCase();
                        return lowered.includes(search.toLowerCase());
                    })
                    .map((item) => {
                        return (
                            <ItemSearchResult item={item} key={item['item_id']} setVisualItem={setVisualItem}/>
                        )
                    })}
            </div>
            <div>
                Display visual on lower half (or lower if you want, change the vh styling)
            </div>
        </Container>
    );
};

export default Search;
