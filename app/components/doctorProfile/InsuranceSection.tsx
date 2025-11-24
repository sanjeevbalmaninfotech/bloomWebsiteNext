import { primaryButtonClasses } from "@/app/constants/styles/buttons";


export function InsuranceSection() {

 const insuranceProviders = [
  {
    name: "WPA",
    logo: "https://brandfetch.com/logo/wpa.org.uk.svg", // example from Brandfetch
    bgColor: "bg-blue-50"
  },
  {
    name: "Vitality",
    logo: "https://upload.wikimedia.org/wikipedia/commons/.../Vitality-logo-pink.svg", // from Wikimedia
    bgColor: "bg-pink-50"
  },
  {
    name: "AXA",
    logo: "https://designsystem.axa.com/assets/logo/logo-axa.svg", // official AXA logo
    bgColor: "bg-blue-50"
  },
  {
    name: "Simplyhealth",
    logo: "https://brandfetch.com/logo/simplyhealth.svg", // vector from Brandfetch
    bgColor: "bg-purple-50"
  },
  {
    name: "Bupa",
    logo: "https://upload.wikimedia.org/wikipedia/commons/.../Bupa_logo.svg", // Wikimedia / Wikipedia
    bgColor: "bg-blue-50"
  },
  {
    name: "Aviva",
    logo: "https://www.aviva.co.uk/assets/logo/aviva_logo.svg", // or another official URL
    bgColor: "bg-blue-50"
  },
];


return (
  <div className="bg-white py-16">
    <div className="container mx-auto px-4">

      {/* Match width/alignment of first section */}
      <div className="max-w-7xl mx-auto">
        <div className="lg:w-2/3">

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Private Health Insurance
          </h2>

          <p className="text-gray-600 text-lg mb-12 max-w-2xl">
            Bloom health works with all major UK health insurance providers.
            Simply let your provider know your chosen hospital to begin your
            treatment journey.
          </p>

          {/* Insurance Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {insuranceProviders.map((provider, idx) => (
              <div
                key={idx}
                className="bg-[rgba(232,242,249,1)] rounded-lg p-8 flex items-center justify-center min-h-[120px] hover:shadow-md transition-shadow"
              >
                <img
                  src={provider.logo}
                  alt={provider.name}
                  className="max-w-full h-auto max-h-16 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML =
                      `<span class='text-2xl font-bold text-gray-700'>${provider.name}</span>`;
                  }}
                />
              </div>
            ))}
          </div>

          {/* Button */}
          <button className={`${primaryButtonClasses} rounded-md px-6 py-3`}>
            <span>View All Availability</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

        </div>
      </div>
    </div>
  </div>
);


}