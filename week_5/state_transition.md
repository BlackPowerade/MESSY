# Analysis: State-transition

## What it is

A testing technique done by modeling the system as a finite state machine then analysing the individual states to ensure transitions perform correctly based on the state and input.

## Example table

| Current State | Input/Event     | Next State    | Expected Outcome                             | Notes                                    |
|---------------|-----------------|---------------|----------------------------------------------|------------------------------------------|
| Idle          | InsertCard      | CardInserted  | Display “Enter PIN” prompt                    | Valid card inserted                      |
| CardInserted  | EnterPIN (1234) | Authenticated | Display account menu                          | Correct PIN                              |
| CardInserted  | EnterPIN (0000) | CardInserted  | Display “Invalid PIN” and re-prompt           | Incorrect PIN                            |
| Authenticated | SelectWithdraw  | Dispensing    | Dispense cash and return to Authenticated     | Sufficient balance                       |
| Authenticated | SelectWithdraw  | Error         | Display “Insufficient Funds” and return state | Balance < requested amount               |
| Dispensing    | CashTaken       | Idle          | Eject card and reset                          | Customer removed cash                    |
| Any           | Cancel          | Idle          | Eject card and reset                          | Cancels at any point before dispensing   |

## When to use it

STT is best used when a system is stateful and has plenty of possible states that it could be in at any given time. Typical HTTP basic auth (username and password in the headers, server returns a cookie indentifying their session) for example. Also useful for catching edge cases on states, as transitions need to account for all possible inputs.  

## When not to use it

STT isn't useful when you have a system that is not (or minimally) stateful. Oauth2 authentication (where the redirect uris have all information needed for next steps) or a well made react webapp would be an example of this. Also not very useful if performance is the main objective, as this doesn't cover performance at all.

## References and AI

[Geeks For Geeks State Transition Testing](https://www.geeksforgeeks.org/software-engineering/state-transition-testing/)

1. Did the AI hallucinate?
Nope, the table provided looks alright to me
2. [Geeks For Geeks State Transition Testing](https://www.geeksforgeeks.org/software-engineering/state-transition-testing/)
3. List a prompt you used
Give me some examples of state-transition testing data
