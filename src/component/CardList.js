import React, {Component} from 'react';
import {
  Drawer, List, Avatar, Divider, Col, Row, Button,
} from 'antd';
import NewM from './NewM';

const pStyle = {
  fontSize: 16,
  color: 'rgba(0,0,0,0.85)',
  lineHeight: '24px',
  display: 'block',
  marginBottom: 16,
};

const DescriptionItem = ({ title, content }) => (
  <div
    style={{
      fontSize: 14,
      lineHeight: '22px',
      marginBottom: 7,
      color: 'rgba(0,0,0,0.65)',
    }}
  >
    <p
      style={{
        marginRight: 8,
        display: 'inline-block',
        color: 'rgba(0,0,0,0.85)',
      }}
    >
      {title}:
    </p>
    {content}
  </div>
);

export default class CardList extends Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <NewM />
        <List
          dataSource={[
            {
              name: 'Jose',
              profesion: 'Contador',
              institucion: 'UNLAR',
              letra: 'C',
              numero: 147,
              tomo: 1,
              folio: 2,
              acta: 22,
            },
            {
              name: 'Juan',
              profesion: 'Licenciado en Admnistracion',
              institucion: 'UNLAR',
              letra: 'A',
              numero: 17,
              tomo: 1,
              folio: 1,
              acta: 12,
            },
            {
              name: 'Maria',
              profesion: 'Contador',
              institucion: 'UNLAR',
              letra: 'C',
              numero: 329,
              tomo: 1,
              folio: 13,
              acta: 329,
            },
            {
              name: 'Ana',
              profesion: 'Lic. en Economia',
              institucion: 'UNLAR',
              letra: 'E',
              numero: 14,
              tomo: 1,
              folio: 2,
              acta: 2,
            },
          ]}
          bordered
          renderItem={item => (
            <List.Item key={item.id} actions={[<Button onClick={this.showDrawer}>Ver</Button>]}>
              <List.Item.Meta
                avatar={
                  <Avatar src={`https://www.avatarapi.com/js.aspx?email=${item.name}@gmail.com&size=128`} />
                }
                title={item.name}
                letra={item.letra}
                numero={item.numero}
              />
            </List.Item>
          )}
        />
        <Drawer
          width={640}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p style={{ ...pStyle, marginBottom: 24 }}>Matriculado</p>
          <p style={pStyle}>Personal</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Nombre" content="Julio" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Account" content="AntDesign@example.com" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="City" content="HangZhou" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Country" content="China🇨🇳" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Birthday" content="February 2,1900" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Website" content="-" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Message"
                content="Make things as simple as possible but no simpler."
              />
            </Col>
          </Row>
          <Divider />
          <p style={pStyle}>Company</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Position" content="Programmer" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Responsibilities" content="Coding" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Department" content="AFX" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Skills"
                content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
              />
            </Col>
          </Row>
          <Divider />
          <p style={pStyle}>Contacts</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Email" content="AntDesign@example.com" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Phone Number" content="+86 181 0000 0000" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Github"
                content={(
                  <a href="http://github.com/ant-design/ant-design/">
                    github.com/ant-design/ant-design/
                  </a>
                )}
              />
            </Col>
          </Row>
        </Drawer>
      </div>
    );
  }
}