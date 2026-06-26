
<!-- .slide: data-auto-animate -->
# Persistent <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span>
## & Lower-central-series barcodes

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

*YTM 2026 - Monday, 29<sup>th</sup> June*

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

All computations will be made with coefficients in a field $ \mathbb K $.

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
$$H_0(T) = \mathbb K = H_0(X)$$
<p data-id="h"> $$H_1(T) = \mathbb K \oplus \mathbb K = H_1(X)$$
$$H_2(T) = \mathbb K = H_2(X)$$
$$H_n(T) = 0 = H_n(X), $$
$$ \ n \geq 3 $$

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

<p data-id="h"> $$ H_1(T) = \mathbb K \oplus \mathbb K = H_1(X) $$

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
      \downarrow \scriptsize{H_1} & & \downarrow \scriptsize{H_1} &  & \downarrow \scriptsize{H_1} \\
      \mathbb Z & \xrightarrow{} & \mathbb Z \oplus \mathbb Z & \xrightarrow{} & \mathbb Z \oplus \mathbb Z\\
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
      \downarrow \scriptsize{H_1} & & \downarrow \scriptsize{H_1} &  & \downarrow \scriptsize{H_1} \\
      \mathbb Z & \xrightarrow{} & \mathbb Z \oplus \mathbb Z & \xrightarrow{} & \mathbb Z \oplus \mathbb Z\\
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
      \downarrow \scriptsize{H_1} & & \downarrow \scriptsize{H_1} &  & \downarrow \scriptsize{H_1} \\
      \mathbb Z & \xrightarrow{} & \mathbb Z \oplus \mathbb Z& \xrightarrow{} & \mathbb Z \oplus \mathbb Z\\
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
      \downarrow \scriptsize{H_1} & & \downarrow \scriptsize{H_1} &  & \downarrow \scriptsize{H_1} \\
      \mathbb Z & \xrightarrow{} & \mathbb Z \oplus \mathbb Z & \xrightarrow{} & \mathbb Z \oplus \mathbb Z\\
      \end{array}
      $$
    </div>
    <img data-id="tbar" src='assets/simple-bars.svg'/>
  </div>
</div>
<p data-id="ph">$$ PH_1(\mathcal T) = PH_1(\mathcal X)$$

All barcodes coincide.

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

### Persistent <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span>

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

**Convention**: All spaces are path-conected and contain a common base point.

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>
---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E;">YES</span>*</h3>
</div>
<p>*We can compute a <span style="color:#2EC27E"><b>presentation</b></span> of $\pi_1$ of a CW complex.

*(All CW complexes will be **finite** and **path-connected** in this presentation.)*

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>
<p>*We can compute a <span style="color:#2EC27E"><b>presentation</b></span> of $\pi_1$ of a CW complex.

***Naive computation***: Using the <span style="color:#2EC27E"><b>spanning tree</b></span> algorithm.

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>
<p>*We can compute a <span style="color:#2EC27E"><b>presentation</b></span> of $\pi_1$ of a CW complex.

***Naive computation***: Using the <span style="color:#2EC27E"><b>spanning tree</b></span> algorithm.

<img data-id="torus" width=600 src='assets/torus.svg'/>
<div data-id="label">$$ T $$</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>
<p>*We can compute a <span style="color:#2EC27E"><b>presentation</b></span> of $\pi_1$ of a CW complex.

***Naive computation***: Using the <span style="color:#2EC27E"><b>spanning tree</b></span> algorithm.

<img data-id="torus" width=500 src='assets/torus-cw.svg'/>
<div data-id="label">$$ T $$</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>
<p>*We can compute a <span style="color:#2EC27E"><b>presentation</b></span> of $\pi_1$ of a CW complex.

***Naive computation***: Using the <span style="color:#2EC27E"><b>spanning tree</b></span> algorithm.

<img data-id="torus" width=500 src='assets/tree-torus.svg'/>
<div data-id="label">$$ T $$</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>
<p>*We can compute a <span style="color:#2EC27E"><b>presentation</b></span> of $\pi_1$ of a CW complex.

***Naive computation***: Using the <span style="color:#2EC27E"><b>spanning tree</b></span> algorithm.

