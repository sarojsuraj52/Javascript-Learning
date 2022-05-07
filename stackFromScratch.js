class Stack{
    static maxSize;
    static stackArray = [];
    static top;
    constructor(s){
        Stack.maxSize = s;
        Stack.stackArray.length = Stack.maxSize;
        Stack.top = -1;
    }
    push(j){
        return Stack.stackArray[++Stack.top] = j;
    }

    pop(){
        return Stack.stackArray[Stack.top--];
    }
    peek(){
        return Stack.stackArray[Stack.top];
    }
    isEmpty(){
        if(Stack.top == -1) return true
        else return false
    }
    isFull(){
        if(Stack.top == Stack.maxSize - 1) return true
        else return false
    }
}

let myStack = new Stack(5);
myStack.push(10)
myStack.push(20)
myStack.push(30)
myStack.push(40)
myStack.push(50)
// myStack.pop()
console.log(myStack.isEmpty())
console.log(myStack.isFull())
while(!myStack.isEmpty()){
    let value = myStack.pop()
    console.log(value + ' ')
}