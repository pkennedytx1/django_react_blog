import React from 'react';
import { Form, Input, Button } from 'antd';

class CustomForm extends React.Component {

    handleFormSubmit = (e) => {
        e.preventDefault()
        const title = e.target.elements.title.value
        const content = e.target.elements.content.value
        console.log('hello')
    }

    render() {
        return (
          <div>
            <Form onSubmit={this.handleFormSubmit}>
              <Form.Item label="Title">
                <Input name='title' placeholder="Please Place Title Here" />
              </Form.Item>
              <Form.Item label="Content">
                <Input name='content' placeholder="Article Content Goes Here" />
              </Form.Item>
              
                <Button onClick={console.log('hello')} type='primary' htmlType="submit">Submit</Button>
            </Form>
          </div>
        );
    };
}

export default CustomForm
