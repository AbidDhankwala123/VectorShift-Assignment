import { BaseNode } from '../components/BaseNode';

export const MathNode = ({ id }) => {
    return (
        <BaseNode
            title="Math"
            inputs={[{ id: `${id}-input` }]}
            outputs={[{ id: `${id}-result` }]}
        >
            <div>Math Operations</div>
        </BaseNode>
    );
};