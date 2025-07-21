1. ```git config user.name "name" && git config user.email "email@somedomain.org"``` Shouldn't set anything globally just on principle, but anyway you need to split work / personal accounts.
2. ```git config --global core.editor "editor"```
3. ```git config list --local``` ```git config list --global```
4. ```git init```
5. ```git clone git@ssh/https://<repo-addr>``` Cloning is creating a copy, initting is creating an entirely new, different repo
6. ```git status``` What branch you are on, how far behind or ahead your branch is compared to its parent, untracked files (if present), changed files (if present)
7. ```git add```
8. ```git commit -m "changed stuff"```
9. See [https://github.com/BlackPowerade/MESSY/blob/main/week_1/is-triangle/.gitignore]()
10. ```git rm <file>```
11. ```git remove -v```
12. Gets updates from the remote repo
13. ```fetch``` just brings changes that occured on the remote to your local repo. These changes are not applied to your branch itself. ```pull``` actually brings in said changes and my result in merge conflicts if you have commits made to a file before the remote changes were made.
14. ```git branch -r```
15. 
```
Ike@SEIRAN8 C:\Users\Ike\Projects\MESSY\week_1> git checkout -b new_branch
Switched to a new branch 'new_branch'
Ike@SEIRAN8 C:\Users\Ike\Projects\MESSY\week_1> git branch -l    
main 
* new_branch
```
16. ```git switch``` ```git checkout```
17. 
```
Ike@SEIRAN8 C:\Users\Ike\Projects\MESSY\week_1> git switch main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
Ike@SEIRAN8 C:\Users\Ike\Projects\MESSY\week_1> git branch -D new_branch
Deleted branch new_branch (was 75dab8e).
```
