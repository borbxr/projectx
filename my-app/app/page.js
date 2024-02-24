import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p>
        Write a Python function that takes an integer as input and returns the sum of its digits. For example, if the input is 123, the output should be 6 (1 + 2 + 3).
        </p>
        <br />
          <code className="font-mono font-bold">
          def sum_of_digits(n):<br/>
           return sum(int(digit) for digit in str(n))<br/>

          # Test the function<br/>
          print(sum_of_digits(123)) <br/> 
          # Output: 6
          </code>

          <p>
          Write a Python function that takes a string as input and returns the reversed string. For example, if the input is "hello", the output should be "olleh".
          </p>
      
          <code className="font-mono font-bold">
          def sum_of_digits(n):<br/>
           return sum(int(digit) for digit in str(n))<br/>

          # Test the function<br/>
          print(sum_of_digits(123)) <br/> 
          # Output: 6
          </code>

      
      </div>
    </main>
  );
}
