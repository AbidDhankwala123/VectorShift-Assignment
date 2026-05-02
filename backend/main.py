from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import networkx as nx

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://abid-vectorshift-assignment.netlify.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request Body Schema
class PipelineData(BaseModel):
    nodes: List[dict]
    edges: List[dict]

@app.get("/")
def read_root():
    return {"Ping": "Pong"}

@app.post("/pipelines/parse")
def parse_pipeline(data: PipelineData):

    nodes = data.nodes
    edges = data.edges

    num_nodes = len(nodes)
    num_edges = len(edges)

    graph = nx.DiGraph()

    # Add nodes
    for node in nodes:
        graph.add_node(node["id"])

    # Add edges
    for edge in edges:
        graph.add_edge(
            edge["source"],
            edge["target"]
        )

    # Check DAG
    is_dag = nx.is_directed_acyclic_graph(graph)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }