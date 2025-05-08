import { useState } from "react";


export function Counter() {
  const [count, setCount] = useState(0); // initialize state to 0

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export const LikeButton = () => {


    const [likes, setLike] = useState(0)
    return (
        <>
            <h3>Likes: {likes}</h3>
            <button onClick={() => setLike(likes + 1)}>"👍 Like"</button>
        
        </>
    )

}