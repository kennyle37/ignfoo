Based on our given inventory, we would end up with the following armor:
Tate's Spiked Cleats, 2x Chestpiece of Vachon, Keeton Mask, Tattered Shorts. The total armor value would be 103 and the cost would be 299.

With this setup, we end up with 3 best in slot pieces, 1 most efficient piece, and a wildcard piece that is best in slot. Tate's Spike Cleats  breaks down to .38 crowns per armor, Chestpiece of Vachon breaks down to .36 crowns per armor, Keeton Mask breaks down to .31 crowns per armor, and the Tattered Shorts, while is 9 armor less than the Famed Pon Leggings, is .30 crowns per armor versus the latter's .25 crowns per armor. 

I implemented the solution by looping through all of the possible combinations and kept track of the best combination that is under the crown limits. This is a brute force solution so the time complexity is slow. The time complexity could reduced if I implemented the program dynamically while keeping track of possible solutions similar to the knapsack problem (https://en.wikipedia.org/wiki/Knapsack_problem). My program would work with other inventories, assuming there are only 4 armor sets and 1 wildcard. 

