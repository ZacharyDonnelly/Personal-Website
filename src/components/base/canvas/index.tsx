import { useEffect, useRef } from 'react'

interface CanvasProps {
    draw: (ctx: CanvasRenderingContext2D | null) => void
    height: number
    width: number
    className: string
}

const Canvas = ({ draw, width, height }: CanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null)

    useEffect(() => {
        if (canvasRef.current) {
            canvasCtxRef.current = canvasRef.current.getContext('2d')
            const ctx = canvasCtxRef.current
            draw(ctx)
        }
        // const context = canvasRef?.current.getContext('2d')
    }, [draw])
    return <canvas ref={canvasRef} width={width} height={height} />
}

export default Canvas
