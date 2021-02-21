# Rendering API

## Structure
Hazel's Rendering API is actually a two-fold system. The two systems are:
- The actual rendering API that the client will access (this is abstracted)
- The underlying system that provides the actual behaviour for the renderer

This system is in place in order to be able to switch out the API used for rendering (OpenGL, Vulkan, DirectX) without the Client having to change their system in any way.

## Rendering
Currently, Hazel only supports 2D rendering. Whilst Cherno has mentioned that a 3D pipeline will be implemented at some point, it is not a priority right now and therefore will not be implemented in the near future.