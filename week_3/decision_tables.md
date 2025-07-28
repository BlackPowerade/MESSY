# Analysis: Decision Tables

## What it is

A testing technique to try and cover systems with complex logic by basically mapping out the system as simple state machine. Where conditions and rules determine what set of actions the system will take, and building the test cases based off of the results of that mapping.

## Example table

### Conditions

- Condition 1: Customer is a loyalty member (Yes/No)  
- Condition 2: Purchase amount is at least $100 (Yes/No)  

### Actions

- Action A: Apply 10% discount  
- Action B: Offer free shipping  

### Decision Table

| Conditions \ Rules           | Rule 1 | Rule 2 | Rule 3 | Rule 4 |
|------------------------------|:------:|:------:|:------:|:------:|
| Customer is loyalty member?  |   No   |   No   |   Yes  |   Yes  |
| Purchase ≥ \$100             |   No   |   Yes  |   No   |   Yes  |

| Actions                    |        |        |        |        |
|----------------------------|:------:|:------:|:------:|:------:|
| Apply 10% discount         |   No   |   No   |   Yes  |   Yes  |
| Offer free shipping        |   No   |   Yes  |   No   |   Yes  |

## When to use it
DTT is best used when the code has high amounts of cause/effect logic or lots if/else if/else conditions. It helps to formally define just what exactly a system is supposed to do on what set of inputs, especially when two similar sets of inputs can produce very different results due to the different rules and conditions they do (or don't) fulfill.

## When to not use it
DTT tends to fall flat on larger sets of inputs, where every input has at the very least 2 states. Even more if the input is something is like a small < input < large range. The every possible combination has to be at least considered if it would cause a different set actions, much like how a finite state machine can grow to be very complex if it has many unique states.

## References and AI

[Geeks For Geeks Decision Table Testing](https://www.geeksforgeeks.org/software-engineering/decision-table-based-testing-in-software-testing/)   
[BrowserStack: Decision Table Testing](https://www.browserstack.com/guide/decision-table)

1. Did the AI hallucinate?
No, it did not. It did seem to ramble a bit when I asked it to descibe some cases where DTT might be used, but they all appeared to be legitimate.
2. [Geeks For Geeks Decision Table Testing](https://www.geeksforgeeks.org/software-engineering/decision-table-based-testing-in-software-testing/)
3. List a prompt you used
Give a me simple example of a decision table. List out the conditions and actions.