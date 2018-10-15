import { UIView } from "../uikit/UIView";
import { UIRect, UIRectZero } from "../uikit/UIRect";
import { UIColor } from "../uikit/UIColor";
import { UISize } from "../uikit/UISize";

export class CALayer {

    private _uuid = "calayer." + Math.random() + Math.random()
    private _svgElement: SVGGElement | undefined = undefined
    private _clipPathElement: SVGClipPathElement = document.createElementNS("http://www.w3.org/2000/svg", "clipPath")
    private _bgElement: SVGRectElement = document.createElementNS("http://www.w3.org/2000/svg", "rect")
    private _contentElement: SVGGElement = document.createElementNS("http://www.w3.org/2000/svg", "g")
    private _borderElement: SVGGElement = document.createElementNS("http://www.w3.org/2000/svg", "g")

    private _view: UIView | undefined = undefined

    public get view(): UIView | undefined {
        if (this.superlayer) {
            return this.superlayer._view
        }
        return this._view
    }

    public set view(value: UIView | undefined) {
        this._view = value
    }

    private _frame: UIRect = UIRectZero

    public get frame(): UIRect {
        return this._frame;
    }

    public set frame(value: UIRect) {
        this._frame = value;
        if (this._view === undefined || this._svgElement !== undefined) {
            this.createSVGElement()
            if (this._svgElement) {
                this._svgElement.setAttribute("transform", `matrix(1.0, 0.0, 0.0, 1.0, ${value.x.toFixed()}, ${value.y.toFixed()})`)
                this._svgElement.setAttribute("width", value.width.toFixed(2))
                this._svgElement.setAttribute("height", value.height.toFixed(2))
            }
            this._bgElement.setAttribute("width", value.width.toFixed(2))
            this._bgElement.setAttribute("height", value.height.toFixed(2))
            {
                this._clipPathElement.appendChild(this._bgElement.cloneNode(true))
            }
            {
                this._borderElement.innerHTML = ""
                const borderFillElement = this._bgElement.cloneNode(true)
                if (borderFillElement instanceof SVGElement) {
                    borderFillElement.style.fillOpacity = "0"
                }
                this._borderElement.appendChild(borderFillElement)
            }
            this._contentElement.setAttribute("width", value.width.toFixed(2))
            this._contentElement.setAttribute("height", value.height.toFixed(2))
        }
    }

    private _hidden: boolean = false

    public get hidden(): boolean {
        return this._hidden;
    }

    public set hidden(value: boolean) {
        this._hidden = value;
        this._bgElement.style.display = value ? "none" : null
        this._contentElement.style.display = value ? "none" : null
    }

    private _cornerRadius: number = 0.0

    public get cornerRadius(): number {
        return this._cornerRadius;
    }

    public set cornerRadius(value: number) {
        this._cornerRadius = value;
        if (this._view !== undefined) {
            this._view.domElement.style.borderRadius = value.toFixed(2) + "px"
        }
        else {
            this._bgElement.setAttribute("rx", value.toFixed(2))
            this._bgElement.setAttribute("ry", value.toFixed(2))
        }
    }

    private _borderWidth: number = 0.0

    public get borderWidth(): number {
        return this._borderWidth;
    }

    public set borderWidth(value: number) {
        this._borderWidth = value;
        this.resetBorder()
    }

    private _borderColor: UIColor | undefined = undefined

    public get borderColor(): UIColor | undefined {
        return this._borderColor;
    }

    public set borderColor(value: UIColor | undefined) {
        this._borderColor = value;
        this.resetBorder()
    }

    private resetBorder() {
        this.createSVGElement()
        if (this._svgElement === undefined) { return }
        if (this.borderWidth > 0 && this.borderColor) {
            this._borderElement.style.strokeWidth = this.borderWidth.toFixed(2) + "px"
            this._borderElement.style.stroke = this.borderColor.toStyle()
            this._borderElement.innerHTML = ""
            const borderFillElement = this._bgElement.cloneNode(true)
            if (borderFillElement instanceof SVGElement) {
                borderFillElement.style.fillOpacity = "0"
            }
            this._borderElement.appendChild(borderFillElement)
            this._svgElement.style.display = null
            this._svgElement.appendChild(this._borderElement)
        }
        else {
            this._svgElement.style.display = "none"
        }
    }

    private moveBorderElementToFront() {
        if (this._svgElement === undefined) { return }
        if (this._svgElement.lastElementChild !== this._borderElement) {
            if (this._svgElement.contains(this._borderElement)) {
                this._svgElement.removeChild(this._borderElement)
            }
            this._svgElement.appendChild(this._borderElement)
        }
    }

    superlayer: CALayer | undefined = undefined

