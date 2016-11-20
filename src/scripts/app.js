const Backbone = require('Backbone')
const $ = require('jquery')
const React = require('react')
const ReactDOM = require('react-dom')


let HomeView = React.createClass({
   render: function(){

      var legislatorStuff = this.props.legislatorData.map(function(userObj, i){
         return <div className="col-sm-4 legislators" key={i}>
               <div className="thumbnail">
               <div className="caption">
               <h4>{userObj.first_name} {userObj.last_name}</h4>
               <h5>{userObj.chamber} -- {userObj.party} - {userObj.state_name}</h5>
               <ul><li>email: {userObj.oc_email} </li><li>website: {userObj.website}</li><li>facebook: {userObj.facebook_id}</li><li>twitter: {userObj.twitter_id}</li></ul>
               <h7><strong>Term End {userObj.term_end}</strong></h7>
               </div>
               </div>
               </div>
      })

      return (
         <div className="row">{legislatorStuff}</div>
      )

   }
})


$.getJSON('https:congress.api.sunlightfoundation.com/legislators?apikey=fabace3492914d7a870a927d2351ae26').then(function(serverResp){

   ReactDOM.render(<HomeView legislatorData={serverResp.results}/>, document.querySelector('#app-container') )

})
