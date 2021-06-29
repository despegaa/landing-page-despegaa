import React, { useState } from 'react'
import service from '../../services/sendEmail'

function Form () {


    const [appState, setAppState] = useState({
        comments: null,
        contact: null,
        name: null
      })
    
    
      function getFieldData (e, field) {
    
        setAppState(() => {
            return {
                ...appState,
                [field]: e.target.value
            }
        })
      }

    return (
        <section className="form-contact headline" id="contact">
            <form onSubmit={(e) => service(e, appState)}>
                <h4>¡Contactanos!</h4>
                <label htmlFor="fullname">Nombre Completo</ label>
                <input required onChange={(e) => getFieldData(e, 'name')} className="controls" type="text" name="fullname" id="fullName" placeholder="Ingresa tu nombre completo"/>
                <label htmlFor="contact">Metodo de contacto</ label>
                <input required onChange={(e) => getFieldData(e, 'contact')} className="controls" type="text" name="contact" id="contact" placeholder="Email, WhatsApp, Message, numero de telefono"/>
                <label htmlFor="comments">Mensaje</ label>
                <textarea required onChange={(e) => getFieldData(e, 'comments')} className="controls" rows="5" placeholder="Ingresa tu mensaje" />
                <input className="botons" type="submit" value="Send"/>
            </form>
        </section>
    )
}

export default Form