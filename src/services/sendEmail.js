import axios from 'axios'
import swal from 'sweetalert'

async function sendEmail (e, data) {

    e.preventDefault()

    const comments = data.comments
    const contact = data.contact
    const name = data.name
    console.log(data)
    try {
        const { data } = await axios.post('/send-email', {
            comments,
            contact,
            name
        })
        console.log(data)
        swal("Gracias", "Nos prondremos en contacto con usted pronto", "success");
    } catch (err) {
        console.log(err)
        swal("¡Oops...!", "Occurrio un error, intentelo mas tarde", "error");
    }
}

export default sendEmail