import React, {useEffect, useState} from 'react';
import axios from 'axios';


type StateType = {
    albumId: number
    id: string
    title: string
    url: string
    thumbnailUrl: string
}

export const PromiseAdd = () => {
    let [state, setState] = useState<Array<StateType>>([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
            .then((user) => {
            setState(user.data)
            console.log(user)
        })
            .catch(err=>console.log(err.code))

    }, [])

    return (
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap' , justifyContent: 'space-between'}}>
            {state.map(el => {
                    return <div key={el.id} >
                        {/*<div>{el.title}</div>*/}
                      <img src={el.thumbnailUrl} alt=""/>
                    </div>
                }
            )}

        </div>
    );
};