<img data-id="torus" width=500 src='assets/tree-torus.svg'/>
<div data-id="label">$$ T \cong \langle e_2, e_4, e_5, e_7, e_8 \mid e_5, \ e_2^{-1} e_7, e_5^{-1}, \ e_7^{-1} e_4^{-1} e_2 e_8, \ e_8^{-1} e_4 \rangle$$</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center;  align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>
<p>*We can compute a <span style="color:#2EC27E"><b>presentation</b></span> of $\pi_1$ of a CW complex.

***Naive computation***: Using the <span style="color:#2EC27E"><b>spanning tree</b></span> algorithm.

***Efficient computation***: Using <span style="color:#2EC27E"><b>discrete Morse theory</b></span> to obtain a reduced presentation.

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>
<p>*We can compute a <span style="color:#2EC27E"><b>presentation</b></span> of $\pi_1$ of a CW complex.

***Efficient computation***: Using <span style="color:#2EC27E"><b>discrete Morse theory</b></span> to obtain a reduced presentation.

Let $ K $ be a regular CW complex and let $ M $ be an acyclic matching on the cells of K.

>**Theorem (Forman, 1995; Chari 2000)**: $ K $ is homotopy equivalent to a CW complex with exactly one cell of dimension $ p $ for each critical (ie., unmatched) cell of dimension $ p $.

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>
<p>*We can compute a <span style="color:#2EC27E"><b>presentation</b></span> of $\pi_1$ of a CW complex.

***Efficient computation***: Using <span style="color:#2EC27E"><b>discrete Morse theory</b></span> to obtain a reduced presentation.

Let $ K $ be a regular CW complex and let $ M $ be an acyclic matching on the cells of K \
with only one 0-dimensional critic cell.

>**Theorem (Fernández, 2024)**: A presentation $\mathcal P = \langle X \mid R \rangle $ of $ \pi_1(K) $ with
$$\\# X = \\# 1\text{-dim critical cells}$$
$$\\# R = \\# 2\text{-dim critical cells}$$
can be computed with complexity $ \mathcal O (N^2) $, where
$$N = \\# \text{cells in the 2-skeleton of } K.$$

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>
<p>*We can compute a <span style="color:#2EC27E"><b>presentation</b></span> of $\pi_1$ of a CW complex.

***Efficient computation***: Using <span style="color:#2EC27E"><b>discrete Morse theory</b></span> to obtain a reduced presentation.

<img data-id="torus" height=500 src='assets/torus-cw.svg'/>
<div data-id="label">$$ T $$</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>
<p>*We can compute a <span style="color:#2EC27E"><b>presentation</b></span> of $\pi_1$ of a CW complex.

***Efficient computation***: Using <span style="color:#2EC27E"><b>discrete Morse theory</b></span> to obtain a reduced presentation.

<img data-id="torus" height=500 src='assets/tree-torus.svg'/>
<div data-id="label">$$ T $$</div>


---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>
<p>*We can compute a <span style="color:#2EC27E"><b>presentation</b></span> of $\pi_1$ of a CW complex.

***Efficient computation***: Using <span style="color:#2EC27E"><b>discrete Morse theory</b></span> to obtain a reduced presentation.

<img data-id="torus" height=500 src='assets/matching-torus-3.svg'/>
<div data-id="label">$$ T $$</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>
<p>*We can compute a <span style="color:#2EC27E"><b>presentation</b></span> of $\pi_1$ of a CW complex.

***Efficient computation***: Using <span style="color:#2EC27E"><b>discrete Morse theory</b></span> to obtain a reduced presentation.

<img data-id="torus" height=500 src='assets/matching-torus-3.svg'/>
<div data-id="label">$$ T \cong \langle e_2, e_4 \mid e_2^{-1} e_4^{-1} e_2 e_4 \rangle$$</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be computed <u>over a filtration</u>? </h3>
</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <u>persistent</u> <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be computed? </h3>
</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <u>persistent</u> <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <u>persistent</u> <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

