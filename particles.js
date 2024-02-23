import {
    Particle
} from './particle.js';

export class Particles {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() + 1;
        this.items = [];
        this.color = 'BurlyWood';

        for (let i = 0; i <= 8; i++) {
            this.items.push(new Particle(this.x + i, this.y));
            this.items.push(new Particle(this.x + i, this.y + 5));
            this.items.push(new Particle(this.x + i, this.y + 10));
            this.items.push(new Particle(this.x + i, this.y + 14));
            this.items.push(new Particle(this.x + i, this.y + 18));
            this.items.push(new Particle(this.x + i, this.y + 22));
        }

        for (let i = 1; i <= 4; i++) {
            this.items.push(new Particle(this.x + 2, this.y + i));
            this.items.push(new Particle(this.x + 6, this.y + i));
        }

        for (let i = 0; i < 3; i++) {
            this.items.push(new Particle(this.x, this.y + i + 19))
            this.items.push(new Particle(this.x + 8, this.y + i + 15))
        }

        this.items.push(new Particle(this.x - 1, this.y + 10))
        this.items.push(new Particle(this.x + 9, this.y + 10))
        this.items.push(new Particle(this.x + 4, this.y + 8))
        this.items.push(new Particle(this.x + 4, this.y + 9))
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = stageWidth / 2;
        this.centerY = stageHeight / 2;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        for (const item of this.items) {
            item.draw(ctx, this.speedX, this.speedY);
        }
    }
}