import Swal from 'sweetalert2';
import { useStore } from './store';

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        'http://127.0.0.1:8000/pipelines/parse',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nodes,
            edges,
          }),
        }
      );

      const data = await response.json();

      Swal.fire({
        title: 'Pipeline Analysis',
        html: `
          <div style="text-align:left">
            <p><strong>Total Nodes:</strong> ${data.num_nodes}</p>
            <p><strong>Total Edges:</strong> ${data.num_edges}</p>
            <p>
              <strong>Valid DAG:</strong>
              ${data.is_dag ? '✅ Yes' : '❌ No'}
            </p>
          </div>
        `,
        icon: data.is_dag ? 'success' : 'warning',
        confirmButtonText: 'Close',
        confirmButtonColor: '#2563EB',
      });
    } catch (error) {
      console.error(error);

      Swal.fire({
        title: 'Connection Error',
        text: 'Failed to connect to the backend server.',
        icon: 'error',
        confirmButtonColor: '#DC2626',
      });
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
      <button onClick={handleSubmit}>
        Submit Pipeline
      </button>
    </div>
  );
};