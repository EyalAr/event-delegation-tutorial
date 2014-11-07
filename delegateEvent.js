function delegateEvent(parent, type, selector, handler){
    parent.addEventListener(type, function(e){
        var target = e.target,
            els = parent.querySelectorAll(selector),
            i;
        for (i = 0; i < els.length; i++){
            if (els[i] === target){
                handler(e);
                break;
            }
        }
    });
}
