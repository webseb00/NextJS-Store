import React, { useState } from 'react'
import { 
  Header,
  CartSidePanel,
  Footer
} from './index'
import { setConfiguration } from 'react-grid-system';

const Layout = ({ children }) => {

  setConfiguration({ maxScreenClass: 'xl' });

  const [cartPanel, setCartPanel] = useState(false)

  return (
    <>
      <CartSidePanel cartPanel={cartPanel} setCartPanel={setCartPanel} />
      <Header setCartPanel={setCartPanel} />
        <main className="main">{children}</main>
      <Footer />
    </>
  )
}

export default Layout