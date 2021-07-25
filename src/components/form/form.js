import React, { useState } from 'react'
import service from '../../services/sendEmail'
import methodContact from '../../utils/methodContact'

function Form() {
  const [appState, setAppState] = useState({
    comments: null,
    name: null,
    contact: null,
  })

  const [selectMethodContact, setSelectMethodContact] = useState(
    'Seleciona metodo de contacto'
  )

  function getFieldData(e, field) {
    setAppState(() => {
      return {
        ...appState,
        [field]: e.target.value,
      }
    })
  }

  function changeMethod(event) {
    setSelectMethodContact(() => {
      return event.target.value
    })
  }

  return (
    <section className="form-contact headline" id="contact">
      <form id="form" onSubmit={(e) => service(e, appState)}>
        <h4>¡Contactanos!</h4>
        <label htmlFor="fullname">Nombre Completo</label>
        <input
          required
          onChange={(e) => getFieldData(e, 'name')}
          className="controls"
          type="text"
          name="fullname"
          id="fullName"
          placeholder="Ingresa tu nombre completo"
        />

        <label htmlFor="contact">Metodo de contacto</label>
        <select
          id="contact"
          onChange={changeMethod}
          value={selectMethodContact}
          className="select-method"
        >
          <option value="Seleciona metodo de contacto">
            Seleciona metodo de contacto
          </option>
          <option value="Numero de telefono">Numero de telefono</option>
          <option value="Email">Email</option>
        </select>

        {methodContact(
          selectMethodContact,
          getFieldData,
          appState,
          setAppState
        )}

        <label htmlFor="comments">Mensaje</label>
        <textarea
          required
          onChange={(e) => getFieldData(e, 'comments')}
          className="controls"
          rows="5"
          placeholder="Ingresa tu mensaje"
        />
        <input className="botons" type="submit" value="Send" />
      </form>
    </section>
  )
}

export default Form