Let $ K_\bullet $ be a path-connected based filtration of finite CW-complexes.
<div data-id="d1">
$$
\begin{array}{ccccccc}
K_1 & \xrightarrow{} & K_2 & \xrightarrow{} & \dots \xrightarrow{} & K_n\\
\downarrow & & \downarrow &  &   & \downarrow\\
\pi_1(K_1) & \xrightarrow{} & \pi_1(K_2) & \xrightarrow{} & \dots \xrightarrow{} & \pi_1(K_n)\\
\end{array}
$$
</div>

***Naive computation***: Compute $ \pi_1 $ presentations <span style="color:#2EC27E"><b>independently</b></span> over every element in the filtration.

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <u>persistent</u> <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

Let $ K_\bullet $ be a path-connected based filtration of finite CW-complexes.
<div data-id="d1">
$$
\begin{array}{ccccccc}
K_1 & \xrightarrow{} & K_2 & \xrightarrow{} & \dots \xrightarrow{} & K_n\\
\downarrow & & \downarrow &  &   & \downarrow\\
\pi_1(K_1) & \xrightarrow{} & \pi_1(K_2) & \xrightarrow{} & \dots \xrightarrow{} & \pi_1(K_n)\\
\end{array}
$$
</div>

***Naive computation***: Compute $ \pi_1 $ presentations <span style="color:#2EC27E"><b>independently</b></span> over every element in the filtration.

***Efficient computation***: Perform a <span style="color:#2EC27E"><b>single computation</b></span>  over the whole filtration.

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <u>persistent</u> <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

***Efficient computation***: Perform a <span style="color:#2EC27E"><b>single computation</b></span>  over the whole filtration.

<blockquote>
<b>Theorem (Fernández, O., 2026)</b>: Let $ M_\bullet $ be an acyclic matching with only one 0-dim critical cell over $K_\bullet$. Presentations $ \mathcal P_i = \langle X_i \mid R_i \rangle $ of $ \pi_1(K_i) $ with
<div>
$$
\begin{array}{c}
\# X_i = \# 1\text{-dim critical cells of } K_i, \\
\#R_i = \# 2\text{-dim critical cells of } K_i \\
\end{array}
$$
</div>
and morphisms $ \psi_{i\to j}: \mathcal P_i \to \mathcal P_j $ such that the following commutes 
<div>
$$
\begin{array}{ccc}
K_i & \hookrightarrow{} & K_j \\
\downarrow & & \downarrow \\
\mathcal P_i & \xrightarrow{\psi_{i\to j}} & \mathcal P_j\\
\end{array}
$$
</div>
can be computed in $ \mathcal O(N^2) $, $ N = \#$ cells in the 2-skeleton of $K$.
</blockquote>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <u>persistent</u> <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

***Efficient computation***: Perform a <span style="color:#2EC27E"><b>single computation</b></span>  over the whole filtration.

**SAGE Math implementation**

<pre><code>
    def filtrated_fundamental_group(self, fil, verbose = True):
        S = set()
        R = []
        filtrated_fundamental_group = []
        maps = [[None] * (fil+1) for _ in range(len(self.cells_lists[1]))]

        for f in range(0, fil+1):
            
            for cell in self.filtration_unmatched_2_cells[f]:
                R.append(cell.boundary_cells)

            for cell in self.filtration_matched_1_cells_with_0_cells[f]:
                cell.equivalence = '1'
                maps[cell.count][f] = 1

            for cell in self.filtration_matched_1_cells_with_2_cells[f]:
                gens = cell.matched.boundary_cells[:]
                idx = next((i for i, gen in enumerate(gens) if gen[0].name == cell.name), None)
                if idx is not None:
                    w1 = gens[:idx]
                    w2 = gens[idx+1:]
                    (_, sign) = gens[idx]
                    x = self._invert_word(w1) + self._invert_word(w2)
                    if sign == 1:
                        cell.equivalence = x
                    else: 
                        cell.equivalence = self._invert_word(x)

                maps[cell.count][f] = list(self._iter_flatten(cell.equivalence))

            for cell in set(self.filtration_unmatched_1_cells[f]):
                S.add(cell)
                maps[cell.count][f] = cell.name
                
            S = set([x for x in S if not isinstance(x.equivalence, list)])
            R = [list(self._iter_flatten(item)) for item in R]

            F = FreeGroup(names=S)
            gens = dict(zip([str(s) for s in S], F.gens()))
            relations = [
                prod(gens[str(e)]**Integer(sign) for e, sign in rel)
                for rel in R
            ]
            G = F / relations
            filtrated_fundamental_group.append(G)

            if verbose:
                print(str(f) + ': ' + str(G))
