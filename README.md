# javascript-zero-expert

The Complete JavaScript Course 2022: From Zero to Expert! by Jonas Schmedtmann

# Details

<details open> 
  <summary>Click to Contract/Expend</summary>

## Section 8: How JavaScript Works Behind the Scenes

### 89. An High-Level Overview of JavaScript

1. High-level: javascript, python (C is low level)
2. Garbage-collected
3. Interpreted or just-in-time compiled
4. Multi-paradigm
   - Paradime: An approach and midset of structuring code, which will direct your coding style and technique (Imperative vs Declarative)
     1. Procedural programming
     2. Object-oriented programming (OOP)
     3. Functional programming (FP)
5. Prototype-based object-oriented
   - built from prototypes (Array.prototype)
6. First-class functions
   - functions are simply treated as variables
7. Dynamically-typed language
8. \*Single-threaded
9. \*Non-blocking event loop

### 90. The JavaScript Engine and Runtime

- Compliation
  - Entire code is converted into machine code at once, and written to a binary file that can be executed by a computer.
- Interpretation: Old Javascript
  - Interpreter runs through the source code and executes it line by line
- Just-in-time (JIT) compliation: Modern Javascript
  - Entire code is converted into machine code at once, then executed immediately

#### JS Engine

1. Parsing (AST: Abstract Syntax Tree)
2. Compliation: Just-in-time compliation
3. Execution: Happens in call stack
4. Optimization: During execution
   - Go to 2. Compliation

#### Runtime in the browser

- JS Engine - Heap / Call Stack
- Web APIs - Dom, Timers, Fetch API, and Etc.
- Callback Queue - Click, Timer, Data, and Etc.
- Event Loop
  - Essential for non-blocking concurrency model
  - Between Callback Queue and Call Stack

#### Runtime in Node.js

- JS Engine
- C++ Bindings & Thread Pool
- Callback Queue
- Event Loop

### 91. Execution Contexts and The Call Stack

1. Execution of global execution context (for top-level code)
2. Execution of top-level code (inside global EC)
3. Execution of functions and waiting for callbacks

- Execution Contexts(EC)
  - It stores all the necessary infomation for some code to be executed
- Inside Execution Context
  1. Variable environment
     - let, const and var declarations
     - functions
     - arguments object
  2. Scope chain
  3. `this` keyword
  - Arrow functions to not have arguments object and this keyword!

### 93. Scoping in Practice

```js
// var is in a function scope, not a global scope
var millenial = true;
```

### 94. Variable Environment: Hoisting and The TDZ

- Hoisting: **Before execution**`, code is scanned for variable declarations, and for each variable, a new property is created in the **variable environment object**

|                       | hoisted? |     initial value      |         scope          |
| :-------------------: | :------: | :--------------------: | :--------------------: |
| function declarations |  ✅ Yes  |    Actual function     | Block (in strict mode) |
|    `var` variables    |  ✅ Yes  |       undefined        |        Function        |
|   `let` and `const`   |  ⛔️ No  |  <uninitialized>, TDZ  |         Block          |
| function expressions  |          |       Depends if       |                        |
|  and arrow functions  |          | using var or let/const |                        |

- TDZ (Temporal Dead Zone): lines above its declaration
- Why TDZ?
  - Make it easier to avoid and catch errors
  - Makes `const` variables actually work
- Why Hoisting?
  - Using functions before actual declaration
  - `var` hoisting is just a byproduct (javascript wasn't intended to become a huge PL as it is today)

### 96. The this Keyword

_this_ in

1. Method: Object that is calling the method
2. Simple function call (Function expression): undefined in strict mode, otherwise window (in the browser)
3. Arrow functions: this of surrounding function (lexical this)
   - arrow function does own _this_ keyword
4. Event listener: DOM Element that the handler is attached to

_this_ does NOT point to the function itself, and also NOT the its variable environment

</details>
