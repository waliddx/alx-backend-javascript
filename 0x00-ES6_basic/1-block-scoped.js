export default function taskBlock(trueOrFalse) {
"modify the variables inside the function taskBlock so that the variables aren't overwritten inside the conditional block"
 
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}
