import { useState } from 'react';
import { BaseNode } from '../components/BaseNode';

export const InputNode = ({ id, data }) => {

  const [name, setName] = useState(
    data?.inputName || id.replace('customInput-', 'input_')
  );

  const [type, setType] = useState('Text');

  return (
    <BaseNode
      title="Input"
      outputs={[{ id: `${id}-value` }]}
    >
      <label>Name</label>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Type</label>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option>Text</option>
        <option>File</option>
      </select>
    </BaseNode>
  );
};