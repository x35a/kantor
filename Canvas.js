/*
Canvas tag is a HTMLCanvasElement dom interface with some unique methods and events.

Before drawing i must select one of the drawing context.

Drawing context is a way how browser draws something.

There are several drawing contexts:
2d, webgl1, webgl2, webgpu

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


*/