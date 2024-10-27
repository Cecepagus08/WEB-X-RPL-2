import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Senin = React.lazy(() => import("../components/Mapel/Senin"));
const Selasa = React.lazy(() => import("../components/Mapel/Selasa"));
const Rabu = React.lazy(() => import("../components/Mapel/Rabu"));
const Kamis = React.lazy(() => import("../components/Mapel/Kamis"));
const Jumat = React.lazy(() => import("../components/Mapel/Jumat"));


const Schedule = () => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const [dayIndex, setDayIndex] = useState(new Date().getDay());

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const piketGroup = [
        ["Arivay", "Cikal", "kevin A", "kevin P", "Takim", "Ikshan"],
        ["Aziz", "Aspi", "Ilham", "Rafif", "Renaldi", "Irvan", "Ray"],
        ["Cecep", "Akmal", "Ben", "Daffa", "Ivander", "Atha", "Theo"],
        ["Aho", "Langgeng", "Lingga", "Alvino", "Rully", "Harits"],
        ["Qonita", "Syifa", "Aisya", "Ziniva", "Dinda", "Reyhanur"],
    ];

    const dayComponents = [null, Senin, Selasa, Rabu, Kamis, Jumat];

    const handleNextDay = () => {
        setDayIndex((prevIndex) => (prevIndex === 6 ? 0 : prevIndex + 1));
    };

    const handlePreviousDay = () => {
        setDayIndex((prevIndex) => (prevIndex === 0 ? 6 : prevIndex - 1));
    };

    const TodayComponent = dayComponents[dayIndex];
    const currentPiketNames = dayIndex === 0 ? [] : piketGroup[dayIndex - 1];

    return (
        <>
            {/* Jadwal Mapel */}
            <div className="lg:flex lg:justify-center lg:gap-32 lg:mb-10 lg:mt-16 ">
                <div className="text-white flex flex-col justify-center items-center mt-8 md:mt-3 overflow-y-hidden">
                    <div className="text-2xl font-medium mb-5" data-aos="fade-up" data-aos-duration="500">
                        {daysOfWeek[dayIndex]}
                    </div>
                    <div data-aos="fade-up" data-aos-duration="400">
                        {TodayComponent ? (
                            <React.Suspense fallback={<p>Loading...</p>}>
                                <TodayComponent />
                            </React.Suspense>
                        ) : (
                            <p className="opacity-50">Tidak Ada Jadwal Hari Ini</p>
                        )}
                    </div>

                </div>
            </div>

            {/* Jadwal Piket */}
            <div className="text-white flex flex-col justify-center items-center mt-8 lg:mt-0 lg:mb-[10rem] mb-10 overflow-y-hidden">
                <div
                    className="text-2xl font-medium mb-5 text-center"
                    data-aos="fade-up"
                    data-aos-duration="500"
                >
                    Piket
                </div>
                {currentPiketNames && currentPiketNames.length > 0 ? (
                    currentPiketNames.map((piketName, index) => (
                        <div
                            key={index}
                            className={`border-t-2 border-white flex justify-center py-[0.50rem] w-72 px-3 ${
                                index === currentPiketNames.length - 1 ? "border-b-2" : ""
                            }`}
                            data-aos="fade-up"
                            data-aos-duration={600 + index * 100}
                        >
                            <div className="text-base font-medium">{piketName}</div>
                        </div>
                    ))
                ) : (
                    <p className="opacity-50">Tidak Ada Jadwal Piket Hari Ini</p>
                )}
                
                
                    <div className="flex mt-4">
                        <button
                            onClick={handlePreviousDay}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                        >
                            Previous
                        </button>
                        <button
                            onClick={handleNextDay}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md"
                        >
                            Next
                        </button>
                    </div>
            </div>
        </>
    );
};

export default Schedule;
