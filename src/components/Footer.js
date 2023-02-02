import React from 'react'
import { ModalFooter } from 'react-bootstrap'

function Footer() {
    return (
        <>
        <div>
          <ModalFooter className="d-flex flex-row justify-content-center bg-info">
            <p><small>Copyright &copy; {new Date().getFullYear()}, PLANATABLY Nepal</small></p>
        </ModalFooter>
        </div>
        </>
    )
}

export default Footer