    removeFromSuperlayer() {
        if (this.superlayer) {
            const idx = this.superlayer.sublayers.indexOf(this)
            if (idx >= 0) {
                this.superlayer.sublayers.splice(idx, 1)
                if (this.superlayer._svgElement && this._svgElement && this.superlayer._svgElement.contains(this._svgElement)) {
                    this.superlayer._svgElement.removeChild(this._svgElement)
                }
            }
            this.superlayer = undefined
        }
    }

    sublayers: CALayer[] = []

    addSublayer(layer: CALayer) {
        if (layer.superlayer !== undefined) {
            layer.removeFromSuperlayer()
        }
        this.sublayers.push(layer)
        layer.superlayer = this
        this.createSVGElement()
        layer.createSVGElement()
        if (this._svgElement && layer._svgElement) {
            this._svgElement.appendChild(layer._svgElement)
            this.moveBorderElementToFront()
        }
    }

    private createSVGElement() {
        if (this._svgElement !== undefined) { return }
        if (this._view !== undefined) {
            this._svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg")
            this.backgroundColor = this.backgroundColor
            this._svgElement.appendChild(this._bgElement)
            this._svgElement.appendChild(this._contentElement)
            if (this._svgElement) {
                this._svgElement.setAttribute("width", this.frame.width.toFixed(2))
                this._svgElement.setAttribute("height", this.frame.height.toFixed(2))
            }
            if (this._view.domElement.childElementCount == 0) {
                this._view.domElement.appendChild(this._svgElement)
            }
            else {
                this._view.domElement.insertBefore(this._svgElement, this._view.domElement.children[0])
            }
        }
        else {
            this._svgElement = document.createElementNS("http://www.w3.org/2000/svg", "g")
            this.backgroundColor = this.backgroundColor
            this._svgElement.appendChild(this._bgElement)
            this._svgElement.appendChild(this._contentElement)
        }
    }

    private _backgroundColor: UIColor | undefined = undefined

    public get backgroundColor(): UIColor | undefined {
        return this._backgroundColor;
    }

    public set backgroundColor(value: UIColor | undefined) {
        this._backgroundColor = value;
        if (value) {
            this._bgElement.setAttribute("fill", value.toStyle())
        }
        else {
            this._bgElement.setAttribute("fill", "transparent")
        }
    }

    private _opacity: number = 1.0

    public get opacity(): number {
        return this._opacity;
    }

    public set opacity(value: number) {
        this._opacity = value;
        this._bgElement.style.opacity = value.toFixed(2)
        this._contentElement.style.opacity = value.toFixed(2)
    }

    private _masksToBounds: boolean = false

    public get masksToBounds(): boolean {
        return this._masksToBounds;
    }

    public set masksToBounds(value: boolean) {
        this._masksToBounds = value;
        if (value) {
            this.createSVGElement()
            if (this._svgElement) {
                this._clipPathElement.id = this._uuid
                this._clipPathElement.innerHTML = ""
                this._clipPathElement.appendChild(this._bgElement.cloneNode(true))
                this._svgElement.appendChild(this._clipPathElement)
                this._svgElement.setAttribute("clip-path", `url(#${this._uuid})`)
            }
        }
        else {

        }
    }

    private _shadowColor: UIColor | undefined = undefined;

    public get shadowColor(): UIColor | undefined {
        return this._shadowColor
    }

    public set shadowColor(value: UIColor | undefined) {
        this._shadowColor = value;
        this.resetShadow()
    }

    private _shadowOpacity: number = 0.0

    public get shadowOpacity(): number {
        return this._shadowOpacity;
    }

    public set shadowOpacity(value: number) {
        this._shadowOpacity = value;
        this.resetShadow()
    }

    private _shadowOffset: UISize = { width: 0, height: -3 }

    public get shadowOffset(): UISize {
        return this._shadowOffset;
    }

    public set shadowOffset(value: UISize) {
        this._shadowOffset = value;
        this.resetShadow()
    }

    private _shadowRadius = 3.0

    public get shadowRadius(): number {
        return this._shadowRadius;
    }

    public set shadowRadius(value: number) {
        this._shadowRadius = value;
        this.resetShadow()
    }

    private resetShadow() {
        if (this._view !== undefined) {
            if (this.shadowOpacity > 0 && this.shadowColor && this.shadowColor.a > 0) {
                this._view.domElement.style.boxShadow = this.shadowOffset.width.toString() + "px " + this.shadowOffset.height.toString() + "px " + this.shadowRadius.toString() + "px " + this.shadowColor.colorWithAlphaComponent(this.shadowOpacity).toStyle()
            }
            else {
                this._view.domElement.style.boxShadow = null
            }
        }
    }

}