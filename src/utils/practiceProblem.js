export const practiceProblem = [
    {
    title: 'Add Two Numbers',
    url:"Add-Two-Numbers",
    codeInEditorPython:`def addditionTwo(a, b):`,
    codeInEditorJavascript:`function additionTwo(a, b) {
    // Complete the function and return the answer
    
}`,
    inputCodePython:` 

a, b = map(int, input().split())
ans = addditionTwo(a, b)
print(ans)`,
inputCodeJavascript:`function main(input) {
  const [a, b] = input.split(' ').map(Number);
  return additionTwo(a, b);
}`,
    solutionLink: 'https://leetcode.com/solution2',
    description:
      'Given two integers a and b, return the sum of a and b.',
    testCases: [
      { input: '2 5', output: '7' },
    ],
  },

  {
    title: 'Permutations',
    url:'Permutations',
    codeInEditor:``,
    solutionLink: 'https://leetcode.com/solution2',
    description:
      'Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.',
    testCases: [
        { input: `[1,2,3]`, output: `[ [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1] ]` },
        { input:  `[0,1]`, output: `[[0,1],[1,0]]`},
      
    ],
  },

]