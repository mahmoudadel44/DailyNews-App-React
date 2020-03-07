import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {selectedNews,clearSelectedNews} from '../actions'
import SelectedNews from '../components/home/selectednews'
 class News extends Component {
     componentWillMount(){
         this.props.selectedNews(this.props.match.params.id)
         window.scrollTo(0, 0);
     }
     componentWillUnmount(){
        this.props.clearSelectedNews()
        window.scrollTo(0, 0);
    }
    render(){
    return (
        <div>
<SelectedNews select={this.props.articles.selected}/>

        </div>
    )
}
 }
function mapStateToProps(state){
    console.log(state)
    return{
       articles:state.articles
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({selectedNews,clearSelectedNews},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(News);