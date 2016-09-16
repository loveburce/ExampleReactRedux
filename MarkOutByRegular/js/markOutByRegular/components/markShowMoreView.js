import React,{ Component } from 'react';
import  {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
const window = Dimensions.get('window');
import CustomTextView from './customTextView'
let clickHideMore;
let clickShowMore;


//text state 1 can't show more,2 can show more,3 showing more
class TextShowMoreLabel extends Component{
  constructor(){
    super();
    this.state={
      numberOfLines : 5,
      textState:1
    }
  }

  render() {
    let showMore;

    let textContent = this.props.textContent;
    let textLayout = [];
    // let textContent = row.content;
    let eee = '@([^\\s@]+)';
    let eeeAt = new RegExp(eee);
                        
    let http = '((https://|http://|www\.|ftp://)[A-Za-z0-9\._\?%&;:+\-=/#]*)';
    let httpAt = new RegExp(http);
    let atIndex = textContent.search(eeeAt);
    let httpIndex = textContent.search(httpAt); 

    if(atIndex !== -1 || httpIndex !== -1){
                
      let parsedText = textContent;
      let loop = true;
      let preStr = null;
      let suffixIndex = null;
      let index = 0;
      let parseTag = null;

      if(atIndex !== -1 && httpIndex !== -1){
        while(loop){
          var searchAt = parsedText.search(eeeAt); 
          var matchAt = parsedText.match(eeeAt);
          var searchHttp = parsedText.search(httpAt); 
          var matchHttp = parsedText.match(httpAt);

          if(searchAt < searchHttp && searchAt !== -1 ||(searchAt !== -1 && searchHttp == -1)){
            suffixIndex = searchAt + matchAt[0].length;
            preStr = parsedText.substring(0,suffixIndex-matchAt[0].length);
            textLayout.push(preStr);
            textLayout.push(<CustomTextView key={'name'+index} textContent={'@'+matchAt[1]} contentType={'name'} atUser={this.props.ats} />);
          }else if(searchHttp !== -1){
            suffixIndex = searchHttp + matchHttp[0].length;
            preStr = parsedText.substring(0,suffixIndex-matchHttp[0].length);
            textLayout.push(preStr);
            textLayout.push(<CustomTextView key={'http'+index} textContent={matchHttp[1]} contentType={'http'} atUser={this.props.ats} />);
          }
                    
          parsedText = parsedText.substring(suffixIndex,parsedText.length);
          searchAt = parsedText.search(eeeAt); 
          searchHttp = parsedText.search(httpAt);
                       
          if(searchAt === -1 && searchHttp === -1){
           loop = false;
           textLayout.push(parsedText);
          }
          index++;
        }
      }else{
        if(atIndex !== -1 && httpIndex === -1){
          parseTag = new RegExp(eee);
        }else if(atIndex === -1 && httpIndex !== -1){
          parseTag = new RegExp(http);
        }

        while(loop){
          var searchAt = parsedText.search(parseTag); 
          var matchAt = parsedText.match(parseTag);
          suffixIndex = searchAt + matchAt[0].length;
          preStr = parsedText.substring(0,suffixIndex-matchAt[0].length);
          parsedText = parsedText.substring(suffixIndex,parsedText.length);
          textLayout.push(preStr);
          if(atIndex !== -1 && httpIndex === -1){
              textLayout.push(<CustomTextView key={'name'+index} textContent={'@'+matchAt[1]} contentType={'name'} atUser={this.props.ats}/>);
          }else{
              textLayout.push(<CustomTextView key={'http'+index} textContent={matchAt[1]} contentType={'http'} atUser={this.props.ats}/>);
          }
                    
          searchAt = parsedText.search(parseTag);      
          if(searchAt === -1){
              loop = false;
              textLayout.push(parsedText);
          }
          index++;
        }
      }
    }else{
        textLayout.push(textContent);
    }
        

    if(this.state.textState == 1){
      showMore = null;
    }

    clickShowMore = (<Text key={'TextShowMoreLabel'+'allText'} style={{fontSize:15,color:'#6086a7'}}
      onPress={()=>{this.setState({numberOfLines:1000000,textState:3});}}>{'全部'}</Text>);
    clickHideMore = (<Text key={'TextShowMoreLabel'+'hideText'} style={{fontSize:15,color:'#6086a7'}}
      onPress={()=>{this.setState({numberOfLines:5,textState:2});}}>{'隐藏'}</Text>);

    if(this.state.textState == 2){
      showMore = clickShowMore;
    }

    if(this.state.textState == 3){
      showMore =  clickHideMore;
    }
    return (
      <ScrollView >
        <Text key={'TextShowMoreLabel_ShowAllText'} 
          numberOfLines={this.state.textState <= 1 ? 100000:this.state.numberOfLines} 
          style={styles.textContentHolder}
          onPress={()=>{}}
          onLayout= {this.state.textState == 1 ? (e)=>{
              let {x,y,width,height} = e.nativeEvent.layout;
              if(height > 83 && this.state.textState == 1){
                this.setState({numberOfLines : 5, textState:2});
              }
            } : null
          }> 
        {textLayout}     
        </Text>
        {showMore}
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
    textContentHolder:{
       fontSize:14,
       color:'#292f33', 
    },
    
});

module.exports = TextShowMoreLabel;