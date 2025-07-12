# GIT

## The types

- Centralized: One server has the authoritative repo, history, metadata, etc. Clients just make commits and send them off to the server
- Distributed: Every user gets a copy of the repo, can branch/commit/edit but also pull in code from other sources (remotes) This is how git operates

## Snapshots

Git records the state of the entire repo on every commit instead of just recording the changes between files on every commit
Allows for comparing between commits of any distance almost instantly, instead of needing to compute the diff by going through every change along the way 

## Repository

The repo is record of a projects history, storing commits, branch, tags, etc. Local is everything kept in your `.git` folder on your machine, Remote is the same, just on someone else's computer (or server) 

## Commit

A snapshot of staged changes with metadata on who made the commit, at what time and what explaination they have for it.

## Working dir

The files you literally work on. Changes aren't recorded until they are staged or commited

## Staging area

The prep area for a commit. It contains the exact changes of what the commit is going to contain, whatever edits on the files from the working dir you want to record

## Basic flow

Working dir -> Staging area -> local repo -> remote repo -> Working dir
git clone/checkout -> git add   -> git commit   -> git push    -> git clone/checkout/pull