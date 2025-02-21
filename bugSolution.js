```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct conditional rendering logic
    document.title = count > 0 ? `Count: ${count}` : 'Count: 0'; // Always update the title 
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button> 
    </div>
  );
}
```