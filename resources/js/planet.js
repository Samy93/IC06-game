function Planet() {
    
    this.id = "";
    this.name = "";
    this.zone = "";
    this.x = 0;
    this.y = 0;
    this.boundPlanets = [];
    
    // Dessine la vue de la planète
    this.draw = function(canvasContext) {
        canvasContext.beginPath();
        
        if(this.isSelected) {
            canvasContext.fillStyle = "#000";
            canvasContext.fillRect(this.x - 5, this.y - 5, Config.PLANET_HITBOX + 10, Config.PLANET_HITBOX + 10);
        }
        
        canvasContext.fillStyle = this.getColorZone();
        canvasContext.fillRect(this.x, this.y, Config.PLANET_HITBOX, Config.PLANET_HITBOX);
        
        canvasContext.fillStyle = "#000";
        canvasContext.fillText(this.name, this.x - 15, this.y + 30);
        canvasContext.closePath();
    }
    
    // Donne la couleur en fonction de la zone de la planète
    this.getColorZone = function() {
        switch(this.zone) {
            case "threat-a" :
                return "red";
            case "threat-b":
                return "blue";
            case "threat-c":
                return "green";
            case "threat-d":
                return "yellow";
            default:
                return "black";
        }
    }
}