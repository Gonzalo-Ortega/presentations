

<!-- .slide: data-auto-animate -->
# The persistent $ \pi_1 $
## & The lower central series barcodes

#### Gonzalo Ortega Carpintero
`gonzalo.ortega-carpintero@city.ac.uk`

<div style="display:flex; align-items:center; justify-content:center; gap:0.1em; font-size:0.75em;">
    <p><canvas id="torusCanvas" width="400" height="300" style="width: 500px; height: 400px;"></canvas>
    <p><canvas id="sphereCanvas" width="400" height="300" style="width: 500px; height: 400px;"></canvas>
</div>

<div style="display:flex; align-items:center; justify-content:center; gap:0.6em;">
  <p>A joint work with Ximena Fernández at</p>
  <img width="200" src='assets/city-st-georges-responsive-logo.svg'/>
</div>

*YTM 2026*

Notes:
- 

---

<!-- .slide: data-auto-animate -->
### The limitations of $H_*$

<div style="display:flex; justify-content:center; align-items:flex-end; gap:3em;">
  <figure>
    <img data-id="torus" src='assets/torus.svg'/>
    <figcaption data-id="t1">$T = S_1 \times S_1$</figcaption>
  </figure>
  <figure>
    <img data-id="sphere" src='assets/sphere.svg'/>
    <figcaption data-id="s1">$X = S^2 \vee S^1 \vee S^1$</figcaption>
  </figure>
</div>

---

<!-- .slide: data-auto-animate -->
### The limitations of $H_*$

<div style="display:flex; justify-content:center; align-items:flex-end; gap:3em;">
  <figure>
    <img data-id="torus" src='assets/torus.svg'/>
    <figcaption data-id="t1">$T = S_1 \times S_1$</figcaption>
  </figure>
  <figure>
    <img data-id="sphere" src='assets/sphere.svg'/>
    <figcaption data-id="s1">$X = S^2 \vee S^1 \vee S^1$</figcaption>
  </figure>
</div>
<p data-id="h"> $$H_1(T) = \mathbb Z \oplus \mathbb Z = H_1(X)$$

---

<!-- .slide: data-auto-animate -->
### The limitations of $H_*$

<div style="display:flex; justify-content:center; align-items:flex-end; gap:3em;">
  <figure>
    <img data-id="torus" src='assets/torus.svg'/>
    <figcaption data-id="t1">$T = S_1 \times S_1$</figcaption>
  </figure>
  <figure>
    <img data-id="sphere" src='assets/sphere.svg'/>
    <figcaption data-id="s1">$X = S^2 \vee S^1 \vee S^1$</figcaption>
  </figure>
</div>

<p data-id="h"> $$ H_1(T) = \mathbb Z \oplus \mathbb Z = H_1(X) $$

<p data-id="pi"> $$ \pi_1(T) = \mathbb Z \oplus \mathbb Z \neq \mathbb Z * \mathbb Z = \pi_1(X)$$

---

<!-- .slide: data-auto-animate -->
### The limitations of persistent $H_*$

<div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
  <span data-id="t">$\mathcal T$: </span>
  <figure>
    <img src='assets/fil-1.svg'/>
    <figcaption data-id="x1">$T_1$</figcaption>
  </figure>
  <span data-id="a1">$\rightarrow$</span>
  <figure>
    <img src='assets/fil-2.svg'/>
    <figcaption data-id="x2">$T_2$</figcaption>
  </figure>
  <span data-id="a2">$\rightarrow$</span>
  <figure>
    <img data-id="torus" src='assets/torus.svg'/>
    <figcaption data-id="x3">$T_3$</figcaption>
  </figure>
</div>

<div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
  <span data-id="x">$\mathcal X$: </span>
  <figure>
    <img data-id="torus" src='assets/fil-1.svg'/>
    <figcaption data-id="y1">$X_1$</figcaption>
  </figure>
  <span data-id="a3">$\rightarrow$</span>
  <figure>
    <img data-id="torus" src='assets/fil-2.svg'/>
    <figcaption data-id="y2">$X_2$</figcaption>
  </figure>
  <span data-id="a4">$\rightarrow$</span>
  <figure>
    <img data-id="torus" src='assets/sphere.svg'/>
    <figcaption data-id="y3">$X_3$</figcaption>
  </figure>
</div>

---

<!-- .slide: data-auto-animate -->
### The limitations of persistent $H_*$

<div style="display:flex; justify-content:center; align-items:flex-end; gap:5em;">
  <div>
    <div style="display:flex; align-items:center; justify-content:center; gap:0.1em; font-size:0.75em;">
      <span data-id="t">$\mathcal T$: </span>
      <img src='assets/fil-1.svg'/>
      <span data-id="a1">$\rightarrow$</span>
      <img src='assets/fil-2.svg' style="width:5em;"/>
      <span data-id="a2">$\rightarrow$</span>
      <img data-id="torus" src='assets/torus.svg' style="width:5em;"/>
    </div>
    <div data-id="d1">
      $$
      \begin{array}{ccccc}
      T_1 & \xrightarrow{} & T_2 & \xrightarrow{} & T_3\\
      \downarrow & & \downarrow &  & \downarrow \\
      H_1(T_1) & \xrightarrow{} & H_1(T_2) & \xrightarrow{} & H_1(T_3)\\
      \end{array}
      $$
    </div>
  </div>

  <div>
    <div style="display:flex; align-items:center; justify-content:center; gap:0.1em; font-size:0.75em;">
      <span data-id="x">$\mathcal X$: </span>
      <img src='assets/fil-1.svg'/>
      <span data-id="a3">$\rightarrow$</span>
      <img src='assets/fil-2.svg' style="width:5em;"/>
      <span data-id="a4">$\rightarrow$</span>
      <img data-id="sphere" src='assets/sphere.svg' style="width:5em;"/>
    </div>
    <div data-id="d2">
      $$
      \begin{array}{ccccc}
      X_1 & \xrightarrow{} & X_2 & \xrightarrow{} & X_3\\
      \downarrow & & \downarrow &  & \downarrow \\
      H_1(X_1) & \xrightarrow{} & H_1(X_2) & \xrightarrow{} & H_1(X_3)\\
      \end{array}
      $$
      </div>
  </div>
</div>

---

<!-- .slide: data-auto-animate -->
### The limitations of persistent $H_*$