</code></pre>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <u>persistent</u> <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be computed? </h3>
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
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <u>persistent</u> <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be computed? </h3>
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
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <u>persistent</u> <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be computed? </h3>
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
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <u>persistent</u> <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be computed? </h3>
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
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <u>persistent</u> <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be computed? </h3>
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
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <u>persistent</u> <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be computed? </h3>
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
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <u>persistent</u> <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be computed? </h3>
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
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <u>persistent</u> <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div data-id=pp1>
$$ \begin{align*}
  P\pi_1(\mathcal T) &= \langle t_1 \mid - \rangle \rightarrow \langle t_1, t_2 \mid - \rangle \rightarrow \langle t_1, t_2 \mid t_1^{-1} t_2^{-1} t_1 t_2\rangle, \\
  P\pi_1(\mathcal X) &= \langle x_1 \mid - \rangle \rightarrow \langle x_1, x_2 \mid - \rangle \rightarrow \langle x_1, x_2 \mid - \rangle.
\end{align*} $$
</div>

<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can we make <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> barcodes as in $H_*$? </h3>
</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <u>persistent</u> <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div data-id=pp1>
$$ \begin{align*}
  P\pi_1(\mathcal T) &= \langle t_1 \mid - \rangle \rightarrow \langle t_1, t_2 \mid - \rangle \rightarrow \langle t_1, t_2 \mid t_1^{-1} t_2^{-1} t_1 t_2\rangle, \\
  P\pi_1(\mathcal X) &= \langle x_1 \mid - \rangle \rightarrow \langle x_1, x_2 \mid - \rangle \rightarrow \langle x_1, x_2 \mid - \rangle.
\end{align*} $$
</div>

<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can we make <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> barcodes as in $H_*$? </h3>
  <h3><span style="color:#F54927">NO</span>*</h3>
</div>

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <u>persistent</u> <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div data-id=pp1>
$$ \begin{align*}
  P\pi_1(\mathcal T) &= \langle t_1 \mid - \rangle \rightarrow \langle t_1, t_2 \mid - \rangle \rightarrow \langle t_1, t_2 \mid t_1^{-1} t_2^{-1} t_1 t_2\rangle, \\
  P\pi_1(\mathcal X) &= \langle x_1 \mid - \rangle \rightarrow \langle x_1, x_2 \mid - \rangle \rightarrow \langle x_1, x_2 \mid - \rangle.
\end{align*} $$
</div>

<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can we make <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> barcodes as in $H_*$? </h3>
  <h3><span style="color:#F54927">NO</span>*</h3>
</div>

- The groups $ \pi_1(K_\alpha) $ in $ K_\bullet \to P \pi_1(K)_\bullet$
$$
\begin{array}{ccccccc}
\pi_1(K_1) & \xrightarrow{} & \pi_1(K_2) & \xrightarrow{} & \dots \xrightarrow{} & \pi_1(K_n)\\
\end{array}
$$
are generally <span style="color:#F54927">non-abelian</span>.

---

<!-- .slide: data-auto-animate -->
<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be algorithmically computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can <u>persistent</u> <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> be computed? </h3>
  <h3><span style="color:#2EC27E">YES</span>*</h3>
</div>

<div data-id=pp1>
$$ \begin{align*}
  P\pi_1(\mathcal T) &= \langle t_1 \mid - \rangle \rightarrow \langle t_1, t_2 \mid - \rangle \rightarrow \langle t_1, t_2 \mid t_1^{-1} t_2^{-1} t_1 t_2\rangle, \\
  P\pi_1(\mathcal X) &= \langle x_1 \mid - \rangle \rightarrow \langle x_1, x_2 \mid - \rangle \rightarrow \langle x_1, x_2 \mid - \rangle.
\end{align*} $$
</div>

<div style="display:flex; justify-content:center; align-items:baseline; gap:1em;">
  <h3> Can we make <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span> barcodes as in $H_*$? </h3>
  <h3><span style="color:#F54927">NO</span>*</h3>
