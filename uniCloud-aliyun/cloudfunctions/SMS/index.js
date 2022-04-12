// 发送单条短信示例
'use strict';
exports.main = async (event, context) => {
  try {
    const res = await uniCloud.sendSms({
      appid: '__UNI__xxxxxxx',
      smsKey: '****************',
      smsSecret: '****************',
      phone: '19533284579',
      templateId: 'uni_sms_test', // 请替换为自己申请的模板id
      data: {
        name: 'DCloud',
        code: '123456',
        action: '注册',
        expMinute: '3',
      }
    })
    // 调用成功，请注意这时不代表发送成功
    return res
  } catch(err) {
    // 调用失败
    console.log(err.errCode)
    console.log(err.errMsg)
    return {
      code: err.errCode,
      msg: err.errMsg
    }
  }
};