<div style="display:flex; justify-content:center; align-items:flex-end; gap:5em;">
  <div>
    <div style="display:flex; align-items:center; justify-content:center; gap:0.1em; font-size:0.75em;">
      <span data-id="t">$\mathcal T$: </span>
      <img src='assets/fil-1.svg'/>
      <span data-id="a1">$\rightarrow$</span>
      <img src='assets/fil-2.svg' style="width:5em;"/>
      <span data-id="a2">$\rightarrow$</span>
      <img data-id="torus" src='assets/torus.svg' style="width:5em;"/>
    </div>
    <div data-id="d1">
      $$
      \begin{array}{ccccc}
      T_1 & \xrightarrow{} & T_2 & \xrightarrow{} & T_3\\
      \downarrow & & \downarrow &  & \downarrow \\
      H_1(T_1) & \xrightarrow{} & H_1(T_2) & \xrightarrow{} & H_1(T_3)\\
      \end{array}
      $$
      </div>
    <img data-id="sbar" src='assets/simple-bars.svg'/>
  </div>

  <div>
    <div style="display:flex; align-items:center; justify-content:center; gap:0.1em; font-size:0.75em;">
      <span data-id="x">$\mathcal X$: </span>
      <img src='assets/fil-1.svg'/>
      <span data-id="a3">$\rightarrow$</span>
      <img src='assets/fil-2.svg' style="width:5em;"/>
      <span data-id="a4">$\rightarrow$</span>
      <img data-id="sphere" src='assets/sphere.svg' style="width:5em;"/>
    </div>
    <div data-id="d2">
      $$
      \begin{array}{ccccc}
      X_1 & \xrightarrow{} & X_2 & \xrightarrow{} & X_3\\
      \downarrow & & \downarrow &  & \downarrow \\
      H_1(X_1) & \xrightarrow{} & H_1(X_2) & \xrightarrow{} & H_1(X_3)\\
      \end{array}
      $$
    </div>
    <img data-id="tbar" src='assets/simple-bars.svg'/>
  </div>
</div>
<p data-id="ph">$$ PH_1(\mathcal T) = PH_1(\mathcal X)$$

---

<!-- .slide: data-auto-animate -->
### The limitations of persistent $H_*$

<div style="display:flex; justify-content:center; align-items:flex-end; gap:5em;">
  <div>
    <div style="display:flex; align-items:center; justify-content:center; gap:0.1em; font-size:0.75em;">
      <span data-id="t">$\mathcal T$: </span>
      <img src='assets/fil-1.svg'/>
      <span data-id="a1">$\rightarrow$</span>
      <img src='assets/fil-2.svg' style="width:5em;"/>
      <span data-id="a2">$\rightarrow$</span>
      <img data-id="torus" src='assets/torus.svg' style="width:5em;"/>
    </div>
    <div data-id="d1">
      $$
      \begin{array}{ccccc}
      T_1 & \xrightarrow{} & T_2 & \xrightarrow{} & T_3\\
      \downarrow & & \downarrow &  & \downarrow \\
      H_1(T_1) & \xrightarrow{} & H_1(T_2) & \xrightarrow{} & H_1(T_3)\\
      \end{array}
      $$
      </div>
  </div>

  <div>
    <div style="display:flex; align-items:center; justify-content:center; gap:0.1em; font-size:0.75em;">
      <span data-id="x">$\mathcal X$: </span>
      <img src='assets/fil-1.svg'/>
      <span data-id="a3">$\rightarrow$</span>
      <img src='assets/fil-2.svg' style="width:5em;"/>
      <span data-id="a4">$\rightarrow$</span>
      <img data-id="sphere" src='assets/sphere.svg' style="width:5em;"/>
    </div>
    <div data-id="d2">
      $$
      \begin{array}{ccccc}
      X_1 & \xrightarrow{} & X_2 & \xrightarrow{} & X_3\\
      \downarrow & & \downarrow &  & \downarrow \\
      H_1(X_1) & \xrightarrow{} & H_1(X_2) & \xrightarrow{} & H_1(X_3)\\
      \end{array}
      $$
      </div>
  </div>
</div>

### What would we like to do?

---

<!-- .slide: data-auto-animate -->
### The limitations of persistent $H_*$

<div style="display:flex; justify-content:center; align-items:flex-end; gap:5em;">
  <div>
    <div style="display:flex; align-items:center; justify-content:center; gap:0.1em; font-size:0.75em;">
      <span data-id="t">$\mathcal T$: </span>
      <img src='assets/fil-1.svg'/>
      <span data-id="a1">$\rightarrow$</span>
      <img src='assets/fil-2.svg' style="width:5em;"/>
      <span data-id="a2">$\rightarrow$</span>
      <img data-id="torus" src='assets/torus.svg' style="width:5em;"/>
    </div>
    <div data-id="d1">
      $$
      \begin{array}{ccccc}
      T_1 & \xrightarrow{} & T_2 & \xrightarrow{} & T_3\\
      \downarrow & & \downarrow &  & \downarrow \\
      H_1(T_1) & \xrightarrow{} & H_1(T_2) & \xrightarrow{} & H_1(T_3)\\
      \end{array}
      $$
    </div>
  </div>

  <div>
    <div style="display:flex; align-items:center; justify-content:center; gap:0.1em; font-size:0.75em;">
      <span data-id="x">$\mathcal X$: </span>
      <img src='assets/fil-1.svg'/>
      <span data-id="a3">$\rightarrow$</span>
      <img src='assets/fil-2.svg' style="width:5em;"/>
      <span data-id="a4">$\rightarrow$</span>
      <img data-id="sphere" src='assets/sphere.svg' style="width:5em;"/>
    </div>
    <div data-id="d2">
      $$
      \begin{array}{ccccc}
      X_1 & \xrightarrow{} & X_2 & \xrightarrow{} & X_3\\
      \downarrow & & \downarrow &  & \downarrow \\
      H_1(X_1) & \xrightarrow{} & H_1(X_2) & \xrightarrow{} & H_1(X_3)\\
      \end{array}
      $$
      </div>
  </div>
</div>

### What would we like to do?

<div style="display:flex; justify-content:center; align-items:flex-end; gap:5em;">
  <div data-id="d1">
    $$
    \begin{array}{ccccc}
    T_1 & \xrightarrow{} & T_2 & \xrightarrow{} & T_3\\
    \downarrow & & \downarrow &  & \downarrow \\
    \pi_1(T_1) & \xrightarrow{} & \pi_1(T_2) & \xrightarrow{} & \pi_1(T_3)\\
    \end{array}
    $$
  </div>

  <div data-id="d1">
    $$
    \begin{array}{ccccc}
    X_1 & \xrightarrow{} & X_2 & \xrightarrow{} & X_3\\
    \downarrow & & \downarrow &  & \downarrow \\
    \pi_1(X_1) & \xrightarrow{} & \pi_1(X_2) & \xrightarrow{} & \pi_1(X_3)\\
    \end{array}
    $$
  </div>
</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>
---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>
<p>*We can compute a <span style="color:#2EC27E"><b>presentation</b></span> of the $\pi_1$ of a CW complex.

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>
<p>*We can compute a <span style="color:#2EC27E"><b>presentation</b></span> of the $\pi_1$ of a CW complex.

*Naive computation*: Using the spanning tree algorithm.

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>
<p>*We can compute a <span style="color:#2EC27E"><b>presentation</b></span> of the $\pi_1$ of a CW complex.

*Naive computation*: Using the spanning tree algorithm.

