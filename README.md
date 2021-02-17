# Rock Paper Scissor App

## Problem Statement

An antarctic researcher has been alone on a research mission for quite some time now. She misses human interaction and especially playing rock, paper, scissors, however the frozen desert offers only solitude. Thus she has asked us for help.
With this app, the lone researcher will be able to play her beloved game against her only current company - her computer.  
Deployed version: https://rockzpaperzscissorz.netlify.app/

## User stories

### Step One - Functionality 
As a user  
To Play a game of RPS  
I need to be able to choose a hand gesture  
**function that returns userChoice**

As a user  
To have a competitor  
I need the computer to also choose a hand gesture  
**function that returns a random computerChoice**

As a game of RPS  
In order to function  
I need to know the rules of RSP  
**An extensive if statement of all outcomes**

As a game of RPS  
In order to issue a winner  
I need to compare the choice of the two participants  
**Add choices and if statements to a function**

As a user  
In order to know who won  
I need to have the results displayed  
**Display both choices as well as winner message**

### Step 2 - Buttons, styling, and testing

As a user  
So I don't have to type in my choice  
I want to just click a button  
**Add 3 buttons with onClick functions**

As a user  
So that I'm visually pleased  
I need some nice styling  
**Add Semantic UI**

As a developer  
To know that my app works  
I need to test the functionality  
**Cypress testing & unit testing**

### Step 3 - Adding Scoreboard

As a user  
So I know who's the ultimate champion  
I need a score system  
**Point system stores in state that adds 1 after each game**

As a user  
In order to reset a session *(computer was just lucky!)*  
I need to be able to reset the score  
**Button that sets state back to 0**  
