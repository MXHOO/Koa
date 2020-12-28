const schedule = require('node-schedule')
const mailer = require('nodemailer')
const { config } = require('process')

// 客户端配置
const customerConfig = {
  host: 'smtp.qq.com',
  port: 465,
  auth: {
    user: '1298948827@qq.com', // 发件人邮箱
    pass: 'ewwmhmhkwwuehhcb'
  }
}

// 发送邮件的内容
const mail = {
  from: '1298948827@qq.com', // 发件人
  subject: '测试内容', // 主题
  to: '1292633241@qq.com',
  text: '这是邮件内容', // 发送的邮件内容
  html: '' // 可以添加html标签
}

const transport = mailer.createTransport(customerConfig)

function sendMail(mail) {
  transport.sendMail(mail, (error, data) => {
    if(error) {
      return console.log(error)
    }
    console.log(data)
    transport.close()
  })
}
// sendMail(mail)

var j = schedule.scheduleJob('51 * * * *', function(){
  sendMail(mail)
  console.log('发送邮件结束')
})