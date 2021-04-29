import React, { useState } from 'react'
import { Anchor } from 'antd'


const { Link } = Anchor;

function Nav() {
    // const [visible, setVisible] = useState(false)

    // const showDrawer = () => {
    //     setVisible(true)
    // }
    // const onClose = () => {
    //     setVisible(false)
    // }

    return (
        <div className="nav-container">
            <div className="header">
                <div className="mobile-hidden">
                    <Anchor>
                        <Link href="#home" title="Home" />
                        <Link href="#portfolio" title="Portfolio" />
                        <Link href="#about" title="About" />
                        <Link href="#contact" title="Contact" />
                    </Anchor>
                </div>
                {/* <div className="mobile-visible">
                    <Button type="primary" onClick={showDrawer}>
                        <i className="fas fa-bars"></i>
                    </Button>
                    <Drawer
                        placement="right"
                        closable={false}
                        onClose={onClose}
                        visible={visible}
                    >
                        <Anchor>
                            <Link href="#home" title="Home" />
                            <Link href="#about" title="About" />
                            <Link href="#projects" title="Projects" />
                            <Link href="#contact" title="Contact" />
                        </Anchor>
                    </Drawer>
                </div> */}
            </div>
        </div>
    )
}

export default Nav