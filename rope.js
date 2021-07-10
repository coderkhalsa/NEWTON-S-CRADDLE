class Rope{
    constructor(bodyA, bodyB,xOffset){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            
            
        }
        this.xOffset= xOffset
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(2);
        stroke("white")
        fill(255)
        line(pointA.x+this.xOffset, pointA.y, pointB.x, pointB.y);
    }
    
}