import React from 'react';
import Modal from 'react-modal';

export default function CustomDivWithModal(props) {

    // Get the component Children
    const childrenElements = React.Children.toArray(props.children)
    
    const {divText, modalTitle} = props;
    const [modalIsOpen, setIsOpen] = React.useState(false);
        
    // React Component: http://reactcommunity.org/react-modal/
    const modalStyle = {
        overlay: {
            // position: 'absolute',
            // top: '95px',
            // bottom: '70px',
            // left: '50%',
            // marginLeft: '35px',
            // marginRight: 'auto',
            // transform: 'translate(-50%, -0%)',
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            // border: 'none',
        },
        content: {
            // position: 'absolute',
            // top: '0px',
            // left: '0px',
            // right: '0px',
            // bottom: '0px',
            background: '#000000',
            // overflow: 'auto',
            // WebkitOverflowScrolling: 'touch',
            // padding: '10px',
            // border: 'none',
        }
    };
    
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <h1>Custom Div With Modal</h1> {/* TODO: remove */}
            <div onClick={openModal}>{divText ?? "Set Div Text"}</div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel={modalTitle ?? "Set Modal Title" }
                style={modalStyle}
            >
                <button onClick={closeModal}>close</button>
                <h1>{modalTitle ?? "Set Modal Title" }</h1>
                <hr/>
                <div>
                    {childrenElements}
                </div>
            </Modal>
        </div>
    );
}
