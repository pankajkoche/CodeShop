import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
const CodeBlock = ({ code }) => {
    const lan ="python"
    return (
        
        <div>
    <SyntaxHighlighter language={lan} style={vscDarkPlus}>
                {code}
    </SyntaxHighlighter>
        </div>
    );
};


const App = () => {
  const code = `def findPath(m, n):
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
findPath(m,n)`;

  return (
    <div>
      <CodeBlock  code={code} />
    </div>
  );
};

export default App;