import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 10 }: Props) => {
  const [isExpanded, setExpanded] = useState(true);
  return (
    <div>
      {isExpanded ? children : children.substring(0, maxChars)}
      {children.length > maxChars && (
        <button onClick={() => setExpanded(!isExpanded)}>
          {isExpanded ? "Less" : "More"}
        </button>
      )}
    </div>
  );
};

export default ExpandableText;
