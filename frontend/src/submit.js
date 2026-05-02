// submit.js

import axios from 'axios';
import { useStore } from './store';
import { useState } from 'react';

export const SubmitButton = () => {

    const { nodes, edges } = useStore();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        try {

            const response = await axios.post(
                `${process.env.REACT_APP_BACKEND_URL}/pipelines/parse`,
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
        finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button className="submit-btn" onClick={handleSubmit}>
                {loading ? "Please Wait..." : "Submit Pipeline"}
            </button>
        </div>
    );
};