class OrderedLinkedList extends LinkedList {
    constructor() {
        super()
    }
    append(value) {
        const newNode = new Node(value)
        if (this.head == null) {
            return super.append(value)
       }
       else{ 
       let i= this.head;
        while (i.next != null) {
            i = i.next
        }
        i.next = newNode 
        let index = this.head 
        let current = null,prev = null 
        while (index != null) {
            current = index.next 
            while (current != null) {
                if ((index.content) > (current.content)) {
                    prev = index.content 			
                    index.content = current.content 	
                    current.content = prev 			
                }
                current = current.next
            }
            index = index.next 	
        }
       }
    }
    insert(position, value) {
        this.append(value)
        throw new Error("Não é permitido inserir na posição em listas ordenadas")
    }
}