import { useState, KeyboardEvent } from 'react';
import * as c from './estyles'

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter}: Props) => {

    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent)=> {
        if(e.code === 'Enter' && inputText !== ''){
                onEnter(inputText);
                setInputText('');
        }
    }

    return (

        <c.Container>
            <div className='image'>➕</div>
            <input
                type="text"
                placeholder='Adicione uma tarefa'
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />

        </c.Container>

    );
}