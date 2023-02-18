class CanvasAnimation {
  private ctx: CanvasRenderingContext2D // canvas context
  private image: HTMLImageElement // canvas image

  protected startX = 1200 // starting x coordinate
  protected startY = -410 // starting y coordinate
  protected minX = -120 // minimum x coordinate
  protected minY = -190 // minimum y coordinate to match nav border
  protected end = -360 // end of canvas - reset to start

  private x: number = this.startX // set x to initial x coordinate on beginning of animation
  private y: number = this.startY // set y to initial y coordinate on beginning of animation

  constructor(ctx: CanvasRenderingContext2D, image: HTMLImageElement) {
    this.ctx = ctx
    this.image = image
  }

  /**
   * Animate sprite across border of header
   * Takes in x & y coordinates
   * Moves sprite to end of canvas & starts new animation
   * @returns {FrameRequestCallback} Only animates sprite
   */
  public drawScreen(): FrameRequestCallback {
    this?.ctx.save() // save current canvas state
    this?.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height) // clear canvas
    this?.ctx.drawImage(this.image, this.x, this.y) // draw image at current position
    this?.ctx.restore() // restore previous canvas state

    // move sprite along x axis
    this.x -= 4

    // make sure we are still off screen and lower sprite to position
    if (this.y <= this.minY && this.x > this.minX) {
      // move sprite down y axis
      this.y += 4
    }

    // check to see if we have reached end of nav border and raise sprite off screen
    if (this.x <= this.minX) {
      // move sprite up y axis
      this.y -= 2

      // reset sprite position to start of canvas
      if (this.y <= this.end) {
        // reset x,y coordinates
        this.x = this.startX
        this.y = this.startY
      }
    }
    return this.drawScreen
  }
}

export default CanvasAnimation
