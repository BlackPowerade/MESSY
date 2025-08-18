# Analysis: Control flow

## What it is

A testing technique done by graphing out the logical flow and execution paths of code. Nodes are branch points and edges are the executed code between said branches.

## Example table

| Test Case |	Input x	 | x > 0 |	x < 10 |	Executed Path |	Expected Output |
|-----------|---------|--------|--------|------------------|-----------------|
| TC1 |	5 |	T |	T |	Entry → x>0 (T) → x<10 (T) → print "A" → Exit |	"A" |
| TC2 |	15 | T | F | Entry → x>0 (T) → x<10 (F) → print "B" → Exit | "B" |
| TC3 |	0 |	F |	– |	Entry → x>0 (F) → print "C" → Exit |	"C" |

## When to use it

Control flow test is best for complex systems with many different execution paths. A methodology best suited for software that absolutely _needs_ to have 100% coverage. Think flight control systems, banking ledgers, etc. The kind of stuff where errors are unacceptable and can have real consequences.

## When not to use it

Although control flow testing's strength is in complex systems, it suffers from the same weakness all exhaustive types suffer from, just too many conditions and too much complexity. Large systems can be very difficult to test if you have to map out every single code path. That and you need the source code to do this kind of testing, it is nigh impossible to map out every code path when you have no idea how many there are.

## References and AI

[Geeks For Geeks Control Flow Testing](https://www.geeksforgeeks.org/software-testing/control-flow-software-testing)

1. Did the AI hallucinate?
It's basic but accurate. No hallucinations.
2. [Geeks For Geeks Control Flow Testing](https://www.geeksforgeeks.org/software-testing/control-flow-software-testing)
3. List a prompt you used
Give an example of some control flow testing data. Format it as a table.
