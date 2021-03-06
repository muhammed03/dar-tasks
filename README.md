# Dar tasks

## Prepare and test

1. Clone repo
2. Go to folder `dar-tasks`
3. To install all dependencies use `npm install`
4. Run `npm test`  in command line to test.

## Notes 
* All solutions to the tasks in folder `src`
* `npm run test` for test
* `npm run lint` to lint eslint errors
* `npm run format` to make code prettier

## Problem's description 

### Problem 01 

When coloring a striped pattern, you may start by coloring each square sequentially,
meaning you spend time needing to switch coloring pencils.
Create a function where given an array of colors cols, return how long it takes to color
the whole pattern. Note the following times:

● It takes 1 second to switch between pencils.

● It takes 2 seconds to color a square.

See the example below for clariﬁcation.

`color_pattern_times(["Red", "Blue", "Red", "Blue", "Red"]) ➞ 14`
 
// There are 5 colors so it takes 2 seconds to color each one (2 x 5 =
10).

// You need to switch the pencils 4 times and it takes 1 second to
switch (1 x 4 = 4).

// 10 + 4 = 14

#### Examples

`colorPatternTimes(["Blue"]) ➞ 2`

`colorPatternTimes(["Red", "Yellow", "Green", "Blue"]) ➞ 11`

`colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]) ➞ 13`

### Problem 02

You have cultivated a plant, and after three long months, the time has come to reap the
fruits (or the ﬂowers, in this case) of your hard work. During the growth phase, you
added water and fertilizer, and kept a constant temperature. It's time to check how
much the plant has grown!

A plant is represented horizontally, from the base to the left, to the end to the right:

`---@---@---@`

The stem is made of hyphens, and the ﬂowers are represented by symbols. A plant
always starts with the stem, and always ends with ﬂowers.
The four given parameters are:

● seed (string) determines the type of ﬂowers generated by the plant.

● water (integer) each unit of water extends the portion of stem between the
ﬂowers, and gives the total number of segments (stem + ﬂowers) of the plant.

● fert (integer) each unit of fertilizer increases the amount of ﬂowers, grouped
in clusters.

● temp (integer) if the temperature recorded is between 20°C and 30°C (bounds
included) the plant grows normally, otherwise all the ﬂowers die, except for a
single survivor at the end of the stem.

Given the above parameters, implement a function that returns a string representing
the plant (see the examples below for a better visualization).


`plant("@", 3, 3, 25) ➞ "---@@@---@@@---@@@"`

// Water gives the length of the stem portions between flowers.

// Water gives the total number of segments.

// Fertilizer gives the length of flowers clusters.

// In this case the temperature is in the acceptable range 20°C | 30°C

`plant("#", 1, 5, 30) ➞ "-#####"`

`plant("&", 5, 1, 20) ➞ "-----&-----&-----&-----&-----&"`

`plant("§", 3, 3, 15) ➞ "---------§"`

// The temperature out of range make all flowers die, except the last
one.

// The stem is not affected by temperature.
