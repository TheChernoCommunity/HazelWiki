# Getting Started

There are currently no official releases of Hazel, so anyone wanting to use the library will have to [build it themselves]() and then include it in their project. After that you simply have to create a class that inherits from the Hazel `Application` class, include `EntryPoint.h` and implement the `CreateApplication` method to return a pointer to an instance of your class. From there you can start [adding layers]() and [responding to events]() to create your application.
