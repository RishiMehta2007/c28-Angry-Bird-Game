class Slingshot {
    constructor(body1, point2){
        var options={
            bodyA: body1,
            pointB: point2,
            length: 10,
            stiffness: 0.05
        }
        this.pointB= point2;
        this.sling= Constraint.create(options);
        World.add(world,this.sling);
    }
    display(){
        if (this.sling.bodyA){
            strokeWeight(4);
            line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.pointB.x, this.pointB.y);  
        }

    }
    fly() {
      this.sling.bodyA= null;  
    }
}