import { useState } from "react";
import './index.css'

const Dados = () => {
    let [peso, setPeso] = useState(0);
    let [altura, setAltura] = useState(0);
    let [resultado, setResultado] = useState('');

    function calcIMC (){
        const conversao = altura / 100;
        const imc = (peso / (conversao * conversao)).toFixed(1);

        if (imc >= 40) return setResultado('Obesidade III');
        if (imc >= 35) return setResultado('Obesidade II');
        if (imc >= 30) return setResultado('Obesidade I');
        if (imc >= 25) return setResultado('Sobrepeso');
        if (imc >= 18.5) return setResultado ('Peso normal');
        if (imc < 18.5) return setResultado('Abaixo do peso');
    }

    return (
        <div className="container-input">
            <input onChange={evento=> setPeso(evento.target.valueAsNumber)} type="number" placeholder="Peso (kg)"/>
            <input onChange={evento=> setAltura(evento.target.valueAsNumber)} type="number" placeholder="Altura (cm)"/>
            <div className="container-result">
                <button onClick={calcIMC}>Calcular</button> <br/>
                <span>Você está: <strong>{resultado}</strong></span>
            </div>

            </div>

    )
    }

    export default Dados