---
title: The Only Linear Algebra You Must Know
layout: default
date: 2026-02-25
keywords: linear algebra, matrices, vector spaces, linear transformations, mathematics
published: true
mathjax: yes
---

<style>
.math-statement {
    border-left: 3px solid rgba(0,0,0,0.18);
    padding: 8px 0 8px 14px;
    margin: 18px 0;
    background: rgba(0,0,0,0.025);
}
.math-statement-title {
    font-weight: bold;
}
.proof {
    margin: 12px 0 18px 0;
}
.proof-title {
    font-style: italic;
}
</style>

Linear algebra is often taught backwards.

A standard course starts with row reduction, determinants, matrix multiplication, eigenvalues, diagonalization, etc. These are all useful, but taught in that order, the subject can feel like a list of unrelated tricks.

The more useful framing is:

> A matrix is not a grid of numbers.
> A matrix is a coordinate description of a linear transformation.

That sentence is most of linear algebra.

Everything else is bookkeeping.

The few facts worth remembering are stated explicitly below. The proofs are short because the point is not to make the subject feel more formal. The point is to make the conceptual dependencies visible.

# Vectors are not columns of numbers

A vector is an element of a vector space.

<div class="math-statement" id="definition-1">
<span class="math-statement-title">Definition 1 (vector space).</span>
A vector space over a field \(\mathbb{F}\) is a set \(V\) whose elements can be added together and scaled by elements of \(\mathbb{F}\), in a way that behaves the way addition and scaling are supposed to behave:
\[
u+v \in V,
\quad
\lambda v \in V,
\]
and the usual rules like associativity, commutativity of addition, distributivity, additive identity, and additive inverses all hold.
</div>

That definition is intentionally plain. A vector space is just a place where linear combinations make sense.

The important operation is:

$$
x_1v_1 + \cdots + x_nv_n
$$

Once objects can be added and scaled, linear algebra can begin.

The column of numbers is what appears after choosing a basis.

<div class="math-statement" id="definition-2">
<span class="math-statement-title">Definition 2 (coordinate representation).</span>
Let \(V\) be a finite-dimensional vector space over \(\mathbb{F}\), and let
\(B = \{e_1,\dots,e_n\}\) be a basis of \(V\). If
\[
v = x_1e_1 + \cdots + x_ne_n,
\]
then the coordinate representation of \(v\) in the basis \(B\) is
\[
[v]_B =
\begin{bmatrix}
x_1 \\
\vdots \\
x_n
\end{bmatrix}.
\]
</div>

For example, the notation

$$
v =
\begin{bmatrix}
3 \\
5
\end{bmatrix}
$$

usually means

$$
v = 3e_1 + 5e_2
$$

where

$$
e_1 =
\begin{bmatrix}
1 \\
0
\end{bmatrix},
\quad
e_2 =
\begin{bmatrix}
0 \\
1
\end{bmatrix}
$$

But the important thing is that the standard basis has been chosen.

The vector is not inherently the pair of numbers `(3, 5)`. The pair of numbers is the vector's address in a particular coordinate system.

This sounds pedantic until the source of confusion becomes clear: many linear algebra mistakes come from forgetting this distinction.

# Bases are coordinate systems

A basis is just a coordinate system for a vector space.

If \(B = \{e_1, \dots, e_n\}\) is a basis for a vector space \(V\), then every vector \(v \in V\) can be written uniquely as

$$
v = x_1 e_1 + \cdots + x_n e_n
$$

So choosing \(B\) gives a coordinate map:

$$
\Phi_B : V \to \mathbb{F}^n
$$

where

$$
\Phi_B(v) =
\begin{bmatrix}
x_1 \\
\vdots \\
x_n
\end{bmatrix}
$$

This map is doing something conceptually important. It takes an abstract vector and gives coordinates for it.

The vector space did not come with coordinates. The coordinates were added by choosing a basis.

# Linear transformations are the actual objects

The real object in linear algebra is a linear transformation.

A function

$$
T : V \to W
$$

is linear if

$$
T(v + w) = T(v) + T(w)
$$

and

$$
T(\lambda v) = \lambda T(v)
$$

That is all linearity means: the function respects the vector space structure.

The reason bases matter is that a linear transformation is completely determined by what it does to basis vectors.

