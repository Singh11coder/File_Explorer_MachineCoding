import React, { useState } from 'react';
import {initialData} from './data';
import TreeNode from './TreeNode';

const App = () => {
  const [data,setData] = useState(initialData);
  const [toggle, setToggle] = useState(false);
  const [createFile,setCreateFile] = useState({})
  const [createFolder, setCreateFolder] = useState({});
  
  return (
    <div>
      <div 
      className='mt-2 bg-gray-400 w-100 h-15 rounded-full flex justify-between items-center px-4'>
        <button 
         onClick={() => setToggle(prev => !prev)}
         className="cursor-pointer bg-gray-600 text-white px-4 py-2 m-2 rounded-full">
          {!toggle ? "-" : "+"}
          </button>
         <div>
         <button className="text-3xl cursor-pointer" title="Create File">📄</button>
         <button className="text-3xl cursor-pointer" title="Create New Folder">📁</button>
         </div>
      </div>
      {!toggle 
       ? <div>
            {data.map((node) => {
               return <TreeNode key={node.id} node={node}/>
            })}
         </div>
       : <div>Data Hide</div>
      }
      
      
    </div>
  )
}

export default App