<img data-id="torus" width=600 src='assets/torus.svg'/>
<div data-id="label">$$ T $$</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>
<p>*We can compute a <span style="color:#2EC27E"><b>presentation</b></span> of the $\pi_1$ of a CW complex.

*Naive computation*: Using the spanning tree algorithm.

<img data-id="torus" width=500 src='assets/torus-cw.svg'/>
<div data-id="label">$$ T $$</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>
<p>*We can compute a <span style="color:#2EC27E"><b>presentation</b></span> of the $\pi_1$ of a CW complex.

*Naive computation*: Using the spanning tree algorithm.

<img data-id="torus" width=500 src='assets/tree-torus.svg'/>
<div data-id="label">$$ T $$</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>
<p>*We can compute a <span style="color:#2EC27E"><b>presentation</b></span> of the $\pi_1$ of a CW complex.

*Naive computation*: Using the spanning tree algorithm.

<img data-id="torus" width=500 src='assets/tree-torus.svg'/>
<div data-id="label">$$ T \cong \langle e_2, e_4, e_5, e_7, e_8 \mid e_5, \ e_2^{-1} e_7, e_5^{-1}, \ e_7^{-1} e_4^{-1} e_2 e_8, \ e_8^{-1} e_4 \rangle$$</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>
<p>*We can compute a <span style="color:#2EC27E"><b>presentation</b></span> of the $\pi_1$ of a CW complex.

*Naive computation*: Using the spanning tree algorithm.

*Efficient computation*: Using discrete Morse theory to obtain a reduced presentation.

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>
<p>*We can compute a <span style="color:#2EC27E"><b>presentation</b></span> of the $\pi_1$ of a CW complex.

*Efficient computation*: Using discrete Morse theory to obtain a reduced presentation.

>**Theorem (Forman, 1995; Chari, 2000)**: Suppose $ K $ is a regular CW complex with a discrete Morse function. Then $ K $ is homotopy equivalent to a CW complex with exactly one cell of dimension $ p $ for each critical simplex of dimension $ p $.

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>
<p>*We can compute a <span style="color:#2EC27E"><b>presentation</b></span> of the $\pi_1$ of a CW complex.

*Efficient computation*: Using discrete Morse theory to obtain a reduced presentation.

>**Theorem (Forman, 1995; Chari 2000)**: Suppose $ K $ is a regular CW complex with a discrete Morse function. Then $ K $ is homotopy equivalent to a CW complex with exactly one cell of dimension $ p $ for each critical simplex of dimension $ p $.

>**Theorem (Fernández, 2024)**: A reduced presentation of $ \pi_1(K) $ can be computed with complexity $ \mathcal O (N^2) $, where $ N $ depends on the total number of cells in $ K $.

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>
<p>*We can compute a <span style="color:#2EC27E"><b>presentation</b></span> of the $\pi_1$ of a CW complex.

*Efficient computation*: Using discrete Morse theory to obtain a reduced presentation.

<img data-id="torus" height=500 src='assets/torus-cw.svg'/>
<div data-id="label">$$ T $$</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>
<p>*We can compute a <span style="color:#2EC27E"><b>presentation</b></span> of the $\pi_1$ of a CW complex.

*Efficient computation*: Using discrete Morse theory to obtain a reduced presentation.

<img data-id="torus" height=500 src='assets/tree-torus.svg'/>
<div data-id="label">$$ T $$</div>


---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>
<p>*We can compute a <span style="color:#2EC27E"><b>presentation</b></span> of the $\pi_1$ of a CW complex.

*Efficient computation*: Using discrete Morse theory to obtain a reduced presentation.

<img data-id="torus" height=500 src='assets/matching-torus-3.svg'/>
<div data-id="label">$$ T $$</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>
<p>*We can compute a <span style="color:#2EC27E"><b>presentation</b></span> of the $\pi_1$ of a CW complex.

*Efficient computation*: Using discrete Morse theory to obtain a reduced presentation.

<img data-id="torus" height=500 src='assets/matching-torus-3.svg'/>
<div data-id="label">$$ T \cong \langle e_2, e_4 \mid e_2^{-1} e_4^{-1} e_2 e_4 \rangle$$</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can $\pi_1$ be computed <u>over a filtration</u>? </h3>
</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can <u>persistent</u> $\pi_1$ be computed? </h3>
</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can <u>persistent</u> $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can <u>persistent</u> $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div data-id="d1">
$$
\begin{array}{ccccccc}
K_1 & \xrightarrow{} & K_2 & \xrightarrow{} & \dots \xrightarrow{} & K_n\\
\downarrow & & \downarrow &  &   & \downarrow\\
\pi_1(K_1) & \xrightarrow{} & \pi_1(K_2) & \xrightarrow{} & \dots \xrightarrow{} & \pi_1(K_n)\\
\end{array}
$$
</div>

*Naive computation*: Compute $ \pi_1 $ presentations independently over every element in the filtration.

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can <u>persistent</u> $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div data-id="d1">
$$
\begin{array}{ccccccc}
K_1 & \xrightarrow{} & K_2 & \xrightarrow{} & \dots \xrightarrow{} & K_n\\
\downarrow & & \downarrow &  &   & \downarrow\\
\pi_1(K_1) & \xrightarrow{} & \pi_1(K_2) & \xrightarrow{} & \dots \xrightarrow{} & \pi_1(K_n)\\
\end{array}
$$
</div>

*Naive computation*: Compute $ \pi_1 $ presentations independently over every element in the filtration.

*Efficient computation*: Make an single computation through all the filtration.

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can <u>persistent</u> $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div data-id="d1">
$$
\begin{array}{ccccccc}
K_1 & \xrightarrow{} & K_2 & \xrightarrow{} & \dots \xrightarrow{} & K_n\\
\downarrow & & \downarrow &  &   & \downarrow\\
\pi_1(K_1) & \xrightarrow{} & \pi_1(K_2) & \xrightarrow{} & \dots \xrightarrow{} & \pi_1(K_n)\\
\end{array}
$$
</div>

*Efficient computation*: Make an single computation through all the filtration.

>**Theorem (O., Fernández, 2026)**: There exists an algorithm of complexity $ \mathcal O(N^2) $ that computes presentations of all $ \pi_1(K_\alpha) $ for all $ 1 \leq \alpha \leq n $, where $ N $ depends on the total number of cells in $K_n$.

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can <u>persistent</u> $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
  <span>$\mathcal T:$</span> 
  <img data-id="f1" width=200 src='assets/fil-1.svg'/>
  <span data-id="a1">$\rightarrow$</span>
  <img data-id="f2" width=400 src='assets/fil-2.svg'/>
  <span data-id="a2">$\rightarrow$</span>
  <img data-id="torus" width=400 src='assets/torus.svg'/>
</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can <u>persistent</u> $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
  <img data-id="f1" width=400 src='assets/torus-cw-1.svg'/>
  <span data-id="a1">$\rightarrow$</span>
  <img data-id="f2" width=400 src='assets/torus-cw-2.svg'/>
  <span data-id="a2">$\rightarrow$</span>
  <img data-id="torus" width=400 src='assets/torus-cw.svg'/>
