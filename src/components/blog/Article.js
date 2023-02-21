import Parser from 'html-react-parser';

import CodeBlock from './CodeBlock';

const Article = (blog) => {
 
  const paragraphsAndCode = [
    { type: 'paragraph', content: 'Lorem ipsum dolor sit amet.' },
    { type: 'code', content: 'function greet(name) {\n  console.log(`Hello, ${name}!`);\n}\n\ngreet("World");' },
    { type: 'paragraph', content: 'Consectetur adipiscing elit.' },
    { type: 'code', content: 'const square = x => x * x;\n\nconsole.log(square(5)); // 25' },
    { type: 'paragraph', content: 'Sed do eiusmod tempor incididunt.' },
  ];

  console.log("Article",blog.blog)
  var parse = require('html-react-parser');
  var data=parse('   <div><li>hi</li> <li>by</li></div>');
  return(
  <article className="  bg-white pt-3 pb-10 p-8 lg:ml-5 ">
    <div className="m-3 mb-7">
    <h2 className="text-center font-bold font-serif text-2xl">Article</h2>
    {blog.blog.map((n) => (
      <div className="mb-3 font-sans font-normal text-sm">
           <p>{n.para}</p>
          <img src={n.img}/>
      </div>
   
      
    ))
  }
{parse(`  <div>
          <li>hi</li> 
          <li>by</li> 
         <code>print(pankaj)<code/>
      </div>
`)}
{paragraphsAndCode.map((item, index) => {
        if (item.type === 'paragraph') {
          return <p key={index}>{item.content}</p>;
        } else if (item.type === 'code') {
          return <CodeBlock key={index} code={item.content} />;
        }
      })}

    </div>
    
  </article>
);
}
export default Article 