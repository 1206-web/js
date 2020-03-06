let particle = {
    position: null,
    velocity: null,

    create: function(x, y, speed, direction){

        //パーティクル自体(インスタンス)
        let obj = Object.create(this);
        //パーティクルの座標
        obj.position = vector.create(x, y);
        //パーティクルの動きが始まる原点？
        obj.velocity = vector.create(0, 0);
        obj.velocity.setLength(speed);
        obj.velocity.setAngle(direction);
        return obj;
    },

    //少しずつパーティクルを移動させる
    update: function(){
        this.position.addTo(this.velocity);
    }
}