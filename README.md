# Moove - Micromobility System in TypeScript

## 📌 Project Description

This project aims to develop a **TypeScript-based system** that models the organizational structure of **Moove**, an innovative **shared micromobility service**, focusing on the interactions between **users**, **transportation vehicles**, and **served cities**.

Through the definition of **interfaces** and **classes** representing the main components of the system (`IMezzo`, `IUtente`, `ICitta`), the project demonstrates how technology can support operational efficiency and the expansion of urban mobility services, providing a **scalable and modular platform**.

The main goal is to simulate a real vehicle booking system (bikes, scooters, and e-scooters) using **Object-Oriented Programming (OOP)** principles in TypeScript.

---

## 🧠 Main Features

* User creation
* Micromobility vehicle creation
* City creation
* Assigning vehicles to cities
* Vehicle booking by users
* Vehicle status control (Available / In Use)
* Error handling when a vehicle is already in use
* Modular structure with interfaces and classes

---

## 🏗️ Project Structure

```
src/
│
├── domain/
│   └── types.ts
│
├── models/
│   ├── mezzo.ts
│   ├── utente.ts
│   └── citta.ts
│
└── index.ts
```

### 📂 domain

Contains the main **interfaces** and **enums**:

* TipoMezzo
* Stato
* IMezzo
* IUtente
* ICitta

---

### 📂 models

Contains the **concrete classes**:

* `Mezzo`
* `Utente`
* `Citta`

Each class implements its corresponding interface.

---

### 📂 index.ts

Main file that:

* creates users
* creates cities
* creates vehicles
* assigns vehicles to cities
* simulates bookings

---

## ⚙️ Technologies Used

* TypeScript
* Node.js
* OOP (Object Oriented Programming)
* ES Modules
* Console logging

---

## 📊 Example Output

```
bike id:#MIL-BICI-001 added to Milan
scooter id:#MIL-SCOOTER-001 added to Milan
e-scooter id:#MIL-MONOPATTINO-001 added to Milan

Vehicle "bike" (MIL-BICI-001) assigned to Giorgio Leopardi.
Sorry Cristina Colombo, the vehicle "bike" is currently not available.
Vehicle "scooter" (PERUGIA-SCOOTER-001) assigned to Matteo Miglio.
Vehicle "e-scooter" (NAP-MONOPATTINO-001) assigned to Pierino Leonardi.
```

---

## 🧩 Architecture

The project follows a structured approach based on:

* Interfaces to define contracts
* Classes to implement logic
* Separation between domain and models
* Modular code organization

### Relationships

* A **User** can book a **Vehicle**
* A **Vehicle** can be assigned to only one **User**
* A **City** contains multiple **Vehicles**

---

## 🎯 Learning Objective

This project was developed to:

* learn TypeScript
* understand interfaces
* apply OOP principles
* organize a real project structure
* simulate a micromobility system
* prepare for full stack development

---

## 👨‍💻 Author

**Peng Wang**

Project developed for educational and portfolio purposes.


You are free to use, modify, and distribute this project.