</div>


- The groups $ \pi_1(K_\alpha) $ in $ K_\bullet \to P \pi_1(K)_\bullet$
$$
\begin{array}{ccccccc}
\pi_1(K_1) & \xrightarrow{} & \pi_1(K_2) & \xrightarrow{} & \dots \xrightarrow{} & \pi_1(K_n)\\
\end{array}
$$
are generally <span style="color:#F54927">non-abelian</span>.

- Finite presentations are <span style="color:#F54927">not group invariants</span> in general.

- Ordinary barcode decompositions do not apply.

---
## IDEA:

### Look for an <span style="color:#2EC27E">abelian invariant</span> of <span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span>

---

<!-- .slide: data-auto-animate -->
### Lower central quotients

---

<!-- .slide: data-auto-animate -->
### Lower central quotients

>**Definition**: The <span style="color:#2EC27E">**lower central series**</span> of a group $ G $ is the descending series of normal subgroups
$$ G = \gamma_1(G) \trianglerighteq \gamma_2(G) \trianglerighteq \dots \trianglerighteq \gamma_n(G) \trianglerighteq \dots $$
where
$$ \gamma_{n+1}(G) = [\gamma_n(G), G] = \langle \{ [h, g] : h \in \gamma_n(G), \ g \in G \}\rangle. $$

---

<!-- .slide: data-auto-animate -->
### Lower central quotients

>**Definition**: The <span style="color:#2EC27E">**lower central series**</span> of a group $ G $ is the descending series of normal subgroups
$$ G = \gamma_1(G) \trianglerighteq \gamma_2(G) \trianglerighteq \dots \trianglerighteq \gamma_n(G) \trianglerighteq \dots $$
where
$$ \gamma_{n+1}(G) = [\gamma_n(G), G] = \langle \{ [h, g] : h \in \gamma_n(G), \ g \in G \}\rangle. $$

>**Definition**: We define the <span style="color:#2EC27E">**$n^\text{th}$-lower central quotient**</span> of $ G $ as
$$ lcq_n(G) := \frac{\gamma_n(G)}{\gamma_{n+1}(G)}. $$

---
<!-- .slide: data-auto-animate -->
### Lower central quotients

<div data-id="l1">
<b>Example</b>: Let $ G = \pi_1(K) $.
</div>

---

<!-- .slide: data-auto-animate -->
### Lower central quotients

<div data-id="l1">
<b>Example</b>: Let $ G = \pi_1(K) $.
</div>
<div data-id="l2">
$$
lcq_1(G) = \frac{G}{[G, G]} \cong H_1(K),
$$
$$
lcq_2(G) = \frac{[G, G]}{[[G, G], G]},
$$
$$
lcq_3(G) = \frac{[[G, G], G]}{[[[G, G], G], G]},
$$
$$
\dots
$$
</div>

---

<!-- .slide: data-auto-animate -->
### Lower central quotients

<div data-id="l1">
<b>Example (Wedge of circles)</b>: Let $ K = \bigvee_n S^1 $, $ G = \pi_1\left(K\right) = F_n $.
</div>
<div data-id="l3">
$$
  lcq_1 (F_n) \cong \mathbb Z^n,
$$
$$
  lcq_2 (F_n) \cong \mathbb Z^{\binom{n}{2}},
$$
$$
  lcq_2 (F_n) \cong \mathbb Z^{n\binom{n}{2} - \binom{n}{3}}.
$$
</div>

---

<!-- .slide: data-auto-animate -->
### Lower central quotients

<div data-id="l1">
<b>Example (Wedge of circles)</b>: Let $ K = \bigvee_n S^1 $, $ G = \pi_1\left(K\right) = F_n $.
</div>
<div data-id="l3">
$$
  lcq_1 (F_n) \cong \mathbb Z^n,
$$
$$
  lcq_2 (F_n) \cong \mathbb Z^{\binom{n}{2}},
$$
$$
  lcq_3 (F_n) \cong \mathbb Z^{n\binom{n}{2} - \binom{n}{3}}.
$$
</div>

>For every $ n $, $ lcq_n(G) $ <span style="color:#2EC27E">is abelian</span>.

---

