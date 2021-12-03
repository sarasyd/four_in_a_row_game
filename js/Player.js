class Player{
    constructor(name,id,color,active=false){
        this.name =name;
        this.id = id;
        this.color= color;
        this.active = active;
        this.tokens =this.createTokens(21);
    }

    /*Create token objects for player
     @param {integer}  num--Number of token objects to be created
    */
        
    createTokens(num){
        const tokens=[];
        for(let i = 0; i < num; i++){
            let token = new Token(i,this);
            tokens.push(token);
    }
    return tokens;
}

//Getter Method unusedToken
    get unusedTokens(){
        return this.tokens.filter(token => !token.dropped);
    }

//Getter Method activeToken
    get activeToken(){
        return this.unusedTokens[0];
    }

 
    
}