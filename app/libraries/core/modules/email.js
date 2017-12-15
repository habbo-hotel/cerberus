import Mail from 'nodemailer'

export default class Email
{

  constructor (who, content)
  {
    Mail.createTestAccount((e, a) => {

      let transporter = Mail.createTransport({
          host: 'smtp.zoho.com',
          port: 465,
          secure: true,
          auth: {
              user: 'cerberus@zoho.com',
              pass: 'passwordLOL'
          }
      })

      let mailOptions = {
          from          : '"Cerberus Automation System 👻" <cerberus@zoho.com>',
          to            : who,
          subject       : 'Welcome to Cerberus Administration',
          text          : content,
          html          : content
      }

      transporter.sendMail(mailOptions, (e, i) => {
        if (e)
        {
          console.log(e)
        }
        else
        {
          console.log(i.response)
        }
      })
    })
  }

}
