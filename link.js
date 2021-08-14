class Link{
  constructor(bodyA,bodyB){
      var lastLink=bodyA.bodyA.Bodies.length-2;
      this.link=Constraint.create({
          bodyA:bodyB.body.Bodies[lastLink],
          pointA:{x:0,y:0},
          bodyB:bodyB.body,
          pointB:{x:offscreenBuffering,y:0},
          length: 10,
          stiffness: 0.8

      });
      World.add(world,this.link)
  }
}