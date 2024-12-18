**Inventory Management System**  
The Inventory Management System is a comprehensive solution designed to help businesses efficiently track and manage their stock levels, orders, sales, and deliveries. By integrating advanced client and server technologies, the system offers real-time inventory monitoring and control to enhance operational efficiency and accuracy.

### Key Features:
- **Real-Time Inventory Tracking**  
  Continuously monitor stock levels to avoid overstocking or stock shortages.
  
- **Order Management**  
  Seamlessly handle purchase and sales orders with accurate and timely processing.
  
- **Reporting and Analytics**  
  Generate detailed reports and insights to evaluate inventory performance and support data-driven decision-making.
  
- **User Authentication and Authorization**  
  Secure access with role-based permissions to ensure data protection and controlled system usage.

### Why Choose This System?  
Built with modern web technologies, this Inventory Management System is designed to:
- Streamline operational workflows.
- Minimize manual errors.
- Enhance productivity for businesses of all sizes.

This solution is ideal for organizations looking to optimize their inventory processes while gaining actionable insights through robust analytics and reporting tools.

### Images
![image](https://github.com/user-attachments/assets/03604059-9314-47bb-a572-3885fd494177)

### Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (Latest LTS recommended)
- **npm** or **yarn** (Comes with Node.js)
- **Prisma CLI** (Optional, but useful for managing the database schema)
- **PostgreSQL/MySQL** or the database specified in `schema.prisma` for Prisma

---

### Steps to Install and Run

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ismailcankaratas/inventory-management.git
   cd inventory-management
   ```

2. **Install Client Dependencies**:
   Navigate to the `client` directory and install the dependencies.
   ```bash
   cd client
   npm install
   ```
   Or, if you are using `yarn`:
   ```bash
   yarn install
   ```

3. **Install Server Dependencies**:
   Navigate to the `server` directory and install the dependencies.
   ```bash
   cd ../server
   npm install
   ```
   Or:
   ```bash
   yarn install
   ```

4. **Set Up Environment Variables**:
   - Copy the example `.env.example` file in the `server` directory and rename it to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Edit the `.env` file to include your database connection URL and any other required variables.

5. **Set Up Prisma Database**:
   - Run the Prisma migrations to set up the database schema:
     ```bash
     npx prisma migrate dev
     ```
   - (Optional) Seed the database with initial data:
     ```bash
     npx prisma db seed
     ```

6. **Run the Server**:
   Start the server by navigating to the `server` directory:
   ```bash
   npm run dev
   ```
   Or:
   ```bash
   yarn dev
   ```

7. **Run the Client**:
   Open another terminal window, navigate to the `client` directory, and start the Next.js application:
   ```bash
   npm run dev
   ```
   Or:
   ```bash
   yarn dev
   ```

8. **Access the Application**:
   - The client application should now be running at `http://localhost:3000`.
   - The API server should be running at `http://localhost:<server-port>` (check the port defined in the `.env` file).

---

### Additional Notes:
- **Development Scripts**:
  - Use `npm run lint` in the `client` directory to check for linting issues.
  - Use `npm run build` in both `client` and `server` directories for production builds.
- **Tailwind Configuration**:
  - Tailwind is configured in `tailwind.config.ts` in the `client` folder. You can customize styles as needed.

Let me know if you encounter any issues!

## Contact

For any questions or feedback, please contact [İsmail Can Karataş](https://www.linkedin.com/in/ismailcankaratas/). 
