<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Importación CR</title>

    <link rel="stylesheet" href="style.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
</head>

<body>

    <div class="container">

        <div class="header">
            <h1>🚗 Calculadora de Importación CR</h1>
            <p>Calcula el costo estimado de traer un vehículo desde Estados Unidos.</p>
        </div>

        <div class="card">

            <div class="input-group">
                <label>Valor del vehículo (USD)</label>
                <input
                    type="number"
                    id="vehiculo"
                    placeholder="Ejemplo: 5000"
                    oninput="calcular()">
            </div>

            <div class="results">

                <div class="row">
                    <span>Valor del vehículo</span>
                    <span id="valorVehiculo">$0.00</span>
                </div>

                <div class="row">
                    <span>Flete</span>
                    <span>$1,375.00</span>
                </div>

                <div class="row">
                    <span>Seguro</span>
                    <span>$100.00</span>
                </div>

                <div class="row">
                    <span>Base imponible</span>
                    <span id="base">$0.00</span>
                </div>

                <div class="row">
                    <span>Impuestos (65%)</span>
                    <span id="impuestos">$0.00</span>
                </div>

                <div class="row">
                    <span>Grúa</span>
                    <span>$300.00</span>
                </div>

                <div class="row">
                    <span>Agencia Aduanera</span>
                    <span>$300.00</span>
                </div>

                <div class="row">
                    <span>Inscripción</span>
                    <span>$87.00</span>
                </div>

                <div class="row">
                    <span>DEKRA</span>
                    <span>$22.00</span>
                </div>

                <div class="row">
                    <span>Otros</span>
                    <span>$435.00</span>
                </div>

            </div>

            <div class="total-box">
                <h3>Costo Total Estimado</h3>
                <h2 id="total">$0.00</h2>
            </div>

        </div>

        <div class="footer">
            Los impuestos se calculan sobre:
            Vehículo + Flete + Seguro.
        </div>

    </div>

    <script src="script.js"></script>

</body>
</html>

{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:'Inter',sans-serif;
    background:linear-gradient(135deg,#0f172a,#1e293b);
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:20px;
    color:white;
}

.container{
    width:100%;
    max-width:800px;
}

.header{
    text-align:center;
    margin-bottom:25px;
}

.header h1{
    font-size:2rem;
    margin-bottom:10px;
}

.header p{
    color:#cbd5e1;
}

.card{
    background:rgba(255,255,255,0.08);
    backdrop-filter:blur(15px);
    border:1px solid rgba(255,255,255,0.12);
    border-radius:24px;
    padding:30px;
    box-shadow:0 25px 50px rgba(0,0,0,.35);
}

.input-group{
    margin-bottom:25px;
}

.input-group label{
    display:block;
    margin-bottom:10px;
    font-weight:600;
}

.input-group input{
    width:100%;
    padding:16px;
    border:none;
    border-radius:15px;
    background:rgba(255,255,255,0.12);
    color:white;
    font-size:18px;
    outline:none;
}

.input-group input::placeholder{
    color:#94a3b8;
}

.results{
    margin-top:15px;
}

.row{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:14px 0;
    border-bottom:1px solid rgba(255,255,255,0.08);
}

.row span:last-child{
    font-weight:600;
}

.total-box{
    margin-top:25px;
    background:linear-gradient(135deg,#16a34a,#22c55e);
    padding:25px;
    border-radius:18px;
    text-align:center;
}

.total-box h3{
    margin-bottom:10px;
    font-weight:500;
}

.total-box h2{
    font-size:2.5rem;
    font-weight:800;
}

.footer{
    margin-top:20px;
    text-align:center;
    color:#cbd5e1;
    font-size:.9rem;
}

@media(max-width:600px){

    .row{
        font-size:14px;
    }

    .total-box h2{
        font-size:2rem;
    }

}
script.js

function formato(numero){
    return numero.toLocaleString('en-US',{
        style:'currency',
        currency:'USD'
    });
}

function calcular(){

    const vehiculo =
        parseFloat(document.getElementById('vehiculo').value) || 0;

    const flete = 1375;
    const seguro = 100;

    const grua = 300;
    const agencia = 300;
    const inscripcion = 87;
    const dekra = 22;
    const otros = 435;

    const base =
        vehiculo +
        flete +
        seguro;

    const impuestos =
        base * 0.65;

    const total =
        base +
        impuestos +
        grua +
        agencia +
        inscripcion +
        dekra +
        otros;

    document.getElementById('valorVehiculo').innerText =
        formato(vehiculo);

    document.getElementById('base').innerText =
        formato(base);

    document.getElementById('impuestos').innerText =
        formato(impuestos);

    document.getElementById('total').innerText =
        formato(total);
}

calcular();
