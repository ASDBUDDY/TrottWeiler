import React from 'react'


class ButtonCross extends React.Component{
    render(){
        return(
            <div className="Button-box">
        <button>{this.props.name}</button>
    </div>
        )
    }
}
export default ButtonCross