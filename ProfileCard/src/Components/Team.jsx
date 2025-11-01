import ProfileCard from "./ProfileCard";


const Team = () => {
    const teamMember = [
        {
            name: "Rahul Singh",
            job: "Frontend Developer",
            image: "https://images.unsplash.com/photo-1761393255459-862745aa7c31?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            about: "Learning React and building modern web apps."
        },
        {
            name: "Amit Sharma",
            job: "Backend Engineer",
            image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=400&q=80",
            about: "Loves working with Node.js and databases."
        },
        {
            name: "Petter Parker",
            job: "UI/UX Designer",
            image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=400&q=80",
            about: "Creates user-friendly and beautiful interfaces."
        },
        {
            name: "Tony Stark",
            job: "Super Hero",
            image: "https://i.redd.it/x8aaxbjh8r6a1.jpg",
            about: "Genius, billionaire, playboy, philanthropist"
        }
    ]
    return (
        <>
            <div className="">
                <h2 className='text-center mb-4 d-flex flex-wrap justify-content-center gap-4'>Our Team member</h2>
                <div className='d-flex flex-wrap justify-content-center gap-4'>
                    {teamMember.map((member, index) => (
                        <ProfileCard
                            key={index}
                            name={member.name}
                            job={member.job}
                            image={member.image}
                            about={member.about}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}



export default Team