import React,{ Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import MarkShowMoreView from './markShowMoreView';

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 30,
        padding: 10,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3
    }
});

export default class textShow extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let text = '';
        if(this.props.state.textContent !== undefined && this.props.state.textContent !== ''){
            text = this.props.state.textContent;
        }
      
        return(
            <View style={{flexDirection:'column', flex:1,  marginTop:30}}>
                <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={()=>{this.textShowMore.bind(this)()}} style={styles.button}>
                    <Text>显示多文本</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.textShowLess.bind(this)()}} style={styles.button}>
                    <Text>显示少文本</Text>
                    </TouchableOpacity>
                </View>
                <MarkShowMoreView textContent={text} ats={this.props.state.atUser}/>
            </View>
        );
    }

    textShowMore(){
        this.props.actions.showMoreText();
    }

    textShowLess(){
        this.props.actions.showLessText();
    }
}