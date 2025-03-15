import styles from "./coordinators.module.css";
import Card from "./card";

// Test data with actual image paths

const Coordinators = () => {
    // Test data
    const faculty = [
        {
            image: "/people/rishabh tomar.png",
            name: "Rishabh Tomar",
            position: "B.Tech in Automobile Engineering",
            description: "Test description"
        },
        {
            image: "/people/rishabh tomar.png",
            name: "Rishabh Tomar",
            position: "B.Tech in Automobile Engineering",
            description: "Test description"
        },
        {
            image: "/people/rishabh tomar.png",
            name: "Rishabh Tomar",
            position: "B.Tech in Automobile Engineering",
            description: "Test description"
        },
    
        // Add more test data if needed
    ]
    const founders= [
        {
            image: "/people/Soumya Ma'am.jpg",
            name: "Soumya Shrivastava",
            position: "Head of UI/UX Designing | Co-head of Parametric Modelling and Simulation | Executive Board Member, Nexura",
            description: "Meet  Soumya Shrivastava, a passionate B.Tech student in Automobile Engineering at UIT-RGPV Bhopal, specializing in UI/UX design and parametric modeling. With a deep interest in blending creativity with technology, Soumya strives to create visually compelling and technically precise designs that enhance user experience and engineering innovation. At Nexura, Soumya plays a pivotal role as the Head of UI/UX Designing, Co-head of Parametric Modelling and Simulation, and an Executive Board Member. With two years of experience in UI/UX design, they excel in translating complex ideas into intuitive digital experiences, making automotive and digital concepts more engaging and user-friendly.Soumya’s expertise spans across user-centered interface design, wireframing, and prototyping in Figma, as well as advanced CAD modeling,mold modeling in SolidWorks and simulations using ANSYS SpaceClaim and Discovery. Their skill set extends to interactive digital experiences and precision-driven engineering simulations, ensuring both aesthetics and functionality are at the core of their work.Driven by a passion for innovation and a keen eye for detail, Soumya continues to push boundaries in design, simulation, and engineering, contributing to cutting-edge projects at Nexura. Whether it's crafting intuitive digital interfaces or engineering simulations, she is always eager for the next challenge!"
        },
        {
            image: "/people/Pawan Sir.jpg",
            name: "Pawan Soni",
            position: "B.Tech in Automobile Engineering",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet quae nulla nemo expedita ex aperiam quasi alias animi qui tempora. Sapiente laborum fugit aspernatur odio nostrum, earum hic eaque maxime eos rerum natus sint explicabo quasi odit quod quis dolores excepturi optio officiis est. Deleniti nesciunt voluptates aliquid ut adipisci fuga sapiente quibusdam, est suscipit magnam debitis recusandae corrupti nihil, labore dolorem doloribus sint dignissimos non porro quia? Quidem cupiditate, optio fugiat ipsum sit neque?"
        },
        {
            image: "/people/Astha Ma'am.jpg",
            name: "Rishabh Tomar",
            position: "B.Tech in Automobile Engineering",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet quae nulla nemo expedita ex aperiam quasi alias animi qui tempora. Sapiente laborum fugit aspernatur odio nostrum, earum hic eaque maxime eos rerum natus sint explicabo quasi odit quod quis dolores excepturi optio officiis est. Deleniti nesciunt voluptates aliquid ut adipisci fuga sapiente quibusdam, est suscipit magnam debitis recusandae corrupti nihil, labore dolorem doloribus sint dignissimos non porro quia? Quidem cupiditate, optio fugiat ipsum sit neque?"
        },
        {
            image: "/people/Vishal.jpg",
            name: "Rishabh Tomar",
            position: "B.Tech in Automobile Engineering",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet quae nulla nemo expedita ex aperiam quasi alias animi qui tempora. Sapiente laborum fugit aspernatur odio nostrum, earum hic eaque maxime eos rerum natus sint explicabo quasi odit quod quis dolores excepturi optio officiis est. Deleniti nesciunt voluptates aliquid ut adipisci fuga sapiente quibusdam, est suscipit magnam debitis recusandae corrupti nihil, labore dolorem doloribus sint dignissimos non porro quia? Quidem cupiditate, optio fugiat ipsum sit neque?"
        },
        {
            image: "/people/Rishabh.png",
            name: "Rishabh Tomar",
            position: "B.Tech in Automobile Engineering",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet quae nulla nemo expedita ex aperiam quasi alias animi qui tempora. Sapiente laborum fugit aspernatur odio nostrum, earum hic eaque maxime eos rerum natus sint explicabo quasi odit quod quis dolores excepturi optio officiis est. Deleniti nesciunt voluptates aliquid ut adipisci fuga sapiente quibusdam, est suscipit magnam debitis recusandae corrupti nihil, labore dolorem doloribus sint dignissimos non porro quia? Quidem cupiditate, optio fugiat ipsum sit neque?"
        },{
            image: "/people/Mradul.jpg",
            name: "Rishabh Tomar",
            position: "B.Tech in Automobile Engineering",
            description: "Meet Mradul Shivhare, a passionate web developer with three years of experience, currently serving as a Senior Member of the Web Development Department at Nexura. After completing his schooling at St. Mary's Residential Higher Secondary School, Sehore, he pursued his technical education at UIT-RGPV, Bhopal, where he deepened his expertise in web technologies. At Nexura, Mradul specializes in building seamless, intuitive, and high-performance web solutions. From crafting interactive front-end designs to optimizing complex backend systems, he ensures that every project delivers a smooth and impactful digital experience. For him, web development is more than just coding—it's about innovation and problem-solving. He loves exploring new technologies and pushing the limits of what's possible, shaping the digital world one project at a time."
        },
        {
            image: "/people/Harshit Sir.jpg",
            name: "Rishabh Tomar",
            position: "B.Tech in Automobile Engineering",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet quae nulla nemo expedita ex aperiam quasi alias animi qui tempora. Sapiente laborum fugit aspernatur odio nostrum, earum hic eaque maxime eos rerum natus sint explicabo quasi odit quod quis dolores excepturi optio officiis est. Deleniti nesciunt voluptates aliquid ut adipisci fuga sapiente quibusdam, est suscipit magnam debitis recusandae corrupti nihil, labore dolorem doloribus sint dignissimos non porro quia? Quidem cupiditate, optio fugiat ipsum sit neque?"
        },
        {
            image: "/people/Sameer sir.png",
            name: "Rishabh Tomar",
            position: "B.Tech in Automobile Engineering",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet quae nulla nemo expedita ex aperiam quasi alias animi qui tempora. Sapiente laborum fugit aspernatur odio nostrum, earum hic eaque maxime eos rerum natus sint explicabo quasi odit quod quis dolores excepturi optio officiis est. Deleniti nesciunt voluptates aliquid ut adipisci fuga sapiente quibusdam, est suscipit magnam debitis recusandae corrupti nihil, labore dolorem doloribus sint dignissimos non porro quia? Quidem cupiditate, optio fugiat ipsum sit neque?"
        },
    
        // Add more test data if needed
    ];

    return (
        <div className={styles.allContainer} id="Team">
            <div className={styles.coordinatorsContainer}>
                <h2>Faculty Coordinators</h2>
                <div className={styles.cardGrid}>
                    {faculty.map((member, index) => (
                        <Card
                            key={index}
                            image={member.image} 
                            name={member.name}
                            position={member.position}
                            description={member.description}
                        />
                    ))}
                </div>
                <h2>Founding Members</h2>
                <div className={styles.cardGrid}>
                    {founders.map((member, index) => (
                        <Card
                            key={index}
                            image={member.image}  
                            name={member.name}
                            position={member.position}
                            description={member.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Coordinators;