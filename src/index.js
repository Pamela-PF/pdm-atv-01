import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'

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

    let nomeMedicos = {
        medico1: 'José da Silva', 
        medico2: 'Maria da Silva', 
        medico3:'Jaqueline Mendes'
    }

    return (
        <div style={parte1}>
            <label htmlFor='titulo' style ={{display:'block', marginBottom: 4, textAlign: 'center', fontWeight: 'bold'}}>Profissionais de saúde</label>
            <div style ={{width: '100%', height: '75%', backgroundColor: '#EEE',
            borderRadius: 8, display: 'flex', border: 'solid lightgray', fontWeight:'bold'}}>
                <div className="parte3">

                </div>
                <div className="parte3">

                </div>
                <div className="parte3">

                </div>
            </div>
        </div> 
    )
}


ReactDOM.render(
    <App />,
    document.querySelector("#root")
)