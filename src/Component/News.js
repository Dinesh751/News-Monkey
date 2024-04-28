import React, { Component } from 'react'
import NewsItem from "./NewsItem"

import PropTypes from "prop-types"
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';

export class News extends Component {

    static defaultProps={
         country:"in",
         pageSize:6,
         category:"general"


    }
    static propTypes={
      country:PropTypes.string,
      pageSize:PropTypes.number,
      category:PropTypes.string
      
    }

    constructor(props){
        super(props);
        this.state={
           articles:[],
           loading:true,
           page:1,
           totalResults:0

        }
        document.title=`${this.props.category} - NewsMonkey`

    }
  
    
    async componentDidMount(){
      this.setState({loading:true})
      let url=` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=df9b627ab7cc4a6ab922ea2dfd45d26f&page=${this.state.page}&pageSize=${this.props.pageSize}`
      let data= await fetch(url);
     let parseData=await data.json();
      this.setState({articles: parseData.articles,totalResults:parseData.totalResults, loading:false})
     

    }
    fetchMoreData = async() => {
    
      this.setState({loading:true})
      let url=` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=df9b627ab7cc4a6ab922ea2dfd45d26f&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
      let data= await fetch(url);
     let parseData=await data.json();
      this.setState({articles: this.state.articles.concat(parseData.articles),totalResults:parseData.totalResults, loading:false})
      this.setState({page:this.state.page+1})
      console.log(this.state.articles)
     
    };

   
  


  render() {
    return (
        <>
      <div className="container my-4">
        <div className="text-center">
           <h2 style={{margin:"35px 0px" ,marginTop:"80px"}}>NewsMonkey - TopHeadlines</h2>
        </div>

       
       
        
        <InfiniteScroll
          dataLength={this.state.articles?.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length <= this.state.totalResults-6}
          loader={<Spinner/>}
        >
          <div className='container'>
        <div className='row my-3' >

           {  this.state.articles.map((element)=>{
           
                   return (
                    <div className="col md-3" key={element.url} >
                         <NewsItem title={element.title} desc={element.description} imageUrl={element.urlToImage?element.urlToImage:"https://www.shutterstock.com/image-vector/breaking-news-background-planet-260nw-667420906.jpg"
                                                                             } NewsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div>
                   )
                   
            })
            }
            </div>
            </div>
            </InfiniteScroll>
            

           
        </div>
    
      </>
    )
  }
}

export default News