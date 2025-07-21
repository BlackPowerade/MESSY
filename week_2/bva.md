# Boundary Value Analysis
## What it Is
A test design technique focusing on the edges of the input domains. Generally speaking it is a supplement to Equivalence classes to ensure unexpected results don't crop up at the (literal) edge cases equivalence classes may or may not cover.

## Examples
| Test values | Boundary | Result |
|-------------|----------|--------|
| 1, 1, 178 | Lower | Accepted - Obtuse Isoceles |
| 2, 1, 177 | Lower +1 | Accepted - Obtuse Isoceles |
| 0, 1, 179 | Lower -1 | Rejected - All angles must be greater than 0 |
| 60, 60, 60 | Upper | Accepted - Acute Equilateral |
| 61, 60, 60 | Upper +1 | Rejected - Sum of angles must equal 180 |
| 59, 60, 60 | Upper -1 | Rejected - Sum of angles must equal 180 |

## When to Use It
Best for set ranges with clearly defined lower and upper bounds. Typically numbers and datetimes. Again, I don't know if I would call this so much a defined approach but rather just a supplement to equivalence classes. Ideally you should already be testing the edges in equivalence classes, because everything within the edges will likely produce expected results.

## Limitations of It
Just like with equivalence classes it can be very difficult to use if the range is hard to define, or if there are multiple layers of logic that must run to determine what a valid range is.

## Refs/AI/etc.
[https://www.geeksforgeeks.org/software-testing/software-testing-boundary-value-analysis/]()

1. Did the AI hallucinate?   
No, everything it is saying is accurate.
2. Verify the validity   
[https://www.geeksforgeeks.org/software-testing/software-testing-boundary-value-analysis/]()
3. List a prompt you used   
Give me some examples of when boundary value analysis is useful