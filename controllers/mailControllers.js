const nodeMailer = require('nodemailer')

let transport = nodeMailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PWD
    },
    tls: {
        rejectUnauthorized: false
    }
})

let newsletter = `
<div style="background-image: url('https://i.imgur.com/ziBtGrl.jpg'); background-position: center; background-repeat: no-repeat; padding: 3rem">
    <p style="font-family: 'Kristi', cursive; font-size: 6rem; padding: 1rem; margin-bottom: 0;" >Hola Francesca</p>
    <h2 style="font-family: 'Montserrat', sans-serif; padding: 1rem; margin-left: 2rem; border-bottom: 1px solid black;">Gracias por suscribirte a nuestro newsletter...</h2>
    <p>En esta edición te traemos las últimas tendencias en el mundo de la decoración </p>
        <div style="border: 15px solid white; padding: 1rem; width: 40vw">
            <h4>Tonos neutros y claros</h4>
            <p>"Creo que en 2021 vamos a apostar por interiores mucho mas neutros; la tendencia en cuanto a tonalidades va a venir marcada por la necesidad de crear una sensación de bienestar en nuestras casas, con tonos tipo, beige, grises, negro y mucho, mucho blanco", explica Miriam Alía. Y si la abanderada de los colores vibrantes lo dice, es porque lo tiene más que claro. Eso sí, si tuviera que apostar por una nota de color, sería el naranja y los naranjas amarillentos o terracotas.</p>
        </div>
        <div style="border: 15px solid white; padding: 1rem; width: 40vw">
            <h4>Auge de la artesanía y los materiales naturales</h4>
            <p>"El año que viene, nos acercaremos a nosotros mismos y miraremos hacia adentro; lo importante es el bienestar y, por eso, necesitamos crear interiores acogedores y armónicos, y no para mostrarlos hacia afuera", continúa Pradés. Para conseguirlo, además de hacer uso de los tonos neutros, también cree que nos aliaremos con la artesanía: "Cada vez se revalorizará más lo hecho a mano", comenta, una tendencia que ya lleva un tiempo pegando fuerte. De hecho, materiales como el barro están demostrando que siguen pudiendo reinventarse con diseños de vanguardia, lejos de quedarse solo en su vertiente vernacular como veníamos advirtiendo desde hace un par de años.</p>
        </div>
        <div style="border: 15px solid white; padding: 1rem; width: 40vw">
            <h4>Textiles naturales: linos y lana bouclé</h4>
            <p>En el caso de los tejidos, Alía cree que seguirán reinando un año más los tejidos naturales, como los linos (a los integrantes de SinMas Studio, que también creen que serán tendencia, les fascinan los de dE.LENZO), el algodón y la ya casi omnipresente lana bouclé que hemos visto utilizar a grandes como Pierre Yovanovitch, Pierre Augustin Rose o Kelly Wearstler, y que incluso se ha colado en el catálogo de firmas españolas de diseño como Kave Home. Desde el punto de vista de Alía, encajan maravillosamente en estos nuevos espacios acogedores que se busca recrear, pues "aportan personalidad, pero, sobre todo, calidez".</p>
        </div>
        <div style="border: 15px solid white; padding: 1rem; width: 40vw">
            <h4>Verde saludable</h4>
            <p>En 2021, las plantas, complemento innegociable de la decoración de un tiempo a esta parte, continuarán prevalenciendo en interiores. Especialmente, ahora que apreciamos más que nunca la limpieza y pureza del aire. "Los espacios son diseñados para ser vividos; por ello, se llenarán de vida con plantas y flores que aporten frescura y vitalidad", apuntan desde SinMas Studio, que nos recuerdan sus múltiples beneficios para la salud, e incluso señalan que, colocadas en espacios de trabajo, aumentan el rendimiento. "El ficus lyrata y la monstera son de fácil mantenimiento y muy decorativas, mientras que los cactus son una apuesta segura", culmina la pareja de interioristas.</p>
        </div>
<<<<<<< HEAD
    <div>
=======
>>>>>>> 1b353add52a8af5f97851115e528e0b5015ae8a2
</div>
`

const mailControllers = {

    enviarMail: (req, res) => {
        const {destinatario, asunto, cuerpo} = req.body
        console.log(req.body)
        let mailOptions = {
            from: 'mindDeco',
            to: destinatario, 
            subject: asunto,
            html: newsletter,
        }

        transport.sendMail(mailOptions, (error) => {
            if(error)console.log(error)
            res.json({success: true})
        })
    }
}


module.exports = mailControllers