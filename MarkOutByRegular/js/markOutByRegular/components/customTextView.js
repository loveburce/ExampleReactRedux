import React,{ Component } from 'react';
import  {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import * as easyIntent from '../commen/utils';

class CustomTextView extends Component{
   
   constructor(){
     super();
   }

   render() {
        let textContent  = this.props.textContent;
        let contentType = this.props.contentType;
        let atUser = this.props.atUser;
     return(
            <Text style={{color:'#2c7cb9',fontSize:14}}  onPress ={()=>{this._infoFromContent(textContent,contentType)}}>{textContent} </Text>
        );
    }

    _infoFromContent(url, type){
        if(type === 'name' && (this.props.atUser&&this.props.atUser.length>0)){
            let user = null;
            let uid = null;
             for(let i=0; i<this.props.atUser.length; i++){
                user = this.props.atUser[i];
                if('@'+user.name === url){
                    uid = user.uid;
                    break;
                }
            }
            if(uid !== null){
                // XSYProfileHomePageModule.pushWithUid(uid+'');
            }
         
        }else if(type === 'http'){
            // XSYWebViewModule.push(url,'WebView');
            easyIntent.url(detailItemUtil.getItemValue(item));
        }
    }
}

const styles = StyleSheet.create({
    comments_content_container:{
        flexDirection:'column',
        flex:1
    },
});

module.exports = CustomTextView;