<div class="math-statement" id="proposition-1">
<span class="math-statement-title">Proposition 1 (a linear map is determined by a basis).</span>
Let \(T : V \to W\) be linear, and let \(B=\{e_1,\dots,e_n\}\) be a basis of \(V\).
If \(T(e_i)\) is known for every basis vector \(e_i\), then \(T(v)\) is determined for every \(v \in V\).
</div>

<div class="proof">
<span class="proof-title">Proof.</span>
Every vector \(v \in V\) has a unique expansion
\[
v = x_1e_1 + \cdots + x_ne_n.
\]
Since \(T\) is linear,
\[
T(v) = T(x_1e_1 + \cdots + x_ne_n)
     = x_1T(e_1) + \cdots + x_nT(e_n).
\]
So once the values of \(T\) on the basis vectors are known, the value of \(T\) on every vector is forced. \(\square\)
</div>

This is the structural reason matrices exist.

# What is a matrix?

Suppose:

- \(V\) has basis \(B = \{e_1, \dots, e_n\}\)
- \(W\) has basis \(C = \{f_1, \dots, f_m\}\)
- \(T : V \to W\) is linear

To describe \(T\), look at where it sends each basis vector:

$$
T(e_1), \dots, T(e_n)
$$

Each of these lives in \(W\), so each one can be expressed using the basis \(C\).

For each \(j\):

$$
T(e_j) = a_{1j}f_1 + a_{2j}f_2 + \cdots + a_{mj}f_m
$$

The coefficients become the \(j\)-th column of the matrix:

$$
A =
\begin{bmatrix}
a_{11} & \cdots & a_{1n} \\
\vdots &        & \vdots \\
a_{m1} & \cdots & a_{mn}
\end{bmatrix}
$$

So the matrix is not the transformation itself.

It is the coordinate representation of the transformation, after choosing:

1. coordinates for the input space
2. coordinates for the output space

<div class="math-statement" id="definition-3">
<span class="math-statement-title">Definition 3 (matrix of a linear transformation).</span>
Let \(T : V \to W\) be linear. Let \(B=\{e_1,\dots,e_n\}\) be a basis of \(V\), and let \(C=\{f_1,\dots,f_m\}\) be a basis of \(W\).
The matrix of \(T\) with respect to input basis \(B\) and output basis \(C\), written \([T]_{C \leftarrow B}\), is the matrix whose \(j\)-th column is \([T(e_j)]_C\).
</div>

<div class="math-statement" id="proposition-2">
<span class="math-statement-title">Proposition 2 (the coordinate equation).</span>
For every \(v \in V\),
\[
[T(v)]_C = [T]_{C \leftarrow B}[v]_B.
\]
</div>

<div class="proof">
<span class="proof-title">Proof.</span>
Write
\[
v = x_1e_1 + \cdots + x_ne_n.
\]
Then
\[
T(v) = x_1T(e_1) + \cdots + x_nT(e_n).
\]
The \(j\)-th column of \([T]_{C \leftarrow B}\) is \([T(e_j)]_C\), so multiplying \([T]_{C \leftarrow B}\) by the coordinate column \([v]_B\) forms exactly the same linear combination in coordinates. Therefore
\[
[T(v)]_C = [T]_{C \leftarrow B}[v]_B.
\]
\(\square\)
</div>

Equivalently, writing the coordinate maps explicitly, the matrix \(A\) satisfies:

$$
\Phi_C(T(v)) = A \Phi_B(v)
$$

or as a commuting diagram:

$$
\begin{array}{ccc}
V & \xrightarrow{T} & W \\
\downarrow \Phi_B & & \downarrow \Phi_C \\
\mathbb{F}^n & \xrightarrow{A} & \mathbb{F}^m
\end{array}
$$

This is the whole picture.

The top row is the real transformation.

The bottom row is what that transformation looks like in coordinates.

# Matrix multiplication is function composition

Matrix multiplication also becomes less arbitrary from this view.

Suppose:

$$
T : U \to V
$$

and

$$
S : V \to W
$$

They can be composed:

$$
S \circ T : U \to W
$$

If \(T\) has matrix \([T]\), and \(S\) has matrix \([S]\), then the composition has matrix:

$$
[S \circ T] = [S][T]
$$

<div class="math-statement" id="proposition-3">
<span class="math-statement-title">Proposition 3 (matrix multiplication is composition).</span>
Let \(T : U \to V\) and \(S : V \to W\) be linear maps. After choosing compatible bases for \(U,V,W\),
\[
[S \circ T] = [S][T].
\]
</div>

