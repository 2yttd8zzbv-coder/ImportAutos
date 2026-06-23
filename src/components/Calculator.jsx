import { useState } from 'react'
import '../styles/Calculator.css'

const CONSTANTS = {
  FLETE: 1375,
  SEGURO: 100,
  IMPUESTO_MULTIPLICADOR: 0.65,
  GRUA: 300,
  NOTARIZACION: 20,
  AGENCIA_ADUANAL: 300,
  INSCRIPCION: 87,
  DEKRA: 22,
  OTROS: 435
}

export default function Calculator() {
  const [valorVehiculo, setValorVehiculo] = useState('')
  const [resultado, setResultado] = useState(null)

  const calcular = (e) => {
    e.preventDefault()
    
    const valor = parseFloat(valorVehiculo)
    
    if (isNaN(valor) || valor <= 0) {
      alert('Por favor ingresa un valor válido')
      return
    }

    // Cálculo según especificaciones
    const subtotalImpuestos = valor + CONSTANTS.FLETE + CONSTANTS.SEGURO
    const impuestos = subtotalImpuestos * CONSTANTS.IMPUESTO_MULTIPLICADOR

    const gastosAdicionales = 
      CONSTANTS.GRUA +
      CONSTANTS.NOTARIZACION +
      CONSTANTS.AGENCIA_ADUANAL +
      CONSTANTS.INSCRIPCION +
      CONSTANTS.DEKRA +
      CONSTANTS.OTROS

    const totalCosto = subtotalImpuestos + impuestos + gastosAdicionales

    setResultado({
      valorVehiculo: valor,
      subtotalImpuestos,
      impuestos,
      gastosAdicionales,
      totalCosto
    })
  }

  const limpiar = () => {
    setValorVehiculo('')
    setResultado(null)
  }

  return (
    <div className="calculator-container">
      <div className="calculator-card">
        <h1 className="title">🚗 ImportAutos</h1>
        <p className="subtitle">Calculadora de Importación de Vehículos a Costa Rica</p>

        <form onSubmit={calcular} className="form">
          <div className="form-group">
            <label htmlFor="valor">Valor del Vehículo (USD)</label>
            <div className="input-group">
              <span className="currency">$</span>
              <input
                type="number"
                id="valor"
                value={valorVehiculo}
                onChange={(e) => setValorVehiculo(e.target.value)}
                placeholder="Ingresa el valor"
                step="0.01"
                min="0"
              />
            </div>
          </div>

          <div className="button-group">
            <button type="submit" className="btn btn-primary">Calcular</button>
            <button type="button" onClick={limpiar} className="btn btn-secondary">Limpiar</button>
          </div>
        </form>

        {resultado && (
          <div className="results">
            <h2>Desglose de Costos</h2>
            
            <div className="result-item">
              <span>Valor del Vehículo:</span>
              <span className="amount">${resultado.valorVehiculo.toFixed(2)}</span>
            </div>

            <div className="divider"></div>

            <div className="section">
              <h3>Gastos Base (sujetos a impuestos)</h3>
              <div className="result-item">
                <span>Valor del Vehículo:</span>
                <span>${resultado.valorVehiculo.toFixed(2)}</span>
              </div>
              <div className="result-item">
                <span>Flete:</span>
                <span>${CONSTANTS.FLETE.toFixed(2)}</span>
              </div>
              <div className="result-item">
                <span>Seguro:</span>
                <span>${CONSTANTS.SEGURO.toFixed(2)}</span>
              </div>
              <div className="result-item total-item">
                <span>Subtotal:</span>
                <span>${resultado.subtotalImpuestos.toFixed(2)}</span>
              </div>
            </div>

            <div className="divider"></div>

            <div className="section">
              <h3>Impuestos (65% del subtotal)</h3>
              <div className="result-item highlight">
                <span>Impuestos:</span>
                <span className="amount">${resultado.impuestos.toFixed(2)}</span>
              </div>
            </div>

            <div className="divider"></div>

            <div className="section">
              <h3>Gastos Fijos Adicionales</h3>
              <div className="result-item">
                <span>Grúa:</span>
                <span>${CONSTANTS.GRUA.toFixed(2)}</span>
              </div>
              <div className="result-item">
                <span>Notarización:</span>
                <span>${CONSTANTS.NOTARIZACION.toFixed(2)}</span>
              </div>
              <div className="result-item">
                <span>Agencia Aduanal:</span>
                <span>${CONSTANTS.AGENCIA_ADUANAL.toFixed(2)}</span>
              </div>
              <div className="result-item">
                <span>Inscripción:</span>
                <span>${CONSTANTS.INSCRIPCION.toFixed(2)}</span>
              </div>
              <div className="result-item">
                <span>Dekra:</span>
                <span>${CONSTANTS.DEKRA.toFixed(2)}</span>
              </div>
              <div className="result-item">
                <span>Otros:</span>
                <span>${CONSTANTS.OTROS.toFixed(2)}</span>
              </div>
              <div className="result-item total-item">
                <span>Total Gastos Fijos:</span>
                <span>${resultado.gastosAdicionales.toFixed(2)}</span>
              </div>
            </div>

            <div className="divider"></div>

            <div className="result-item final">
              <span>💰 COSTO TOTAL DE IMPORTACIÓN</span>
              <span className="final-amount">${resultado.totalCosto.toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}