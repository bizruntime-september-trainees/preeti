this.onmessage = function(e){
    if(e.data.addThis != undefined){
        this.postMessage(
            {result: e.data.addThis.n1 + e.data.addThis.n2}
            );
            //posting back to the page 
    }
}