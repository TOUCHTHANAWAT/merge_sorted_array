# merge_sorted_array
This project implements a function to merge 3 arrays into a single sorted array in ascending order without using any built-in sort function.
Constraints:
- `collection_1` is sorted in ascending order (min → max)
- `collection_2` is sorted in descending order (max → min)
- `collection_3` is sorted in ascending order (min → max)

# Project Initialization (How this project was created)
This section shows the commands used to set up the project from scratch:<br>
npm init -y<br>
npm install --save-dev typescript jest ts-jest @types/jest ts-node<br>
npx tsc --init<br>
npx ts-jest config:init

# How to Run the Project
## Install dependencies
npm install

## Run Unit Tests
npm test

## Run Demo
npm run demo

# Explain further
## Unit Test

Unit tests are written using Jest to verify that the merge function works correctly.

They help to:
- Validate correctness of the algorithm
- Cover edge cases (empty arrays, duplicates, negative numbers)
- Prevent regressions when code is modified

## Demo

The demo file (`demo.ts`) is used to run the function manually and display output in the console.

It helps developers:
- Quickly see real output
- Understand how the function behaves at runtime