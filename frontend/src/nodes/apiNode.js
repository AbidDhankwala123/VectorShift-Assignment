import { BaseNode } from '../components/BaseNode';

export const APINode = ({ id }) => {
    return (
        <BaseNode
            title="API"
            inputs={[{ id: `${id}-request` }]}
            outputs={[{ id: `${id}-response` }]}
        >
            <div>API Request Node</div>
        </BaseNode>
    );
};