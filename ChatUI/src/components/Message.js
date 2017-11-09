import React from 'react';
import Messages from './Messages';

class Message extends React.Component {

  renderText()
  {
    const fromMe = this.props.fromMe ? 'from-me' : '';
    const message = JSON.parse(this.props.message)
    console.log(message);
    const buttonText = message.Button;
    const text = message.Text;
    if (text.length >= 1) {
      return (
        <span>
          {message.Text}
        </span>
      );
    };
  }

  render() {
    // Was the message sent by the current user. If so, add a css class
    const fromMe = this.props.fromMe ? 'from-me' : '';
    const message = JSON.parse(this.props.message)
    console.log(message);
    const buttonText = message.Button;
    console.log(buttonText);
    const text = message.Text;
    // const template = message.Template;
    // console.log(message.Button.length);
    // const buttons = (
    // 	for (let i = 0; i< message.Button.length; i++) {
    // 		if (message.Button.length) {
    // 			<button>
    //     			{message.Button}
    //   			</button>
    // 		}
    // 	});
    // const buttons = this.state.message.Button.map( function(buttonArr, i) {
    //   // const buttonArr = [];
    //   for (var i in message.Button) {
    //     return buttonArr.Button;
    //   }
    // });
    // const text = [];
    // if (message.Text !== 0) {
    //   text.push(message.Text);
    // }
    //
    const buttonTry =  [];
    if (message.Button) {
      console.log(buttonText.length);
      if (buttonText.length !== 0) {
        for (let i = 0; i < buttonText.length; i++ ) {
          buttonTry.push(message.Button[i]);
          console.log(buttonTry);
        }
      }
    }

    // const TextTry = [];
    // if (message.Text !== 'undefined') {
    //   console.log(message.Text);
    //   console.log(text.length);
    //   if (text.length >= 1) {
    //     TextTry.push(message.Text);
    //     console.log(TextTry);
    //   }
    // }

    // renderText()
    // {
    //   if (text.length >= 1) {
    //     return (
    //       <span>
    //         {message.Text}
    //       </span>
    //     );
    //   };
    // }

    // const TemplateTry = [];
    // if (template.length > 0) {
    //   TemplateTry.push(message.Template);
    // }

    // { this.props.message.map((buttonTry)=> {
    //   return buttonTry;
    // }) }

    return (
      <div className={`message ${fromMe}`}>
        <div className='username'>
          { this.props.username }
        </div>
        <div className='message-body'>
          { this.renderText() }
       </div>
       <div className='message-body'>
       { buttonTry.map(function(buttonTry1) {
         return buttonTry1;
       }) }
      </div>
      </div>
    );
  }

  renderElements(){

  }
}

Message.defaultProps = {
  message: '',
  username: '',
  fromMe: false
};

export default Message;
