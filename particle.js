export class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 1;
        this.isTouch = false;

        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ?
        document.addEventListener('touchmove', this.handleTouch.bind(this)):
        document.addEventListener('mousemove', this.handleMove.bind(this));
    }

    handleMove(event) {
        this.clientX = event.clientX;
        this.clientY = event.clientY;
    }

    handleTouch(event) {
        this.clientX = event.touches[0].clientX;
        this.clientY = event.touches[0].clientY;
    }

    draw(ctx, speedX, speedY) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();

        const distance = Math.sqrt(
            Math.pow(this.clientX - this.x, 2) + Math.pow(this.clientY - this.y, 2)
        );

        if (distance < 25) {
            this.isTouch = true;
            this.speedX = (this.clientX - this.x) / 12 * Math.random();
            this.speedY = (this.clientY - this.y) / 12 * (Math.random() + 1);
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