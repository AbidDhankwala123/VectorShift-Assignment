import { BaseNode } from '../components/BaseNode';

export const LLMNode = ({ id }) => {

  return (
    <BaseNode
      title="LLM"
      inputs={[
        { id: `${id}-system` },
        { id: `${id}-prompt` },
      ]}
      outputs={[
        { id: `${id}-response` },
      ]}
    >
      <div>This is a LLM Node</div>
    </BaseNode>
  );
};