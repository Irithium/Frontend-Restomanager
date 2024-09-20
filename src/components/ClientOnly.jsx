import { useEffect, useState } from "react";

// Defining a functional component named ClientOnly
function ClientOnly({ children }) {
  // Creating a state variable
  const [hasMounted, setHasMounted] = useState(false);

  // Using the useEffect hook to set hasMounted to true when the component mounts
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // If HasMounted is false, return null
  if (!hasMounted) {
    return null;
  }

  // Else, return the children component
  else return <>{children}</>;
}

export default ClientOnly;