</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can <u>persistent</u> $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="
  display:grid;
  grid-template-columns: 400px auto 400px auto 400px;
  justify-content:center;
  align-items:center;
  gap:0.5em;
">
  <img data-id="f1" src='assets/matching-torus-1.svg' width="400"/>
  <span data-id="a1">$\rightarrow$</span>
  <img data-id="f2" src='assets/matching-torus-2.svg' width="400"/>
  <span data-id="a2">$\rightarrow$</span>
  <img data-id="torus" src='assets/matching-torus-3.svg' width="400"/>

  <!-- second row -->
  <div style="text-align:center;">$$ \langle e_2 \mid - \rangle $$</div>
  <div></div>
  <div style="text-align:center;">$$ \langle e_2, e_4 \mid - \rangle $$</div>
  <div></div>
  <div style="text-align:center;">
    $$ \langle e_2, e_4 \mid e_2^{-1} e_4^{-1} e_2 e_4\rangle $$
  </div>
</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can <u>persistent</u> $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
  <span>$\mathcal X:$</span> 
  <img data-id="w1" width=200 src='assets/fil-1.svg'/>
  <span data-id="a3">$\rightarrow$</span>
  <img data-id="w2" width=400 src='assets/fil-2.svg'/>
  <span data-id="a4">$\rightarrow$</span>
  <img data-id="w3" width=400 src='assets/sphere.svg'/>
</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can <u>persistent</u> $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
  <img data-id="w1" width=200 src='assets/wedge-cw-1.svg'/>
  <span data-id="a3">$\rightarrow$</span>
  <img data-id="w2" width=400 src='assets/wedge-cw-2.svg'/>
  <span data-id="a4">$\rightarrow$</span>
  <img data-id="w3" width=400 src='assets/wedge-cw-3.svg'/>
</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can <u>persistent</u> $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="
  display:grid;
  grid-template-columns: 240px auto 400px auto 400px;
  justify-content:center;
  align-items:center;
  gap:0.5em;
">
  <img data-id="w1" src='assets/matching-wedge-1.svg' width="400"/>
  <span data-id="a3">$\rightarrow$</span>
  <img data-id="w2" src='assets/matching-wedge-2.svg' width="400"/>
  <span data-id="a4">$\rightarrow$</span>
  <img data-id="w3" src='assets/matching-wedge-3.svg' width="400"/>

  <!-- second row -->
  <div style="text-align:center;">$$ \langle e_2 \mid - \rangle $$</div>
  <div></div>
  <div style="text-align:center;">$$ \langle e_2, e_5 \mid - \rangle $$</div>
  <div></div>
  <div style="text-align:center;">
    $$ \langle e_2, e_5 \mid - \rangle $$
  </div>
</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can <u>persistent</u> $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div data-id=pp1>
$$ \begin{align*}
  P\pi_1(\mathcal T) &= \langle t_1 \mid - \rangle \rightarrow \langle t_1, t_2 \mid - \rangle \rightarrow \langle t_1, t_2 \mid t_1^{-1} t_2^{-1} t_1 t_2\rangle, \\
  P\pi_1(\mathcal X) &= \langle x_1 \mid - \rangle \rightarrow \langle x_1, x_2 \mid - \rangle \rightarrow \langle x_1, x_2 \mid - \rangle.
\end{align*} $$
</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can <u>persistent</u> $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div data-id=pp1>
$$ \begin{align*}
  P\pi_1(\mathcal T) &= \langle t_1 \mid - \rangle \rightarrow \langle t_1, t_2 \mid - \rangle \rightarrow \langle t_1, t_2 \mid t_1^{-1} t_2^{-1} t_1 t_2\rangle, \\
  P\pi_1(\mathcal X) &= \langle x_1 \mid - \rangle \rightarrow \langle x_1, x_2 \mid - \rangle \rightarrow \langle x_1, x_2 \mid - \rangle.
\end{align*} $$
</div>

<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can we make $\pi_1$ barcodes as in $H_*$? </h3>
</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can <u>persistent</u> $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div data-id=pp1>
$$ \begin{align*}
  P\pi_1(\mathcal T) &= \langle t_1 \mid - \rangle \rightarrow \langle t_1, t_2 \mid - \rangle \rightarrow \langle t_1, t_2 \mid t_1^{-1} t_2^{-1} t_1 t_2\rangle, \\
  P\pi_1(\mathcal X) &= \langle x_1 \mid - \rangle \rightarrow \langle x_1, x_2 \mid - \rangle \rightarrow \langle x_1, x_2 \mid - \rangle.
\end{align*} $$
</div>

<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can we make $\pi_1$ barcodes as in $H_*$? </h3>
  <h3><span style="color:#F54927">NO</span></h3>
</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can <u>persistent</u> $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div data-id=pp1>
$$ \begin{align*}
  P\pi_1(\mathcal T) &= \langle t_1 \mid - \rangle \rightarrow \langle t_1, t_2 \mid - \rangle \rightarrow \langle t_1, t_2 \mid t_1^{-1} t_2^{-1} t_1 t_2\rangle, \\
  P\pi_1(\mathcal X) &= \langle x_1 \mid - \rangle \rightarrow \langle x_1, x_2 \mid - \rangle \rightarrow \langle x_1, x_2 \mid - \rangle.
\end{align*} $$
</div>

<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can we make $\pi_1$ barcodes as in $H_*$? </h3>
  <h3><span style="color:#F54927">NO</span></h3>
</div>

<div data-id="d1">
The groups $ \pi_1(K_\alpha) $ in 
$$
\begin{array}{ccccccc}
\pi_1(K_1) & \xrightarrow{} & \pi_1(K_2) & \xrightarrow{} & \dots \xrightarrow{} & \pi_1(K_n)\\
\end{array}
$$
may <span style="color:#F54927">NOT be abelian</span>!
</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can <u>persistent</u> $\pi_1$ be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div data-id=pp1>
$$ \begin{align*}
  P\pi_1(\mathcal T) &= \langle t_1 \mid - \rangle \rightarrow \langle t_1, t_2 \mid - \rangle \rightarrow \langle t_1, t_2 \mid t_1^{-1} t_2^{-1} t_1 t_2\rangle, \\
  P\pi_1(\mathcal X) &= \langle x_1 \mid - \rangle \rightarrow \langle x_1, x_2 \mid - \rangle \rightarrow \langle x_1, x_2 \mid - \rangle.
\end{align*} $$
</div>

<div style="display:flex; justify-content:center; gap:1em;">
  <h3> Can we make $\pi_1$ barcodes as in $H_*$? </h3>
  <h3><span style="color:#F54927">NO</span></h3>
</div>

<div data-id="d1">
The groups $ \pi_1(K_\alpha) $ in 
$$
\begin{array}{ccccccc}
\pi_1(K_1) & \xrightarrow{} & \pi_1(K_2) & \xrightarrow{} & \dots \xrightarrow{} & \pi_1(K_n)\\
\end{array}
$$
may <span style="color:#F54927">NOT be abelian</span>!
</div>

