// submit.js

import axios from 'axios';
import { useStore } from './store';

export const SubmitButton = () => {

    const { nodes, edges } = useStore();

    const handleSubmit = async () => {

        try {

            const response = await axios.post(
                'http://localhost:8000/pipelines/parse',
                {
                    nodes,
                    edges,
                }
            );

            const data = response.data;

            alert(
                `Nodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nIs DAG: ${data.is_dag}`
            );

        } catch (error) {

            console.error(error);

            alert('Backend Error');
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px',
            }}
        >
            <button
                className="submit-btn"
                onClick={handleSubmit}
            >
                Submit Pipeline
            </button>
        </div>
    );
};