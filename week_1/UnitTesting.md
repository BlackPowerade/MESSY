# Unit Testing

## Intro

A rough and basic triangle validator webapp/site/thing. Takes in 3 angles from user input and spits out the type of triangle it is.    
Error handling on the frontend is pretty minimal, mostly mitigated by the `<input>` elements being restricted to numbers and having their ranges set to 1 - 178. In the event someone clears the box and input a negative/zero/greater than 180 or any kind of impossible angle combination the site will tell them the angles must add up to 180.   
Error handling on the """backend""" is really just an `InvalidTriangle` exception that gets thrown when the constructor gets an impossible angle combination. It conatains a short message about what was wrong the input that gets displayed on the frontend.    
Unit tests are a simple battery of different triangle classifications test against and a few invalid angle combos to ensure the class throws when it is supposed to.    
Mainly it is concerned with the triangle classification.    

## Details

- Vanilla TypeScript
- `vite` for development server/build tool
- Node.JS 22 (LTS)
- VS Code 1.99.3
- Special shoutout to github for hosting the site at the low low price of free
- Play around with it [HERE](https://blackpowerade.github.io/MESSY/)

Again, pretty simple. 3 `input` elements, with a click listener on the submit button that runs a function. The function gathers the numbers from the elements, uses them as arguments for a new `Triangle` object. It inserts the classification of the triangle into the DOM if it succeeds, catches the error and puts the message into the DOM if it throws. 


## Example Tests

| Example Object | Result |
|----------------|--------|
| `Triangle(60, 60, 60)`| `.isEqualateral() == true` `.isScalene() == false` `.isIsosceles() == false` |
| `Triangle(40, 40, 100)` | `.isEqualateral() == false` `.isScalene() == false` `.isIsosceles() == true` |
| `Triangle(60, 40, 80)` | `.isEqualateral() == false` `.isScalene() == false` `.isIsosceles() == true` | 
| `Triangle(-1, 100, 81)` | Throws InvalidTriangle, displays error message about numbers must be positive |
| `Triangle(9, 100, 70)` | Throws InvalidTriangle, displays angles don't add up to 180 |
| `Triangle(11, 100, 70)` | Throws InvalidTriangle, displays angles don't add up to 180 |
| `Triangle(9, 100, undefined)` | Throws Invalid Triangle, displays joke message (for now) |

## Unit Tests

Primarily focused on ensuring the triangles are properly classified and do not evaluate as true for more than 1 type and subtype. For example, an equalateral triangle does not also categorize as an isosceles despite 2 of the angles being the same, or a right triangle being classified as acute despite having 2 acute angles. Basically ensuring the logic for determining type is complete and doesn't prematurely classify. Hence why the determineType and determineSubtype functions on the object classify on most strict to least strict requirements basis.    
Tests for both type and subtype on the same triangle could be added, but are likely unnecessary when the underlying logic for type and subtype are properly tested and do not have side effects on one another.

## Bugs

Honestly the only bugs I encountered was just remembering to use `value` instead of `placeholder` on the input elements. Other than a typo here or there it was smooth sailing.   

## Problems

Mainly just remembering how to deploy a site using github pages. Had to move the files to a different folder in the repo `docs` before I tested the site and found it would not work properly because it was attempting to load raw TS files. After running `vite build` to turn the TS into JS and bundle up the files it worked fine. Ugly, but it works. I'll do some CSS work later.

## Screenshots

![Terminal View](./Screenshot%202025-07-14%20012535.png)
![Yep, Its acute.](./Screenshot%202025-07-14%20012934.png)
![185 != 180. Who would have guessed?](./Screenshot%202025-07-14%20013050.png) 
![A scalene right triangle, neat.](./Screenshot%202025-07-14%20013311.png)


## GitHub

[https://github.com/BlackPowerade/MESSY]()

## Recommends

Nothing to really recommend. Wish the testing extension for vscode would work properly and show me results in the sidebar, but terminal view works fine.