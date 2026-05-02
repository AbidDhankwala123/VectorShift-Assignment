import { Handle, Position } from 'reactflow';
import '../styles/node.css';

export const BaseNode = ({
    title,
    children,
    inputs = [],
    outputs = [],
}) => {
    return (
        <div className="node-container">
            <div className="node-header">{title}</div>

            {inputs.map((input, index) => (
                <Handle
                    key={input.id}
                    type="target"
                    position={Position.Left}
                    id={input.id}
                    style={{ top: `${(index + 1) * 25}px` }}
                />
            ))}

            <div className="node-content">{children}</div>

            {outputs.map((output, index) => (
                <Handle
                    key={output.id}
                    type="source"
                    position={Position.Right}
                    id={output.id}
                    style={{ top: `${(index + 1) * 25}px` }}
                />
            ))}
        </div>
    );
};