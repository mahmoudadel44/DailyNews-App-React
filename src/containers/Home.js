import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {latestNews,otherNews,latestGallery} from '../actions/index'
import LatestNews from '../components/home/latsetnews'
import OtherNews from '../components/home/othernews'
import Gallery from '../components/home/gallery'
 class Home extends Component {
     componentDidMount(){
         this.props.latestNews();
         this.props.otherNews();
         this.props.latestGallery();

     }
    render() {
        return (
<div>
                <LatestNews latest={this.props.articles.latest} />
                <OtherNews other={this.props.articles.other}/>
                <Gallery  gallery={this.props.galleries.gallery}/>
            </div>
        )
    
}
    }
function mapStateToProps(state){
    console.log('latestNews',state)
    // console.log('otherNews',state)
    // console.log('gallery',state)
    return{
        articles:state.articles,
        galleries:state.galleries
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews,otherNews,latestGallery},dispatch)
}

export default  connect(mapStateToProps,mapDispatchToProps)(Home);