<div class="proof">
<span class="proof-title">Proof.</span>
For any \(u \in U\), Proposition 2 gives
\[
[T(u)] = [T][u].
\]
Applying \(S\) next gives
\[
[S(T(u))] = [S][T(u)] = [S][T][u].
\]
But \(S(T(u)) = (S \circ T)(u)\), so the matrix that represents \(S \circ T\) is \([S][T]\). \(\square\)
</div>

This is not an arbitrary multiplication rule.

It is just the coordinate version of doing one function and then the next.

That is why the order can seem backwards at first:

$$
[S][T]
$$

means:

1. do \(T\)
2. then do \(S\)

Functions compose right-to-left, so matrices multiply right-to-left.

# Why change of basis is annoying

Change of basis is another topic that becomes simpler once vectors are no longer treated as columns.

The same vector can have different coordinate columns under different bases.

The vector did not change.

The coordinate system changed.

<div class="math-statement" id="proposition-4">
<span class="math-statement-title">Proposition 4 (change of basis changes descriptions, not vectors).</span>
If \(B\) and \(C\) are two bases for the same vector space \(V\), then there is an invertible matrix \(P_{C \leftarrow B}\) such that
\[
[v]_C = P_{C \leftarrow B}[v]_B
\]
for every \(v \in V\).
</div>

<div class="proof">
<span class="proof-title">Proof.</span>
Each basis vector \(e_j\) of \(B\) can be written in the basis \(C\). Put those coordinate columns into a matrix:
\[
P_{C \leftarrow B} =
\begin{bmatrix}
[e_1]_C & \cdots & [e_n]_C
\end{bmatrix}.
\]
If \(v = x_1e_1 + \cdots + x_ne_n\), then multiplying by \(P_{C \leftarrow B}\) forms
\[
x_1[e_1]_C + \cdots + x_n[e_n]_C,
\]
which is exactly \([v]_C\). The matrix is invertible because changing from \(B\)-coordinates to \(C\)-coordinates can be undone by changing back. \(\square\)
</div>

So a change-of-basis matrix is not doing something to the vector itself. It is translating between descriptions of the same vector.

Likewise, two different matrices can represent the same linear transformation if they are written using different bases.

This is why statements like "this matrix has eigenvalues..." are a little imprecise. The main object is the linear operator, and the matrix is one coordinate representation of it.

# Why diagonalization matters

Diagonalization is often taught as another algorithm:

1. find eigenvalues
2. find eigenvectors
3. build \(PDP^{-1}\)

But conceptually, diagonalization means:

> Find a basis where the transformation acts independently on each coordinate direction.

If an operator is diagonal in some basis, then in that basis it just scales each basis vector:

$$
T(e_i) = \lambda_i e_i
$$

<div class="math-statement" id="proposition-5">
<span class="math-statement-title">Proposition 5 (diagonalization is choosing an eigenbasis).</span>
Let \(T : V \to V\) be linear. If \(B=\{e_1,\dots,e_n\}\) is a basis of eigenvectors with
\[
T(e_i) = \lambda_i e_i,
\]
then the matrix \([T]_B\) is diagonal, with diagonal entries \(\lambda_1,\dots,\lambda_n\).
</div>

<div class="proof">
<span class="proof-title">Proof.</span>
The \(i\)-th column of \([T]_B\) is \([T(e_i)]_B\). Since \(T(e_i)=\lambda_i e_i\), this coordinate column has \(\lambda_i\) in the \(i\)-th slot and zeros everywhere else. So every off-diagonal entry is zero, and the diagonal entries are the eigenvalues. \(\square\)
</div>

That is why diagonal matrices are useful.

They are not useful because zeros are aesthetically pleasing. They are useful because the transformation has been expressed in coordinates where its behavior is decoupled.

# The sentence to remember

Linear algebra is the study of linear transformations between vector spaces.

Matrices are coordinate descriptions of those transformations.

With that distinction in place, many standard facts become instances of the same idea:

- matrix multiplication is composition
- change of basis is changing coordinates
- invertible matrices are isomorphisms in coordinates
- the identity matrix is the identity transformation in coordinates
- diagonalization is finding coordinates where an operator is simple

The useful diagnostic question is:

> What transformation does this matrix describe, and which bases are involved?

That question usually identifies the relevant object and the relevant coordinates.
