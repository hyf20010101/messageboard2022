/**
 * 如果需要修改为正常上线模式,请注释下面mock的import代码
 * **/
//import "@/mock/index"
import API from "@/utils/API"
// 请在下方实现自己的后端通信函数

const communication={
    GetMessage:function(that){
        var Req=new XMLHttpRequest;
        Req.onreadystatechange=function(){
            if (Req.readyState===4 && Req.status===200){
                var answer=JSON.parse(Req.responseText).data;
                var getList=[];
                for(var i=0;i<answer.length;i++){
                    var body={
                        "title":answer[i].title,
                        "message":answer[i].content,
                        "user":answer[i].user,
                        "timestamp":answer[i].timestamp.toString().length==10 ? answer[i].timestamp*1000 : answer[i].timestamp
                    }
                    getList.push(body);
                }
                getList.sort((a,b)=>-a.timestamp+b.timestamp);
                that.messageList=getList;
                console.log(that.messageList);
            }
        };
        Req.open(API.GET_MESSAGE_LIST.method,API.GET_MESSAGE_LIST.path,true);
        Req.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        Req.send(null);
    },

    PostMessage:function(data,postRequest){
        var body={
            title:data.title,
            content:data.message,
            user:data.user
        }
        var Req=new XMLHttpRequest;
        Req.onreadystatechange = function () {
            if (Req.readyState==4)postRequest(Req.status);
        };

        Req.open(API.POST_NEW_MESSAGE.method,API.POST_NEW_MESSAGE.path,true);
        Req.withCredentials=true;
        Req.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        console.log("sendcookie:"+document.cookie);
        Req.send(JSON.stringify(body));
    }
}

export default communication;