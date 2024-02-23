export class Morae {
    constructor() {
        this.hamster = new Image();
        this.hamster.onload = () => {
            this.loaded();
        };
        this.hamster.src = "./morae.png";
        this.isLoaded = false;
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
    }

    loaded() {
        this.isLoaded = true;
    }

    draw(ctx) {
        if (this.isLoaded) {
            this.hamsterX = this.stageWidth / 2 - this.hamster.width/2;
            this.hamsterY = this.stageHeight / 2;
            ctx.drawImage(this.hamster, this.hamsterX, this.hamsterY); 
        }
    }
}