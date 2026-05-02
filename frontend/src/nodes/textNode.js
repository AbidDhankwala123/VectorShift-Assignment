import { useState, useEffect, useRef } from 'react';
import { BaseNode } from '../components/BaseNode';

export const TextNode = ({ id, data }) => {

  const [text, setText] = useState(data?.text || '{{input}}');

  const [variables, setVariables] = useState([]);

  const textareaRef = useRef(null);

  useEffect(() => {

    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;

    const matches = [...text.matchAll(regex)];

    const extractedVariables = matches.map(
      (match) => match[1]
    );

    setVariables(extractedVariables);

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + 'px';
    }

  }, [text]);

  return (
    <BaseNode
      title="Text"
      inputs={variables.map((variable) => ({
        id: `${id}-${variable}`,
      }))}
      outputs={[{ id: `${id}-output` }]}
    >
      <label>Text</label>

      <textarea
        ref={textareaRef}
        rows={1}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </BaseNode>
  );
};