import { BaseNode } from '../components/BaseNode';

export const EmailNode = ({ id }) => {
    return (
        <BaseNode
            title="Email"
            inputs={[{ id: `${id}-email` }]}
            outputs={[{ id: `${id}-status` }]}
        >
            <div>Email Sender</div>
        </BaseNode>
    );
};