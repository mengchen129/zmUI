const heroStr = '诸葛亮,安其拉,白起,不知火舞,妲己,狄仁杰,典韦,韩信,老夫子,刘邦,干将莫邪,刘禅,鲁班七号,墨子,孙膑,孙尚香,孙悟空,项羽,亚瑟,周瑜,庄周,蔡文姬,甄姬,廉颇,程咬金,后羿,扁鹊,大乔,钟无艳,小乔,王昭君,虞姬,李元芳,张飞,刘备,牛魔张良,兰陵王,露娜,貂蝉,达摩,曹操,芈月,荆轲,高渐离,钟馗,花木兰,关羽,李白,宫本武藏,吕布,嬴政,娜可露露,武则天,赵云,姜子牙';

var id = 0;

const heroList = heroStr.split(',').map(function(name) {
    return {id: ++id, name: name};
});

module.exports = heroList;