import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import imagem1 from './imagens/imagem1.jpg';

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
                    <img id='img' src={imagem1} />
                    <p style={{textAlign: 'center'}}>{nomeMedicos.medico1}</p>
                </div>
                <div className="parte3">
                    <img id='img' src={process.env.PUBLIC_URL + '/imagem2.jpg'}/>
                    <p style={{textAlign: 'center'}}>{nomeMedicos.medico2}</p>
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