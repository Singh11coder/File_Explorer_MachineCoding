import { useState } from "react";

const TreeNode = ({ node }) => {
  const [isExpanded, setIsExpanded] = useState(node.id === "folder-1");

  const isFolder = node.type === "folder";

  const toggleFolder = () => {
    if (isFolder) {
      setIsExpanded((prev) => !prev);
    }
  };

  return (
    <div className="tree-node m-4">
      <div className="tree-row" onClick={toggleFolder}>
        {isFolder && (
          <span className="arrow">
            {isExpanded ? "▼" : "▶"}
          </span>
        )}

        <span className="icon">
          {isFolder
            ? isExpanded
              ? "📂"
              : "📁"
            : "📄"}
        </span>

        <span>{node.name}</span>
      </div>

      {isFolder && isExpanded && (
        <div className="children">
          {node.children.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TreeNode;