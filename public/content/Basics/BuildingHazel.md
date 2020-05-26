# Building Hazel

Hazel uses various other libraries/sources that are compiled into one static library that you can then add to your own project. Libraries/Sources currently used by Hazel:
- [GLFW](https://www.glfw.org/) (We use [Cherno's fork](https://github.com/TheCherno/glfw))
- [glad](https://glad.dav1d.de/)
- [dear imgui](https://github.com/ocornut/imgui) (We use [Cherno's fork](https://github.com/TheCherno/imgui))
- [OpenGL Mathematics (GLM)](https://glm.g-truc.net/0.9.9/index.html)
- [spdlog](https://github.com/gabime/spdlog)
- [stb_image](https://github.com/nothings/stb)

You will also need [premake 5](https://premake.github.io/) to create the project files. The binary is currently also part of the [GitHub repository](https://github.com/TheCherno/Hazel). Only Visual Studio 2019 is currently supported as a devlopment environment and no guarantees are made when building Hazel in other environments.

The best way to get all the files needed to build Hazel is to clone [the master branch of the GitHub repository](https://github.com/TheCherno/Hazel). It is important that you close recusively in order to pull all of the necessary submodules.

`git clone --recursive https://github.com/TheCherno/Hazel`
