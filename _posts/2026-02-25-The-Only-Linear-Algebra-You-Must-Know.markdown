---
title: The Only Linear Algebra You Must Know
layout: default
date: 2026-02-25
keywords: linear algebra, matrices, vector spaces, linear transformations, mathematics
published: true
mathjax: yes
---

Linear algebra is often taught as a sequence of computational tricks: row reduction, determinants, eigenvalues, diagonalization. While these are useful, they obscure the central idea.

The only linear algebra you must know is this:

> A matrix is not a collection of numbers.
> It is a coordinate description of a linear transformation between vector spaces.

Everything else follows from this perspective.

---

## 1. Vector Spaces

We begin with the object that truly matters.

A **vector space** \( V \) over a field \( \mathbb{F} \) is a set equipped with two operations:

- vector addition
- scalar multiplication

satisfying the usual axioms (associativity, distributivity, identity, etc.).

The standard example is \( \mathbb{R}^n \). But that example is already misleading if we are not careful.

A vector is not "a column of numbers."
A vector is an element of a vector space.

The coordinate column appears only after we choose a basis.

### Example 1: \( \mathbb{R}^2 \)

Let

$$
V = \mathbb{R}^2
$$

A vector is written as

$$
v = \begin{bmatrix} x \\ y \end{bmatrix}
$$

But implicitly we are using the standard basis:

$$
e_1 = \begin{bmatrix} 1 \\ 0 \end{bmatrix}, \quad
e_2 = \begin{bmatrix} 0 \\ 1 \end{bmatrix}
$$

Every vector can be written uniquely as

$$
v = x e_1 + y e_2
$$

The coordinate column \( (x, y) \) is not the vector itself.
It is the coordinate representation of the vector with respect to a chosen basis.

This distinction is subtle but foundational.

---

## 2. Bases and Coordinates

Let \( V \) be a finite-dimensional vector space.

A **basis** \( \{ e_1, \dots, e_n \} \) is a set of vectors such that:

1. They span \( V \).
2. They are linearly independent.

Given a basis, every vector \( v \in V \) can be written uniquely as

$$
v = \sum_{i=1}^n x_i e_i
$$

We define the **coordinate map**

$$
\Phi_B : V \to \mathbb{F}^n
$$

by

$$
\Phi_B(v) =
\begin{bmatrix}
x_1 \\
\vdots \\
x_n
\end{bmatrix}
$$

This map depends entirely on the choice of basis \( B \).

The space \( V \) itself does not contain coordinates.
Coordinates are an artifact of our description.

---

## 3. Linear Transformations

Now we introduce the main character.

A map \( T : V \to W \) between vector spaces is **linear** if:

$$
T(v + w) = T(v) + T(w)
$$

$$
T(\lambda v) = \lambda T(v)
$$

Linearity means the map respects the vector space structure.

That is all.

### Key Fact

A linear transformation is completely determined by its action on a basis.

If \( \{ e_1, \dots, e_n \} \) is a basis of \( V \), then knowing

$$
T(e_1), \dots, T(e_n)
$$

determines \( T \) uniquely.

This is the structural reason matrices exist.

---

## 4. What a Matrix Actually Is

Let:

- \( V \) have basis \( B = \{ e_1, \dots, e_n \} \)
- \( W \) have basis \( C = \{ f_1, \dots, f_m \} \)
- \( T : V \to W \) be linear

We express each \( T(e_j) \) in the basis \( C \):

$$
T(e_j) = \sum_{i=1}^m a_{ij} f_i
$$

The coefficients \( a_{ij} \) form a matrix:

$$
A =
\begin{bmatrix}
a_{11} & \cdots & a_{1n} \\
\vdots &        & \vdots \\
a_{m1} & \cdots & a_{mn}
\end{bmatrix}
$$

This matrix is not the transformation.

It is the coordinate representation of the transformation with respect to chosen bases.

Formally:

$$
A = [T]_{C \leftarrow B}
$$

It satisfies:

$$
\Phi_C(T(v)) = A \, \Phi_B(v)
$$

This equation explains everything.

A matrix is the unique linear map that makes this diagram commute:

$$
\begin{array}{ccc}
V & \xrightarrow{T} & W \\
\downarrow \Phi_B & & \downarrow \Phi_C \\
\mathbb{F}^n & \xrightarrow{A} & \mathbb{F}^m
\end{array}
$$

Matrices live in coordinate space.

Linear transformations live in vector spaces.

---

## 5. Matrix Multiplication Is Function Composition

Let

$$
T : U \to V, \quad S : V \to W
$$

Then their composition

$$
S \circ T : U \to W
$$

is also linear.

Choose bases and compute coordinate matrices:

$$
[T], \quad [S]
$$

Then

$$
[S \circ T] = [S][T]
$$

Matrix multiplication is not an arbitrary rule.

It is simply the coordinate expression of:

$$
(S \circ T)(u) = S(T(u))
$$

That is why the order reverses.
Functions compose right-to-left.

Matrix multiplication is forced by structure.

---

## 6. Why This Perspective Simplifies Everything

Once you understand matrices as coordinate maps:

- Change of basis becomes a change of coordinates.
- Invertible matrices correspond to isomorphisms.
- The identity matrix is the coordinate map of the identity transformation.
- Diagonalization is choosing a basis in which the operator acts independently on each direction.

The computational procedures are consequences of structural facts.

The structure comes first.

---

## 7. The Entire Subject in One Sentence

Linear algebra is the study of linear transformations between vector spaces, and matrices are simply their coordinate representations.

If you remember this, you will not be confused by:

- why multiplication works the way it does,
- why eigenvalues depend on operators rather than matrices,
- why basis choice matters,
- or why two different matrices can represent the same transformation.

Everything reduces to:

$$
\Phi_C \circ T = A \circ \Phi_B
$$

That equation is the subject.

---

## Closing Remark

If you find yourself manipulating symbols without asking:

> What transformation does this represent?

then you are doing linear algebra backwards.

Start with vector spaces.
Define transformations.
Choose bases only when necessary.

Matrices are the shadow.
Transformations are the object.
