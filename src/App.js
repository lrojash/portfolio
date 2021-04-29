import React from 'react'
import Nav from './components/Nav'

import 'antd/dist/antd.css'
import './styles/app.css'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'
import { Layout } from 'antd'
const { Header, Content } = Layout

function App() {
  return (
    <Layout className="mainLayout">
      <Header >
        <Nav />
      </Header>
      <Content >
        <Home />
        <Portfolio />
        <About />
        <Contact />
      </Content>
    </Layout>
  );
}

export default App;
