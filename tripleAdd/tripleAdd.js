function tripleAdd(a){
    return function(b) {
        return function(c) {
            return a+b+c;
        }
    }
}

tripleAdd(10)(20)(30);
