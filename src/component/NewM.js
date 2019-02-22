import React, {Component} from 'react';
import {
    Button, Modal, Form, Input, Icon,
  } from 'antd';
import Images from './Images';
  
  const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends React.Component {
      render() {
        const {
          visible, onCancel, onCreate, form,
        } = this.props;
        const { getFieldDecorator } = form;
        return (
          <Modal
            visible={visible}
            title="Agregar nuevo matriculado"
            okText="Agregar"
            onCancel={onCancel}
            onOk={onCreate}
          >
            <Form layout="vertical">
             <Form.Item label="Nombre">
                {getFieldDecorator('nombre')(<Input size="small" />)}
              </Form.Item>
              
              <Form.Item label="Prefesion">
                {getFieldDecorator('Profesion')(<Input size="small" />)}
              </Form.Item>
              <Form.Item label="Institucion">
                {getFieldDecorator('Institucion')(<Input size="small" />)}
              </Form.Item>
              <Form.Item label="Letra">
                {getFieldDecorator('Letra')(<Input size="small" />)}
              </Form.Item>
              <Form.Item label="Numero">
                {getFieldDecorator('Numero')(<Input type='number' size="small" />)}
              </Form.Item>
             <Images />
            </Form>
          </Modal>
        );
      }
    }
  );
  
 export default class NewM extends Component {
    state = {
      visible: false,
    };
  
    showModal = () => {
      this.setState({ visible: true });
    }
  
    handleCancel = () => {
      this.setState({ visible: false });
    }
  
    handleCreate = () => {
      const form = this.formRef.props.form;
      form.validateFields((err, values) => {
        if (err) {
          return;
        }
  
        console.log('Received values of form: ', values);
        form.resetFields();
        this.setState({ visible: false });
      });
    }
  
    saveFormRef = (formRef) => {
      this.formRef = formRef;
    }
  
    render() {
      return (
        <div>
          <Button type="primary" onClick={this.showModal}><Icon type="plus" />Nuevo</Button>
          <CollectionCreateForm
            wrappedComponentRef={this.saveFormRef}
            visible={this.state.visible}
            onCancel={this.handleCancel}
            onCreate={this.handleCreate}
          />
        </div>
      );
    }
  }