import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

type Category = {
    id: string;
    title: string;
    description: string;
    locked?: boolean;
};

type ToggleStates = Record<string, boolean>;

const ConsentPopup: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
    const [toggleStates, setToggleStates] = useState<ToggleStates>({
        necessary: true,
        functional: false,
        analytics: false,
        performance: false,
        uncategorised: false,
    });

    // 1. Check if already consented
    useEffect(() => {
        const saved = localStorage.getItem('user_cookie_consent');
        if (!saved) {
            setIsVisible(true);
        }
    }, []);

    const categories: Category[] = [
        { id: "necessary", title: "Necessary", description: "Necessary cookies are required for basic site features. They do not store any personal data.", locked: true },
        { id: "functional", title: "Functional", description: "Functional cookies help with social media sharing and feedback." },
        { id: "analytics", title: "Analytics", description: "Helps us analyze how visitors use our website." },
        { id: "performance", title: "Performance", description: "Used to analyze performance indexes to provide a better user experience." },
        { id: "uncategorised", title: "Uncategorised", description: "Cookies that are being analyzed and not yet classified." },
    ];

    const handleSave = (data: ToggleStates) => {
        localStorage.setItem('user_cookie_consent', JSON.stringify(data));
        setIsVisible(false);
    };

    const handleAcceptAll = () => {
        const allTrue = categories.reduce((acc, cat) => ({ ...acc, [cat.id]: true }), {});
        handleSave(allTrue as ToggleStates);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-[100]">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[90vh]">
                <div className="p-8 pb-4">
                    <h2 className="text-[24px] md:text-[36px] font-bold text-gray-900 mb-6">Customise Consent</h2>
                    <div className="h-px bg-gray-200"></div>
                </div>

                <div className="flex-1 overflow-y-auto px-8 scrollbar-custom">
                    {categories.map((cat) => (
                        <div key={cat.id} className="border-b border-gray-200 py-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center cursor-pointer" onClick={() => setExpandedCategories(p => ({ ...p, [cat.id]: !p[cat.id] }))}>
                                    {expandedCategories[cat.id] ? <ChevronDown className="w-5 h-5 mr-2" /> : <ChevronRight className="w-5 h-5 mr-2" />}
                                    <span className="font-semibold">{cat.title}</span>
                                </div>
                                <button
                                    onClick={() => !cat.locked && setToggleStates(p => ({ ...p, [cat.id]: !p[cat.id] }))}
                                    className={`w-14 h-7 rounded-full relative transition-all ${toggleStates[cat.id] ? 'bg-teal-500' : 'bg-gray-300'}`}
                                    style={toggleStates[cat.id] ? { background: 'linear-gradient(90deg, #157DC1, #49acac)' } : {}}
                                >
                                    <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all ${toggleStates[cat.id] ? 'left-8' : 'left-1'}`} />
                                </button>
                            </div>
                            {expandedCategories[cat.id] && <p className="text-sm text-gray-600 mt-2 ml-7">{cat.description}</p>}
                        </div>
                    ))}
                </div>

                <div className="px-8 py-6 flex gap-4 justify-end border-t">
                    <button onClick={() => handleSave(toggleStates)} className="px-6 py-2 border rounded-lg font-medium text-gray-700">
                        Save Preferences
                    </button>
                    <button onClick={handleAcceptAll} className="px-8 py-3 text-white rounded-lg font-medium shadow-md" style={{ background: 'linear-gradient(#157DC1, #49acac)' }}>
                        Accept All
                    </button>
                </div>
            </div>
            {/* ... CSS remains same as yours ... */}
        </div>
    );
};

export default ConsentPopup;