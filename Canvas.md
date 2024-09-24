Canvas tag is a HTMLCanvasElement dom interface with some methods and events dedicated to canvas element.  

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
https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D  
Canvas tutorial  
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial  

webgl  
allows 2d and 3d drawing. it leverages gpu and opengl api. browser translates js code to opengl instructions. btw it may be directx or metal api.  
webgl is represented by WebGLRenderingContext interface.  

webgl2  
it is more advanced version of webgl.  
represented by WebGL2RenderingContext interface.  

webgpu  
is the successor to webgl, has better compatibility with modern gpu, supports modern gpu apis like Vulkan etc, has general purpose gpu computations which is good for ML tasks.  
represented by GPUCanvasContext interface.  
WebGPU API  
https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API  
WebGPU Unleashed: A Practical Tutorial (may be outdated)  
https://shi-yan.github.io/webgpuunleashed/  


OffscreenCanvas  
it is performance optimization, the idea behind is to run rendering process inside web worker, so the rendering runs in a separate thread.  
OffscreenCanvas  
https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas  


Canvas libs  
it is better to use some canvas lib rather then pure 2d, webgl or webgpu api.  
p5, konva // nice doc  
three, babylon, playcanvas // for 3d  
https://npmtrends.com/easeljs-vs-konva-vs-p5js-vs-phaser-vs-pixi.js-vs-twojs-ts  