<div data-id="d2">
Also, we only know presentations of each $ \pi_1(K_\alpha) $, but <span style="color:#F54927">NOT the actual group</span>!
</div>

---

<!-- .slide: data-auto-animate -->
### Lower central quotients

---

<!-- .slide: data-auto-animate -->
### Lower central quotients

>**Definition** (Lower central series): The **lower central series** of a group $ G $ is the descending series of normal subgroups
$$ G = \gamma_1(G) \trianglerighteq \gamma_2(G) \trianglerighteq \dots \trianglerighteq \gamma_n(G) \trianglerighteq \dots $$
where
$$ \gamma_{n+1}(G) = [\gamma_n(G), G] = \langle \{ [h, g] : h \in \gamma_n(G), \ g \in G \}\rangle. $$

---

<!-- .slide: data-auto-animate -->
### Lower central quotients

>**Definition** (Lower central series): The **lower central series** of a group $ G $ is the descending series of normal subgroups
$$ G = \gamma_1(G) \trianglerighteq \gamma_2(G) \trianglerighteq \dots \trianglerighteq \gamma_n(G) \trianglerighteq \dots $$
where
$$ \gamma_{n+1}(G) = [\gamma_n(G), G] = \langle \{ [h, g] : h \in \gamma_n(G), \ g \in G \}\rangle. $$

>**Definition** (Lower central quotient): We deffine the **lower central quotient** of $ G $ as
$$ lcq_n(G) := \frac{\gamma_n(G)}{\gamma_{n+1}(G)}. $$

---
<!-- .slide: data-auto-animate -->
### Lower central quotients

<div data-id="l1">
Let $ G = \pi_1(K) $
$$
lcq_1(G) = \frac{G}{[G, G]} = H_1(K)
$$
</div>

---

<!-- .slide: data-auto-animate -->
### Lower central quotients

<div data-id="l1">
Let $ G = \pi_1(K) $
$$
lcq_1(G) = \frac{G}{[G, G]} = H_1(K)
$$
</div>
<div data-id="l2">
$$
lcq_2(G) = \frac{[G, G]}{[[G, G], G]}
$$
$$
lcq_3(G) = \frac{[[G, G], G]}{[[[G, G], G], G]}
$$
$$
\dots
$$
</div>

---

<!-- .slide: data-auto-animate -->
### Lower central quotients

<div data-id="l1">
Let $ G = \pi_1(K) $
$$
lcq_1(G) = \frac{G}{[G, G]} = H_1(K)
$$
</div>
<div data-id="l2">
$$
lcq_2(G) = \frac{[G, G]}{[[G, G], G]}
$$
$$
lcq_3(G) = \frac{[[G, G], G]}{[[[G, G], G], G]}
$$
$$
\dots
$$
</div>

>For every $ n $, $ lcq_n(G) $ <span style="color:#2EC27E">IS ABELIAN</span>!

---

<!-- .slide: data-auto-animate -->
### Lower central quotients

>For every $ n $, $ lcq_n(G) $ <span style="color:#2EC27E">IS ABELIAN</span>!

>For every $ n $, $ lcq_n(G) $ <span style="color:#2EC27E">CAN BE COMPUTED</span>!
**(Sims, 1994)**

---

<!-- .slide: data-auto-animate -->
### Lower central quotients

>For every $ n $, $ lcq_n(G) $ <span style="color:#2EC27E">IS ABELIAN</span>!

>For every $ n $, $ lcq_n(G) $ <span style="color:#2EC27E">CAN BE COMPUTED</span>!
**(Sims, 1994)**

>The <span style="color:#2EC27E">complexity</span> of computing $ lcq_n(G) $ depends on the <span style="color:#2EC27E">number of generators and relations</span> of the presentation of $ G $ we are using.

---

<!-- .slide: data-auto-animate -->
### Lower central quotients

<div data-id="d1">
$$
\begin{array}{ccccccc}
K_1 & \xrightarrow{} & K_2 & \xrightarrow{} & \dots \xrightarrow{} & K_n\\
\downarrow & & \downarrow &  &   & \downarrow\\
\pi_1(K_1) & \xrightarrow{} & \pi_1(K_2) & \xrightarrow{} & \dots \xrightarrow{} & \pi_1(K_n)\\
\downarrow & & \downarrow &  &   & \downarrow\\
lcq_n(\pi_1(K_1)) & \xrightarrow{} & lcq_n(\pi_1(K_2)) & \xrightarrow{} & \dots \xrightarrow{} & lcq_n(\pi_1(K_n))\\
\end{array}
$$
</div>

---

<!-- .slide: data-auto-animate -->
### Lower central quotients
<div data-id="o">
Every $ lcq_n(\pi_1(K_\alpha)) $ is abelian so
$$
\begin{array}{ccccccc}
lcq_n(\pi_1(K_1)) & \xrightarrow{} & lcq_n(\pi_1(K_2)) & \xrightarrow{} & \dots \xrightarrow{} & lcq_n(\pi_1(K_n))\\
\end{array}
$$
can be seen as a graded abelian module.
</div>

---

<!-- .slide: data-auto-animate -->
### Lower central quotients

<div data-id="o">
Every $ lcq_n(\pi_1(K_\alpha)) $ is abelian so
$$
\begin{array}{ccccccc}
lcq_n(\pi_1(K_1)) & \xrightarrow{} & lcq_n(\pi_1(K_2)) & \xrightarrow{} & \dots \xrightarrow{} & lcq_n(\pi_1(K_n))\\
\end{array}
$$
can be seen as a graded abelian module.
</div>

>We can compute <span style="color:#2EC27E">BARCODES</span>!
**(Skraba & Vejdemo, 2013)**

---

<!-- .slide: data-auto-animate -->
### Lower central quotients

<div style="display:flex; justify-content:center; align-items:flex-end; gap:2em;">
<div>
  <div style="display:flex; align-items:center; justify-content:center; gap:0.1em; font-size:0.75em;">
    <span data-id="t">$\mathcal T$: </span>
    <img src='assets/fil-1.svg'/>
    <span data-id="a1">$\rightarrow$</span>
    <img src='assets/fil-2.svg' style="width:5em;"/>
    <span data-id="a2">$\rightarrow$</span>
    <img data-id="torus" src='assets/torus.svg' style="width:5em;"/>
  </div>
  <div data-id="d1">
  $$
  \begin{array}{ccccc}
  T_1 & \xrightarrow{} & T_2 & \xrightarrow{} & T_3\\
  \downarrow\scriptstyle{\pi_1} & & \downarrow\scriptstyle{\pi_1} &  & \downarrow\scriptstyle{\pi_1} \\
  \mathbb Z & \xrightarrow{} & \mathbb Z * \mathbb Z & \xrightarrow{} & \mathbb Z \oplus \mathbb Z\\
  \downarrow\scriptstyle{lcq_2} & & \downarrow\scriptstyle{lcq_2} & & \downarrow\scriptstyle{lcq_2} \\
  0 & \xrightarrow{} & \mathbb Z & \xrightarrow{} & 0\\
  \end{array}
  $$
  </div>
  <img src='assets/bars-torus-lcq2.svg'>
