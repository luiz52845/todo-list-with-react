import { useState } from 'react';
import { Container } from './styles'
import { Item } from '../../types/Item';

type Props = {
    item: Item
}

export const ListItem = ({ item }: Props) => {


    const [isCheked, setIsCheked] = useState(item.done);

    return (
        <>
            <Container done={isCheked}> 
                <input 
                    type="checkbox" 
                    checked={isCheked}
                    onChange={e => setIsCheked(e.target.checked)}
                 />
                <label>{item.name}</label>
                
            </Container>

        </>
    )
}