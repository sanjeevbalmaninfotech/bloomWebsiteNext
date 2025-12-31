import TeamMemberCard from "../TeamsCard/TeamMemberCard";

export default function OurTeamSection() {


    const teamMembers = [
        {
            id: 3,
            name: 'Dr Ram M Mailapalli',
            role: 'Board Member',
            imageUrl: '/staff/RAM.png'
        },
        {
            id: 4,
            name: 'Rupe Dhaliwal',
            role: 'Chief of Staff',
            imageUrl: '/staff/RUPE.png'
        },
        {
            id: 5,
            name: 'Roopa Karia',
            role: 'Chief Pharmacist',
            imageUrl: '/staff/ROOPA.png'
        },
        {
            id: 1,
            name: 'Fateh Sandhu',
            role: 'Commercial Coordinator',
            imageUrl: '/staff/FATEH.png' // "C:\project\bloomWebsiteNext\public\staff\fateh.jpg"
        },
        {
            id: 2,
            name: 'Sanya Kajla',
            role: 'Consultant Paediatrician',
            imageUrl: '/staff/SANYA.png'
        },

    ];
    return (

        <section className="w-full bg-gradient-to-r from-[#157dc1] to-[#49acac] py-12  lg:py-20">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 ">

                {/* Header Section: Centered */}
                <div className="mb-10 flex items-center justify-center text-center">
                    <h2 className="font-axiforma font-semibold text-[36px] leading-[48px] tracking-[-0.72px]">
                        <span className="text-white">Our Team</span>
                    </h2>
                </div>


                {/* Responsive Grid System */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 lg:gap-4 justify-items-center">
                    {teamMembers.map((member) => (
                        <TeamMemberCard
                            key={member.id}
                            name={member.name}
                            role={member.role}
                            imageUrl={member.imageUrl}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}


