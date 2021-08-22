function Backdrop(props) {
    return <div className = 'backdrop' onClick = {props.onCancel}/>; //div has a pre-built onClick. We assign that to onCancel thats passed in
}

export default Backdrop