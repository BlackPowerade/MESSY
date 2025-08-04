# Boundary Value Analysis
## What it Is
A test design technique focusing on coverage of multi-combinational cases. Basically, by determining how many unique combinations of input there are, you can just test those specific combinations, instead of every possible permutation of inputs.

## Examples

OSs = (Windows, macOS, Linux)   
Browsers = (Chrome, Firefox, Safari)   
UserTypes = (Guest, Admin)   

|Test Case	 | Operating System | 	Browser |	User Type |
|------------|------------------|----------|------------|
| 1 |	Windows |	Chrome |	Admin |
| 2 |	Windows |	Firefox |	Guest |
| 3	| macOS |	Chrome |	Guest |
| 4	| macOS |	Safari |	Admin |
| 5	| Linux |	Firefox |	Admin |
| 6 |	Linux |	Safari |	Guest |

## When to Use It
Best for inputs that can have multiple different permutations, but only unique inputs generate unique results. Helps to alleviate pointlessly testing cases that would effectively produce the same results.

## Limitations of It
It is a purely mathematical approach to finding unique cases, which doesn't necessarily mean all cases are created equal. Some cases are far more likely to appear than others (See Safari on linux)

## Refs/AI/etc.
[https://www.geeksforgeeks.org/software-engineering/pairwise-software-testing/]()

1. Did the AI hallucinate?   
No, everything it is producing is real (except for the safari on linux, but I think that was intentional on the AI's part)
2. Verify the validity   
[https://www.geeksforgeeks.org/software-engineering/pairwise-software-testing/]()
3. List a prompt you used   
Give me an example of some test data for pairwise testing