</div>

<div>
  <div style="display:flex; align-items:center; justify-content:center; gap:0.1em; font-size:0.75em;">
    <span data-id="x">$\mathcal X$: </span>
    <img src='assets/fil-1.svg'/>
    <span data-id="a3">$\rightarrow$</span>
    <img src='assets/fil-2.svg' style="width:5em;"/>
    <span data-id="a4">$\rightarrow$</span>
    <img data-id="sphere" src='assets/sphere.svg' style="width:5em;"/>
  </div>
  <div data-id="d2">
  $$
  \begin{array}{ccccc}
  X_1 & \xrightarrow{} & X_2 & \xrightarrow{} & X_3\\
  \downarrow\scriptstyle{\pi_1} & & \downarrow\scriptstyle{\pi_1} &  & \downarrow\scriptstyle{\pi_1} \\
  \mathbb Z & \xrightarrow{} & \mathbb Z * \mathbb Z & \xrightarrow{} & \mathbb Z * \mathbb Z\\
  \downarrow\scriptstyle{lcq_2} & & \downarrow\scriptstyle{lcq_2} &  & \downarrow\scriptstyle{lcq_2} \\
  0 & \xrightarrow{} & \mathbb Z  & \xrightarrow{} & \mathbb Z\\
  \end{array}
  $$
  </div>
  <img src='assets/bars-sphere-lcq2.svg'>
</div>
</div>

---

<!-- .slide: data-auto-animate -->
### Lower central quotients
**Example:** $lcq_n$ barcodes of links.

<div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
  <span data-id="u">$\mathcal U$:</span>
  <img src='assets/unlink-3.svg'/>
  <span data-id="arrow1">$\rightarrow$</span>
  <img src='assets/unlink-2.svg'/>
  <span data-id="arrow2">$\rightarrow$</span>
  <img src='assets/unlink-1.svg'/>
</div>

<div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
  <span data-id="l">$\mathcal L$:</span>
  <img src='assets/link-3.svg'/>
  <span data-id="arrow1">$\rightarrow$</span>
  <img src='assets/link-2.svg'/>
  <span data-id="arrow2">$\rightarrow$</span>
  <img src='assets/link-1.svg'/>
</div>

<div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
  <span data-id="r">$\mathcal R$:</span>
  <img src='assets/borromean-3.svg'/>
  <span data-id="arrow1">$\rightarrow$</span>
  <img src='assets/borromean-2.svg'/>
  <span data-id="arrow2">$\rightarrow$</span>
  <img src='assets/borromean-1.svg'/>
</div>

---

<!-- .slide: data-auto-animate -->

**Example:** $lcq_n$ barcodes of links. **($\pi_1$)**

<div style="display:flex; justify-content:center; align-items:flex-end; gap:1em;">
  <div>
  <div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
    <span data-id="u">$\mathcal U$:</span>
    <img src='assets/unlink-3.svg'/>
    <span data-id="arrow1">$\rightarrow$</span>
    <img src='assets/unlink-2.svg'/>
    <span data-id="arrow2">$\rightarrow$</span>
    <img src='assets/unlink-1.svg'/>
  </div>
    $$
    \begin{align*}
      \pi_1(\mathbb R^3 \setminus U_1) &= \langle u_1, u_2, u_3 \mid - \rangle \\
      \pi_1(\mathbb R^3 \setminus U_2) &= \langle u_1, u_2 \mid - \rangle \\
      \pi_1(\mathbb R^3 \setminus U_3) &= \langle u_1 \mid - \rangle \\
    \end{align*}
    $$
  </div>
  <div>
  <div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
    <span data-id="l">$\mathcal L$:</span>
    <img src='assets/link-3.svg'/>
    <span data-id="arrow1">$\rightarrow$</span>
    <img src='assets/link-2.svg'/>
    <span data-id="arrow2">$\rightarrow$</span>
    <img src='assets/link-1.svg'/>
  </div>
    $$
    \begin{align*}
      \pi_1(\mathbb R^3 \setminus L_1) &= \langle l_1, l_2, l_3 \mid [l_1, l_2], [l_1l_3, l_2] \rangle \\
      \pi_1(\mathbb R^3 \setminus L_2) &= \langle l_1, l_2 \mid [l_1, l_2] \rangle \\
      \pi_1(\mathbb R^3 \setminus L_3) &= \langle l_1 \mid - \rangle \\
    \end{align*}
    $$
  </div>
</div>

<div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
  <span data-id="r">$\mathcal R$:</span>
  <img src='assets/borromean-3.svg'/>
  <span data-id="arrow1">$\rightarrow$</span>
  <img src='assets/borromean-2.svg'/>
  <span data-id="arrow2">$\rightarrow$</span>
  <img src='assets/borromean-1.svg'/>
</div>
<div>
$$
\begin{align*}
    \pi_1(\mathbb R^3 \setminus R_1) &= \langle r_1, r_2, r_3 \mid r_3r_2^{-1}r_3^{-1}r_1^{-1}r_3r_2r_3^{-1}r_2^{-1}r_1r_2, r_3r_2r_3^{-1}r_1r_3r_1^{-1}r_2^{-1}r_1r_3^{-1}r_1^{-1} \rangle \\
    \pi_1(\mathbb R^3 \setminus R_2) &= \langle r_1, r_2 \mid - \rangle \\
    \pi_1(\mathbb R^3 \setminus R_3) &= \langle r_1 \mid - \rangle \\
\end{align*}
$$
</div>

---

<!-- .slide: data-auto-animate -->

**Example:** $lcq_n$ barcodes of links. **($lcq_1 = H_1$)**

