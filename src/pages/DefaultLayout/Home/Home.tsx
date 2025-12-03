import { useGetCommentListQuery } from "@/features/comment/comment";
import { incrementByAmount } from "@/features/counter/counterSlice";
console.log(incrementByAmount({ number1: 5, number2: 2 }));
function Home() {
  const product = useGetCommentListQuery("");
  console.log("🚀 ~ product ~ product:", product)
  return (
    <>
    
    </>
  );
}

export default Home;
