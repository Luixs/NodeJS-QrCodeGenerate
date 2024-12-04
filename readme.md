# 🔐 QR Code and Password Generator via Terminal 🔐

![Node.js](https://img.shields.io/badge/Node.js-v20.11+-green?style=flat&logo=node.js) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=flat&logo=javascript) ![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=flat)

A utility package developed in **Node.js** to generate **QR Code** and password directly in the terminal. 💻  

> Based on the "DIO" NodeJs course, by Felipão, with improvements implemented for a more automated dynamic system

---

## 🔧 Features 

- **QR Code Generator:**  
  - Create QR Codes in the terminal using the package **qrcode-terminal**.  
- **Dynamic Password Generation:**  
  - Passwords are generated based on rules defined in the '.env' file, using the concept of **Feature Flags**.  
- **Terminal Interface:**  
  - Simplefied user interaction with the library **prompt**.  
- **Personalized Terminal:**  
  - Stylized outputs using **chalk** for an enhanced visual experience.

---

## 🎮 Demonstration

When you run the project, you will see:
1️⃣ An interactive menu requesting the type of generation

---

## 📂 Estrutura do Projeto 

```plaintext
📦 qr-code-generate
├── 📁src
│   └── index.js                       
|       📁 config
│       └───── prompt-schemas.js       #qrcode-terminal schemas
|       📁 services
│       └───── 📁 password
│       |       └─ create.js           
│       |       └─ handlePw.js         
│       └───── 📁 qr-code
│               └─ create.js
│               └─ handleQr.js 
├── package.json               
└── README.md                  
