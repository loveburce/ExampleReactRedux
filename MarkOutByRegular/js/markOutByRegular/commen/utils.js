
import {
  Linking
} from 'react-native';

const LaunchURL = (url) => {
	Linking.canOpenURL(url).then(supported => {
		if(!supported) {
			console.log('Can\'t handle url: ' + url);
		} else {
			return Linking.openURL(url);
		}
	}).catch(err => console.error('An unexpected error happened', err));
};



export function address(address) {
    const url = 'http://map.baidu.com/mobile/#s=s&wd='+address;
    Linking.canOpenURL(url).then(supported => {
        if(!supported) {
        console.log('Can\'t handle url: ' + url);
        } else {
        return Linking.openURL(url);
        }
    }).catch(err => console.error('An unexpected error happened', err));
}

export function call(number) {
    let url;

    url = 'tel:';

    url += number;

    LaunchURL(url);
}

export function text(number) {
    let url = 'sms:';

	url += number;

    LaunchURL(url);
}

export function email(email,title,content) {
    let url = 'mailto:'
    url = url + email ;
    url = url + '?';
    url = url + 'subject=' + title + '&' + 'body=' + content;
    LaunchURL(url);
}

export function url(ur) {
    if(url.indexOf('http://') >= 0){
        url = 'http://' + url;
    }
    Linking.canOpenURL(url).then(supported => {
        if(!supported) {
        console.log('Can\'t handle url: ' + url);
        } else {
        return Linking.openURL(url);
        }
    }).catch(err => console.error('An unexpected error happened', err));
}