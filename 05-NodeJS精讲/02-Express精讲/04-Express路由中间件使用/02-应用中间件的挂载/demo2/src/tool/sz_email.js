const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: 'smtp.qq.com', // QQ邮箱主机名, 网易邮箱是: smtp.163.com
    secureConnection: true, // use SSL
    port: 465,
    secure: true, // secure:true 对应 port 465, secure:false 对应 port 587
    auth: {
        user: '501562071@qq.com',
        pass: 'urqgcyffghzibjhb' // QQ邮箱需要使用授权码, 163邮箱使用密码
    }
})

function sendMail(toUser, title, content) {
    // 设置邮件内容（谁发送什么给谁）
    let mailOptions = {
        from: '"撩课Sz" <501562071@qq.com>', // 发件人
        to: toUser, // 收件人, 多人通过, 分割
        subject: title, // 主题
        // text: '赶紧过来查', // plain text body 和下方html字段取其一
        html: content, // html body
        // 下面是发送附件，不需要就注释掉
        attachments: [
            {
                filename: '错误报告.txt',
                content
            }
        ]
    };

    transporter.sendMail(mailOptions).then(result=>{
        console.log(`Message: ${result.messageId}`);
        console.log(`sent: ${result.response}`);
    })
}


module.exports = {
    sendMail
}