import { merge } from "./src/merge";

function runCase(name: string, c1: number[], c2: number[], c3: number[]) {
  const result = merge(c1, c2, c3);
  console.log(name, ":", JSON.stringify(result));
}

runCase("normal case", [1,4,7],[9,6,3],[2,5,8]);

runCase("all empty", [],[],[]);

runCase("two empty one filled", [1,2,3],[],[]);

runCase("one empty middle", [],[3,2,1],[4,5,6]);

runCase("duplicates across arrays", [1,2],[3,2],[2,4]);

runCase("already sorted inputs", [1,3,5],[6,4,2],[7,8,9]);

runCase("negative numbers", [-3,-1],[2,0,-2],[-5,-4]);

runCase("different sizes", [1], [100,50,25],[2,3,4,5,6]);

runCase("single elements", [3],[2],[1]);

runCase("large range",[1,3,5,7,9],[10,8,6,4,2],[0,11,12,13]);