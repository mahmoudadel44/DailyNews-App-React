import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {handleLikes} from '../actions'
class LikesContainer extends Component {

    addLikes=(action)=>{
     const newLikes=(action)==='ADD'?[this.props.likes+1,this.props.dislikes]:
     [this.props.likes,this.props.dislikes+1]
    //  console.log(newLikes)
    this.props.handleLikes(newLikes,this.props.articleId,
        this.props.section,this.props.type)
    }
//     switch(action){
//         case 'ADD':
// return [this.props.likes+1,this.props.dislikes]
// case 'REMOVE':
//     return [this.props.likes,this.props.dislikes+1]
//     default:
//         return null;
//     }
//     }
    render() {
        return (
            <div>
            <div style={{textAlign:'center',color:'gray'}} className="mt-5">  How do you feel about this</div>
            <div className="addLikesWrapper">
              <div className="addLikesContainer"
              style={{display:'flex',alignItems:'center',justifyContent:'center',color:'gray'}}>
              <div className="btn like"
              onClick={()=>this.addLikes('ADD')}>
        <div className="hits">{this.props.likes}</div>
        <div className="icon"><i className="fa fa-thumbs-up"></i></div>
              </div>
              <div className="btn dislike"
              onClick={()=>this.addLikes('REMOVE')}>
        <div className="hits">{this.props.dislikes}</div>
        <div className="icon"><i className="fa fa-thumbs-down"></i></div>
              </div>
              </div>
            </div>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){

    return bindActionCreators({handleLikes},dispatch)
}

export default connect(null,mapDispatchToProps)(LikesContainer);