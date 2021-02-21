# Layers
Hazel has a custom layering system. On the client end, this means that the user can attach separate chains of logic/rendering to the same application. This system is integral to how the engine works, as it allows for more dynamic programs to be developed. This system is used heavily in production, and is even used for the Hazelnut editor.

## Underlying system
The system that Hazel uses is a stack system. This means that there is a LayerStack inside the application that has a queue of Layers that it can run through on:
- Initialisation
- Update
- Render
- Events
- Destruction
When the client pushes a custom Layer back, it simply gets added to the this stack to be implemented.

### Types of Layers
There are two types of Layers inside this system. There are ordinary Layers, and Overlays. (expand on what these are...)

### Function Definitions
There are 5 functions that can be overriden by the client. Each of these can be seen below, as well as a description of what they are used for and when they are called
- **OnAttach** --- This function is called when the layer is attached, meaning that this function is called when the application starts. In basic terms, this is where the client can put their initialisation code
- **OnDetach** --- This function is called when the layer is detached, meaning that this function is called when the application ends. Similar to the 'OnAttach' function, this is where the user can put their destruction code
- **OnUpdate** --- This function is called every frame. It also takes in a Timestep, meaning that the client will know how many seconds it has been since the last frame
- **OnImGuiRender** --- This is a function that, most of the time, won't be overriden. This is used when you want to draw UI to the window
- **OnEvent** --- This function is called whenever an event happens. The event that occured is then passed in to the function for the client to check if it is the event they need, and allow them to write custom code to happen on that event 

## Client
On the client's end, there are two main things that need to be done in order to have a layer run on the stack. Both of these have been outlined below

### Layer Creation
In order to create a Layer, the client must extend from the 'Layer' class. Then they can override the necessary functions as previously explained. The example below shows how the client can use this system:

```cpp
class MyLayer : public Layer
{
	MyLayer();
	virtual ~MyLayer() = default;

	void OnAttach() override;
	void OnDetach() override;

	void OnUpdate(Timestep ts) override;
	void OnImGuiRender() override;
	void OnEvent(Event& e) override;
}
```

### Adding Layers to Stack
On initialisation of the client's application class, they can simply use the PushLayer function to push a pointer to their custom layer on to the stack. E.g.

```cpp
MyApp::MyApp()
{
	PushLayer(new MyLayer());
}
```