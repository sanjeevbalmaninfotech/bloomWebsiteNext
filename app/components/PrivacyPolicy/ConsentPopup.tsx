import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";


type Category = {
    id: string;
    title: string;
    description: string;
    locked?: boolean;
};

type ToggleStates = Record<string, boolean>;
type ExpandedCategories = Record<string, boolean>;


const ConsentPopup: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(true);


    const [expandedCategories, setExpandedCategories] =
        useState<ExpandedCategories>({});

    const [toggleStates, setToggleStates] = useState<ToggleStates>({
        necessary: true,
        functional: false,
        analytics: false,
        performance: false,
        uncategorised: false,
    });

    const categories: Category[] = [
        {
            id: "necessary",
            title: "Necessary",
            description:
                "Necessary cookies are required to enable the basic features of this site, such as providing secure log-in or adjusting your consent preferences. These cookies do not store any personally identifiable data.",
            locked: true,
        },
        {
            id: "functional",
            title: "Functional",
            description:
                "Functional cookies help perform certain functionalities like sharing the content of the website on social media platforms, collecting feedback, and other third-party features.",
        },
        {
            id: "analytics",
            title: "Analytics",
            description:
                "Analytics cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.",
        },
        {
            id: "performance",
            title: "Performance",
            description:
                "Performance cookies are used to understand and analyse the key performance indexes of the website which helps in delivering a better user experience for the visitors.",
        },
        {
            id: "uncategorised",
            title: "Uncategorised",
            description:
                "Other uncategorised cookies are those that are being analysed and have not been classified into a category as yet.",
        },
    ];


    const toggleCategory = (id: string) => {
        setExpandedCategories((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const handleToggle = (id: string) => {
        if (id !== "necessary") {
            setToggleStates((prev) => ({
                ...prev,
                [id]: !prev[id],
            }));
        }
    };

    const handleAcceptAll = () => {
        const allEnabled: ToggleStates = {};

        categories.forEach((cat) => {
            allEnabled[cat.id] = true;
        });

        setToggleStates(allEnabled);

        setTimeout(() => {
            setIsVisible(false);
        }, 500);
    };

    if (!isVisible) return null;


    return (
        <div className="fixed inset-0 bg-black/80  flex items-center justify-center p-4 z-50">

            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[90vh] md:h-[600px]"
            >
                {/* Header */}
                <div className="p-8 pb-4 flex-shrink-0">
                    <h2 className="text-[24px] md:text-[36px] font-bold text-gray-900 mb-6">
                        Customise Consent Preferences
                    </h2>
                    <div className="h-px bg-gray-200"></div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-scroll px-8 scrollbar-custom">
                    <div className="space-y-4 py-4">
                        <p className="text-gray-700 leading-relaxed">
                            We use cookies to help you navigate efficiently and perform certain
                            functions. You will find detailed information about all cookies
                            under each consent category below.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            The cookies that are categorised as "Necessary" are stored on your
                            browser as they are essential for enabling the basic
                            functionalities of the site.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            We also use third-party cookies that help us analyse how you use
                            this website, store your preferences, and provide the content and
                            advertisements that are relevant to you.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            You can choose to enable or disable some or all of these cookies
                            but disabling some of them may affect your browsing experience.
                        </p>
                    </div>

                    {/* Categories */}
                    <div className="py-6">
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                className="border-b border-gray-200 last:border-b-0"
                            >
                                <div
                                    className="flex items-center justify-between py-4 cursor-pointer"
                                    onClick={() => toggleCategory(category.id)}
                                >
                                    <div className="flex items-center flex-1">
                                        {expandedCategories[category.id] ? (
                                            <ChevronDown className="w-5 h-5 text-gray-600 mr-2" />
                                        ) : (
                                            <ChevronRight className="w-5 h-5 text-gray-600 mr-2" />
                                        )}
                                        <span className="font-semibold text-gray-900">
                                            {category.title}
                                        </span>
                                    </div>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleToggle(category.id);
                                        }}
                                        disabled={category.locked}
                                        className={`w-14 h-7 rounded-full transition-colors duration-300 relative ${category.locked ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                                        style={{
                                            background: toggleStates[category.id]
                                                ? "linear-gradient(90deg, #157DC1 0%, #49acac 100%)"
                                                : "#d1d5db" // bg-gray-300 fallback
                                        }}

                                    >
                                        <div
                                            className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${toggleStates[category.id] ? "left-8" : "left-1"
                                                }`}
                                        />
                                    </button>
                                </div>

                                {expandedCategories[category.id] && (
                                    <div className="pb-4 pl-7 pr-4">
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {category.description}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="px-8 py-6 flex justify-end border-t border-gray-100 flex-shrink-0">
                    <button
                        onClick={handleAcceptAll}
                        className="px-8 py-3 -500 text-white rounded-lg font-medium hover:bg-teal-600 transition-colors shadow-md"
                        style={{
                            background: 'linear-gradient( #157DC1, #49acac)',

                        }}
                    >
                        Accept All
                    </button>
                </div>
            </div>

            <style>{`
  .scrollbar-custom::-webkit-scrollbar {
    width: 8px;
  }

  .scrollbar-custom::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 10px;
  }

  /* Scrollbar Thumb with Gradient */
  .scrollbar-custom::-webkit-scrollbar-thumb {
    background: linear-gradient(0deg, #157DC1 0%, #49acac 100%);
    border-radius: 10px;
  }

  .scrollbar-custom::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(0deg, #157DC1 0%, #49acac 100%);
  }
`}</style>

        </div>
    );
};

export default ConsentPopup;
