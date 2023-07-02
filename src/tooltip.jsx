import React from 'react';

const Tooltip = () => {
    return (
        <div>

                <div className="relative inline-block tooltip">
                    <span className="hover:text-gray-400 px-2 py-1 font-medium">Help</span>
                    <div
                        className="flex flex-col p-4 bg-white w-60 h-max rounded-md z-20 right-1/4 top-[10.5%] left-2/4 fixed   invisible tooltip-item ">
                        <span className="font-semibold pb-4">Help</span>
                        <ul className="list-disc space-y-2  ">

                            <li className="flex items-start">
                                <span className="font-medium text-[12px] text-gray-500 hover:text-black">-i |файл|: Указывает входной файл.</span>
                            </li>

                            <li className="flex items-start">
                                <span
                                    className="font-medium text-[12px] text-gray-500 hover:text-black">-c:v |кодек|: Задает видео кодек</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-medium text-[12px] text-gray-500 hover:text-black">-c:a |кодек|: Задает аудио кодек.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-medium text-[12px] text-gray-500 hover:text-black">-f |формат|: Устанавливает выходной формат.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-medium text-[12px] text-gray-500 hover:text-black">-s |разрешение|: Устанавливает разрешение видео.</span>
                            </li>
                            <li className="flex items-start">
                                <span
                                    className="font-medium text-[12px] text-gray-500 hover:text-black">-r |частота кадров|: Задает частоту кадров видео.</span>
                            </li>
                            <li className="flex items-start">
                                <span
                                    className="font-medium text-[12px] text-gray-500 hover:text-black">b:v |битрейт|: Устанавливает битрейт видео.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-medium text-[12px] text-gray-500 hover:text-black">-b:a |битрейт|: Устанавливает битрейт аудио.</span>
                            </li>
                            <li className="flex items-start">
                                <span
                                    className="font-medium text-[12px] text-gray-500 hover:text-black">-ss |время|: Устанавливает начальное время для обрезки видео.</span>
                            </li>

                            <li className="flex items-start">
                                <span
                                    className="font-medium text-[12px] text-gray-500 hover:text-black">-t |время|: Задает продолжительность видео.</span>
                            </li>
                            <li className="flex items-start">
                                <span
                                    className="font-medium text-[12px] text-gray-500 hover:text-black">-vf |фильтр|: Применяет видеофильтр к видео.</span>
                            </li>
                            <li className="flex items-start">
                                <span
                                    className="font-medium text-[12px] text-gray-500 hover:text-black">-af |фильтр|: Применяет аудиофильтр к аудио.</span>
                            </li>
                            <li className="flex items-start">
                                <span
                                    className="font-medium text-[12px] "><a href='https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_MIME-%D1%82%D0%B8%D0%BF%D0%BE%D0%B2'>mediaType list</a></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

    );
};

export default Tooltip;