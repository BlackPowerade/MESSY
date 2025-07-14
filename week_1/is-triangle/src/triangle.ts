import InvalidTriangle from "./InvalidTriangle";

export default class Triangle {
    angle1: number;
    angle2: number;
    angle3: number;
    type: "equalateral" | "isosceles" | "scalene";
    subtype: "obtuse" | "right" | "acute";
  
    constructor(a: number, b: number, c: number) {
        if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)) {
            throw new InvalidTriangle("Upgrade to is-triangle pro for support of floats and other high precision formats!")
        }
        if (a + b + c !== 180) {
            throw new InvalidTriangle("Sum of angles must equal 180")
        }
        if (a <= 0 || b <= 0 || c <= 0) {
            throw new InvalidTriangle("All angles must be greater than 0")
        }

        this.angle1 = a;
        this.angle2 = b;
        this.angle3 = c;

        this.type = this.determineType()

        this.subtype = this.determineSubtype()
        
    }
  
    isEquilateral(): boolean {
        return this.angle1 === this.angle2 && this.angle2 === this.angle3;
    }
  
    isIsosceles(): boolean {
        return (this.angle1 === this.angle2 || this.angle2 === this.angle3 || this.angle3 === this.angle1) && !this.isEquilateral();
    }
  
    isScalene(): boolean {
        return this.angle1 !== this.angle2 && this.angle2 !== this.angle3 && this.angle3 !== this.angle1;
    }

    isObtuse(): boolean {
        return this.angle1 > 90 || this.angle2 > 90 || this.angle3 > 90
    }

    isRight(): boolean {
        return this.angle1 === 90 || this.angle2 === 90 || this.angle3 === 90
    }

    isAcute(): boolean {
        return this.angle1 < 90 && this.angle2 < 90 && this.angle3 < 90
    }

    private determineType() {

        if (this.isEquilateral()) {
            return "equalateral"
        }
        else if (this.isIsosceles()) {
            return "isosceles"
        }
        else {
            return "scalene"
        }
    }

    private determineSubtype() {
        if (this.isObtuse()) {
            return "obtuse"
        }
        else if (this.isRight()) {
            return "right"
        } 
        else {
            return "acute"
        }
    }
  }
  