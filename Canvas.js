/*
Canvas tag is a HTMLCanvasElement dom interface with some unique methods and events.

Before drawing i must select one of the drawing context.

Drawing context is a way how browser draws something.

There are several drawing contexts:
2d, webgl, webgl2, webgpu

Each context has its own api with bunch of props, methods, events dedicated for drawing.

getContex() method allows to select the context // canvasElement.getContext('2d')

HTMLCanvasElement
https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement

getContext()
https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext#contexttype

2d
2d context is a CanvasRenderingContext2D interface which provides api for drawing 2d shapes.
Relies on cpu mostly during rendering.
Usecase: simple 2d graphics and animations.

CanvasRenderingContext2D
https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D#reference
Canvas tutorial
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial

webgl
allows 2d and 3d drawing, it uses gpu and opengl. browser translates js code into opengl instructions.
webgl is represented by WebGLRenderingContext interface.

webgl2
it is more advanced version of webgl.
represented by WebGL2RenderingContext interface.

webgpu
is the successor to webgl, has better compatibility with modern gpu, supports modern gpu apis like Vulkan etc, has general purpose gpu computations which is good for ML tasks.
represented by GPUCanvasContext interface.
WebGPU API
https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API

*/