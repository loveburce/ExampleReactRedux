import * as types from './actionTypes';

export function showMoreText(){

    return{
        type: types.SHOWMORETEXT,
        textContent:'受强 @台风 @“莫兰蒂” 影响，@水位暴涨。9月15日上午10点半左右，@福建 永春县东关镇东美村，横跨湖洋溪的 @东关桥 https://www.baidu.com 被洪水冲垮中间一孔约20米长的桥梁。http://www.jianshu.com   http://www.csdn.net 东关桥又称"通仙桥"，始建于 @南宋 绍兴十五年（公元1145年），是闽南少见的长廊屋盖梁式桥。1991年被列为福建省重点文物保护单位。这座历经871年风雨的廊桥，在这次强台风带来的强降雨中，受洪水冲击，不幸被冲垮了。长长的廊桥古香古色，八百多年来，多少人曾从这里走，给多少人留下乡愁的记忆，如今它却成了断头路'
    };
}

export function showLessText(){
    return{
        type: types.SHOWLESSTEXT,
        textContent:'在这次强台风带来的强降雨中，受洪水冲击，不幸被冲垮了。长长的廊桥古香古色，八百多年来，多少人曾从这里走，给多少人留下乡愁的记忆，如今它却成了断头路'
    }
}

