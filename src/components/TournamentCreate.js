import React from "react";
import Iframe from "./Iframe";
import { connect } from 'react-redux';


import { loadSubmission } from "../actions";

class TournamentCreate extends React.Component {
   //BURADAN  FORM/FORMLAR OLUŞTURABİLİYORUM. JS iLE
   //BU IFRAME DE DOLDURULMUŞ SUBMİSSİON VERLİERİNİ JOTFORMDAN ALIP BURDAKİ JSON A YAZMAM LAZIM
   
   constructor(props) {
      super(props);
      this.state = {
         src: "https://form.jotform.com/92181413902956"
      };

      this.handleIframeMessage = this.handleIframeMessage.bind(this);
   }

   componentDidMount() {
      window.addEventListener("message", this.handleIframeMessage, false);
   }

   componentWillUnmount() {
      window.removeEventListener("message", this.handleIframeMessage, false);
   }



   
   handleIframeMessage(e) {

      if (
         typeof e.data === "object" &&
         e.data.action &&
         e.data.action === "submission-completed"
      ) {
         window.scrollTo(0, 0);
         this.props.loadSubmission();   
      }
   }

   render() {

      return (<div ><Iframe source={this.state.src} /></div>);
   }
}


const mapStateToProps = ({ isLoading, images, error, imageStats }) => ({
   isLoading,
   images,
   error,
   imageStats,
});

const mapDispatchToProps = dispatch => ({
   loadSubmission: () => dispatch(loadSubmission()),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TournamentCreate);



