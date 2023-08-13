import coding from '../images/preparation.png'
import fullStack from '../images/fullStack.png'
import AI from '../images/ai.png'
import sd from '../images/sd.png'
import ratInMaze from '../images/ratinmaze.PNG'
import ratInMazeTree from '../images/rat-in-maze-tree.PNG'


export const homeCourseData =[
    {id:1, name:"Programming", desc:'Data Structure & Algorithm', imageSrc:coding,link:'/cources/dsa'},
    {id:2, name:"Full-Stack ", desc:'Front-end & Backend', imageSrc:fullStack,link:'/cources/Full-Stack'},
    {id:4, name:"System Design ", desc:'Data science, Machine Learning ', imageSrc:sd,link:'/cources/System-Design'},
    {id:4, name:"AI ", desc:'Data science, Machine Learning ', imageSrc:AI ,link:'/cources/AI-ml'},
]

export const topicIndex=[
    {
        "dsa":1,
        python:0,
        preparation:2
    }
]

export const getIndex = (subject ) =>{
    switch(subject){
        case "problems":
            return 2
        case "python":
            return 0
    }
}

export const navBarList = [
    {
      _id: 1001,
      title: "DSA Sheet",
      link: "/dsa-sheet",
    },
    {
      _id: 1002,
      title: "Courses",
      link: "/paidcourse",
    },
    
    {
      _id: 1004,
      title: "Practice",
      link: "/practice",
    },
    {
      _id: 1005,
      title: "Internship",
      link: "/internship",
    },
   
    
  ];

  export const courceMaping={
    1:"python",
    2:"DSA",
    3:"System Design",
    4:"Dsa sheet"
  }

  // src/dsaTopics.js

