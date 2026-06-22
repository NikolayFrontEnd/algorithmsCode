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


function isMatch(s, p) {
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
}