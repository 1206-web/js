let particle = {
    position: null,
    velocity: null,
    gravity: null,

    create: function(x, y, speed, direction, grav){

        //パーティクル自体(インスタンス)
        let obj = Object.create(this);
        //パーティクルの座標
        obj.position = vector.create(x, y);
        //パーティクルの動きが始まる原点？
        obj.velocity = vector.create(0, 0);
        obj.velocity.setLength(speed);
        obj.velocity.setAngle(direction);
        obj.gravity = vector.create(0, grav || 0);
        return obj;
    },

    accelerate: function(accel){
        this.velocity.addTo(accel);
    },

    //少しずつパーティクルを移動させる
    update: function(){
        this.velocity.addTo(this.gravity);
        this.position.addTo(this.velocity);
    }
}