<!-- .slide: data-auto-animate -->
### Lower central quotients

>For every $ n $, $ lcq_n(G) $ <span style="color:#2EC27E">is abelian</span>.

>For every $ n $, $ lcq_n(G) $ <span style="color:#2EC27E">can be algoritmically computed</span> from a presentation of $ G $.
**(Sims, 1994)**

---

<!-- .slide: data-auto-animate -->
### Lower central quotients

>For every $ n $, $ lcq_n(G) $ <span style="color:#2EC27E">is abelian</span>.

>For every $ n $, $ lcq_n(G) $ <span style="color:#2EC27E">can be algoritmically computed</span> from a presentation of $ G $.
**(Sims, 1994)**

>The <span style="color:#2EC27E">complexity</span> of the computation of $ lcq_n(G) $ depends on the <span style="color:#2EC27E">number of generators and relations</span> of the presentation of $ G $ we are using.

---
<!-- .slide: data-auto-animate -->
### Persistent Lower central quotients

---

<!-- .slide: data-auto-animate -->
### Persistent Lower central quotients

>**Definition**: Let $\mathbb K $ a fixed field. We define the <span style="color:#2EC27E"><b> $\mathbb K $-tensored $n^\text{th}$-lower central quotient </b> </span> as
$$
  lcq_n^{\mathbb K} := lcq_n \otimes_{\mathbb Z} \mathbb K
$$

---

<!-- .slide: data-auto-animate -->
### Persistent lower central quotients

<div data-id="d1">
$$
\begin{array}{ccccccc}
K_1 & \xrightarrow{} & K_2 & \xrightarrow{} & \dots \xrightarrow{} & K_n\\
\downarrow & & \downarrow &  &   & \downarrow\\
\pi_1(K_1) & \xrightarrow{} & \pi_1(K_2) & \xrightarrow{} & \dots \xrightarrow{} & \pi_1(K_n)\\
\downarrow \scriptstyle{\xi_1} & & \downarrow \scriptstyle{\xi_2} &  &   & \downarrow \scriptstyle{\xi_n}\\
lcq_n^{\mathbb K}(\pi_1(K_1)) & \xrightarrow{} & lcq_n^{\mathbb K}(\pi_1(K_2)) & \xrightarrow{} & \dots \xrightarrow{} & lcq_n^{\mathbb K}(\pi_1(K_n))\\
\end{array}
$$
</div>

Here we obtain a functor
<div>
$$
  \begin{align*}
    \xi_\alpha : &\bold{Grp} \to \bold{Vect}_{\mathbb K} \\
    & G \mapsto \frac{\gamma_n(G)}{\gamma_{n+1}(G)} \otimes_{\mathbb Z} \mathbb K
  \end{align*}
$$
</div>


---

<!-- .slide: data-auto-animate -->
### Persistent lower central quotients
<div data-id="o">
Every $ lcq_n(\pi_1(K_\alpha)) $ is abelian so
$$
\begin{array}{ccccccc}
lcq_n^{\mathbb K}(\pi_1(K_1)) & \xrightarrow{} & lcq_n^{\mathbb K}(\pi_1(K_2)) & \xrightarrow{} & \dots \xrightarrow{} & lcq_n^{\mathbb K}(\pi_1(K_n))\\
\end{array}
$$
is a <span style="color:#2EC27E"><b>persistent module</b></span> over the field $ \mathbb K $ (ie. a graded $ \mathbb K [t] $-module).
</div>

---

<!-- .slide: data-auto-animate -->
### Persistent lower central quotients

<div data-id="o">
Every $ lcq_n(\pi_1(K_\alpha)) $ is abelian so
$$
\begin{array}{ccccccc}
lcq_n^{\mathbb K}(\pi_1(K_1)) & \xrightarrow{} & lcq_n^{\mathbb K}(\pi_1(K_2)) & \xrightarrow{} & \dots \xrightarrow{} & lcq_n^{\mathbb K}(\pi_1(K_n))\\
\end{array}
$$
is a <span style="color:#2EC27E"><b>persistent module</b></span> over the field $ \mathbb K $ (ie. a graded $ \mathbb K [t] $-module).
</div>

