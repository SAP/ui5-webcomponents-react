## Usage

The default step is 1 but the app developer can set a different one. App developers can set a maximum and minimum value for the `StepInput`. The increase/decrease button and the up/down keyboard navigation become disabled when the value reaches the max/min or a new value is entered from the input which is greater/less than the max/min.

### When to use:

- To adjust amounts, quantities, or other values quickly.
- To adjust values for a specific step.

### When not to use:

- To enter a static number (for example, postal code, phone number, or ID). In this case, use the regular `Input` instead.
- To display a value that rarely needs to be adjusted and does not pertain to a particular step. In this case, use the regular `Input` instead.
- To enter dates and times. In this case, use date/time related components instead.
