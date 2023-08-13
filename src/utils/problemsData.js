import ratInMaze from '../images/ratinmaze.PNG'
import nQueen from '../images/n-queen-solution.PNG'
import ratInMazeTree from '../images/rat-in-maze-tree.PNG'
import nQueenTree1 from '../images/n-queen-tree1.png'
import nQueenTree2 from '../images/n-queen-tree2.png'
import nQueenTree3 from '../images/n-queen-tree3.png'
export const problemsData = [
    {
      id: 1,
      title: "Two Sum",
      url:'Two-Sum',
      next:'Two Sum',
      problemStatement:
        "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to the target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
      sampleInput: {
        nums: [2, 7, 11, 15],
        target: 9,
      },
      sampleOutput: [0, 1],
      explanation: "The rat can reach the destination at (3, 3) from (0, 0) by two paths - DRDDRR and DDRDRR, when printed in sorted order we get DDRDRR DRDDRR.",
      img:ratInMaze,
      approaches: [
        {
          name: "Backtracking",
          description: "Use backtracking to find all possible paths...",
          explanation:'The code uses backtracking to find all possible paths from the top-left corner to the bottom-right corner of a given matrix. It explores all valid directions (up, down, left, right) from the current cell while avoiding blocked cells and keeping track of visited cells. When the destination is reached, the current path is added to the list of valid paths. The process continues until all possible paths are explored, and the function returns a list containing all valid paths found.',
          img:[ratInMazeTree],
          code: `def findPath(m, n):
      if m[0][0] == 0:
          return 
      ans = []
      path = ''
      visPath = [[0] * n for _ in range(n)]
      x = 0
      y = 0
      solve(x, y, path, visPath, m, n, ans)
      return ans
                    
  def solve(x, y, path, visPath, m, n, ans):
      if x == n-1 and y == n-1:
          ans.append(path)
          return 
      #Down
      visPath[x][y]=1 
      c=0
      if(isSafe(x+1,y,visPath,m,n)):              
          solve(x+1,y,path+"D",visPath,m,n,ans)         
          
      #Left
      if(isSafe(x,y-1,visPath,m,n)):
          solve(x,y-1,path+"L",visPath,m,n,ans)
          
      #Right  
      if(isSafe(x,y+1,visPath,m,n)):
          solve(x,y+1,path+"R",visPath,m,n,ans)
          
      #Up
      if(isSafe(x-1,y,visPath,m,n)):
          solve(x-1,y,path+"U",visPath,m,n,ans)
          
      visPath[x][y]=0 
      
  def isSafe(x, y, visPath, m, n):
      if x>=0 and x<n  and y>=0 and y<n and visPath[x][y]==0 and m[x][y]==1:
          return True
      else:
          return False
      
  m=[[1, 0, 0, 0],
     [1, 1, 0, 1],
     [1, 1, 0, 0],
     [0, 1, 1, 1]]
  n=4   
  findPath(m,n)`,
  
        },
      ],
      
    },
    {
      id: 2,
      url:'Rat-in-maze',
      title: "Rat in Maze",
      problemStatement: "In this problem, we need to find all the possible paths that the rat can take to reach the destination from the source. It should be noted that during any path, the rat cannot visit the same cell more than once. If the source cell itself is blocked (with a value of 0), the rat won't be able to move to any other cell, and there will be no valid paths.For instance, suppose we have a matrix of size N = 4 represented as:", // The problem statement goes here
      sampleInput: {
        N: 4,
        matrix: [
          [1, 0, 0, 0],
          [1, 1, 0, 1],
          [1, 1, 0, 0],
          [0, 1, 1, 1],
        ],
      },
      sampleOutput: ["DDRDRR", "DRDDRR"],
      explanation: "The rat can reach the destination at (3, 3) from (0, 0) by two paths - DRDDRR and DDRDRR, when printed in sorted order we get DDRDRR DRDDRR.",
      img:ratInMaze,
      approaches: [
        {
          name: "Backtracking",
          description: "Use backtracking to find all possible paths...",
          explanation:'The code uses backtracking to find all possible paths from the top-left corner to the bottom-right corner of a given matrix. It explores all valid directions (up, down, left, right) from the current cell while avoiding blocked cells and keeping track of visited cells. When the destination is reached, the current path is added to the list of valid paths. The process continues until all possible paths are explored, and the function returns a list containing all valid paths found.',
          img:[ratInMazeTree],
          code: `def findPath(m, n):
      if m[0][0] == 0:
          return 
      ans = []
      path = ''
      visPath = [[0] * n for _ in range(n)]
      x = 0
      y = 0
      solve(x, y, path, visPath, m, n, ans)
      return ans
                    
  def solve(x, y, path, visPath, m, n, ans):
      if x == n-1 and y == n-1:
          ans.append(path)
          return 
      #Down
      visPath[x][y]=1 
      c=0
      if(isSafe(x+1,y,visPath,m,n)):              
          solve(x+1,y,path+"D",visPath,m,n,ans)         
          
      #Left
      if(isSafe(x,y-1,visPath,m,n)):
          solve(x,y-1,path+"L",visPath,m,n,ans)
          
      #Right  
      if(isSafe(x,y+1,visPath,m,n)):
          solve(x,y+1,path+"R",visPath,m,n,ans)
          
      #Up
      if(isSafe(x-1,y,visPath,m,n)):
          solve(x-1,y,path+"U",visPath,m,n,ans)
          
      visPath[x][y]=0 
      
  def isSafe(x, y, visPath, m, n):
      if x>=0 and x<n  and y>=0 and y<n and visPath[x][y]==0 and m[x][y]==1:
          return True
      else:
          return False
      
  m=[[1, 0, 0, 0],
     [1, 1, 0, 1],
     [1, 1, 0, 0],
     [0, 1, 1, 1]]
  n=4   
  findPath(m,n)`,
          TC:"O(4^(m*n)), because on every cell we need to try 4 different directions",
          
          SC:"O(m*n), Maximum Depth of the recursion tree(auxiliary space)"
        },
        
      ],
      next:'Two Sum',
    },
    {
        id: 3,
        url:'N-Queens',
        title: "N-Queens",
        problemStatement:"The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order. Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively "
        ,
        sampleInput: {
          N: 4,
         
        },
        sampleOutput: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]],
        explanation: " There exist two distinct solutions to the 4-queens puzzle as shown above",
        img:nQueen,
        approaches: [
          {
            name: "Backtracking",
            description: "Use backtracking to find all possible paths...",
            explanation:'The code uses backtracking to find all possible paths from the top-left corner to the bottom-right corner of a given matrix. It explores all valid directions (up, down, left, right) from the current cell while avoiding blocked cells and keeping track of visited cells. When the destination is reached, the current path is added to the list of valid paths. The process continues until all possible paths are explored, and the function returns a list containing all valid paths found.',
            img:[nQueenTree1,nQueenTree2,nQueenTree3],
            code: `def isSafe(row,col,bord,n):
    for i in range(col):
        if bord[row][i] == 1:
            return False
    # Check if there is a queen in the upper diagonal on the left side   
    for i, j in zip(range(row, -1, -1), range(col, -1, -1)):
        if bord[i][j] == 1:
            return False

    # Check if there is a queen in the lower diagonal on the left side
    for i, j in zip(range(row, n), range(col, -1, -1)):
        if bord[i][j] == 1:
            return False 
    return True

def solve(n,bord,col):
    
    if col == n:
        for i in bord:
            print(i)
        return
    for i in range(n):
        if isSafe(i,col,bord,n):
            bord[i][col]=1
            solve(n,bord,col+1)
            bord[i][col]=0
n=4
bord=[[0] * n for _ in range(n)]
solve(n,bord,0)`,
            TC:"O(n!)",
            
            SC:"O(m*n), Maximum Depth of the recursion tree(auxiliary space)"
          },
          
        ],
        next:'Two Sum',
      },
      
    // Add more problems as needed
  ];