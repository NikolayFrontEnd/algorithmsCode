function pairSumSortedBruteForce(nums, target) {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}

console.log(pairSumSortedBruteForce([1,1,1],2));


/* function isMatch(s, p) {
    if (p.length === 0) {
        return s.length === 0;
    }
    
    const firstMatch = s.length > 0 && (s[0] === p[0] || p[0] === '.');
    

    if (p.length >= 2 && p[1] === '*') {

        return isMatch(s, p.slice(2)) || 
               (firstMatch && isMatch(s.slice(1), p));
    } else {
        return firstMatch && isMatch(s.slice(1), p.slice(1));
    }
} */

function func(nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    const sum = nums[l] + nums[r];

    if (sum === target) {
      return [l, r];
    } else if (sum < target) {
      l++;
    } else {
      r--;
    }
  }

return [];
}

console.log(func([0,0,0,0], 7));

function tripletSumBruteForce(nums) {
  const n = nums.length;
  // Use a Set to ensure we don't add duplicate triplets.
  const triplets = new Set();

  // Iterate through the indexes of all triplets.
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          // Sort the triplet before turning it into a key.
          const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          // Sets can't dedupe arrays by value (objects compare by reference),
          // so we join the sorted triplet into a string key instead.
          triplets.add(triplet.join(','));
        }
      }
    }
  }

  // Convert each string key back into an array of numbers.
  return [...triplets].map(t => t.split(',').map(Number));
}

export function triplet_sum(nums) {
  const triplets = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    // Optimization: triplets consisting of only positive numbers will never sum
    // to 0.
    if (nums[i] > 0) break
    // To avoid duplicate triplets, skip 'a' if it's the same as the previous
    // number.
    if (i > 0 && nums[i] === nums[i - 1]) continue
    // Find all pairs that sum to a target of '-a' ('-nums[i]').
    const pairs = pair_sum_sorted_all_pairs(nums, i + 1, -nums[i])
    for (const pair of pairs) {
      triplets.push([nums[i], ...pair])
    }
  }
  return triplets
}

function pair_sum_sorted_all_pairs(nums, start, target) {
  const pairs = []
  let left = start,
    right = nums.length - 1
  while (left < right) {
    const sum = nums[left] + nums[right]
    if (sum === target) {
      pairs.push([nums[left], nums[right]])
      left++
      // To avoid duplicate '[b, c]' pairs, skip 'b' if it’s the same as the
      // previous number.
      while (left < right && nums[left] === nums[left - 1]) {
        left++
      }
    } else if (sum < target) {
      left++
    } else {
      right--
    }
  }
  return pairs
}


// Is Palindrome Valid

const isLetter = (char)=>{
    return /[a-z,A-Z]/.test(char)
}
const func = (s) =>{
const t = s.split("");
l = 0;
r = t.length-1;

    while(l<r){
        
while(l<r && isLetter(t[l]) === false){
    l++;
}
while(l<r && isLetter(t[r]) === false){
    r--;
}
if(t[l] !== t[r]){ 
    return false  
}
 l++;
 r--;
}return true;}

console.log(func('all'))


// Largest Container

const h = [2, 7, 8, 3, 7, 6];

let l = 0;
let r = h.length-1;
let max = 0;

while (l < r){
    
let tempMax = (r - l) * Math.min(h[l], h[r]);
   
   if(max<tempMax){
       max = tempMax;
   }
   
   if(l<r){
       l++;
   }
   
   if(l>r){
       r--;
   }
}

//Shift Zeros to the End

const n = [0, 1, 0, 3, 2];
const t = [];


for(let i = 0; i<n.length;i++){
  if(n[i] !== 0){
      t.push(n[i])
  }
}

for(let i = 0; i<n.length;i++){
  if(n[i] === 0){
      t.push(n[i])
  }
}

console.log(t)