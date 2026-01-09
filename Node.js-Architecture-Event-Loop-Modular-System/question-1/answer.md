1. Node.js Architecture

Node.js follows a single-threaded, event-driven, non-blocking architecture designed to handle large numbers of concurrent requests efficiently.

Key characteristics:

Uses JavaScript on the server side

Executes code in a single main thread

Heavy operations are handled asynchronously

Relies on the Event Loop to manage execution

Core components:

JavaScript Engine (V8)

Node.js Core APIs

Native Bindings

libuv

Event Loop

Thread Pool

2. JavaScript Engine (V8)

V8 is the JavaScript engine developed by Google and used by Node.js.

Role of V8:

Converts JavaScript code into machine code

Executes JavaScript outside the browser

Provides memory management (heap and garbage collection)

Why Node.js uses V8:

Very fast execution

Highly optimized

Written in C++

3. Node.js Core APIs

Node.js Core APIs provide built-in modules that allow interaction with the system.

Examples:

fs → File system operations

http → Create servers

path → Handle file paths

os → System information

Purpose:

Provide low-level system access

Avoid browser dependency

Enable backend functionality

4. Native Bindings

Native bindings act as a bridge between JavaScript and C/C++ code.

Why native bindings are needed:

JavaScript alone cannot interact with OS-level features

Performance-critical operations are written in C++

Example:

fs.readFile()
JavaScript → Native binding → C++ → Operating System

5. Event Loop

The Event Loop is the heart of Node.js asynchronous behavior.

What it does:

Continuously checks queues

Executes callbacks when the call stack is empty

Enables non-blocking I/O

Why it is important:

Allows Node.js to handle multiple requests using one thread

Improves performance and scalability

6. libuv
What is libuv?

libuv is a C library that provides asynchronous I/O and event handling.

Why Node.js needs libuv:

JavaScript cannot directly manage OS-level async operations

Provides cross-platform support (Windows, Linux, macOS)

Responsibilities of libuv:

Event loop implementation

Thread pool management

Asynchronous file system operations

Network I/O handling

Timers and scheduling

7. Thread Pool
What is a thread pool?

A thread pool is a group of background threads used to handle blocking or CPU-intensive tasks.

Why Node.js uses a thread pool:

Prevents blocking the main event loop

Improves performance for heavy operations

Operations handled by thread pool:

File system operations

DNS lookup

Compression (zlib)

Crypto operations

(Default size: 4 threads)

8. Worker Threads
What are worker threads?

Worker threads allow running JavaScript in parallel threads.

Why worker threads are needed:

Handle CPU-intensive tasks

Prevent blocking the event loop

Useful for heavy computations

Difference: Thread Pool vs Worker Threads
Thread Pool	Worker Threads
Handled internally by libuv	Managed by developer
Used for I/O tasks	Used for CPU-heavy tasks
Limited control	Full control
C/C++ based	JavaScript based
9. Event Loop Queues
Macro Task Queue

Contains tasks like:

setTimeout

setInterval

setImmediate

I/O callbacks

Micro Task Queue

Contains:

Promise.then()

Promise.catch()

queueMicrotask()

process.nextTick()

10. Execution Priority
Priority order:

process.nextTick()

Micro Task Queue (Promises)

Macro Task Queue

Example:
setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

process.nextTick(() => console.log("NextTick"));

Output:
NextTick
Promise
Timeout

11. Summary

Node.js is single-threaded but highly scalable

libuv enables asynchronous behavior

Thread pool handles blocking tasks

Worker threads enable parallel execution

Event Loop manages execution order