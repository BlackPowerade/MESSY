# Equivalence Class Testing Methodology

## What it Is

Equivalence class testing mainly a test design technique about dividing the input into different equivalences or criteria it needs to fulfill. The idea is to group inputs into types or constructs where all conditions must be fulfilled, and if one test case fails, the others are likely to fail as well. Or in other words picking out the important characteristics of what something *should* be and *should not* be.

## Examples
| Pass                                    | Rules           | No Pass                            |
|-----------------------------------------|-----------------|------------------------------------|
| `{ age: 10 }`                           | age < 18        | `{ age: 99 }`                      |
| `{ age: 26 }`                           | 18 ≤ age ≤ 65   | `{ age: 99 }`                      |
| `{ age: 99 }`                           | age > 65        | `{ age: 2 }`                       |
| `{ username: "Mike" }`                  | length < 6      | `{ username: "Charles" }`          |
| `{ username: "Charles" }`               | 6 ≤ length ≤ 20 | `{ username: "Alice" }`            |
| `{ username: "thegreatlebowski69420" }` | length > 20     | `{ username: "rick@contoso.com" }` |


## When to Use It

Best used for things described as ranges or other discrete sets. More or less anything you can clearly define a set of what should pass. Ranges of numbers (1-100), sets of strings (very good, good, ok, bad, very bad), etc.   
Could also be something like obj.prop1 in [dcCharacters] && obj.prop1 not in [marvelCharacters]    
Again, broad strokes what something should and shouldn't be.

## Limitations of It

The main limitations are that of specificity and generally identifying important characteristics. It also doesn't truly account for boundary testing, It specifies a range, but doesn't test what might happen when a value on the boundary is provided.   
That and actually testing with this methodoly might not be worth it when there are small sets to test. If a simple boolean property could tell you if something is a valid input or not, it would just be handled in the code itself, a specific test for it would likely be unnecessary. 

## Refs/AI/etc.

[Wikipedia Equivalence Partioning](https://en.wikipedia.org/wiki/Equivalence_partitioning)   
Art of software testing pg 50 - 54   
_My own personal experience_
