import {
    Particles
} from './particles.js';

export class ParticlesController {
    constructor() {
        this.items = [];
        this.cur = 0;
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.centerX = stageWidth / 2;
        this.centerY = stageHeight / 2;
    }

    addParticles() {
        const smallRadius = 180;
        const startAngle = Math.PI + Math.PI / 10;
        const endAngle = Math.PI * 2 - Math.PI / 10;

        const randomAngle = Math.random() * (startAngle - endAngle) - startAngle;
        const x = this.centerX + smallRadius * Math.cos(randomAngle);
        const y = this.centerY - smallRadius * Math.sin(randomAngle) + 356 / 2;
        this.items.push(new Particles(x, y));
    }

    draw(ctx) {
        this.cur += 1;
        if (this.cur > 40) {
            this.cur = 0;
            this.addParticles();
        }

        for (let i = this.items.length - 1; i >= 0; i--) {
            const item = this.items[i];

            if (item.y < 0 || item.x < 0 || item.y > this.stageHeight || item.x > this.stageWidth) {
                this.items.splice(i, 1);
            } else {
                item.draw(ctx);
            }
        }
    }
}