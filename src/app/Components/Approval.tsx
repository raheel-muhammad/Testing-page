import React from 'react';

const Approval = () => {
    const steps = [
        { step: 'Creation', person: 'LEGEYL Mylene', date: '26/07/2021 17:37:55' },
        { step: 'Draft', person: 'LEGEYL Mylene', date: '28/07/2021 19:19:14' },
        { step: 'Draft (Publication)', person: 'DURET Julien', date: '28/07/2021 19:34:14' },
        { step: 'Step 3', person: 'PETITJEAN Romain', date: '29/07/2021 08:52:46' },
        { step: 'Step 6', person: 'GENTIL Guillaume', date: '29/07/2021 08:54:33' },
        { step: 'Step 6', person: 'GENTIL Guillaume', date: '29/07/2021 08:54:33' },
        { step: 'Step 9', person: 'MICHEL Jean-Paul', date: '30/08/2021 10:48:17' },
        { step: 'Step 10', person: 'VON BOROWSKI Ignacio', date: '17/09/2021 09:50:20' },
    ];

    return (
        <>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md flex flex-col">
                <h2 className="text-blue-500 text-3xl font-bold text-center mb-4">BP</h2>

                {/* Headings Section */}
                <div className="flex flex-col md:flex-row justify-between w-full pb-5 whitespace-nowrap lg:gap-[20px] gap-[0px]" >
                    <div className="flex flex-col items-center md:items-start md:text-left mb-4 md:mb-0">
                        <p className="text-16 font-bold">Figures in k€</p>
                    </div>
                    <div className="md:flex flex-col items-center md:items-end md:text-right mb-4 md:mb-0 hidden lg:pl-[20px] pl-[0px]">
                        <p className="text-16 font-bold">Total without NVAS</p>
                    </div>
                </div>

                {/* Values Section */}
                <div className="flex flex-col md:flex-row gap-5">
                    {/* Left Column */}
                    <div className="flex flex-col p-2 rounded-md w-full md:w-1/2 bg-gray-300">
                        <div className="mt-4">
                            <div className="grid grid-cols-1 gap-4">
                                <p className="text-sm">Volume</p>
                                <p className="text-sm">Total Sales</p>
                                <p className="text-sm">Product Sales</p>
                                <p className="text-sm pt-4">VCM</p>
                                <p className="text-sm pb-2">GM</p>
                                <p className="text-sm font-bold">OI IFRS 15</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="grid grid-cols-1 gap-4">
                                <p className="text-sm">Upfront</p>
                                <p className="text-sm">IRR</p>
                                <p className="text-sm">Roce</p>
                                <p className="text-sm">Payback from SOP</p>
                                <p className="text-sm">Product Sales</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center md:items-end md:text-right mb-4 md:mb-0 md:hidden">
                        <p className="text-16 font-bold">Total without NVAS</p>
                    </div>
                    {/* Right Column */}
                    <div className="flex flex-col p-2 rounded-md w-full md:w-1/2 bg-gray-300">
                        <div className="mt-4">
                            <div className="grid grid-cols-1 gap-4 text-left px-2">
                                <p className="text-sm">1 259 781</p>
                                <p className="text-sm">81 977</p>
                                <p className="text-sm">62 306</p>
                                <div className="flex justify-between">
                                    <p className="text-sm pt-4">16880</p>
                                    <p className="text-sm pt-4">27.1%</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-sm pb-2">4908</p>
                                    <p className="text-sm pb-2">7.9%</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-sm font-bold">958</p>
                                    <p className="text-sm font-bold">1.2%</p>
                                </div>
                            </div>
                        </div>

                        {/* Total Values Section with Heading */}
                        <div className="mt-4">
                            <div className="text-left px-2">
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="flex justify-between">
                                        <p className="text-sm">-4 060</p>
                                        <p className="text-sm">-32.6%</p>
                                    </div>
                                    <p className="text-sm">7.0%</p>
                                    <p className="text-sm">6.8%</p>
                                    <p className="text-sm">4.4 years</p>
                                    <p className="text-sm">7.6 years</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full">
                <h2 className="text-blue-500 text-3xl font-bold text-center mb-4">RFQ Approval</h2>
                <p className="text-black font-semibold mb-8 md:text-left text-center ">Validation Summary</p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center pt-10">
                    {steps.map((step, index) => (
                        <div key={index} className="relative flex items-center mb-4">
                            {/* Green card */}
                            <div className="bg-green-300 p-4 rounded-lg shadow-md flex flex-col items-start w-full">
                                <p className="font-bold">{step.step}</p>
                                <p className="text-sm">{step.person}</p>
                                <p className="text-xs text-gray-600">{step.date}</p>
                            </div>

                            {/* Add arrow icon outside each green card */}
                            {index < steps.length - 1 && (
                                <div className="relative h-32"> {/* Define a height for the parent container */}
                                    <div className="absolute top-1/2 right-[-20px] transform -translate-y-1/2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-8 w-8" // Set both height and width
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>

                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Approval;
