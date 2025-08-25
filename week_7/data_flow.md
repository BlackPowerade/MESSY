# Analysis: Control flow

## What it is

A testing technique done by tracking data definitions throughout the program's execution, testing when they are defined, modified and used.

## Example table

| Test Case ID | Variable | Def Location       | Use Location       | Data Flow Check        | Expected Result                           |
|--------------|----------|--------------------|--------------------|------------------------|-------------------------------------------|
| TC1          | x        | Line 12 (`x = 5`)  | Line 20 (`y = x+1`) | def-use without re-def | `y` equals `6`                            |
| TC2          | value    | Line 8 (`value = read()`) | Line 15 (`if value > 0`) | def-use along path      | conditional branch on positive `value`    |
| TC3          | flag     | Line 5 (`flag = true`) | None               | def with no use        | detect “defined but never used” anomaly   |
| TC4          | count    | None               | Line 30 (`count++`) | use before def         | detect “use before definition” anomaly    |

## When to use it

Data flow testing is best used in complex algorithms or other complex code where following the actual flow of execution is more difficult that just watching variables for changes. It mainly is used for integrity-critical applications like safety equipment or finance. 

## When not to use it

Much like control flow, this technique is very rigorous and is not suitable for all codebases. It is also white-box and requires access to the codebase to actually be useful.

## References and AI

[Geeks For Geeks Data Flow Testing](https://www.geeksforgeeks.org/software-testing/data-flow-testing/)

1. Did the AI hallucinate?
No hallucinations.
2. [Geeks For Geeks Data Flow Testing](https://www.geeksforgeeks.org/software-testing/data-flow-testing/)
3. List a prompt you used
Give an example of data flow testing data. Format it as a table.