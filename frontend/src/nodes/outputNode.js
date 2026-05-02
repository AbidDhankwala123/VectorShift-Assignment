import { useState } from 'react';
import { BaseNode } from '../components/BaseNode';

export const OutputNode = ({ id, data }) => {

  const [name, setName] = useState(
    data?.outputName || id.replace('customOutput-', 'output_')
  );

  return (
    <BaseNode
      title="Output"
      inputs={[{ id: `${id}-value` }]}
    >
      <label>Name</label>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </BaseNode>
  );
};