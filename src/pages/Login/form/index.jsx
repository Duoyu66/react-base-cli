import React from 'react';
import { Button, Checkbox, Form, Input,message } from 'antd';
import {login} from "@/api/user";
const Former = () => {
    const onFinish =async ({mobile,code}) => {
        // console.log('Success:', values);
        this.setState({
            loading:true
        })
  try {
      const res = await login(mobile,code)
      //保存token
      localStorage.setItem('token',res.data.token)
      //跳转到首页
      this.props.history.push('/home');
      alert("登陆成功！")
      console.log(res)
  }catch (error){
      console.log(error)
      message.warning(error.response.data.message)
  }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            name="basic"
            labelCol={{
                span: 6,
            }}
            wrapperCol={{
                span: 18,
            }}
            // initialValues={{
            //     remember:false,
            // }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            initiaValues={{
                mobile: '13811111111',
                code: '295692',
                agree: true,
                remeber: true
            }
            }
        >
            <Form.Item
                label="手机号"
                name="mobile"
                validateTrigger={['onChange']}
                rules={[
                    {
                        required: true,
                        message: '手机号不能为空！',

                    },
                    {
                        pattern:/^1[3-9]\d{9}$/,
                        message:'手机号格式错误！',

                    }
                ]}
            >
                <Input placeholder="请输入手机号" autoComplete="off" />
            </Form.Item>

            <Form.Item
                label="验证码"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password  placeholder="请输入验证码" autoComplete="off" />
            </Form.Item>

            <Form.Item
                name="agree"
                valuePropName="checked"
                rules={[
                    {
                        validator(rule,value){
                            if (value){
                                return Promise.resolve();
                            }else {
                                return Promise.reject(new Error('请阅读并同意隐私条款'));
                            }
                        }
                    }
                ]}
                wrapperCol={{
                    offset: 6,
                    span: 18,
                }}
            >
                <Checkbox>我已阅读并同意隐私条款和用户协议</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button  type="primary" block htmlType="submit">
                    登录
                </Button>

            </Form.Item>
        </Form>

    );


};

export default Former;