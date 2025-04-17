# Graph 

A graph is a mathematical structure used to represent pairwise structure between objects.

> A graph $G = (V,E)$ consist of $V$ a non empty set of vertices (or nodes) and $E$ a set of edges. Each edge has either one or two vertices associated with it called its endpoints. An edge is said to be connected  to its endpoints.

**Infinite graph** $\rightarrow$ A graph with infinite set of vertices and edges.

**Finite graph** $\rightarrow$ A graph with finite set of vertices and edges.

**Multigraph** $\rightarrow$ A graph where you are allowed to have more than one edge connecting the same pair of vertices. 

<small>Think of it like having multiple different roads (edges) directly connecting the same two towns (vertices).</small>

**Loop** $\rightarrow$ A loop in a graph is a edge that connects a vertex to itself (sometimes called <u>Self-loop</u>) 

**Pseudographs** $\rightarrow$ A graph which allows both loops and multiple edges connecting the same pair of vertices. 

<small>In contract ot simple graph which allow one edges between two vertices and no loops.</small>

## Directed Graph 

> A directed graph, or digraph, is a structure that not only shows connections between objects (vertices) but also captures the direction of those connections. In a directed graph, the structure is formally defined as a pair $(V,E)$, where $V$ is a nonempty set of vertices and $E$ is a set of directed edges (or arcs).

**Simple Directed Graph** $\rightarrow$ A directed graph having no loops and multiple directed edges.

| Type                  | Edge                    | Multiple Edges Allowed ? | Loops Allowed ? |
| --------------------- | ----------------------- | ------------------------ | --------------- |
| Simple Graph          | Undirected              | No                       | No              |
| Multigraph            | Undirected              | Yes                      | No              |
| Pseudograph           | Undirected              | Yes                      | Yes             |
| Simple directed graph | Directed                | No                       | No              |
| Directed multigraph   | Directed                | Yes                      | Yes             |
| Mixed Graph           | Directed and Undirected | Yes                      | Yes             |

