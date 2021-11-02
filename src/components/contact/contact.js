import React from 'react'
import styled from 'styled-components';
import { Button } from '../Button';
import submitData from '../../config.js';
import { connect } from 'react-redux';
import updateModal from '../../redux/Action/modalAction';
export const FormInput = styled.input`
  padding: 0px 20px;
  margin: 5px;
  height:35px;
  width:${props => props.width};
  color: #fff;
  fontSize: 16px;
  // border: 2px solid #b2dfff;
  border:none;
  border-radius: 3px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  background-color: #0009;


  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #fff;
    opacity: 1; /* Firefox */
  }
  
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #fff;
  }
  
  ::-ms-input-placeholder { /* Microsoft Edge */
    color: #fff;
  }

  &:focus {
    outline: none;
    //border-color: #00b3ff;
    border-bottom:2px solid #fff
  }


`;
export const TextArea = styled.textarea`
  padding: 0px 20px;
  margin: 5px;
  min-height:150px;
  width:${props => props.width};
  color: #fff;
  fontSize: 16px;
  border: 2px solid #b2dfff;
  border-radius: 3px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  background-color: #0009;

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #fff;
    opacity: 1; /* Firefox */
  }
  
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #fff;
  }
  
  ::-ms-input-placeholder { /* Microsoft Edge */
    color: #fff;
  }

  &:focus {
    outline: none;
    border-color: #00b3ff;
  }

`;

export const  ContactCard  =  styled.div`
    display:grid;
    grid-template-columns: 50% 50%;
    //background-size: cover;
    //background-position: center;
    //background-image: url('${props => props.content}');
    fontSize: 24px;
    font-weight: bold;
    text-shadow: 0 0 10px rbga(0, 0, 0, 0.2);
    color: red;
    text-align: center;
    /* padding: 50px 0px;*/
    margin: 6px;
    //width:300px;
    height:100%;
    background: linear-gradient(to right, rgb(213, 133, 255) 0%, rgb(0, 255, 238) 100%);
    border-radius: 13px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

    @media (max-width: 1440px) {
      grid-template-columns: 50% 50%;
      
    }
    @media (max-width: 1200px) {
      grid-template-columns: 50% 50%;
      
    }
    @media (max-width: 1024px) {
     
        grid-template-columns: 50% 50%;
      
    }
    @media (max-width: 768px) {
        
      grid-template-columns: 100%;
      
    }
    @media (max-width: 480px) {
        grid-template-columns: 100%;
    }
      `;
    
  let data;
  let values={};
  //const modalCall = () => {
    //this.props.updateModal({"open":true,"content":""})}
  //} 
export class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []   
    };
  
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  
  handleSubmit = e => {
    e.preventDefault();
     data = new FormData(e.target);
     //value = e.target.value
    //console.log(data.get("username"))
    //console.log(data.get("password"))
//console.log(data)
//callData()
//console.log("this is excuted")
    for (let [key, value] of data) {
     // console.log(key +":"+ value);
      values[key]=value
     // console.log(values)
  }
  //console.log(val)
  
//console.log(values)
  submitData( values.name, values.email, values.subject, values.message );
  e.target.reset();
    //  this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log(values)
    //   }
    // })
//this is for the popup message
//this.props.updateModal({"open":true,"content":""});
//console.log("the props")
//console.log(this.props)

  };
    render() {

        return (

        <div
        style={{  "position": "relative",
            //"margin": "10px",
            //"padding": "20px",
            "width":"100%",
            // "height": "100px"
          }}
        >
                    <form onSubmit={this.handleSubmit}>
              <div style={{  "display": "flex",
            //"margin": "20px",
            "padding": "0",
            "overflow": "hidden",
           // "height": "400px",
            "width":"100%"}}>
                 <FormInput
                    name="name"
                    placeholder="Name"
                    width="49%"
                  />
                  <FormInput
                    name="email"
                    placeholder="Email"
                    type="email"
                    width="49%"
                  />
               </div>
                 <div style={{  "display": "flex",
            //"margin": "20px",
            "padding": "0",
            "overflow": "hidden",
           // "height": "400px",
            "width":"100%"}}>
                 <FormInput
                    name="subject"
                    placeholder="Subject"
                     width="100%"
                  />
                  </div>
                  <div style={{  "display": "flex",
            //"margin": "20px",
            "padding": "0",
            "overflow": "hidden",
           // "height": "400px",
            "width":"100%"}}>                 
                    <TextArea
                    name="message"
                    placeholder="Message"
                    width="100%"
                    multiple
                  />
                  </div>
        <Button primary type="submit">Send Mail</Button>
        </form>
        </div> 
        )
    }
}
const MapStateToProps = (state) => {
  return {
    modal: state.modal
};
};
const MapDispatchToProps = (dispatch) => {
  return{
    updateModal: (m)=> dispatch(updateModal(m))
  }
    
  
};
export default connect(MapStateToProps, MapDispatchToProps)(Contact);
