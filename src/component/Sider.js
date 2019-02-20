import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import './Sider.css'

const { Header, Sider, Footer, Content } = Layout;



class SiderDemo extends Component {

  render() {
    return (
        <Layout>
        <Sider style={{
          overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
        }}
        >
          <div className="logo" style = {{
              height: '32px',
              background: 'rgba(255,255,255,.2)',
              margin: '16px'
          }} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
              <Icon type="exception" />
              <span className="nav-text">Certificacion</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="solution" />
              <span className="nav-text">Matriculacion</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="shop" />
              <span className="nav-text">Caja</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="bar-chart" />
              <span className="nav-text">Reportes</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="setting" />
              <span className="nav-text">Herramientas</span>
            </Menu.Item>
            
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
              ...
              <br />
              Really
              <br />...<br />...<br />...<br />
              long
              <br />...<br />...<br />...<br />...<br />...<br />...
              <br />...<br />...<br />...<br />...<br />...<br />...
              <br />...<br />...<br />...<br />...<br />...<br />...
              <br />...<br />...<br />...<br />...<br />...<br />...
              <br />...<br />...<br />...<br />...<br />...<br />...
              <br />...<br />...<br />...<br />...<br />...<br />...
              <br />...<br />...<br />...<br />...<br />...<br />
              content
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Todos los derechos reservados 2019 Deeploy &copy;
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default SiderDemo;

