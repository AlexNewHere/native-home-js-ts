import React, {MouseEvent} from 'react';


export const User = () => {

    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {

        return alert( e.currentTarget.name);
    }


    const nameChange = () => {
        return alert(' не правильное имя');
    }

    const focusLost = () => {
        return alert(' правильное имя');
    }


    return <div>
        <textarea value={'не писать'} onChange={nameChange}>Alex</textarea>
        <input onBlur={focusLost}/>
        <button name={'delete'} onClick={deleteUser}>x</button>
        <button name={'save'} onClick={deleteUser}>x</button>
    </div>

}