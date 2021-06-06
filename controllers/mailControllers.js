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

const mailControllers = {

    enviarMail: (req, res) => {
        const {destinatario, asunto, nombre} = req.body
        console.log(nombre)
        let agradecimiento 

        if(asunto === 'newsletter'){
            agradecimiento = 'Gracias por suscribirte a nuestro newsletter'
            texto = '...donde cada semana te traemos las últimas novedades y tendencias en el mundo de la decoración '
            display = 'flex'
        } else {
            agradecimiento = 'Gracias por tu consulta'
            texto = 'En breve nos estaremos comunicando para responderte de manera personalizada.'
            display = 'none'
        }

        let mailOptions = {
            from: 'mindDeco@noreply.com',
            to: destinatario, 
            subject: asunto,
            html: `
            <div style="width: 70vw; background-color: #C9B687">
                <div style="display: flex; align-items: center; justify-content: space-between; background-color: #191D1F; padding: 2vh 5vw; color: white;">
                    <div style="display: flex; align-items: center; justify-content: space-between">
                        <p>HOGAR</p>
                        <p>|</p>
                        <p>TENDENCIAS</p>
                    </div>
                    <div style="text-align: center;">
                        <img src="https://images-ext-2.discordapp.net/external/Vi7JrfnNLdsNHI9_elXPrFXQ7fPXnAn-LvkCtpNoXJ8/https/i.ibb.co/N9yTJRY/logo.png?width=1025&height=276" style="width: 22%;" />
                    </div>
                    <div style="display: flex; align-items: center; justify-content: space-between">
                        <p>DECORACIÓN</p>
                        <p>|</p>
                        <p>INTERIORISMO</p>
                    </div>
                    </div>
                        <div width: 70vw; margin: 3vh auto; display: flex; flex-wrap: wrap; position: relative;>
                            <div style="width: 70vw; margin: 1vh auto; display: flex">
                                <div style="background-image: url('https://www.estiloydeco.com/wp-content/uploads/2019/04/color-terracota-decoracion-18.jpg'); width: 34vw; height: 40vh; background-position: center; background-repeat: no-repeat; background-size: cover; margin: 0.5vh; color: white">
                                    <h2 style="font-size: 1.5rem; padding-left: 1vw; padding-top: 1vw; font-family: verdana">Hola ${nombre}!!</h2>
                                    <h1 style="font-size: 1.5rem; padding-left: 1vw; font-family: arial; font-style: italic">${agradecimiento}</h1>
                                </div>
                                <div style="background-image: url('https://www.milideas.net/wp-content/uploads/color-terracota-4.jpg'); width: 34vw; height: 40vh; background-position: center; background-repeat: no-repeat; background-size: cover; margin: 0.5vh"></div>
                            </div>
                            <div style="width: 70vw; margin: 1vh auto; display: flex">
                                <div style="background-image: url('https://i.pinimg.com/736x/a8/92/23/a8922316194d73a8b66a20620a60a38f.jpg'); width: 34vw; height: 40vh; background-position: center; background-repeat: no-repeat; background-size: cover; margin: 0.5vh"></div>
                                <div style="; width: 34vw; height: 40vh;background-image: url('https://cdnm.westwing.com/image/upload/v1/contenthub/app/uploads/es/2019/12/02104843/deco-color-terracota.jpg'); background-color: #A64B4B; margin: 0.5vh; color: white; text-align: center">
                                    <p style="font-family: arial; font-size: 1.5rem; padding-top: 4rem; font-style: italic">${texto}</p>
                                </div>
                            </div>
                        </div>
                        <div style="background-color: #191D1F; display:${display}; width: 70vw; padding: 1vw; margin: 0.5vh 0">
                            <p style="color: white; margin-right: 35vw">¿Quieres dejar de recibir correos?</p>
                            <button style:"color: white; border-radius: 5px">ANULAR SUSCRIPCIÓN</button>
                        </div>
                        <div style="text-align: center; display:${display}">
                            <h5 style="font-size: 2rem; font-variant: small-caps">ESTAS SON LAS TENDENCIAS DE DECORACIÓN PARA 2021 (SEGÚN LOS EXPERTOS)</h5>
                            <p>Estas son las tendencias en decoración con las que decoraremos en 2021.</p>
                        </div>
                        <div style="display:${display}">
                            <div style="display: flex; width: 70vw; padding: 0.5vh 0.5vw">
                                <div style="width: 30vw">
                                    <h5 style="font-size: 1rem">Tonos neutros y cálidos</h5>
                                    <p style="text-align: justify">Creo que en 2021 vamos a apostar por interiores mucho mas neutros; la tendencia en cuanto a tonalidades va a venir marcada por la necesidad de crear una sensación de bienestar en nuestras casas, con tonos tipo, beige, grises, negro y mucho, mucho blanco", explica Miriam Alía. Y si la abanderada de los colores vibrantes lo dice, es porque lo tiene más que claro. Eso sí, si tuviera que apostar por una nota de color, sería el naranja y los naranjas amarillentos o terracotas.</p>
                                </div>
                                <div style="background-image: url('https://cdn.discordapp.com/attachments/847145463417143341/850555519508414464/c4e92ce32a87b0228305e91decfe99ba.png'); width: 50vw; height: 50vh; background-size: cover; background-position: center; background-repeat: no-repeat">
                                </div>
                            </div>
                            <div style="display: flex; width: 70vw; padding: 0.5vh 0.5vw">
                                <div style="background-image: url('https://cdn.discordapp.com/attachments/847145463417143341/850555519508414464/c4e92ce32a87b0228305e91decfe99ba.png'); width: 50vw; height: 50vh; background-size: cover; background-position: center; background-repeat: no-repeat; margin: 0 1vw">
                                </div>
                                <div style="width: 30vw">
                                    <h5 style="font-size: 1rem">Auge de la artesanía y los materiales naturales</h5>
                                    <p "text-align: justify">El año que viene, nos acercaremos a nosotros mismos y miraremos hacia adentro; lo importante es el bienestar y, por eso, necesitamos crear interiores acogedores y armónicos, y no para mostrarlos hacia afuera", continúa Pradés. Para conseguirlo, además de hacer uso de los tonos neutros, también cree que nos aliaremos con la artesanía: "Cada vez se revalorizará más lo hecho a mano", comenta, una tendencia que ya lleva un tiempo pegando fuerte.</p>
                                </div>  
                            </div>
                            <div style="display: flex; width: 70vw; padding: 0.5vh 0.5vw">
                                <div style="width: 30vw">
                                    <h5 style="font-size: 1rem">Textiles naturales: linos y lana bouclé</h5>
                                    <p "text-align: justify">En el caso de los tejidos, Alía cree que seguirán reinando un año más los tejidos naturales, como los linos (a los integrantes de SinMas Studio, que también creen que serán tendencia, les fascinan los de dE.LENZO), el algodón y la ya casi omnipresente lana bouclé que hemos visto utilizar a grandes como Pierre Yovanovitch, Pierre Augustin Rose o Kelly Wearstler, y que incluso se ha colado en el catálogo de firmas españolas de diseño como Kave Home. Desde el punto de vista de Alía, encajan maravillosamente en estos nuevos espacios acogedores que se busca recrear, pues "aportan personalidad, pero, sobre todo, calidez..</p>
                                </div>
                                <div style="background-image: url('https://cdn.discordapp.com/attachments/847145463417143341/850555519508414464/c4e92ce32a87b0228305e91decfe99ba.png'); width: 50vw; height: 50vh; background-size: cover; background-position: center; background-repeat: no-repeat">
                                </div>
                            </div>
                            <div style="display: flex; width: 70vw; padding: 0.5vh 0.5vw">
                                <div style="background-image: url('https://cdn.discordapp.com/attachments/847145463417143341/850555519508414464/c4e92ce32a87b0228305e91decfe99ba.png'); width: 50vw; height: 50vh; background-size: cover; background-position: center; background-repeat: no-repeat ; margin: 0 1vw">
                                </div>
                                <div style="width: 30vw">
                                    <h5 style="font-size: 1rem">Minimalismo de líneas curvas</h5>
                                    <p "text-align: justify">Las tendencias recogidas encajan perfectamente en el nuevo minimalismo cálido y sentimental, tan diferente del de los 90, frío y racional. El mismo busca purificar la casa reduciendo los elementos al mínimo y en él, los materiales y colores, como ya adelantábamos, tienen mucho que decir: los primeros son naturales y sin alterar (ya sean mohair o cemento), los segundos, reducidos del blanco al arena.</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
 `,
        }
    
   

let newsletter = `
<div style="width: 70vw; background-color: #C9B687">
<div style="display: flex; align-items: center; justify-content: space-between; background-color: #191D1F; padding: 2vh 5vw; color: white;">
    <div style="display: flex; align-items: center; justify-content: space-between">
        <p>HOGAR    |    TENDENCIAS</p>
    </div>
    <div style="text-align: center;">
        <img src="https://images-ext-2.discordapp.net/external/Vi7JrfnNLdsNHI9_elXPrFXQ7fPXnAn-LvkCtpNoXJ8/https/i.ibb.co/N9yTJRY/logo.png?width=1025&height=276" style="width: 22%;" />
    </div>
    <div style="display: flex; align-items: center; justify-content: space-between">
        <p>DECORACIÓN    |    INTERIORISMO</p>
    </div>
</div>
    <div width: 70vw; margin: 3vh auto; display: flex; flex-wrap: wrap; position: relative;>
        <div style="width: 70vw; margin: 1vh auto; display: flex">
            <div style="background-image: url('https://www.estiloydeco.com/wp-content/uploads/2019/04/color-terracota-decoracion-18.jpg'); width: 34vw; height: 40vh; background-position: center; background-repeat: no-repeat; background-size: cover; margin: 0.5vh; color: white">
                <h2 style="font-size: 1.5rem; padding-left: 1vw; padding-top: 1vw; font-family: verdana">Hola ${nombre}!!</h2>
                <h1 style="font-size: 1.5rem; padding-left: 1vw; font-family: arial; font-style: italic">${agradecimiento}</h1>
            </div>
            <div style="background-image: url('https://www.milideas.net/wp-content/uploads/color-terracota-4.jpg'); width: 34vw; height: 40vh; background-position: center; background-repeat: no-repeat; background-size: cover; margin: 0.5vh"></div>
        </div>
        <div style="width: 70vw; margin: 1vh auto; display: flex">
            <div style="background-image: url('https://i.pinimg.com/736x/a8/92/23/a8922316194d73a8b66a20620a60a38f.jpg'); width: 34vw; height: 40vh; background-position: center; background-repeat: no-repeat; background-size: cover; margin: 0.5vh"></div>
            <div style="; width: 34vw; height: 40vh;background-image: url('https://cdnm.westwing.com/image/upload/v1/contenthub/app/uploads/es/2019/12/02104843/deco-color-terracota.jpg'); background-color: #A64B4B; margin: 0.5vh; color: white; text-align: center">
                <p style="font-family: arial; font-size: 1.5rem; padding-top: 4rem; font-style: italic">...donde cada semana te traemos las últimas novedades y tendencias en el mundo de la decoración </p>
            </div>
        </div>
    </div>
    <div style="background-color: #191D1F; display:flex; width: 70vw; padding: 1vw; margin: 0.5vh 0">
        <p style="color: white; margin-right: 35vw">¿Quieres dejar de recibir correos?</p>
        <button style:"color: white; border-radius: 5px">ANULAR SUSCRIPCIÓN</button>
    </div>
    <div style="text-align: center">
        <h5 style="font-size: 2rem; font-variant: small-caps">ESTAS SON LAS TENDENCIAS DE DECORACIÓN PARA 2021 (SEGÚN LOS EXPERTOS)</h5>
        <p>Estas son las tendencias en decoración con las que decoraremos en 2021.</p>
    </div>
    <div>
        <div style="display: flex; width: 70vw; padding: 0.5vh 0.5vw">
            <div style="width: 30vw">
                <h5 style="font-size: 1rem">Tonos neutros y cálidos</h5>
                <p style="text-align: justify">Creo que en 2021 vamos a apostar por interiores mucho mas neutros; la tendencia en cuanto a tonalidades va a venir marcada por la necesidad de crear una sensación de bienestar en nuestras casas, con tonos tipo, beige, grises, negro y mucho, mucho blanco", explica Miriam Alía. Y si la abanderada de los colores vibrantes lo dice, es porque lo tiene más que claro. Eso sí, si tuviera que apostar por una nota de color, sería el naranja y los naranjas amarillentos o terracotas.</p>
            </div>
            <div style="background-image: url('https://cdn.discordapp.com/attachments/847145463417143341/850555519508414464/c4e92ce32a87b0228305e91decfe99ba.png'); width: 50vw; height: 50vh; background-size: cover; background-position: center; background-repeat: no-repeat">
            </div>
        </div>
        <div style="display: flex; width: 70vw; padding: 0.5vh 0.5vw">
            <div style="background-image: url('https://cdn.discordapp.com/attachments/847145463417143341/850555519508414464/c4e92ce32a87b0228305e91decfe99ba.png'); width: 50vw; height: 50vh; background-size: cover; background-position: center; background-repeat: no-repeat; margin: 0 1vw">
            </div>
            <div style="width: 30vw">
                <h5 style="font-size: 1rem">Auge de la artesanía y los materiales naturales</h5>
                <p "text-align: justify">El año que viene, nos acercaremos a nosotros mismos y miraremos hacia adentro; lo importante es el bienestar y, por eso, necesitamos crear interiores acogedores y armónicos, y no para mostrarlos hacia afuera", continúa Pradés. Para conseguirlo, además de hacer uso de los tonos neutros, también cree que nos aliaremos con la artesanía: "Cada vez se revalorizará más lo hecho a mano", comenta, una tendencia que ya lleva un tiempo pegando fuerte.</p>
            </div>  
        </div>
        <div style="display: flex; width: 70vw; padding: 0.5vh 0.5vw">
            <div style="width: 30vw">
                <h5 style="font-size: 1rem">Textiles naturales: linos y lana bouclé</h5>
                <p "text-align: justify">En el caso de los tejidos, Alía cree que seguirán reinando un año más los tejidos naturales, como los linos (a los integrantes de SinMas Studio, que también creen que serán tendencia, les fascinan los de dE.LENZO), el algodón y la ya casi omnipresente lana bouclé que hemos visto utilizar a grandes como Pierre Yovanovitch, Pierre Augustin Rose o Kelly Wearstler, y que incluso se ha colado en el catálogo de firmas españolas de diseño como Kave Home. Desde el punto de vista de Alía, encajan maravillosamente en estos nuevos espacios acogedores que se busca recrear, pues "aportan personalidad, pero, sobre todo, calidez..</p>
            </div>
            <div style="background-image: url('https://cdn.discordapp.com/attachments/847145463417143341/850555519508414464/c4e92ce32a87b0228305e91decfe99ba.png'); width: 50vw; height: 50vh; background-size: cover; background-position: center; background-repeat: no-repeat">
            </div>
        </div>
        <div style="display: flex; width: 70vw; padding: 0.5vh 0.5vw">
            <div style="background-image: url('https://cdn.discordapp.com/attachments/847145463417143341/850555519508414464/c4e92ce32a87b0228305e91decfe99ba.png'); width: 50vw; height: 50vh; background-size: cover; background-position: center; background-repeat: no-repeat ; margin: 0 1vw">
            </div>
            <div style="width: 30vw">
                <h5 style="font-size: 1rem">Minimalismo de líneas curvas</h5>
                <p "text-align: justify">Las tendencias recogidas encajan perfectamente en el nuevo minimalismo cálido y sentimental, tan diferente del de los 90, frío y racional. El mismo busca purificar la casa reduciendo los elementos al mínimo y en él, los materiales y colores, como ya adelantábamos, tienen mucho que decir: los primeros son naturales y sin alterar (ya sean mohair o cemento), los segundos, reducidos del blanco al arena.</p>
            </div>
            
        </div>
    </div>
</div>
 `
// let respuestaConsulta= `
// <div style="background-image: url('https://i.imgur.com/hhQ2eHh.jpg'); background-position: center; background-repeat: no-repeat; padding: 3rem">
//     <p style="font-family: 'Kristi', cursive; font-size: 6rem; padding: 1rem; margin-bottom: 0;" >Bienvenidos al sector consulta </p>
//     <h2 style="font-family: 'Montserrat', sans-serif; padding: 1rem; margin-left: 2rem; border-bottom: 1px solid black;">Gracias por escribirnos.</h2>
//     <p>En breve nos estaremos comunicando para responderte de manera personalizada. </p>
//         <div style="border: 15px solid white; padding: 1rem; width: 40vw">
//             <h4></h4>
//             <p>"Estamos a disposicion de manera virtual con nuestro clientes , para que lleven la mejor atencion y productos"</p>
//         </div>
//         <div style="border: 15px solid white; padding: 1rem; width: 40vw">
//             <h4>MindDeco</h4>
          
//         </div>
//     <div>
// </div>
// `
        transport.sendMail(mailOptions, (error) => {
            if(error)console.log(error)
            res.json({success: true})
        })
    }
}



module.exports = mailControllers

