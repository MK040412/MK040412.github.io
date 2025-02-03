
<br>


>This section is made for who already know about basic idea about machine learning and deep learning. We'll discuss about GNN with concept of CNN, ResNet, LSTM, Reinforcement learing, Attention mechanism.
<br>
>
>Our goal is making bird's eye view about GNN and describe it intuitively from idea into math.

<br>


# What is the Graph Neural Network

<br>


> GNN(Graph Neural Network) is the Nueral Netwrok that is based on the graph.

<br>

Most of us already know about what means graph. 
But, does we really  know about graph data structure? 
<br>

What kind of data really graph represents well?
I'll show you some examples and explain how to analysis graph data structure in mathematics.
<br>

## Example of Graph structed data 

<br>

### Social network
<br>

```mermaid

graph LR
    A[User 1] --- B[User 2]
    A --- C[User 3]
    B --- D[User 4]
    C --- D
    D --- E[User 5]

```

<br>

- **Description**: Users are nodes, and friendships/connections are edges.
    
- **Graph Theory**:
    
    - **Algebraic**: Adjacency matrices model connections.
        
    - **Probabilistic**: Models uncertainties (e.g., friend recommendations).
        
- **Math**: Adjacency matrix $A$ where $A_{ij}=1$ 
		if users $ii$ and $jj$ are connected.
<br>

### Road network
<br>

```mermaid

graph LR
    A[Intersection 1] -- 5km --> B[Intersection 2]
    A -- 3km --> C[Intersection 3]
    B -- 2km --> D[Intersection 4]
    C -- 4km --> D
    
```

<br>

- **Description**: Intersections are nodes, and roads are edges with weights (e.g., distance).
    
- **Graph Theory**:
    
    - **Geometric**: Spatial coordinates define node positions.
        
    - **Algebraic**: Weighted adjacency matrices optimize routes.
        
- **Math**: Edge weights $W_{ij}=dist(i,j)$.
<br>

### Identifying key research groups
<br>

```mermaid

graph TD
    A[Researcher 1] --- B[Researcher 2]
    A --- C[Researcher 3]
    B --- C
    D[Researcher 4] --- E[Researcher 5]
    D --- F[Researcher 6]
    E --- F

```

<br>

- **Description**: Researchers are nodes; co-authorships are edges.
    
- **Graph Theory**:
    
    - **Algebraic**: Laplacian matrices detect communities.
        
    - **Extremal**: Finds influential clusters.
        
- **Math**: Laplacian $L=D−A$, where $D$ is the degree matrix.
<br>

### Finding similar users or products
<br>

```mermaid

graph LR
    A[User A] -- 0.8 --> B[User B]
    A -- 0.6 --> C[User C]
    B -- 0.7 --> C

```
<br>

- **Description**: Users/products are nodes; edges represent similarity.
    
- **Graph Theory**:
    
    - **Probabilistic**: Models uncertain similarities.
        
    - **Algebraic**: Matrix factorization for recommendations.
        
- **Math**: Cosine similarity $sim(i,j)=\frac{vi⋅vj}{∥vi∥∥vj∥}​$
<br>

### Google search ranking (PageRank)
<br>

```mermaid

graph LR
    A[Page 1] --> B[Page 2]
    A --> C[Page 3]
    B --> C
    C --> D[Page 4]
    D --> A

```
<br>

- **Description**: Web pages are nodes; hyperlinks are directed edges.
    
- **Graph Theory**:
    
    - **Algebraic**: Eigenvector centrality via Markov chains.
        
- **Math**: PageRank vector
			**$p=αAp+(1−α)vp=αAp+(1−α)v$**
<br>

### Drug discovery
<br>

```mermaid

graph LR
    A[Carbon] -- Single Bond --> B[Oxygen]
    A -- Double Bond --> C[Nitrogen]
    B -- Single Bond --> C
    C -- Single Bond --> D[Hydrogen]

```
<br>


- **Description**: Atoms are nodes; chemical bonds are edges.
    
- **Graph Theory**:
    
    - **Topological**: Analyzes molecular structure.
        
    - **Geometric**: 3D conformation for binding.
        
- **Math**: Graph isomorphism checks $G1≅G2$
<br>

# Why Graph can represents those kind of data?

</br>

Graph theory can interpret into 5 kinds of method

</br>

>#### 1. Algebraic graph theory
> #### 2. Geometric graph theory
> #### 3. Extremal graph theory
> #### 4. Probabilistic graph theory
> #### 5.  Topological graph theory