<div style="display:flex; justify-content:center; align-items:flex-end; gap:1em;">
  <div>
    <div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
      <span data-id="u">$\mathcal U$:</span>
      <img src='assets/unlink-3.svg'/>
      <span data-id="arrow1">$\rightarrow$</span>
      <img src='assets/unlink-2.svg'/>
      <span data-id="arrow2">$\rightarrow$</span>
      <img src='assets/unlink-1.svg'/>
    </div>
    <div data-id="d1">
      $$
      \begin{array}{ccccc}
      \mathbb R^3 \setminus U_1 & \xrightarrow{} & \mathbb R^3 \setminus U_2 & \xrightarrow{} & \mathbb R^3 \setminus U_3\\
      \downarrow\scriptstyle{H_1} & & \downarrow\scriptstyle{H_1} &  & \downarrow\scriptstyle{H_1} \\
      \mathbb Z^3 & \xrightarrow{} & \mathbb Z^2 & \xrightarrow{} & \mathbb Z\\
      \end{array}
      $$
    </div>
    </div>
    <div>
    <div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
      <span data-id="l">$\mathcal L$:</span>
      <img src='assets/link-3.svg'/>
      <span data-id="arrow1">$\rightarrow$</span>
      <img src='assets/link-2.svg'/>
      <span data-id="arrow2">$\rightarrow$</span>
      <img src='assets/link-1.svg'/>
    </div>
    <div data-id="d2">
      $$
      \begin{array}{ccccc}
      \mathbb R^3 \setminus L_1 & \xrightarrow{} & \mathbb R^3 \setminus L_2 & \xrightarrow{} & \mathbb R^3 \setminus L_3\\
      \downarrow\scriptstyle{H_1} & & \downarrow\scriptstyle{H_1} &  & \downarrow\scriptstyle{H_1} \\
      \mathbb Z^3 & \xrightarrow{} & \mathbb Z^2 & \xrightarrow{} & \mathbb Z\\
      \end{array}
      $$
    </div>
    </div>
  </div>

  <div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
    <span data-id="r">$\mathcal R$:</span>
    <img src='assets/borromean-3.svg'/>
    <span data-id="arrow1">$\rightarrow$</span>
    <img src='assets/borromean-2.svg'/>
    <span data-id="arrow2">$\rightarrow$</span>
    <img src='assets/borromean-1.svg'/>
  </div>
  <div data-id="d3">
    $$
    \begin{array}{ccccc}
    \mathbb R^3 \setminus R_1 & \xrightarrow{} & \mathbb R^3 \setminus R_2 & \xrightarrow{} & \mathbb R^3 \setminus R_3\\
    \downarrow\scriptstyle{H_1} & & \downarrow\scriptstyle{H_1} &  & \downarrow\scriptstyle{H_1} \\
    \mathbb Z^3 & \xrightarrow{} & \mathbb Z^2 & \xrightarrow{} & \mathbb Z\\
    \end{array}
    $$
  </div>
</div>

---

<!-- .slide: data-auto-animate -->
**Example:** $lcq_n$ barcodes of links. **($lcq_1 = H_1$)**

<div style="display:flex; align-items:center; justify-content:center; gap:2em;">
  <div>
    <div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
      <span data-id="u">$\mathcal U$:</span>
      <img src='assets/unlink-3.svg'/>
      <span data-id="arrow1">$\rightarrow$</span>
      <img src='assets/unlink-2.svg'/>
      <span data-id="arrow2">$\rightarrow$</span>
      <img src='assets/unlink-1.svg'/>
    </div>
    <br>
    <div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
      <span data-id="l">$\mathcal L$:</span>
      <img src='assets/link-3.svg'/>
      <span data-id="arrow1">$\rightarrow$</span>
      <img src='assets/link-2.svg'/>
      <span data-id="arrow2">$\rightarrow$</span>
      <img src='assets/link-1.svg'/>
    </div>
    <br>
    <div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
      <span data-id="r">$\mathcal R$:</span>
      <img src='assets/borromean-3.svg'/>
      <span data-id="arrow1">$\rightarrow$</span>
      <img src='assets/borromean-2.svg'/>
      <span data-id="arrow2">$\rightarrow$</span>
      <img src='assets/borromean-1.svg'/>
    </div>
  </div>
  <div>
    <img src="assets/bars-link-h1.svg"><br>
    <img src="assets/bars-link-h1.svg"><br>
    <img src="assets/bars-link-h1.svg">
  </div>
</div>

---

<!-- .slide: data-auto-animate -->

**Example:** $lcq_n$ barcodes of links. **($lcq_2$)**

<div style="display:flex; justify-content:center; align-items:flex-end; gap:1em;">
  <div>
    <div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
      <span data-id="u">$\mathcal U$:</span>
      <img src='assets/unlink-3.svg'/>
      <span data-id="arrow1">$\rightarrow$</span>
      <img src='assets/unlink-2.svg'/>
      <span data-id="arrow2">$\rightarrow$</span>
      <img src='assets/unlink-1.svg'/>
    </div>
    <div data-id="d1">
      $$
      \begin{array}{ccccc}
      \mathbb R^3 \setminus U_1 & \xrightarrow{} & \mathbb R^3 \setminus U_2 & \xrightarrow{} & \mathbb R^3 \setminus U_3\\
      \downarrow\scriptstyle{lcq_2} & & \downarrow\scriptstyle{lcq_2} &  & \downarrow\scriptstyle{lcq_2} \\
      \mathbb Z^3 & \xrightarrow{} & \mathbb Z & \xrightarrow{} & 0\\
      \end{array}
      $$
    </div>
    </div>
    <div>
    <div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
      <span data-id="l">$\mathcal L$:</span>
      <img src='assets/link-3.svg'/>
      <span data-id="arrow1">$\rightarrow$</span>
      <img src='assets/link-2.svg'/>
      <span data-id="arrow2">$\rightarrow$</span>
      <img src='assets/link-1.svg'/>
    </div>
    <div data-id="d2">
    $$
    \begin{array}{ccccc}
    \mathbb R^3 \setminus L_1 & \xrightarrow{} & \mathbb R^3 \setminus L_2 & \xrightarrow{} & \mathbb R^3 \setminus L_3\\
    \downarrow\scriptstyle{lcq_2} & & \downarrow\scriptstyle{lcq_2} &  & \downarrow\scriptstyle{lcq_2} \\
    \mathbb Z & \xrightarrow{} & 0 & \xrightarrow{} & 0\\
    \end{array}
    $$
    </div>
    </div>
  </div>

<div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
  <span data-id="r">$\mathcal R$:</span>
  <img src='assets/borromean-3.svg'/>
  <span data-id="arrow1">$\rightarrow$</span>
  <img src='assets/borromean-2.svg'/>
  <span data-id="arrow2">$\rightarrow$</span>
  <img src='assets/borromean-1.svg'/>
</div>
<div>
  <div data-id="d3">
    $$
    \begin{array}{ccccc}
    \mathbb R^3 \setminus R_1 & \xrightarrow{} & \mathbb R^3 \setminus R_2 & \xrightarrow{} & \mathbb R^3 \setminus R_3\\
    \downarrow\scriptstyle{lcq_2} & & \downarrow\scriptstyle{lcq_2} &  & \downarrow\scriptstyle{lcq_2} \\
    \mathbb Z^3 & \xrightarrow{} & \mathbb Z & \xrightarrow{} & 0\\
    \end{array}
    $$
  </div>
</div>

---

<!-- .slide: data-auto-animate -->
**Example:** $lcq_n$ barcodes of links. **($lcq_2$)**

