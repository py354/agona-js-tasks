// 1 задача
class Node {
    constructor(value) {
        this.value = value
        this.childs = [];
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    // поиск в глубину
    dfs(value, current = this.root) {
        if (current === null) {
            return false;
        }

        console.log(current.value);
        if (current.value === value) {
            return true
        }

        for (let child of current.childs) {
            if (this.dfs(value, child)) {
                return true
            }
        }

        return false;
    }

    bfs(value) {
        if (this.root === null) {
            return false;
        }

        let queue = [this.root];
        while (queue.length) {
            let node = queue.shift();
            queue.push(...node.childs);

            console.log(node.value);
            if (node.value === value) {
                return true;
            }
        }

        return false;
    }

}


// создаем дерево
let t = new Tree();
t.root = new Node(1);
t.root.childs.push(new Node(11));

console.log(t);

t.root.childs[0].childs.push(new Node(111));
t.root.childs[0].childs.push(new Node(112));
t.root.childs[0].childs.push(new Node(113));

t.root.childs.push(new Node(12));

t.root.childs.push(new Node(13));
t.root.childs[2].childs.push(new Node(131));
t.root.childs[2].childs.push(new Node(132));

//                 ╭─╮
//                 │1│
//                 ╰┬╯
//         ╭────────┴──┬────────╮
//       ╭─┴╮        ╭─┴╮     ╭─┴╮
//       │11│        │12│     │13│
//       ╰─┬╯        ╰──╯     ╰─┬╯
//   ╭─────┼─────╮           ╭──┴──╮
// ╭─┴─╮ ╭─┴─╮ ╭─┴─╮       ╭─┴─╮ ╭─┴─╮
// │111│ │112│ │113│       │131│ │132│
// ╰───╯ ╰───╯ ╰───╯       ╰───╯ ╰───╯

console.log("обход в глубину");
console.log(t.dfs(1000));

console.log("обход в ширину");
console.log(t.bfs(1000));




