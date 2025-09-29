import React, { useState } from 'react';
import { evaluateEV } from './solver';

export default function App() {
  const [ev, setEv] = useState<number | null>(null);

  function handleCompute() {
    const value = evaluateEV();
    setEv(value);
  }

  return (
    <div style={{ maxWidth: 640, margin: '0 auto', padding: '1rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Progressive Pineapple OFC Solver
      </h1>
      <p style={{ marginBottom: '1rem' }}>
        This prototype provides a minimal front‑end for experimenting with a Progressive Pineapple solver. The solver
        logic is currently a placeholder — extend it in <code>src/solver.ts</code> to perform real EV calculations.
      </p>
      <button
        style={{ padding: '0.5rem 1rem', border: '1px solid #ccc', borderRadius: 4, cursor: 'pointer' }}
        onClick={handleCompute}
      >
        Compute Sample EV
      </button>
      {ev !== null && (
        <p style={{ marginTop: '1rem' }}>
          Sample expected value: <strong>{ev.toFixed(2)}</strong>
        </p>
      )}
    </div>
  );
}