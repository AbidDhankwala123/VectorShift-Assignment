import { BaseNode } from '../components/BaseNode';

export const FilterNode = ({ id }) => {
    return (
        <BaseNode
            title="Filter"
            inputs={[{ id: `${id}-data` }]}
            outputs={[{ id: `${id}-filtered` }]}
        >
            <div>Filter Data</div>
        </BaseNode>
    );
};