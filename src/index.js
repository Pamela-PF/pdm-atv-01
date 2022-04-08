import React from 'react';
import ReactDOM from 'react-dom';

const App =()=>{
    /*“1” usando uma função que devolve um objeto JSON.*/
    const parte1 = {
        display: 'block',
        margin: 'auto', 
        width: '60%', 
        height: '30%',
        backgroundColor: '#EEE',
        padding: 12, 
        borderRadius: 8
    };

    return (
        <div style={parte1}>
            <label htmlFor='titulo' style ={{display:'block', marginBottom: 4, textAlign: 'center', fontWeight: 'bold'}}>Profissionais de saúde</label>
        </div> 
    )
}


ReactDOM.render(
    <App />,
    document.querySelector("#root")
)