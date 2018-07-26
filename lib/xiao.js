/*!
 * xiao JavaScript 
 *
 * Personal blog
 * https://blog.csdn.net/xiaohu12685?t=1&orderby=UpdateTime
 * 
 * Date: 2018-07-25T10:32Z
 * Reprint office please declare the author wang haihu
 */
this.state = {
    root:null,
    xmldata:null,
    WhetherStart:false,
    Rootbehavior:null,
    XMLHttpRequest:null
}
let state = this.state;

state.attribute = (e)=>{
    let root = state.root;
    if(root == null){
        console.error('You need to create a node with an id of root on the page');
    }else{
        if(root.getAttribute(e)){
            return root.getAttribute(e);
        }else{
            console.error(`The ${e} attribute cannot be found`);
            state.WhetherStart = !state.WhetherStart;
        }
    }
};

state.xmldata = (e)=>{
    if(e.getAttribute('behavior')){state.Rootbehavior(e.getAttribute('behavior'),e.getAttribute('towid'));return;};
    state.XMLHttpRequest(state.attribute('type'),state.attribute('url'));
}

state.Rootbehavior = (e,id)=>{
    let Dom = document.getElementById(id);
    if(!e||!id){console.error('The tow  attribute cannot be found');return;};
    switch(e){
        case 'click':
            Dom.onclick = ()=>{state.XMLHttpRequest(state.attribute('type'),state.attribute('url'))};
            break;
        case 'mouseover':
            Dom.onmouseover = ()=>{state.XMLHttpRequest(state.attribute('type'),state.attribute('url'))};
            break;
    }
}

state.XMLHttpRequest = (type,url)=>{
    var xh_ajax = new XMLHttpRequest;
    var xmlhttp;
    if(window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            console.log('请求成功');
        }
    }
    xmlhttp.open(type,url,true);
    if(!state.WhetherStart){
        xmlhttp.send();
    };
}


(function(e){
    state.root = e;
    e?state.xmldata(document.getElementById('root')):console.error('You need to create a node with an id of root on the page');
})(document.getElementById('root'));
