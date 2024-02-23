export class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 1;
        this.isTouch = false;

        document.addEventListener('mousemove', this.handleMouseMove.bind(this));
    }

    handleMouseMove(event) {
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
    }

    draw(ctx, speedX, speedY) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();

        const distance = Math.sqrt(
            Math.pow(this.mouseX - this.x, 2) + Math.pow(this.mouseY - this.y, 2)
        );

        if (distance < 25) {
            this.isTouch = true;
            this.speedX = (this.mouseX - this.x) / 12 * Math.random();
            this.speedY = (this.mouseY - this.y) / 12 * (Math.random() + 1);
        } 
        
        if (this.isTouch) {
            this.animate(ctx, this.speedX, this.speedY);
        } else {
            this.animate(ctx, speedX, speedY)
        }
    }

    animate(ctx, speedX, speedY) {
        this.x += speedX;
        this.y -= speedY;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.restore();
    }
}