>We can compute <span style="color:#2EC27E"><b>barcodes</b></span>.
**(Skraba & Vejdemo-Johansson, 2013)**

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
  \downarrow\scriptstyle{lcq_2^{\mathbb K}} & & \downarrow\scriptstyle{lcq_2^{\mathbb K}} & & \downarrow\scriptstyle{lcq_2^{\mathbb K}} \\
  0 & \xrightarrow{} & \mathbb K & \xrightarrow{} & 0\\
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
  \downarrow\scriptstyle{lcq_2^{\mathbb K}} & & \downarrow\scriptstyle{lcq_2^{\mathbb K}} &  & \downarrow\scriptstyle{lcq_2^{\mathbb K}} \\
  0 & \xrightarrow{} & \mathbb K  & \xrightarrow{} & \mathbb K\\
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
  Unlinked rings
  <span data-id="u">$\mathcal U$:</span>
  <img src='assets/unlink-3.svg'/>
  <span data-id="arrow1">$\rightarrow$</span>
  <img src='assets/unlink-2.svg'/>
  <span data-id="arrow2">$\rightarrow$</span>
  <img src='assets/unlink-1.svg'/>
</div>

<div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
  Linked rings
  <span data-id="l">$\mathcal L$:</span>
  <img src='assets/link-3.svg'/>
  <span data-id="arrow1">$\rightarrow$</span>
  <img src='assets/link-2.svg'/>
  <span data-id="arrow2">$\rightarrow$</span>
  <img src='assets/link-1.svg'/>
</div>

<div style="display:flex; align-items:center; justify-content:center; gap:0.5em;">
  Baromean rings
  <span data-id="r">$\mathcal R$:</span>
  <img src='assets/borromean-3.svg'/>
  <span data-id="arrow1">$\rightarrow$</span>
  <img src='assets/borromean-2.svg'/>
  <span data-id="arrow2">$\rightarrow$</span>
  <img src='assets/borromean-1.svg'/>
</div>

---

<!-- .slide: data-auto-animate -->

**Example:** $lcq_n$ barcodes of links. **(<span style="text-transform:none; font-size: 1.4em;">$\pi_1$</span>)**

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

**Example:** $lcq_n$ barcodes of links. **($lcq_1^{\mathbb K}$)**

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
      \mathbb K^3 & \xrightarrow{} & \mathbb K^2 & \xrightarrow{} & \mathbb K\\
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
      \mathbb K^3 & \xrightarrow{} & \mathbb K^2 & \xrightarrow{} & \mathbb K\\
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
    \mathbb K^3 & \xrightarrow{} & \mathbb K^2 & \xrightarrow{} & \mathbb K\\
    \end{array}
    $$
  </div>
</div>

---

<!-- .slide: data-auto-animate -->
**Example:** $lcq_n$ barcodes of links. **($lcq_1^{\mathbb K}$)**

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

**Example:** $lcq_n$ barcodes of links. **($lcq_2^{\mathbb K}$)**

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
      \downarrow\scriptstyle{lcq_2^{\mathbb K}} & & \downarrow\scriptstyle{lcq_2^{\mathbb K}} &  & \downarrow\scriptstyle{lcq_2^{\mathbb K}} \\
      \mathbb K^3 & \xrightarrow{} & \mathbb K & \xrightarrow{} & 0\\
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
    \downarrow\scriptstyle{lcq_2^{\mathbb K}} & & \downarrow\scriptstyle{lcq_2^{\mathbb K}} &  & \downarrow\scriptstyle{lcq_2^{\mathbb K}} \\
    \mathbb K & \xrightarrow{} & 0 & \xrightarrow{} & 0\\
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
    \downarrow\scriptstyle{lcq_2^{\mathbb K}} & & \downarrow\scriptstyle{lcq_2^{\mathbb K}} &  & \downarrow\scriptstyle{lcq_2^{\mathbb K}} \\
    \mathbb K^3 & \xrightarrow{} & \mathbb K & \xrightarrow{} & 0\\
    \end{array}
    $$
  </div>
</div>

---

