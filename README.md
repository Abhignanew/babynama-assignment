# Babynama - Frontend Developer Intern Assignment

Welcome to the Babynama internship assignment! This short project is designed to simulate a real-world task and help us understand your skills and thought process.

**Objective:** Build a small, self-contained feature in Next.js.  
**Time Allotment:** 2-4 hours.

---

### **Part 1: Getting Started & The Task**

1.  **Repository Setup:** You have already created a repository from this template. Now, install the dependencies:
    ```bash
    npm install
    ```
2.  **The User Story:** Your goal is to implement the following feature:
    > "As a busy parent exploring Babynama's resources, I want to see a simple, clear list of upcoming live webinars on a dedicated page so I can quickly see what's available."

3.  **Your Implementation Tasks:**
    * **Create a Page:** Build a new page at the `/webinars` route.
    * **Display Data:** You don't need an API. Create a mock data array directly in your page file. The array should contain at least three webinar objects, each with an `id`, `title`, `speaker` (e.g., "Dr. Sumitra Meena"), and `date`. Render this data as a list of styled cards on the `/webinars` page.
    * **Add Interactivity:** Add a "View Details" button to each card. When clicked, it should log the `id` of that webinar to the browser's console (e.g., `console.log("Viewing details for webinar ID: 3")`).

---

### **Part 2: Submission**

After you've finished coding, please complete the following two steps.

1.  **Deploy Your Work:** Deploy your project to Vercel (it's free).
2.  **Complete this README:** **This is the most important step.** Edit this `README.md` file in your repository to include:
    * **Live URL:** https://babynama-assignment-bay.vercel.app/
    * **Choices Made:** I chose to create a reusable WebinarCard component to represent each webinar in a clean, responsive grid layout. This allowed for separation of concerns, making the code more modular and easier to maintain or update later
    * **Roadblock & Learning:** I initially struggled with limiting the webinar description to only two lines without breaking the layout. After looking it up, I learned about using -webkit-line-clamp and -webkit-box CSS styles to truncate multiline text, which I then applied inside the Tailwind style prop.
    * **Screenshot:**
       
      
![Screenshot 2025-06-10 120011](https://github.com/user-attachments/assets/36591233-3388-4b20-ba2f-b605aeaaf758)

To submit, please share the link to your finished GitHub repository with us. Good luck!