// src/dsaTopics.js
// src/dsaTopics.js
const dsaTopics = [
  {
    title: 'Arrays',
    description: 'Learn about arrays and their operations.',
    questions: [
      'Two-Sum',
      'How to reverse an array in-place?',
      'How to merge two sorted arrays?',
      'How to find the second smallest element in an array?',
      // Add more important questions for the 'Arrays' topic
    ],
  },
  {
    title: 'Linked Lists',
    description: 'Explore linked list data structure.',
    questions: [
      'How to find the middle element of a linked list?',
      'How to reverse a linked list?',
      'How to detect if there is a cycle in a linked list?',
      'How to find the intersection point of two linked lists?',
      // Add more important questions for the 'Linked Lists' topic
    ],
  },
  {
    title: 'Stacks',
    description: 'Learn how stacks work and their applications.',
    questions: [
      'How to implement a stack using an array?',
      'How to convert an infix expression to a postfix expression?',
      'How to check balanced parentheses using a stack?',
      'How to reverse a string using a stack?',
      // Add more important questions for the 'Stacks' topic
    ],
  },
  {
    title: 'Queues',
    description: 'Explore the queue data structure.',
    questions: [
      'How to implement a queue using an array?',
      'How to implement a queue using two stacks?',
      'How to find the maximum element in a sliding window of a given array?',
      'How to design a circular queue?',
      // Add more important questions for the 'Queues' topic
    ],
  },
  {
    title: 'Trees',
    description: 'Study various types of trees and their properties.',
    questions: [
      'How to perform an in-order traversal of a binary tree?',
      'How to find the height of a binary tree?',
      'How to check if a binary tree is a BST?',
      'How to find the lowest common ancestor (LCA) of two nodes in a binary tree?',
      // Add more important questions for the 'Trees' topic
    ],
  },
  
  {
    title: 'Backtracking',
    description: 'Study various types of trees and their properties.',
    questions: [
      'Rat in maze',
      'N-Queens',
      'How to check if a binary tree is a BST?',
      'How to find the lowest common ancestor (LCA) of two nodes in a binary tree?',
      // Add more important questions for the 'Trees' topic
    ],
  },
  {
    title: 'Binary Search Trees (BST)',
    description: 'Learn about binary search trees and their operations.',
    questions: [
      'How to insert a node into a binary search tree?',
      'How to delete a node from a binary search tree?',
      'How to find the kth smallest element in a BST?',
      'How to check if a given binary tree is a valid BST?',
      // Add more important questions for the 'Binary Search Trees (BST)' topic
    ],
  },
  {
    title: 'AVL Trees',
    description: 'Study self-balancing AVL trees and their algorithms.',
    questions: [
      'How to perform rotation operations in an AVL tree?',
      'How to insert a node into an AVL tree?',
      'How to delete a node from an AVL tree?',
      'How to find the height difference between left and right subtrees of an AVL tree?',
      // Add more important questions for the 'AVL Trees' topic
    ],
  },
  {
    title: 'Heaps',
    description: 'Explore binary heaps and their applications.',
    questions: [
      'How to implement a max heap and a min heap?',
      'How to find the kth largest element in an array using a min heap?',
      'How to merge K sorted arrays using a heap?',
      'How to perform heap sort?',
      // Add more important questions for the 'Heaps' topic
    ],
  },
  {
    title: 'Hash Tables',
    description: 'Learn about hash tables and their implementations.',
    questions: [
      'How to implement a hash table using separate chaining?',
      'How to handle collisions in a hash table?',
      'How to find if there are two numbers in an array that sum up to a given target?',
      'How to design a hash map with put, get, and remove operations?',
      // Add more important questions for the 'Hash Tables' topic
    ],
  },
  {
    title: 'Graphs',
    description: 'Study graph data structure and graph algorithms.',
    questions: [
      'How to perform depth-first search (DFS) on a graph?',
      'How to perform breadth-first search (BFS) on a graph?',
      'How to find if there is a path between two nodes in a graph?',
      'How to find the shortest path in a weighted graph using Dijkstra\'s algorithm?',
      // Add more important questions for the 'Graphs' topic
    ],
  },
  {
    title: 'Trie',
    description: 'Explore the trie data structure and its applications.',
    questions: [
      'How to insert a word into a trie?',
      'How to search for a word in a trie?',
      'How to find all words with a given prefix in a trie?',
      'How to implement an autocomplete feature using a trie?',
      // Add more important questions for the 'Trie' topic
    ],
  },
  {
    title: 'Disjoint Set (Union-Find)',
    description: 'Learn about disjoint set data structure and operations.',
    questions: [
      'How to implement the union and find operations in a disjoint set?',
      'How to check if two elements are in the same set?',
      'How to find the number of connected components in a graph using a disjoint set?',
      'How to detect cycles in an undirected graph using a disjoint set?',
      // Add more important questions for the 'Disjoint Set (Union-Find)' topic
    ],
  },
  {
    title: 'Segment Trees',
    description: 'Study segment trees and their applications in range queries.',
    questions: [
      'How to construct a segment tree from an array?',
      'How to find the sum of elements in a given range using a segment tree?',
      'How to perform range updates in a segment tree?',
      'How to find the minimum or maximum element in a given range using a segment tree?',
      // Add more important questions for the 'Segment Trees' topic
    ],
  },
  {
    title: 'Fenwick Trees (Binary Indexed Trees)',
    description: 'Explore Fenwick trees for efficient prefix sum calculations.',
    questions: [
      'How to construct a Fenwick tree from an array?',
      'How to find the sum of elements up to a given index in an array using a Fenwick tree?',
      'How to perform range updates in a Fenwick tree?',
      'How to find the number of inversions in an array using a Fenwick tree?',
      // Add more important questions for the 'Fenwick Trees (Binary Indexed Trees)' topic
    ],
  },
  {
    title: 'Skip Lists',
    description: 'Learn about skip lists and their use in fast searching.',
    questions: [
      'How to insert an element into a skip list?',
      'How to search for an element in a skip list?',
      'How to perform range queries in a skip list?',
      'How to delete an element from a skip list?',
      // Add more important questions for the 'Skip Lists' topic
    ],
  },
  {
    title: 'Bloom Filters',
    description: 'Study Bloom filters and their applications in probabilistic data structures.',
    questions: [
      'How to add an element to a Bloom filter?',
      'How to check if an element is present in a Bloom filter?',
      'How to handle false positives in a Bloom filter?',
      'How to design a Bloom filter for a given false positive rate?',
      // Add more important questions for the 'Bloom Filters' topic
    ],
  },
  // Add more topics with questions as needed
];

export default dsaTopics;

// problemsData.js

// problemsData.js



