'use client'
import {updateEmployeeStatus} from "@/app/actions";
import { useState, useRef, useEffect } from 'react';

export default function CustomDropdown({id}: {id: string}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedGame, setSelectedGame] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const sportsData = [
        {id: "statusOne", status: "Online"},
        {id: "statusTwo", status: "Offline"},
    ];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = async(game: string) => {
        setSelectedGame(game);
        await updateEmployeeStatus(id, game)
        setIsOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative w-64" ref={dropdownRef}>
            {/* Dropdown button */}
            <button
                onClick={toggleDropdown}
                className="w-full px-4 py-3 text-left bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 flex justify-between items-center"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
        <span className="truncate">
          {selectedGame || 'Select a status'}
        </span>
                <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>

            {/* Dropdown options */}
            {isOpen && (
                <ul
                    className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-all duration-200 max-h-60 overflow-y-auto"
                    role="listbox"
                >
                    {sportsData.map((game) => (
                        <li
                            key={game.id}
                            onClick={() => handleSelect(game.status)}
                            className={`px-4 py-2 cursor-pointer hover:bg-blue-50 transition-colors duration-150 ${
                                selectedGame === game.status ? 'bg-blue-100 text-blue-800' : 'text-gray-800'
                            }`}
                            role="option"
                            aria-selected={selectedGame === game.status}
                        >
                            {game.status}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}