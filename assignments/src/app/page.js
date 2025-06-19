
import Link from "next/link";





export default function HomePage() {
  

  return (
    <main style={styles.container}>
      <ul>
      <li>
        <Link href="/Assignment-1" style={styles.heading}>Assignment-1</Link>
      </li>

      </ul>
    </main>
      
    
    
  );
}

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    marginBottom: '1rem',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  button: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#0070f3',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    width: 'fit-content',
  },
};