<div style="display:flex; align-items:center; justify-content:center; gap:2em;">
  <div>
    <div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
      <span data-id="u">$\mathcal U$:</span>
      <img src='assets/unlink-3.svg'/>
      <span data-id="arrow1">$\rightarrow$</span>
      <img src='assets/unlink-2.svg'/>
      <span data-id="arrow2">$\rightarrow$</span>
      <img src='assets/unlink-1.svg'/>
    </div>
    <br>
    <div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
      <span data-id="l">$\mathcal L$:</span>
      <img src='assets/link-3.svg'/>
      <span data-id="arrow1">$\rightarrow$</span>
      <img src='assets/link-2.svg'/>
      <span data-id="arrow2">$\rightarrow$</span>
      <img src='assets/link-1.svg'/>
    </div>
    <br>
    <div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
      <span data-id="r">$\mathcal R$:</span>
      <img src='assets/borromean-3.svg'/>
      <span data-id="arrow1">$\rightarrow$</span>
      <img src='assets/borromean-2.svg'/>
      <span data-id="arrow2">$\rightarrow$</span>
      <img src='assets/borromean-1.svg'/>
    </div>
  </div>
  <div>
    <img src="assets/bars-link-lcq2-common.svg"><br>
    <img src="assets/bars-link-lcq2-chain.svg"><br>
    <img src="assets/bars-link-lcq2-common.svg">
  </div>
</div>

---

<!-- .slide: data-auto-animate -->
**Example:** $lcq_n$ barcodes of links. **($lcq_3$)**

<div style="display:flex; justify-content:center; align-items:flex-end; gap:1em;">
  <div>
    <div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
      <span data-id="u">$\mathcal U$:</span>
      <img src='assets/unlink-3.svg'/>
      <span data-id="arrow1">$\rightarrow$</span>
      <img src='assets/unlink-2.svg'/>
      <span data-id="arrow2">$\rightarrow$</span>
      <img src='assets/unlink-1.svg'/>
    </div>
    <div data-id="d1">
      $$
      \begin{array}{ccccc}
      \mathbb R^3 \setminus U_1 & \xrightarrow{} & \mathbb R^3 \setminus U_2 & \xrightarrow{} & \mathbb R^3 \setminus U_3\\
      \downarrow\scriptstyle{lcq_3} & & \downarrow\scriptstyle{lcq_3} &  & \downarrow\scriptstyle{lcq_3} \\
      \mathbb Z^8 & \xrightarrow{} & \mathbb Z^2 & \xrightarrow{} & 0\\
      \end{array}
      $$
    </div>
    </div>
    <div>
    <div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
      <span data-id="l">$\mathcal L$:</span>
      <img src='assets/link-3.svg'/>
      <span data-id="arrow1">$\rightarrow$</span>
      <img src='assets/link-2.svg'/>
      <span data-id="arrow2">$\rightarrow$</span>
      <img src='assets/link-1.svg'/>
    </div>
    <div data-id="d2">
      $$
      \begin{array}{ccccc}
      \mathbb R^3 \setminus L_1 & \xrightarrow{} & \mathbb R^3 \setminus L_2 & \xrightarrow{} & \mathbb R^3 \setminus L_3\\
      \downarrow\scriptstyle{lcq_3} & & \downarrow\scriptstyle{lcq_3} &  & \downarrow\scriptstyle{lcq_3} \\
      \mathbb Z^2 & \xrightarrow{} & 0 & \xrightarrow{} & 0\\
      \end{array}
      $$
    </div>
  </div>
</div>

<div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
  <span data-id="r">$\mathcal R$:</span>
  <img src='assets/borromean-3.svg'/>
  <span data-id="arrow1">$\rightarrow$</span>
  <img src='assets/borromean-2.svg'/>
  <span data-id="arrow2">$\rightarrow$</span>
  <img src='assets/borromean-1.svg'/>
</div>
<div>
  <div data-id="d3">
    $$
    \begin{array}{ccccc}
    \mathbb R^3 \setminus R_1 & \xrightarrow{} & \mathbb R^3 \setminus R_2 & \xrightarrow{} & \mathbb R^3 \setminus R_3\\
    \downarrow\scriptstyle{lcq_3} & & \downarrow\scriptstyle{lcq_3} &  & \downarrow\scriptstyle{lcq_3} \\
    \mathbb Z^6 & \xrightarrow{} & \mathbb Z^2 & \xrightarrow{} & 0\\
    \end{array}
    $$
  </div>
</div>

---

<!-- .slide: data-auto-animate -->
**Example:** $lcq_n$ barcodes of links. **($lcq_3$)**

<div style="display:flex; align-items:center; justify-content:center; gap:2em;">
  <div>
    <div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
      <span data-id="u">$\mathcal U$:</span>
      <img src='assets/unlink-3.svg'/>
      <span data-id="arrow1">$\rightarrow$</span>
      <img src='assets/unlink-2.svg'/>
      <span data-id="arrow2">$\rightarrow$</span>
      <img src='assets/unlink-1.svg'/>
    </div>
    <br>
    <div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
      <span data-id="l">$\mathcal L$:</span>
      <img src='assets/link-3.svg'/>
      <span data-id="arrow1">$\rightarrow$</span>
      <img src='assets/link-2.svg'/>
      <span data-id="arrow2">$\rightarrow$</span>
      <img src='assets/link-1.svg'/>
    </div>
    <br>
    <div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
      <span data-id="r">$\mathcal R$:</span>
      <img src='assets/borromean-3.svg'/>
      <span data-id="arrow1">$\rightarrow$</span>
      <img src='assets/borromean-2.svg'/>
      <span data-id="arrow2">$\rightarrow$</span>
      <img src='assets/borromean-1.svg'/>
    </div>
  </div>
  <div>
    <img src="assets/bars-link-lcq3-free.svg"><br>
    <img src="assets/bars-link-lcq3-chain.svg"><br>
    <img src="assets/bars-link-lcq3-barro.svg">
  </div>
</div>

---
### GAP Code

<pre><code data-line-numbers="1, 5, 6, 8">LoadPackage("nq");

LcsQuotient := function(group, i)
    local h, lcs;
    nq := NilpotentQuotient(group, i+1);
    lcs := LowerCentralSeries(nq);
    if i < Length(lcs) then
        return AbelianInvariants(lcs[i] / lcs[i+1]);
    fi;
    return TrivialGroup();
end;
</code></pre>

Using GAP 4 NQ Package **(Nickel, 2007)**.

---

<!-- .slide: data-auto-animate -->
### Ongoing work

- Loking for a computationaly eficient algorithm to compute $ lcq_n(G) $.

- Loking for a computationaly eficient algorithm to compute a graded Smith normal form.

***

### Future work

- Apply methods to metric spaces.

- Apply methods to real data.

- Look for other abelian group invariants further than $ lcq_n $.

---

### References

- Robin Forman. Morse theory for cell complexes. Adv. Math., 134(1):90–145, 1998.

- Ximena Fernández. Morse theory for group presentations. arXiv:1912.00115, 2021.

- Charles C. Sims. Computation with finitely presented groups. Cambridge Univ. Press, 1994.

- Primoz Skraba and Mikael Vejdemo-Johansson. Persistence modules: Algebra and algorithms.
  Mathematics of Computation, 0:0–0, 2013.

- Werner Nickel. A gap 4 package computing nilpotent factor groups of finitely presented groups. GAP
4 Package, 2007.