<!-- .slide: data-auto-animate -->
**Example:** $lcq_n$ barcodes of links. **($lcq_2^{\mathbb K}$)**

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
**Example:** $lcq_n$ barcodes of links. **($lcq_3^{\mathbb K}$)**

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
      \downarrow\scriptstyle{lcq_3^{\mathbb K}} & & \downarrow\scriptstyle{lcq_3^{\mathbb K}} &  & \downarrow\scriptstyle{lcq_3^{\mathbb K}} \\
      \mathbb K^8 & \xrightarrow{} & \mathbb K^2 & \xrightarrow{} & 0\\
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
      \downarrow\scriptstyle{lcq_3^{\mathbb K}} & & \downarrow\scriptstyle{lcq_3^{\mathbb K}} &  & \downarrow\scriptstyle{lcq_3^{\mathbb K}} \\
      \mathbb K^2 & \xrightarrow{} & 0 & \xrightarrow{} & 0\\
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
    \downarrow\scriptstyle{lcq_3^{\mathbb K}} & & \downarrow\scriptstyle{lcq_3^{\mathbb K}} &  & \downarrow\scriptstyle{lcq_3^{\mathbb K}} \\
    \mathbb K^6 & \xrightarrow{} & \mathbb K^2 & \xrightarrow{} & 0\\
    \end{array}
    $$
  </div>
</div>

---

<!-- .slide: data-auto-animate -->
**Example:** $lcq_n$ barcodes of links. **($lcq_3^{\mathbb K}$)**

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
    local nq, lcs;
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
### Summary
- <span style="color:#2EC27E"><b>$ PH_* $ has limitations</b></span> to distinguish certain kinds of filtrations.

---

<!-- .slide: data-auto-animate -->
### Summary
- <span style="color:#2EC27E"><b>$ PH_* $ has limitations</b></span> to distinguish certain kinds of filtrations.
  
- We have design an <span style="color:#2EC27E"><b> eficient algorithm to compute $P\pi_1$</b></span> presentations.

---

<!-- .slide: data-auto-animate -->
### Summary
- <span style="color:#2EC27E"><b>$ PH_* $ has limitations</b></span> to distinguish certain kinds of filtrations.
  
- We have design an <span style="color:#2EC27E"><b> eficient algorithm to compute $P\pi_1$</b></span> presentations.
  
- We found a way of <span style="color:#2EC27E"><b>computing $P\pi_1$ barcodes</b></span> using $ lcq_n $.

---

<!-- .slide: data-auto-animate -->
### Ongoing and future work

- Look for a computationally <span style="color:#2EC27E"><b>efficient algorithm to compute $ lcq_n(G) $</b></span>.

---

<!-- .slide: data-auto-animate -->
### Ongoing and future work

- Look for a computationally <span style="color:#2EC27E"><b>efficient algorithm to compute $ lcq_n(G) $</b></span>.

- Apply the methods to <span style="color:#2EC27E"><b>metric spaces</b></span> and <span style="color:#2EC27E"><b>real data</b></span>.

---

<!-- .slide: data-auto-animate -->
### Ongoing and future work

- Look for a computationally <span style="color:#2EC27E"><b>efficient algorithm to compute $ lcq_n(G) $</b></span>.

- Apply the methods to <span style="color:#2EC27E"><b>metric spaces</b></span> and <span style="color:#2EC27E"><b>real data</b></span>.

- Explore for <span style="color:#2EC27E"><b>abelian invariants</b></span> beyond $ lcq_n $.

---

### References

- <span style="color:#2EC27E"><b>Robin Forman</b></span>. Morse theory for cell complexes. *Advances in Mathathematics*, 1998.

- <span style="color:#2EC27E"><b>Ximena Fernández</b></span>. Morse theory for group presentations. *Transactions of the American Mathematical Society*, 2024.

- <span style="color:#2EC27E"><b>Charles C. Sims</b></span>. Computation with finitely presented groups. *Cambridge University Press*, 1994.

- <span style="color:#2EC27E"><b>Primoz Skraba</b></span> and <span style="color:#2EC27E"><b>Mikael Vejdemo-Johansson</b></span>. Persistence modules: Algebra and algorithms.
  *Mathematics of Computation*, 2013.

- <span style="color:#2EC27E"><b>Werner Nickel</b></span>. A gap 4 package computing nilpotent factor groups of finitely presented groups. *GAP 4 Package*, 2007.
